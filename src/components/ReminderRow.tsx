import { taskIcon, taskLabel } from '../data/labels'
import type { Reminder, UserPlant } from '../lib/db'
import { daysUntil, describeDue, markDone, snooze } from '../lib/schedule'
import { getPlant } from '../data/catalog'
import { PlantImage } from './PlantImage'
import { Link } from 'react-router-dom'

interface Props {
  reminder: Reminder
  plant?: UserPlant
  showPlant?: boolean
  onDone?: () => void
}

export function ReminderRow({ reminder, plant, showPlant = true, onDone }: Props) {
  const catalog = plant ? getPlant(plant.plantId) : undefined
  const days = daysUntil(reminder.nextDue)
  const overdue = days < 0
  return (
    <div className={`card reminder ${overdue ? 'overdue' : ''}`}>
      {showPlant && plant && catalog ? (
        <Link to={`/plants/${plant.id}`} className="thumb">
          <PlantImage
            wikipediaTitle={catalog.wikipediaTitle}
            imageUrl={plant.imageUrl}
            photo={plant.photo}
            alt={plant.nickname}
          />
        </Link>
      ) : (
        <div className="thumb" style={{ display: 'grid', placeItems: 'center', fontSize: '1.6rem' }}>
          {taskIcon[reminder.type]}
        </div>
      )}
      <div className="grow">
        <div className="task">
          {taskIcon[reminder.type]} {taskLabel[reminder.type]}
          {showPlant && plant ? <span className="muted"> · {plant.nickname}</span> : null}
        </div>
        <div className="when">
          {describeDue(reminder.nextDue)}
          {reminder.note ? <span className="muted"> · {reminder.note}</span> : null}
        </div>
      </div>
      <div className="actions">
        <button
          className="btn small"
          title="Snooze one day"
          onClick={() => void snooze(reminder, 1)}
          aria-label="Snooze one day"
        >
          +1d
        </button>
        <button
          className="btn small primary"
          onClick={() => void markDone(reminder).then(onDone)}
          aria-label="Mark done"
        >
          Done
        </button>
      </div>
    </div>
  )
}
