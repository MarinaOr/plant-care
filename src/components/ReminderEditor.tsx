import { useState } from 'react'
import { taskIcon, taskLabel } from '../data/labels'
import type { TaskType } from '../data/types'
import { db, uid, type Reminder } from '../lib/db'
import { computeNextDue } from '../lib/schedule'
import { useToast } from './Toast'

export const allTaskTypes: TaskType[] = [
  'water', 'fertilize', 'repot', 'prune', 'mist', 'rotate', 'check-pests', 'wipe-leaves',
  'deadhead', 'mulch', 'harvest', 'divide', 'overwinter', 'plant-out', 'bring-inside',
]

/** Bottom-sheet editor for one reminder: task type, interval, winter interval, months, next due, note. */
export function ReminderEditor({
  userPlantId,
  reminder,
  onClose,
  title,
}: {
  userPlantId: string
  reminder: Reminder | null
  onClose: () => void
  title?: string
}) {
  const toast = useToast()
  const [type, setType] = useState<TaskType>(reminder?.type ?? 'water')
  const [interval, setInterval] = useState(reminder?.intervalDays ?? 7)
  const [winter, setWinter] = useState<string>(
    reminder?.winterIntervalDays === undefined ? '' : String(reminder.winterIntervalDays),
  )
  const [months, setMonths] = useState<number[]>(reminder?.months ?? [])
  const [note, setNote] = useState(reminder?.note ?? '')
  const [nextDue, setNextDue] = useState(reminder?.nextDue ?? '')

  const save = async () => {
    const schedule = {
      intervalDays: Math.max(1, Number(interval) || 1),
      winterIntervalDays: winter === '' ? undefined : Math.max(0, Number(winter) || 0),
      months: months.length ? months : undefined,
    }
    const row: Reminder = {
      id: reminder?.id ?? uid(),
      userPlantId,
      type,
      ...schedule,
      note: note.trim() || undefined,
      nextDue: nextDue || computeNextDue(schedule),
      lastDone: reminder?.lastDone,
      enabled: reminder?.enabled ?? true,
    }
    await db.reminders.put(row)
    toast(reminder ? 'Reminder updated' : 'Reminder added')
    onClose()
  }

  const remove = async () => {
    if (reminder && confirm('Delete this reminder?')) {
      await db.reminders.delete(reminder.id)
      onClose()
    }
  }

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="card pad stack sheet" onClick={(e) => e.stopPropagation()}>
        <h2>{title ?? (reminder ? 'Edit reminder' : 'New reminder')}</h2>
        <div className="field">
          <label>Task</label>
          <select className="input" value={type} onChange={(e) => setType(e.target.value as TaskType)}>
            {allTaskTypes.map((t) => (
              <option key={t} value={t}>
                {taskIcon[t]} {taskLabel[t]}
              </option>
            ))}
          </select>
        </div>
        <div className="row">
          <div className="field grow">
            <label>Every (days)</label>
            <input
              className="input"
              type="number"
              min={1}
              value={interval}
              onChange={(e) => setInterval(Number(e.target.value))}
            />
          </div>
          <div className="field grow">
            <label>Winter (Oct-Mar), 0 = skip</label>
            <input
              className="input"
              type="number"
              min={0}
              placeholder="same"
              value={winter}
              onChange={(e) => setWinter(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label>Only in these months (optional)</label>
          <div className="chips">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
              <button
                key={m}
                type="button"
                className={`chip selectable ${months.includes(m) ? 'on' : ''}`}
                onClick={() => setMonths((cur) => (cur.includes(m) ? cur.filter((x) => x !== m) : [...cur, m]))}
              >
                {new Date(2000, m - 1, 1).toLocaleDateString(undefined, { month: 'short' })}
              </button>
            ))}
          </div>
        </div>
        <div className="field">
          <label>Next due</label>
          <input className="input" type="date" value={nextDue} onChange={(e) => setNextDue(e.target.value)} />
        </div>
        <div className="field">
          <label>Note</label>
          <input
            className="input"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g. Let top 3 cm dry out first"
          />
        </div>
        <div className="row">
          {reminder && (
            <button className="btn danger" onClick={() => void remove()}>
              Delete
            </button>
          )}
          <span className="grow" />
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
          <button className="btn primary" onClick={() => void save()}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
