import { useLiveQuery } from 'dexie-react-hooks'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CareGuide } from '../components/CareGuide'
import { PlantImage } from '../components/PlantImage'
import { getPlant } from '../data/catalog'
import {
  flowerColorLabel,
  habitLabel,
  leafPatternLabel,
  leafShapeLabel,
  sizeLabel,
} from '../data/labels'
import { db } from '../lib/db'

export function CatalogPlantPage() {
  const { plantId = '' } = useParams()
  const nav = useNavigate()
  const plant = getPlant(plantId)
  const owned = useLiveQuery(() => db.userPlants.where('plantId').equals(plantId).toArray(), [plantId])

  if (!plant) {
    return (
      <div className="empty">
        <p>Plant not found in the catalog.</p>
        <Link to="/catalog" className="btn" style={{ marginTop: 12 }}>
          Back to catalog
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className="row" style={{ marginBottom: 12 }}>
        <button className="icon-btn" onClick={() => nav(-1)} aria-label="Back">
          ←
        </button>
        <div className="grow">
          <h1 style={{ fontSize: '1.3rem' }}>{plant.commonName}</h1>
          <div className="muted small">
            {plant.danishName} · <i>{plant.latinName}</i> · {plant.family}
          </div>
        </div>
      </div>

      <div className="hero">
        <PlantImage wikipediaTitle={plant.wikipediaTitle} alt={plant.commonName} size="large" />
      </div>
      <p className="muted small" style={{ marginTop: 4 }}>
        Photo from Wikipedia ·{' '}
        <a
          href={`https://en.wikipedia.org/wiki/${encodeURIComponent(plant.wikipediaTitle.replace(/ /g, '_'))}`}
          target="_blank"
          rel="noreferrer"
          style={{ color: 'var(--primary)' }}
        >
          read the article
        </a>
      </p>

      <div className="row" style={{ margin: '14px 0' }}>
        <Link to={`/plants/new?plantId=${plant.id}`} className="btn primary grow">
          + Add to my plants
        </Link>
        {owned && owned.length > 0 && (
          <Link to="/plants" className="btn">
            You have {owned.length}
          </Link>
        )}
      </div>

      <CareGuide plant={plant} />

      <div className="section-title">Identification traits</div>
      <div className="card pad">
        <div className="chips">
          {plant.traits.leafShape.map((t) => (
            <span key={t} className="chip">🍃 {leafShapeLabel[t]}</span>
          ))}
          {plant.traits.leafPattern.map((t) => (
            <span key={t} className="chip">{leafPatternLabel[t]}</span>
          ))}
          {plant.traits.flowerColor.map((t) => (
            <span key={t} className="chip">🌸 {flowerColorLabel[t]}</span>
          ))}
          {plant.traits.habit.map((t) => (
            <span key={t} className="chip">{habitLabel[t]}</span>
          ))}
          <span className="chip">{sizeLabel[plant.traits.size]}</span>
          <span className="chip">{plant.traits.evergreen ? 'Evergreen' : 'Loses leaves'}</span>
          {plant.traits.edible && <span className="chip">Edible</span>}
          {plant.tags?.map((t) => (
            <span key={t} className="chip muted">#{t}</span>
          ))}
        </div>
      </div>
    </>
  )
}
