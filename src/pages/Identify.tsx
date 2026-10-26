import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PlantImage } from '../components/PlantImage'
import { plants } from '../data/catalog'
import {
  categoryLabel,
  flowerColorLabel,
  habitLabel,
  leafPatternLabel,
  leafShapeLabel,
  lightLabel,
  sizeLabel,
} from '../data/labels'
import type { Category, FlowerColor, GrowthHabit, LeafPattern, LeafShape, Light, Size } from '../data/types'
import { identify, type IdentifyQuery } from '../lib/identify'

const keys = <T extends string>(o: Record<T, string>) => Object.keys(o) as T[]

function Group<T extends string>({
  title,
  options,
  value,
  onPick,
}: {
  title: string
  options: Record<T, string>
  value: T | undefined
  onPick: (v: T) => void
}) {
  return (
    <div className="field">
      <label>{title}</label>
      <div className="chips">
        {keys(options).map((k) => (
          <button key={k} className={`chip selectable ${value === k ? 'on' : ''}`} onClick={() => onPick(k)}>
            {options[k]}
          </button>
        ))}
      </div>
    </div>
  )
}

/**
 * Trait-based identification: the user answers what they can see and compares their own photo
 * with catalog photos side by side. No AI, no uploads: everything happens on the device.
 */
export function IdentifyPage() {
  const [q, setQ] = useState<IdentifyQuery>({})
  const [photo, setPhoto] = useState<string | undefined>(undefined)

  useEffect(() => () => void (photo && URL.revokeObjectURL(photo)), [photo])

  const matches = useMemo(() => identify(plants, q).slice(0, 12), [q])
  const answered = Object.values(q).filter((v) => v !== undefined).length

  const set = <K extends keyof IdentifyQuery>(k: K, v: IdentifyQuery[K]) =>
    setQ((cur) => ({ ...cur, [k]: cur[k] === v ? undefined : v }))

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Identify a plant</h1>
          <div className="sub">Describe what you see and compare with photos</div>
        </div>
        {answered > 0 && (
          <button className="btn small" onClick={() => setQ({})}>
            Clear
          </button>
        )}
      </div>

      <div className="card pad stack" style={{ marginBottom: 14 }}>
        <div className="row wrap">
          <label className="btn" style={{ cursor: 'pointer' }}>
            📷 {photo ? 'Change your photo' : 'Add your photo to compare'}
            <input
              type="file"
              accept="image/*"
              capture="environment"
              hidden
              onChange={(e) => {
                const f = e.target.files?.[0]
                if (f) setPhoto(URL.createObjectURL(f))
              }}
            />
          </label>
          <span className="muted small" style={{ flexBasis: '100%' }}>
            Stays on your device. Used only for side-by-side comparison.
          </span>
        </div>

        <Group<Category>
          title="Where does it live?"
          options={{ indoor: categoryLabel.indoor, outdoor: categoryLabel.outdoor } as Record<Category, string>}
          value={q.category}
          onPick={(v) => set('category', v)}
        />
        <Group<LeafShape> title="Leaf shape" options={leafShapeLabel} value={q.leafShape} onPick={(v) => set('leafShape', v)} />
        <Group<LeafPattern> title="Leaf pattern" options={leafPatternLabel} value={q.leafPattern} onPick={(v) => set('leafPattern', v)} />
        <Group<FlowerColor> title="Flower colour" options={flowerColorLabel} value={q.flowerColor} onPick={(v) => set('flowerColor', v)} />
        <Group<GrowthHabit> title="How does it grow?" options={habitLabel} value={q.habit} onPick={(v) => set('habit', v)} />
        <Group<Size> title="Size" options={sizeLabel} value={q.size} onPick={(v) => set('size', v)} />
        <Group<Light> title="Where is it placed?" options={lightLabel} value={q.light} onPick={(v) => set('light', v)} />
        <div className="field">
          <label>Other</label>
          <div className="chips">
            <button className={`chip selectable ${q.evergreen === true ? 'on' : ''}`} onClick={() => set('evergreen', true)}>
              Keeps leaves all year
            </button>
            <button className={`chip selectable ${q.evergreen === false ? 'on' : ''}`} onClick={() => set('evergreen', false)}>
              Loses leaves in winter
            </button>
            <button className={`chip selectable ${q.edible === true ? 'on' : ''}`} onClick={() => set('edible', true)}>
              Edible
            </button>
          </div>
        </div>
      </div>

      {answered === 0 ? (
        <div className="empty card">
          <div className="big">🧭</div>
          <p>Pick at least one trait above. The more you answer, the shorter the list.</p>
        </div>
      ) : matches.length === 0 ? (
        <div className="empty card">
          <div className="big">🤔</div>
          <p>Nothing in the catalog matches all of that. Try removing a trait.</p>
        </div>
      ) : (
        <>
          <div className="section-title">
            Best matches ({matches.length}) · {answered} trait{answered === 1 ? '' : 's'} used
          </div>
          <div className="stack">
            {matches.map(({ plant, matched, total }) => (
              <div key={plant.id} className="card pad stack">
                <div className="compare">
                  <div className="img">
                    {photo ? <img src={photo} alt="Your plant" /> : <div className="img-placeholder">📷</div>}
                  </div>
                  <div className="img">
                    <PlantImage wikipediaTitle={plant.wikipediaTitle} alt={plant.commonName} />
                  </div>
                </div>
                <div className="row">
                  <div className="grow">
                    <strong>{plant.commonName}</strong> <span className="muted">· {plant.danishName}</span>
                    <div className="muted small" style={{ fontStyle: 'italic' }}>
                      {plant.latinName}
                    </div>
                  </div>
                  <span className="chip on">
                    {matched}/{total}
                  </span>
                </div>
                <div className="match-bar">
                  <div style={{ width: `${Math.round((matched / total) * 100)}%` }} />
                </div>
                <div className="row">
                  <Link to={`/catalog/${plant.id}`} className="btn small grow">
                    Care guide
                  </Link>
                  <Link to={`/plants/new?plantId=${plant.id}`} className="btn small primary grow">
                    It's this one — add
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}
