import type { Plant } from './types'
import { indoorA } from './plants/indoor-a'
import { indoorB } from './plants/indoor-b'
import { outdoorA } from './plants/outdoor-a'
import { outdoorB } from './plants/outdoor-b'

export const plants: Plant[] = [...indoorA, ...indoorB, ...outdoorA, ...outdoorB].sort((a, b) =>
  a.commonName.localeCompare(b.commonName),
)

const byId = new Map(plants.map((p) => [p.id, p]))

export function getPlant(id: string): Plant | undefined {
  return byId.get(id)
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

export function searchPlants(query: string, list: Plant[] = plants): Plant[] {
  const q = norm(query.trim())
  if (!q) return list
  const terms = q.split(/\s+/)
  return list.filter((p) => {
    const hay = norm(
      [p.commonName, p.danishName, p.latinName, p.family, ...(p.tags ?? [])].join(' '),
    )
    return terms.every((t) => hay.includes(t))
  })
}
