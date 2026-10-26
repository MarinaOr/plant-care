import { taskLabel } from '../data/labels'
import type { Reminder, UserPlant } from './db'

const pad = (n: number) => String(n).padStart(2, '0')
const icsDate = (iso: string) => iso.replace(/-/g, '')
const escape = (s: string) => s.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n')

const rrule = (r: Reminder): string => {
  if (r.intervalDays >= 365 && r.intervalDays % 365 === 0) return `RRULE:FREQ=YEARLY;INTERVAL=${r.intervalDays / 365}`
  if (r.intervalDays >= 28 && r.intervalDays % 30 < 3) return `RRULE:FREQ=MONTHLY;INTERVAL=${Math.round(r.intervalDays / 30)}`
  if (r.intervalDays % 7 === 0) return `RRULE:FREQ=WEEKLY;INTERVAL=${r.intervalDays / 7}`
  return `RRULE:FREQ=DAILY;INTERVAL=${r.intervalDays}`
}

/**
 * Build an iCalendar file with one recurring all-day event per reminder, so the user can import
 * durable notifications into Google Calendar, Apple Calendar or Outlook.
 */
export function buildICS(reminders: Reminder[], plants: Map<string, UserPlant>): string {
  const now = new Date()
  const stamp = `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`
  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Plant App//Reminders//EN',
    'CALSCALE:GREGORIAN',
    'X-WR-CALNAME:Plant care',
  ]
  for (const r of reminders) {
    if (!r.enabled) continue
    const plant = plants.get(r.userPlantId)
    if (!plant) continue
    const summary = `${taskLabel[r.type]} ${plant.nickname}`
    const desc = [r.note, plant.location ? `Location: ${plant.location}` : ''].filter(Boolean).join('\n')
    lines.push(
      'BEGIN:VEVENT',
      `UID:${r.id}@plant-app`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${icsDate(r.nextDue)}`,
      `SUMMARY:${escape(summary)}`,
      desc ? `DESCRIPTION:${escape(desc)}` : '',
      rrule(r),
      'BEGIN:VALARM',
      'ACTION:DISPLAY',
      `DESCRIPTION:${escape(summary)}`,
      'TRIGGER:PT9H',
      'END:VALARM',
      'END:VEVENT',
    )
  }
  lines.push('END:VCALENDAR')
  return lines.filter(Boolean).join('\r\n') + '\r\n'
}

export function downloadText(filename: string, text: string, mime = 'text/plain') {
  const blob = new Blob([text], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
