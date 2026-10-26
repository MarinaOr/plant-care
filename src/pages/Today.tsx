import { useLiveQuery } from 'dexie-react-hooks'
import { Link } from 'react-router-dom'
import { ReminderRow } from '../components/ReminderRow'
import { db } from '../lib/db'
import { daysUntil, isWinterMonth } from '../lib/schedule'

export function TodayPage() {
  const plants = useLiveQuery(() => db.userPlants.toArray(), [])
  const reminders = useLiveQuery(
    () => db.reminders.filter((r) => r.enabled).sortBy('nextDue'),
    [],
  )

  if (!plants || !reminders) return null
  const byId = new Map(plants.map((p) => [p.id, p]))

  const overdue = reminders.filter((r) => daysUntil(r.nextDue) < 0)
  const dueToday = reminders.filter((r) => daysUntil(r.nextDue) === 0)
  const upcoming = reminders.filter((r) => {
    const d = daysUntil(r.nextDue)
    return d > 0 && d <= 7
  })

  const dateLabel = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Today</h1>
          <div className="sub">{dateLabel}</div>
        </div>
        <Link to="/catalog" className="btn primary">
          + Add plant
        </Link>
      </div>

      {plants.length === 0 ? (
        <div className="empty card">
          <div className="big">🪴</div>
          <h2>No plants yet</h2>
          <p style={{ marginTop: 8 }}>
            Browse the <Link to="/catalog" style={{ color: 'var(--primary)', fontWeight: 600 }}>catalog</Link> or{' '}
            <Link to="/identify" style={{ color: 'var(--primary)', fontWeight: 600 }}>identify</Link> a plant
            to start your collection. Reminders are created automatically.
          </p>
        </div>
      ) : overdue.length + dueToday.length === 0 ? (
        <div className="empty card">
          <div className="big">✅</div>
          <h2>All caught up</h2>
          <p className="muted" style={{ marginTop: 8 }}>
            Nothing is due today. Enjoy your plants.
          </p>
        </div>
      ) : null}

      {overdue.length > 0 && (
        <>
          <div className="section-title" style={{ color: 'var(--danger)' }}>
            Overdue ({overdue.length})
          </div>
          <div className="stack">
            {overdue.map((r) => (
              <ReminderRow key={r.id} reminder={r} plant={byId.get(r.userPlantId)} />
            ))}
          </div>
        </>
      )}

      {dueToday.length > 0 && (
        <>
          <div className="section-title">Due today ({dueToday.length})</div>
          <div className="stack">
            {dueToday.map((r) => (
              <ReminderRow key={r.id} reminder={r} plant={byId.get(r.userPlantId)} />
            ))}
          </div>
        </>
      )}

      {upcoming.length > 0 && (
        <>
          <div className="section-title">Next 7 days</div>
          <div className="stack">
            {upcoming.map((r) => (
              <ReminderRow key={r.id} reminder={r} plant={byId.get(r.userPlantId)} />
            ))}
          </div>
        </>
      )}

      {plants.length > 0 && (
        <p className="muted small" style={{ marginTop: 20, textAlign: 'center' }}>
          {isWinterMonth(new Date().getMonth() + 1)
            ? 'Winter schedule active (Oct–Mar): watering intervals are stretched and feeding paused where appropriate.'
            : 'Growing-season schedule active.'}
        </p>
      )}
    </>
  )
}
