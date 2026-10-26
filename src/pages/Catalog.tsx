import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PlantImage } from '../components/PlantImage'
import { plants, searchPlants } from '../data/catalog'
import { difficultyLabel, toxicityLabel } from '../data/labels'
import type { Category } from '../data/types'

type Filter = 'all' | Category | 'pet-safe' | 'edible' | 'easy'

export function CatalogPage() {
  const [q, setQ] = useState('')
  const [filter, setFilter] = useState<Filter>('all')

  const list = useMemo(() => {
    let l = plants
    if (filter === 'indoor' || filter === 'outdoor') l = l.filter((p) => p.category === filter || p.category === 'both')
    if (filter === 'pet-safe') l = l.filter((p) => p.toxicity === 'non-toxic')
    if (filter === 'edible') l = l.filter((p) => p.traits.edible)
    if (filter === 'easy') l = l.filter((p) => p.difficulty === 'easy')
    return searchPlants(q, l)
  }, [q, filter])

  const filters: Array<[Filter, string]> = [
    ['all', 'All'],
    ['indoor', 'Indoor'],
    ['outdoor', 'Outdoor'],
    ['easy', 'Easy'],
    ['pet-safe', 'Pet safe'],
    ['edible', 'Edible'],
  ]

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Catalog</h1>
          <div className="sub">{plants.length} common plants for Danish homes and gardens</div>
        </div>
        <Link to="/identify" className="btn">
          🔍 Identify
        </Link>
      </div>

      <div className="search" style={{ marginBottom: 10 }}>
        <span className="ico">🔎</span>
        <input
          className="input"
          placeholder="Search English, Danish or Latin name…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="chips" style={{ marginBottom: 14 }}>
        {filters.map(([f, label]) => (
          <button key={f} className={`chip selectable ${filter === f ? 'on' : ''}`} onClick={() => setFilter(f)}>
            {label}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="empty card">
          <div className="big">🤷</div>
          <p>No plants match. Try a different name or fewer filters.</p>
        </div>
      ) : (
        <div className="grid">
          {list.map((p) => (
            <Link key={p.id} to={`/catalog/${p.id}`} className="card tile">
              <div className="img">
                <PlantImage wikipediaTitle={p.wikipediaTitle} alt={p.commonName} />
              </div>
              <div className="body">
                <div className="name">{p.commonName}</div>
                <div className="muted small">{p.danishName}</div>
                <div className="latin">{p.latinName}</div>
                <div className="chips" style={{ marginTop: 6 }}>
                  <span className="chip">{difficultyLabel[p.difficulty]}</span>
                  {p.toxicity === 'non-toxic' && <span className="chip">🐾 safe</span>}
                  {p.toxicity === 'toxic' && <span className="chip danger" title={toxicityLabel.toxic}>☠</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
