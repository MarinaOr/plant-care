import { useLiveQuery } from 'dexie-react-hooks'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MonthCalendar } from '../components/MonthCalendar'
import { PlantImage } from '../components/PlantImage'
import { ReminderEditor } from '../components/ReminderEditor'
import { ReminderRow } from '../components/ReminderRow'
import { useToast } from '../components/Toast'
import { getPlant } from '../data/catalog'
import { taskColor, taskIcon, taskLabel } from '../data/labels'
import type { TaskType } from '../data/types'
import { db, type Reminder, type UserPlant } from '../lib/db'
import { byDate, projectOccurrences, type Occurrence } from '../lib/occurrences'
import {
  addDays,
  daysUntil,
  describeInterval,
  fromISODate,
  isWinterMonth,
  markDone,
  moveReminders,
  today,
  toISODate,
} from '../lib/schedule'

type View = 'agenda' | 'month'

export function TodayPage() {
  const [view, setView] = useState<View>(() => (localStorage.getItem('plant-app:view') as View) || 'agenda')
  const plants = useLiveQuery(() => db.userPlants.toArray(), [])
  const reminders = useLiveQuery(() => db.reminders.filter((r) => r.enabled).sortBy('nextDue'), [])

  if (!plants || !reminders) return null
  const byId = new Map(plants.map((p) => [p.id, p]))

  const switchView = (v: View) => {
    setView(v)
    localStorage.setItem('plant-app:view', v)
  }

  return (
    <>
      <div className="page-head">
        <div>
          <h1>{view === 'agenda' ? 'Today' : 'Calendar'}</h1>
          <div className="sub">
            {new Date().toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' })}
          </div>
        </div>
        <Link to="/catalog" className="btn primary">
          + Add plant
        </Link>
      </div>

      <div className="tabs" style={{ marginBottom: 14 }}>
        <button className={view === 'agenda' ? 'on' : ''} onClick={() => switchView('agenda')}>
          Agenda
        </button>
        <button className={view === 'month' ? 'on' : ''} onClick={() => switchView('month')}>
          Month
        </button>
      </div>

      {plants.length === 0 ? (
        <div className="empty card">
          <div className="big">🪴</div>
          <h2>No plants yet</h2>
          <p style={{ marginTop: 8 }}>
            Browse the <Link to="/catalog" style={{ color: 'var(--primary)', fontWeight: 600 }}>catalog</Link> or{' '}
            <Link to="/identify" style={{ color: 'var(--primary)', fontWeight: 600 }}>identify</Link> a plant to
            start your collection. Reminders are created automatically.
          </p>
        </div>
      ) : view === 'agenda' ? (
        <Agenda reminders={reminders} byId={byId} />
      ) : (
        <MonthView reminders={reminders} byId={byId} />
      )}
    </>
  )
}

function Agenda({ reminders, byId }: { reminders: Reminder[]; byId: Map<string, UserPlant> }) {
  const overdue = reminders.filter((r) => daysUntil(r.nextDue) < 0)
  const dueToday = reminders.filter((r) => daysUntil(r.nextDue) === 0)
  const upcoming = reminders.filter((r) => {
    const d = daysUntil(r.nextDue)
    return d > 0 && d <= 7
  })
  return (
    <>
      {overdue.length + dueToday.length === 0 && (
        <div className="empty card">
          <div className="big">✅</div>
          <h2>All caught up</h2>
          <p className="muted" style={{ marginTop: 8 }}>
            Nothing is due today. Enjoy your plants.
          </p>
        </div>
      )}
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
      <p className="muted small" style={{ marginTop: 20, textAlign: 'center' }}>
        {isWinterMonth(new Date().getMonth() + 1)
          ? 'Winter schedule active (Oct–Mar): watering intervals are stretched and feeding paused where appropriate.'
          : 'Growing-season schedule active.'}
      </p>
    </>
  )
}

function MonthView({ reminders, byId }: { reminders: Reminder[]; byId: Map<string, UserPlant> }) {
  const toast = useToast()
  const [month, setMonth] = useState(() => new Date())
  const [selected, setSelected] = useState<string | undefined>(today())
  const [picked, setPicked] = useState<Set<string>>(new Set())
  const [moving, setMoving] = useState<string[] | null>(null)
  const [editing, setEditing] = useState<Reminder | null>(null)
  const [filter, setFilter] = useState<TaskType | 'all'>('all')

  // Show six weeks around the month so leading/trailing days have data too.
  const start = toISODate(new Date(month.getFullYear(), month.getMonth(), 1))
  const end = toISODate(new Date(month.getFullYear(), month.getMonth() + 1, 0))

  const occurrences = useMemo(() => {
    const list = filter === 'all' ? reminders : reminders.filter((r) => r.type === filter)
    return projectOccurrences(list, start, end)
  }, [reminders, start, end, filter])
  const grouped = useMemo(() => byDate(occurrences), [occurrences])
  const typesThisMonth = useMemo(
    () => Array.from(new Set(reminders.map((r) => r.type))).sort(),
    [reminders],
  )

  const dayList = selected ? (grouped.get(selected) ?? []) : []
  const togglePick = (id: string) =>
    setPicked((cur) => {
      const n = new Set(cur)
      if (n.has(id)) n.delete(id)
      else n.add(id)
      return n
    })

  const doMove = async (iso: string) => {
    if (!moving) return
    await moveReminders(moving, iso)
    toast(`${moving.length} task${moving.length === 1 ? '' : 's'} moved to ${fromISODate(iso).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })}`)
    setMoving(null)
    setPicked(new Set())
    setSelected(iso)
  }

  return (
    <>
      <MonthCalendar
        month={month}
        occurrencesByDate={grouped}
        selected={selected}
        onSelect={setSelected}
        onMonthChange={setMonth}
      />

      <div className="chips legend" style={{ margin: '10px 0 4px' }}>
        <button className={`chip selectable ${filter === 'all' ? 'on' : ''}`} onClick={() => setFilter('all')}>
          All
        </button>
        {typesThisMonth.map((t) => (
          <button
            key={t}
            className={`chip selectable ${filter === t ? 'on' : ''}`}
            onClick={() => setFilter(filter === t ? 'all' : t)}
          >
            <i className="dot" style={{ background: taskColor[t] }} /> {taskLabel[t]}
          </button>
        ))}
      </div>

      {selected && (
        <>
          <div className="section-title">
            {fromISODate(selected).toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' })}
            {selected === today() ? ' · today' : ''}
          </div>
          {dayList.length === 0 ? (
            <div className="card pad muted small">Nothing planned this day. Tap a task elsewhere and use “Move” to put it here.</div>
          ) : (
            <div className="stack">
              {dayList.map((o) => (
                <DayRow
                  key={o.reminder.id + o.date}
                  occ={o}
                  plant={byId.get(o.reminder.userPlantId)}
                  picked={picked.has(o.reminder.id)}
                  onPick={() => togglePick(o.reminder.id)}
                  onMove={() => setMoving([o.reminder.id])}
                  onEdit={() => setEditing(o.reminder)}
                  onDone={() => toast('Done. Next one scheduled.')}
                />
              ))}
            </div>
          )}
          <p className="muted small" style={{ marginTop: 10 }}>
            Faded rows are predicted from each task's interval. Do or move the solid one and the rest follow.
            Tick several tasks to move them onto the same day.
          </p>
        </>
      )}

      {picked.size > 0 && (
        <div className="selection-bar card">
          <span className="grow">
            {picked.size} selected
          </span>
          <button className="btn small" onClick={() => setPicked(new Set())}>
            Clear
          </button>
          <button className="btn small primary" onClick={() => setMoving(Array.from(picked))}>
            Move to…
          </button>
        </div>
      )}

      {moving && (
        <MoveSheet
          count={moving.length}
          initial={selected ?? today()}
          onClose={() => setMoving(null)}
          onMove={(iso) => void doMove(iso)}
        />
      )}

      {editing && (
        <ReminderEditor
          userPlantId={editing.userPlantId}
          reminder={editing}
          onClose={() => setEditing(null)}
          title={`${taskLabel[editing.type]} · ${byId.get(editing.userPlantId)?.nickname ?? ''}`}
        />
      )}
    </>
  )
}

function DayRow({
  occ,
  plant,
  picked,
  onPick,
  onMove,
  onEdit,
  onDone,
}: {
  occ: Occurrence
  plant?: UserPlant
  picked: boolean
  onPick: () => void
  onMove: () => void
  onEdit: () => void
  onDone: () => void
}) {
  const r = occ.reminder
  const catalog = plant ? getPlant(plant.plantId) : undefined
  const overdue = occ.isNext && occ.date < today()
  return (
    <div className={`card reminder dayrow ${occ.isNext ? '' : 'projected'} ${overdue ? 'overdue' : ''}`}>
      {occ.isNext ? (
        <input type="checkbox" checked={picked} onChange={onPick} aria-label="Select task" className="pick" />
      ) : (
        <span className="pick" />
      )}
      {plant && catalog ? (
        <Link to={`/plants/${plant.id}`} className="thumb" style={{ width: 44, height: 44 }}>
          <PlantImage
            wikipediaTitle={catalog.wikipediaTitle}
            imageUrl={plant.imageUrl}
            photo={plant.photo}
            alt={plant.nickname}
          />
        </Link>
      ) : null}
      <div className="grow">
        <div className="task">
          <i className="dot" style={{ background: taskColor[r.type] }} /> {taskIcon[r.type]} {taskLabel[r.type]}
          <span className="muted"> · {plant?.nickname ?? 'plant'}</span>
        </div>
        <div className="when">
          {overdue ? `${-daysUntil(occ.date)} days overdue · ` : ''}
          {describeInterval(r)}
          {!occ.isNext && <span className="muted"> · predicted</span>}
        </div>
      </div>
      {occ.isNext ? (
        <div className="actions">
          <button className="btn small" onClick={onEdit} title="Change interval">
            Interval
          </button>
          <button className="btn small" onClick={onMove} title="Move to another day">
            Move
          </button>
          <button className="btn small primary" onClick={() => void markDone(r).then(onDone)}>
            Done
          </button>
        </div>
      ) : (
        <button className="btn small" onClick={onEdit} title="Change interval">
          Interval
        </button>
      )}
    </div>
  )
}

function MoveSheet({
  count,
  initial,
  onClose,
  onMove,
}: {
  count: number
  initial: string
  onClose: () => void
  onMove: (iso: string) => void
}) {
  const [date, setDate] = useState(initial)
  const t = fromISODate(today())
  const nextWeekday = (dow: number) => {
    const d = new Date(t)
    do d.setDate(d.getDate() + 1)
    while (d.getDay() !== dow)
    return toISODate(d)
  }
  const quick: Array<[string, string]> = [
    ['Today', today()],
    ['Tomorrow', toISODate(addDays(t, 1))],
    ['In 2 days', toISODate(addDays(t, 2))],
    ['Next Sat', nextWeekday(6)],
    ['Next Sun', nextWeekday(0)],
    ['In a week', toISODate(addDays(t, 7))],
  ]
  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="card pad stack sheet" onClick={(e) => e.stopPropagation()}>
        <h2>
          Move {count} task{count === 1 ? '' : 's'}
        </h2>
        <p className="muted small">Later occurrences follow from the new date.</p>
        <div className="chips">
          {quick.map(([label, iso]) => (
            <button key={label} className={`chip selectable ${date === iso ? 'on' : ''}`} onClick={() => setDate(iso)}>
              {label}
            </button>
          ))}
        </div>
        <div className="field">
          <label>Or pick a date</label>
          <input className="input" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="row">
          <span className="grow" />
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
          <button className="btn primary" disabled={!date} onClick={() => onMove(date)}>
            Move
          </button>
        </div>
      </div>
    </div>
  )
}
