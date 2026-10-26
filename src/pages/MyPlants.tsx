import { useLiveQuery } from 'dexie-react-hooks'
import { Link } from 'react-router-dom'
import { PlantImage } from '../components/PlantImage'
import { getPlant } from '../data/catalog'
import { db } from '../lib/db'
import { daysUntil } from '../lib/schedule'

export function MyPlantsPage() {
  const plants = useLiveQuery(() => db.userPlants.orderBy('createdAt').reverse().toArray(), [])
  const reminders = useLiveQuery(() => db.reminders.filter((r) => r.enabled).toArray(), [])
  if (!plants || !reminders) return null

  const dueCount = (id: string) =>
    reminders.filter((r) => r.userPlantId === id && daysUntil(r.nextDue) <= 0).length

  return (
    <>
      <div className="page-head">
        <div>
          <h1>My plants</h1>
          <div className="sub">
            {plants.length} plant{plants.length === 1 ? '' : 's'}
          </div>
        </div>
        <Link to="/catalog" className="btn primary">
          + Add plant
        </Link>
      </div>

      {plants.length === 0 ? (
        <div className="empty card">
          <div className="big">🌱</div>
          <h2>Your collection is empty</h2>
          <p style={{ marginTop: 8 }}>Add plants from the catalog and they will appear here.</p>
        </div>
      ) : (
        <div className="grid">
          {plants.map((p) => {
            const c = getPlant(p.plantId)
            const due = dueCount(p.id)
            return (
              <Link key={p.id} to={`/plants/${p.id}`} className="card tile">
                <div className="img" style={{ position: 'relative' }}>
                  {c ? (
                    <PlantImage
                      wikipediaTitle={c.wikipediaTitle}
                      imageUrl={p.imageUrl}
                      photo={p.photo}
                      alt={p.nickname}
                    />
                  ) : (
                    <div className="img-placeholder">🌿</div>
                  )}
                  {due > 0 && (
                    <span
                      className="chip danger"
                      style={{ position: 'absolute', top: 8, right: 8, fontWeight: 700 }}
                    >
                      {due} due
                    </span>
                  )}
                </div>
                <div className="body">
                  <div className="name">{p.nickname}</div>
                  <div className="latin">{c?.commonName ?? p.plantId}</div>
                  {p.location && <div className="muted small">{p.location}</div>}
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}
