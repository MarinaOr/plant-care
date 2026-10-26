import { db } from './db'

const CACHE_MS = 1000 * 60 * 60 * 24 * 30 // 30 days
const MAX_ORIGINAL_WIDTH = 2200 // originals wider than this are too heavy for a hero image

export type ImageSize = 'thumb' | 'large'

/** Simple concurrency limiter so a catalog page of 80 tiles does not hammer the Wikipedia API. */
const MAX_CONCURRENT = 4
let running = 0
const queue: Array<() => void> = []
const acquire = () =>
  new Promise<void>((resolve) => {
    if (running < MAX_CONCURRENT) {
      running++
      resolve()
    } else queue.push(resolve)
  })
const release = () => {
  const next = queue.shift()
  if (next) next()
  else running--
}

const inflight = new Map<string, Promise<{ url?: string; large?: string }>>()

async function fetchSummary(title: string): Promise<{ url?: string; large?: string }> {
  const endpoint = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, '_'))}`
  await acquire()
  try {
    for (let attempt = 0; attempt < 3; attempt++) {
      const res = await fetch(endpoint, { headers: { Accept: 'application/json' } })
      if (res.status === 429) {
        await new Promise((r) => setTimeout(r, 800 * (attempt + 1)))
        continue
      }
      if (!res.ok) throw new Error(String(res.status))
      const json = (await res.json()) as {
        thumbnail?: { source: string; width: number }
        originalimage?: { source: string; width: number }
      }
      // Wikimedia only serves pre-rendered thumbnail widths, so keep the API's thumbnail URL
      // exactly as given, and use the original file for large views when it is not huge.
      const url = json.thumbnail?.source
      const orig = json.originalimage
      const large = orig && orig.width <= MAX_ORIGINAL_WIDTH ? orig.source : url
      return { url, large }
    }
    throw new Error('rate limited')
  } finally {
    release()
  }
}

/** Resolve the lead image of an English Wikipedia article. Cached in IndexedDB. */
export async function wikipediaImage(title: string, size: ImageSize = 'thumb'): Promise<string | undefined> {
  const cached = await db.images.get(title)
  const pick = (e: { url?: string; large?: string }) => (size === 'large' ? (e.large ?? e.url) : e.url)
  if (cached && Date.now() - cached.fetchedAt < CACHE_MS) return pick(cached)
  try {
    let p = inflight.get(title)
    if (!p) {
      p = fetchSummary(title)
      inflight.set(title, p)
    }
    const result = await p
    inflight.delete(title)
    await db.images.put({ title, ...result, fetchedAt: Date.now() })
    return pick(result)
  } catch {
    inflight.delete(title)
    if (cached) return pick(cached)
    return undefined
  }
}

export interface CommonsImage {
  title: string
  thumbUrl: string
  fullUrl: string
  descriptionUrl: string
}

/** Search Wikimedia Commons for photos matching a query (for choosing a picture). */
export async function searchCommonsImages(query: string, limit = 12): Promise<CommonsImage[]> {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: `${query} filetype:bitmap`,
    gsrnamespace: '6',
    gsrlimit: String(limit),
    prop: 'imageinfo',
    iiprop: 'url',
    iiurlwidth: '400',
    format: 'json',
    origin: '*',
  })
  const res = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`)
  if (!res.ok) return []
  const json = (await res.json()) as {
    query?: {
      pages?: Record<
        string,
        { title: string; imageinfo?: { thumburl?: string; url: string; descriptionurl: string }[] }
      >
    }
  }
  const pages = Object.values(json.query?.pages ?? {})
  return pages
    .filter((p) => p.imageinfo?.[0]?.thumburl)
    .map((p) => ({
      title: p.title.replace(/^File:/, ''),
      thumbUrl: p.imageinfo![0].thumburl!,
      fullUrl: p.imageinfo![0].url,
      descriptionUrl: p.imageinfo![0].descriptionurl,
    }))
}
