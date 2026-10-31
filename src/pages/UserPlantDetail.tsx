import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CareGuide } from '../components/CareGuide'
import { PlantImage } from '../components/PlantImage'
import { ReminderRow } from '../components/ReminderRow'
import { useToast } from '../components/Toast'
import { getPlant } from '../data/catalog'
import { taskIcon, taskLabel } from '../data/labels'
import { db, type Reminder } from '../lib/db'
import { deleteUserPlant, describeInterval, fromISODate } from '../lib/schedule'
import { ReminderEditor } from '../components/ReminderEditor'

type Tab = 'reminders' | 'care' | 'log'


export function UserPlantDetailPage() {
  const { id = '' } = useParams()
  const nav = useNavigate()
  const toast = useToast()
  const [tab, setTab] = useState<Tab>('reminders')
  const [editing, setEditing] = useState<Reminder | null | 'new'>(null)

  // undefined = still loading, null = not found
  const plant = useLiveQuery(() => db.userPlants.get(id).then((p) => p ?? null), [id])
  const reminders = useLiveQuery(() => db.reminders.where('userPlantId').equals(id).sortBy('nextDue'), [id])
  const logs = useLiveQuery(
    () => db.careLogs.where('userPlantId').equals(id).reverse().sortBy('doneAt'),
    [id],
  )

  if (plant === undefined || !reminders || !logs) return null
  if (plant === null) {
    return (
      <div className="empty">
        <p>Plant not found.</p>
        <Link to="/plants" className="btn" style={{ marginTop: 12 }}>
          Back to my plants
        </Link>
      </div>
    )
  }
  const catalog = getPlant(plant.plantId)

  const remove = async () => {
    if (!confirm(`Remove ${plant.nickname} and all its reminders?`)) return
    await deleteUserPlant(plant.id)
    toast('Plant removed')
    nav('/plants')
  }

  return (
    <>
      <div className="row" style={{ marginBottom: 12 }}>
        <button className="icon-btn" onClick={() => nav(-1)} aria-label="Back">
          ←
        </button>
        <h1 className="grow" style={{ fontSize: '1.3rem' }}>
          {plant.nickname}
        </h1>
        <Link to={`/plants/${plant.id}/edit`} className="btn small">
          Edit
        </Link>
      </div>

      {catalog && (
        <div className="hero">
          <PlantImage
            wikipediaTitle={catalog.wikipediaTitle}
            imageUrl={plant.imageUrl}
            photo={plant.photo}
            alt={plant.nickname}
            size="large"
          />
        </div>
      )}

      <div style={{ margin: '12px 0 14px' }}>
        {catalog ? (
          <Link to={`/catalog/${catalog.id}`}>
            <strong>{catalog.commonName}</strong> · <span className="muted">{catalog.danishName}</span>
            <div className="muted small" style={{ fontStyle: 'italic' }}>
              {catalog.latinName}
            </div>
          </Link>
        ) : (
          <span className="muted">Unknown catalog plant</span>
        )}
        <div className="chips" style={{ marginTop: 8 }}>
          {plant.location && <span className="chip">📍 {plant.location}</span>}
          {plant.acquiredAt && (
            <span className="chip">
              Since {fromISODate(plant.acquiredAt).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
            </span>
          )}
        </div>
        {plant.notes && <p className="small" style={{ marginTop: 8 }}>{plant.notes}</p>}
      </div>

      <div className="tabs" role="tablist">
        {(['reminders', 'care', 'log'] as Tab[]).map((t) => (
          <button key={t} className={tab === t ? 'on' : ''} onClick={() => setTab(t)} role="tab">
            {t === 'reminders' ? 'Reminders' : t === 'care' ? 'Care guide' : 'History'}
          </button>
        ))}
      </div>

      {tab === 'reminders' && (
        <div className="stack" style={{ marginTop: 12 }}>
          {reminders.length === 0 && <p className="muted">No reminders. Add one below.</p>}
          {reminders.map((r) => (
            <div key={r.id} className="stack" style={{ gap: 4 }}>
              <div style={{ opacity: r.enabled ? 1 : 0.5 }}>
                <ReminderRow reminder={r} plant={plant} showPlant={false} />
              </div>
              <div className="row small" style={{ padding: '0 6px' }}>
                <span className="muted grow">{describeInterval(r)}</span>
                <button className="btn small" onClick={() => setEditing(r)}>
                  Edit
                </button>
                <button
                  className="btn small"
                  onClick={() => void db.reminders.update(r.id, { enabled: !r.enabled })}
                >
                  {r.enabled ? 'Pause' : 'Resume'}
                </button>
              </div>
            </div>
          ))}
          <button className="btn block" onClick={() => setEditing('new')}>
            + Add reminder
          </button>
        </div>
      )}

      {tab === 'care' && catalog && (
        <div style={{ marginTop: 12 }}>
          <CareGuide plant={catalog} />
        </div>
      )}

      {tab === 'log' && (
        <div className="card pad" style={{ marginTop: 12 }}>
          {logs.length === 0 ? (
            <p className="muted">Nothing logged yet. Tap "Done" on a reminder to record it.</p>
          ) : (
            <ul className="log">
              {logs.map((l) => (
                <li key={l.id}>
                  <span>{taskIcon[l.type]}</span>
                  <span className="grow">{taskLabel[l.type]}</span>
                  <span className="muted small">
                    {fromISODate(l.doneAt).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div style={{ marginTop: 28 }}>
        <button className="btn danger block" onClick={() => void remove()}>
          Remove plant
        </button>
      </div>

      {editing && (
        <ReminderEditor
          userPlantId={plant.id}
          reminder={editing === 'new' ? null : editing}
          onClose={() => setEditing(null)}
        />
      )}
    </>
  )
}
