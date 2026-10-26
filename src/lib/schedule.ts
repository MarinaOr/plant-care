import type { CareTask } from '../data/types'
import { db, uid, type Reminder, type UserPlant } from './db'

/** Danish "winter" for care purposes: October through March. */
export const isWinterMonth = (month1to12: number) => month1to12 >= 10 || month1to12 <= 3

export const toISODate = (d: Date) => {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export const fromISODate = (s: string) => {
  const [y, m, d] = s.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export const today = () => toISODate(new Date())

export const addDays = (d: Date, n: number) => {
  const r = new Date(d)
  r.setDate(r.getDate() + n)
  return r
}

type Schedule = Pick<CareTask, 'intervalDays' | 'winterIntervalDays' | 'months'>

/**
 * Compute the next due date for a schedule, counting from `from`.
 * - Uses the winter interval when `from` falls in Oct-Mar. A winter interval of 0 means
 *   "skip winter": the task resumes on 1 April.
 * - If `months` is set, the due date is moved forward to the first day of the next allowed month
 *   (or kept if it already falls in an allowed month).
 */
export function computeNextDue(s: Schedule, from: Date = new Date()): string {
  const month = from.getMonth() + 1
  let interval = s.intervalDays
  if (isWinterMonth(month) && s.winterIntervalDays !== undefined) {
    if (s.winterIntervalDays === 0) {
      const year = month >= 10 ? from.getFullYear() + 1 : from.getFullYear()
      return applyMonths(s.months, new Date(year, 3, 1))
    }
    interval = s.winterIntervalDays
  }
  const candidate = addDays(from, Math.max(1, interval))
  return applyMonths(s.months, candidate)
}

function applyMonths(months: number[] | undefined, candidate: Date): string {
  if (!months || months.length === 0) return toISODate(candidate)
  const allowed = new Set(months)
  if (allowed.has(candidate.getMonth() + 1)) return toISODate(candidate)
  // Walk forward month by month (max 24) until an allowed month is found.
  let d = new Date(candidate.getFullYear(), candidate.getMonth() + 1, 1)
  for (let i = 0; i < 24; i++) {
    if (allowed.has(d.getMonth() + 1)) return toISODate(d)
    d = new Date(d.getFullYear(), d.getMonth() + 1, 1)
  }
  return toISODate(candidate)
}

/** Whole days from today to the due date: negative = overdue. */
export function daysUntil(isoDate: string): number {
  const a = fromISODate(today()).getTime()
  const b = fromISODate(isoDate).getTime()
  return Math.round((b - a) / 86400000)
}

export function describeDue(isoDate: string): string {
  const n = daysUntil(isoDate)
  if (n < -1) return `${-n} days overdue`
  if (n === -1) return 'Yesterday'
  if (n === 0) return 'Today'
  if (n === 1) return 'Tomorrow'
  if (n < 7) return `In ${n} days`
  if (n < 30) return `In ${Math.round(n / 7)} week${Math.round(n / 7) === 1 ? '' : 's'}`
  const d = fromISODate(isoDate)
  return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short' })
}

export function describeInterval(s: Schedule): string {
  const parts: string[] = []
  const base = s.intervalDays
  if (base >= 365) parts.push(base === 365 ? 'yearly' : `every ${Math.round(base / 365)} years`)
  else if (base >= 28 && base % 30 < 3) parts.push(`every ${Math.round(base / 30)} month${Math.round(base / 30) === 1 ? '' : 's'}`)
  else if (base % 7 === 0 && base >= 7) parts.push(`every ${base / 7} week${base === 7 ? '' : 's'}`)
  else parts.push(`every ${base} day${base === 1 ? '' : 's'}`)
  if (s.winterIntervalDays === 0) parts.push('not in winter')
  else if (s.winterIntervalDays !== undefined && s.winterIntervalDays !== base)
    parts.push(`every ${s.winterIntervalDays} days in winter`)
  if (s.months && s.months.length > 0 && s.months.length < 12) {
    const names = s.months
      .slice()
      .sort((a, b) => a - b)
      .map((m) => new Date(2000, m - 1, 1).toLocaleDateString(undefined, { month: 'short' }))
    parts.push(names.join('/'))
  }
  return parts.join(' · ')
}

/** Create the default reminders for a newly added user plant from its catalog tasks. */
export async function createDefaultReminders(userPlant: UserPlant, tasks: CareTask[]) {
  const now = new Date()
  const rows: Reminder[] = tasks.map((t) => ({
    id: uid(),
    userPlantId: userPlant.id,
    type: t.type,
    intervalDays: t.intervalDays,
    winterIntervalDays: t.winterIntervalDays,
    months: t.months,
    note: t.note,
    nextDue: computeNextDue(t, now),
    enabled: true,
  }))
  await db.reminders.bulkAdd(rows)
}

export async function markDone(reminder: Reminder, note?: string) {
  const now = new Date()
  await db.transaction('rw', db.reminders, db.careLogs, async () => {
    await db.reminders.update(reminder.id, {
      lastDone: toISODate(now),
      nextDue: computeNextDue(reminder, now),
    })
    await db.careLogs.add({
      id: uid(),
      userPlantId: reminder.userPlantId,
      type: reminder.type,
      doneAt: toISODate(now),
      note,
    })
  })
}

export async function snooze(reminder: Reminder, days = 1) {
  const base = Math.max(fromISODate(reminder.nextDue).getTime(), fromISODate(today()).getTime())
  await db.reminders.update(reminder.id, { nextDue: toISODate(addDays(new Date(base), days)) })
}

export async function deleteUserPlant(userPlantId: string) {
  await db.transaction('rw', db.userPlants, db.reminders, db.careLogs, async () => {
    await db.reminders.where('userPlantId').equals(userPlantId).delete()
    await db.careLogs.where('userPlantId').equals(userPlantId).delete()
    await db.userPlants.delete(userPlantId)
  })
}
