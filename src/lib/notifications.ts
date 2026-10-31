import { taskLabel } from '../data/labels'
import { db } from './db'
import { today } from './schedule'

const LAST_KEY = 'plant-app:last-notified'

export const notificationsSupported = () => typeof window !== 'undefined' && 'Notification' in window

export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!notificationsSupported()) return 'denied'
  if (Notification.permission !== 'default') return Notification.permission
  return Notification.requestPermission()
}

async function show(title: string, body: string) {
  try {
    const reg = await navigator.serviceWorker?.getRegistration()
    if (reg) {
      await reg.showNotification(title, { body, icon: `${import.meta.env.BASE_URL}icon.svg`, tag: 'plant-care-due' })
      return
    }
  } catch {
    /* fall through to plain Notification */
  }
  new Notification(title, { body, icon: `${import.meta.env.BASE_URL}icon.svg`, tag: 'plant-care-due' })
}

/**
 * Show one notification per day summarising due tasks while the app is open or installed.
 * (Browsers do not let a web app wake up on its own, so the calendar export in Settings is the
 * reliable way to get reminders when the app is closed.)
 */
export async function notifyDueTasksOncePerDay() {
  if (!notificationsSupported() || Notification.permission !== 'granted') return
  const t = today()
  if (localStorage.getItem(LAST_KEY) === t) return
  const due = await db.reminders.where('nextDue').belowOrEqual(t).filter((r) => r.enabled).toArray()
  if (due.length === 0) return
  const plants = new Map((await db.userPlants.toArray()).map((p) => [p.id, p]))
  const lines = due
    .slice(0, 5)
    .map((r) => `${taskLabel[r.type]}: ${plants.get(r.userPlantId)?.nickname ?? 'plant'}`)
  if (due.length > 5) lines.push(`…and ${due.length - 5} more`)
  await show(`${due.length} plant task${due.length === 1 ? '' : 's'} due`, lines.join('\n'))
  localStorage.setItem(LAST_KEY, t)
}

/** Start a background check that runs on load and every 30 minutes while the app is open. */
export function startDueTaskWatcher() {
  void notifyDueTasksOncePerDay()
  const id = setInterval(() => void notifyDueTasksOncePerDay(), 30 * 60 * 1000)
  const onVisible = () => document.visibilityState === 'visible' && void notifyDueTasksOncePerDay()
  document.addEventListener('visibilitychange', onVisible)
  return () => {
    clearInterval(id)
    document.removeEventListener('visibilitychange', onVisible)
  }
}
