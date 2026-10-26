import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { PlantImage } from '../components/PlantImage'
import { useToast } from '../components/Toast'
import { getPlant } from '../data/catalog'
import { db, uid, type UserPlant } from '../lib/db'
import { createDefaultReminders, today } from '../lib/schedule'
import { searchCommonsImages, wikipediaImage, type CommonsImage } from '../lib/wikipedia'

/** Add a new plant (from ?plantId=) or edit an existing one (/plants/:id/edit). */
export function AddPlantPage() {
  const { id } = useParams()
  const [params] = useSearchParams()
  const nav = useNavigate()
  const toast = useToast()

  const existing = useLiveQuery(async () => (id ? await db.userPlants.get(id) : undefined), [id])
  const plantId = existing?.plantId ?? params.get('plantId') ?? ''
  const catalog = getPlant(plantId)

  const [nickname, setNickname] = useState('')
  const [location, setLocation] = useState('')
  const [acquiredAt, setAcquiredAt] = useState('')
  const [notes, setNotes] = useState('')
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined)
  const [photo, setPhoto] = useState<Blob | undefined>(undefined)
  const [defaultImage, setDefaultImage] = useState<string | undefined>(undefined)
  const [commons, setCommons] = useState<CommonsImage[]>([])
  const [commonsQuery, setCommonsQuery] = useState('')
  const [searching, setSearching] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (id && !existing) return
    if (loaded) return
    if (existing) {
      setNickname(existing.nickname)
      setLocation(existing.location)
      setAcquiredAt(existing.acquiredAt ?? '')
      setNotes(existing.notes)
      setImageUrl(existing.imageUrl)
      setPhoto(existing.photo)
    } else if (catalog) {
      setNickname(catalog.commonName)
      setAcquiredAt(today())
    }
    if (catalog) setCommonsQuery(catalog.latinName)
    setLoaded(true)
  }, [id, existing, catalog, loaded])

  useEffect(() => {
    if (catalog) void wikipediaImage(catalog.wikipediaTitle, 'large').then(setDefaultImage)
  }, [catalog])

  if (!catalog) {
    return (
      <div className="empty">
        <p>Pick a plant from the catalog first.</p>
        <button className="btn" style={{ marginTop: 12 }} onClick={() => nav('/catalog')}>
          Open catalog
        </button>
      </div>
    )
  }

  const searchCommons = async () => {
    setSearching(true)
    try {
      setCommons(await searchCommonsImages(commonsQuery))
    } finally {
      setSearching(false)
    }
  }

  const onPhoto = async (file: File | undefined) => {
    if (!file) return
    setPhoto(await downscale(file, 1200))
  }

  const save = async () => {
    const row: UserPlant = {
      id: existing?.id ?? uid(),
      plantId: catalog.id,
      nickname: nickname.trim() || catalog.commonName,
      location: location.trim(),
      imageUrl,
      photo,
      acquiredAt: acquiredAt || undefined,
      notes: notes.trim(),
      createdAt: existing?.createdAt ?? Date.now(),
    }
    await db.userPlants.put(row)
    if (!existing) {
      await createDefaultReminders(row, catalog.tasks)
      toast(`${row.nickname} added with ${catalog.tasks.length} reminders`)
    } else {
      toast('Saved')
    }
    nav(`/plants/${row.id}`, { replace: true })
  }

  return (
    <>
      <div className="row" style={{ marginBottom: 12 }}>
        <button className="icon-btn" onClick={() => nav(-1)} aria-label="Back">
          ←
        </button>
        <h1 className="grow" style={{ fontSize: '1.3rem' }}>
          {existing ? 'Edit plant' : `Add ${catalog.commonName}`}
        </h1>
      </div>

      <div className="stack">
        <div className="hero">
          <PlantImage wikipediaTitle={catalog.wikipediaTitle} imageUrl={imageUrl} photo={photo} alt={nickname} size="large" />
        </div>

        <div className="card pad stack">
          <div className="label">Picture</div>
          <div className="row wrap">
            <button
              className={`btn small ${!imageUrl && !photo ? 'primary' : ''}`}
              onClick={() => {
                setImageUrl(undefined)
                setPhoto(undefined)
              }}
            >
              Wikipedia photo
            </button>
            <label className="btn small" style={{ cursor: 'pointer' }}>
              📷 Own photo
              <input
                type="file"
                accept="image/*"
                capture="environment"
                hidden
                onChange={(e) => void onPhoto(e.target.files?.[0])}
              />
            </label>
            {defaultImage && !imageUrl && !photo ? (
              <span className="muted small">Using the Wikipedia article image</span>
            ) : null}
          </div>
          <div className="row">
            <input
              className="input grow"
              placeholder="Search Wikimedia Commons photos…"
              value={commonsQuery}
              onChange={(e) => setCommonsQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && void searchCommons()}
            />
            <button className="btn" onClick={() => void searchCommons()} disabled={searching}>
              {searching ? '…' : 'Search'}
            </button>
          </div>
          {commons.length > 0 && (
            <div className="pick-grid">
              {commons.map((c) => (
                <button
                  key={c.title}
                  className={`opt ${imageUrl === c.thumbUrl ? 'on' : ''}`}
                  title={c.title}
                  onClick={() => {
                    setPhoto(undefined)
                    setImageUrl(c.thumbUrl)
                  }}
                >
                  <img src={c.thumbUrl} alt={c.title} loading="lazy" />
                </button>
              ))}
            </div>
          )}
          <div className="field">
            <label>…or paste an image URL</label>
            <input
              className="input"
              placeholder="https://…"
              value={imageUrl ?? ''}
              onChange={(e) => {
                setPhoto(undefined)
                setImageUrl(e.target.value || undefined)
              }}
            />
          </div>
        </div>

        <div className="card pad stack">
          <div className="field">
            <label>Nickname</label>
            <input className="input" value={nickname} onChange={(e) => setNickname(e.target.value)} />
          </div>
          <div className="field">
            <label>Location</label>
            <input
              className="input"
              placeholder="Living room window, balcony, front garden…"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Since</label>
            <input className="input" type="date" value={acquiredAt} onChange={(e) => setAcquiredAt(e.target.value)} />
          </div>
          <div className="field">
            <label>Notes</label>
            <textarea className="input" value={notes} onChange={(e) => setNotes(e.target.value)} />
          </div>
        </div>

        {!existing && (
          <p className="muted small">
            {catalog.tasks.length} reminders will be created from the {catalog.commonName} care schedule. You can
            adjust each one afterwards.
          </p>
        )}

        <button className="btn primary block" onClick={() => void save()}>
          {existing ? 'Save changes' : 'Add to my plants'}
        </button>
      </div>
    </>
  )
}

/** Shrink an uploaded photo so IndexedDB stays small. */
async function downscale(file: File, max: number): Promise<Blob> {
  try {
    const bmp = await createImageBitmap(file)
    const scale = Math.min(1, max / Math.max(bmp.width, bmp.height))
    const w = Math.round(bmp.width * scale)
    const h = Math.round(bmp.height * scale)
    const canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    canvas.getContext('2d')!.drawImage(bmp, 0, 0, w, h)
    return await new Promise<Blob>((res, rej) =>
      canvas.toBlob((b) => (b ? res(b) : rej(new Error('toBlob failed'))), 'image/jpeg', 0.85),
    )
  } catch {
    return file
  }
}
