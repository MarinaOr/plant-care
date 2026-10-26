import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect, useState } from 'react'
import { useToast } from '../components/Toast'
import { plants } from '../data/catalog'
import { db, type CareLog, type Reminder, type UserPlant } from '../lib/db'
import { buildICS, downloadText } from '../lib/ics'
import { notificationsSupported, notifyDueTasksOncePerDay, requestNotificationPermission } from '../lib/notifications'

export function SettingsPage() {
  const toast = useToast()
  const [perm, setPerm] = useState<NotificationPermission | 'unsupported'>(
    notificationsSupported() ? Notification.permission : 'unsupported',
  )
  const userPlants = useLiveQuery(() => db.userPlants.toArray(), [])
  const reminders = useLiveQuery(() => db.reminders.toArray(), [])
  const [theme, setTheme] = useState<string>(() => localStorage.getItem('plant-app:theme') ?? 'auto')

  useEffect(() => {
    if (theme === 'auto') document.documentElement.removeAttribute('data-theme')
    else document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('plant-app:theme', theme)
  }, [theme])

  const enableNotifications = async () => {
    const p = await requestNotificationPermission()
    setPerm(p)
    if (p === 'granted') {
      toast('Notifications enabled')
      localStorage.removeItem('plant-app:last-notified')
      await notifyDueTasksOncePerDay()
    }
  }

  const exportICS = () => {
    if (!reminders || !userPlants) return
    const ics = buildICS(reminders, new Map(userPlants.map((p) => [p.id, p])))
    downloadText('plant-care.ics', ics, 'text/calendar')
  }

  const exportJSON = async () => {
    const data = {
      version: 1,
      exportedAt: new Date().toISOString(),
      userPlants: (await db.userPlants.toArray()).map(({ photo: _photo, ...p }) => p),
      reminders: await db.reminders.toArray(),
      careLogs: await db.careLogs.toArray(),
    }
    downloadText('plant-app-backup.json', JSON.stringify(data, null, 2), 'application/json')
  }

  const importJSON = async (file: File | undefined) => {
    if (!file) return
    try {
      const data = JSON.parse(await file.text()) as {
        userPlants: UserPlant[]
        reminders: Reminder[]
        careLogs: CareLog[]
      }
      await db.transaction('rw', db.userPlants, db.reminders, db.careLogs, async () => {
        await db.userPlants.bulkPut(data.userPlants)
        await db.reminders.bulkPut(data.reminders)
        await db.careLogs.bulkPut(data.careLogs)
      })
      toast(`Imported ${data.userPlants.length} plants`)
    } catch {
      toast('Could not read that file')
    }
  }

  const wipe = async () => {
    if (!confirm('Delete ALL your plants, reminders and history? This cannot be undone.')) return
    await db.transaction('rw', db.userPlants, db.reminders, db.careLogs, async () => {
      await db.userPlants.clear()
      await db.reminders.clear()
      await db.careLogs.clear()
    })
    toast('Everything deleted')
  }

  return (
    <>
      <div className="page-head">
        <h1>Settings</h1>
      </div>

      <div className="section-title">Reminders</div>
      <div className="card pad stack">
        <div>
          <strong>Notifications while the app is open</strong>
          <p className="muted small">
            Shows one summary a day of due tasks when you open the app or have it installed and running.
            {perm === 'unsupported' && ' Not supported in this browser.'}
            {perm === 'denied' && ' Blocked by the browser; allow notifications for this site in its settings.'}
          </p>
        </div>
        {perm === 'default' && (
          <button className="btn primary" onClick={() => void enableNotifications()}>
            Enable notifications
          </button>
        )}
        {perm === 'granted' && <span className="chip on">Enabled</span>}
        <hr style={{ border: 0, borderTop: '1px solid var(--border)', margin: '4px 0' }} />
        <div>
          <strong>Calendar reminders (recommended)</strong>
          <p className="muted small">
            Browsers cannot wake a web app on their own. Export your reminders as a calendar file and import it
            into Google Calendar, Apple Calendar or Outlook to get reliable alerts even when the app is closed.
            Re-export after you add plants or change a schedule.
          </p>
        </div>
        <button className="btn" onClick={exportICS} disabled={!reminders || reminders.length === 0}>
          📅 Export calendar (.ics)
        </button>
      </div>

      <div className="section-title">Appearance</div>
      <div className="card pad">
        <div className="tabs">
          {['auto', 'light', 'dark'].map((t) => (
            <button key={t} className={theme === t ? 'on' : ''} onClick={() => setTheme(t)}>
              {t[0].toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="section-title">Your data</div>
      <div className="card pad stack">
        <p className="muted small">
          Everything is stored on this device only. Back it up before switching phones. (Own photos are not
          included in the backup; internet pictures are.)
        </p>
        <div className="row wrap">
          <button className="btn" onClick={() => void exportJSON()}>
            ⬇ Export backup
          </button>
          <label className="btn" style={{ cursor: 'pointer' }}>
            ⬆ Import backup
            <input type="file" accept="application/json" hidden onChange={(e) => void importJSON(e.target.files?.[0])} />
          </label>
        </div>
        <button className="btn danger" onClick={() => void wipe()}>
          Delete all data
        </button>
      </div>

      <div className="section-title">About</div>
      <div className="card pad muted small">
        <p>
          Catalog of {plants.length} plants common in Danish homes and gardens. Photos come from Wikipedia and
          Wikimedia Commons under their respective licences. Care advice is general guidance; adjust to your own
          conditions.
        </p>
        <p style={{ marginTop: 8 }}>
          Plant identification uses the traits you choose, not AI. Compare your photo with the catalog photos and
          decide for yourself.
        </p>
      </div>
    </>
  )
}
