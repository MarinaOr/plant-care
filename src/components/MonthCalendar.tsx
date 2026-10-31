import { taskColor } from '../data/labels'
import type { Occurrence } from '../lib/occurrences'
import { today, toISODate } from '../lib/schedule'

interface Props {
  /** Any date inside the month to show. */
  month: Date
  occurrencesByDate: Map<string, Occurrence[]>
  selected: string | undefined
  onSelect: (iso: string) => void
  onMonthChange: (next: Date) => void
}

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

/** Google-Calendar-style month grid, Monday first, with one coloured dot per activity. */
export function MonthCalendar({ month, occurrencesByDate, selected, onSelect, onMonthChange }: Props) {
  const y = month.getFullYear()
  const m = month.getMonth()
  const first = new Date(y, m, 1)
  const daysInMonth = new Date(y, m + 1, 0).getDate()
  // Monday = 0 … Sunday = 6
  const lead = (first.getDay() + 6) % 7
  const cells: Array<Date | null> = [
    ...Array.from({ length: lead }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(y, m, i + 1)),
  ]
  while (cells.length % 7) cells.push(null)
  const t = today()

  return (
    <div className="card cal">
      <div className="cal-head">
        <button className="icon-btn" aria-label="Previous month" onClick={() => onMonthChange(new Date(y, m - 1, 1))}>
          ‹
        </button>
        <button className="cal-title" onClick={() => onMonthChange(new Date())}>
          {first.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}
        </button>
        <button className="icon-btn" aria-label="Next month" onClick={() => onMonthChange(new Date(y, m + 1, 1))}>
          ›
        </button>
      </div>
      <div className="cal-grid cal-weekdays">
        {weekdays.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>
      <div className="cal-grid">
        {cells.map((d, i) => {
          if (!d) return <div key={`e${i}`} className="cal-cell empty" />
          const iso = toISODate(d)
          const occ = occurrencesByDate.get(iso) ?? []
          const hasOverdue = occ.some((o) => o.isNext && iso < t)
          const types = Array.from(new Set(occ.map((o) => o.reminder.type)))
          const cls = ['cal-cell', iso === t ? 'today' : '', iso === selected ? 'selected' : '', iso < t ? 'past' : '']
          return (
            <button key={iso} className={cls.join(' ')} onClick={() => onSelect(iso)} aria-label={iso}>
              <span className="num">{d.getDate()}</span>
              <span className="dots">
                {types.slice(0, 4).map((ty) => (
                  <i key={ty} style={{ background: taskColor[ty] }} className={hasOverdue ? 'ring' : ''} />
                ))}
                {types.length > 4 && <b>+{types.length - 4}</b>}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
