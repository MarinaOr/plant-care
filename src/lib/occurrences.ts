import type { Reminder } from './db'
import { computeNextDue, fromISODate } from './schedule'

export interface Occurrence {
  reminder: Reminder
  /** ISO date YYYY-MM-DD */
  date: string
  /** True for the reminder's actual next due date (the only one that can be done or moved). */
  isNext: boolean
}

/**
 * Project every enabled reminder onto the calendar between `startISO` and `endISO` (inclusive).
 * The first occurrence is the stored `nextDue`; later ones are predicted from the interval, so
 * moving or completing the real one automatically shifts everything after it.
 */
export function projectOccurrences(reminders: Reminder[], startISO: string, endISO: string): Occurrence[] {
  const out: Occurrence[] = []
  for (const r of reminders) {
    if (!r.enabled) continue
    let date = r.nextDue
    let isNext = true
    for (let i = 0; i < 90 && date <= endISO; i++) {
      if (date >= startISO || isNext) out.push({ reminder: r, date, isNext })
      const next = computeNextDue(r, fromISODate(date))
      if (next <= date) break
      date = next
      isNext = false
    }
  }
  return out.sort((a, b) => a.date.localeCompare(b.date))
}

/** Group occurrences by ISO date. */
export function byDate(occurrences: Occurrence[]): Map<string, Occurrence[]> {
  const m = new Map<string, Occurrence[]>()
  for (const o of occurrences) {
    const list = m.get(o.date)
    if (list) list.push(o)
    else m.set(o.date, [o])
  }
  return m
}
