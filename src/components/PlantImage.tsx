import { useEffect, useState } from 'react'
import { wikipediaImage, type ImageSize } from '../lib/wikipedia'

interface Props {
  wikipediaTitle: string
  /** Explicit internet picture chosen by the user. */
  imageUrl?: string
  /** The user's own photo. */
  photo?: Blob
  alt: string
  className?: string
  /** 'large' for hero views; defaults to the small thumbnail. */
  size?: ImageSize
}

/**
 * Shows, in order of preference: the user's own photo, a chosen internet picture,
 * or the lead photo of the plant's Wikipedia article.
 */
export function PlantImage({ wikipediaTitle, imageUrl, photo, alt, className, size = 'thumb' }: Props) {
  const [src, setSrc] = useState<string | undefined>(imageUrl)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
    if (photo) {
      const url = URL.createObjectURL(photo)
      setSrc(url)
      return () => URL.revokeObjectURL(url)
    }
    if (imageUrl) {
      setSrc(imageUrl)
      return
    }
    let cancelled = false
    setSrc(undefined)
    void wikipediaImage(wikipediaTitle, size).then((u) => {
      if (!cancelled) setSrc(u)
    })
    return () => {
      cancelled = true
    }
  }, [wikipediaTitle, imageUrl, photo, size])

  if (!src || failed) {
    return (
      <div className={className}>
        <div className="img-placeholder" aria-label={alt}>
          🌿
        </div>
      </div>
    )
  }
  return (
    <div className={className}>
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
    </div>
  )
}
