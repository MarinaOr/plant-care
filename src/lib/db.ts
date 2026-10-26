import Dexie, { type EntityTable } from 'dexie'
import type { TaskType } from '../data/types'

/** A plant the user actually owns. References a catalog entry by `plantId`. */
export interface UserPlant {
  id: string
  plantId: string
  nickname: string
  location: string
  /** Internet picture (Wikipedia / Wikimedia Commons URL). */
  imageUrl?: string
  /** The user's own photo, stored locally. Takes precedence over imageUrl when set. */
  photo?: Blob
  acquiredAt?: string
  notes: string
  createdAt: number
}

export interface Reminder {
  id: string
  userPlantId: string
  type: TaskType
  intervalDays: number
  winterIntervalDays?: number
  months?: number[]
  note?: string
  /** ISO date YYYY-MM-DD */
  nextDue: string
  lastDone?: string
  enabled: boolean
}

export interface CareLog {
  id: string
  userPlantId: string
  type: TaskType
  /** ISO date YYYY-MM-DD */
  doneAt: string
  note?: string
}

export interface ImageCacheEntry {
  title: string
  /** Thumbnail URL exactly as returned by the Wikipedia summary API. */
  url?: string
  /** Larger image for hero views (the original file when it is not too big). */
  large?: string
  fetchedAt: number
}

export interface Setting {
  key: string
  value: unknown
}

export const db = new Dexie('plant-app') as Dexie & {
  userPlants: EntityTable<UserPlant, 'id'>
  reminders: EntityTable<Reminder, 'id'>
  careLogs: EntityTable<CareLog, 'id'>
  images: EntityTable<ImageCacheEntry, 'title'>
  settings: EntityTable<Setting, 'key'>
}

db.version(1).stores({
  userPlants: 'id, plantId, createdAt',
  reminders: 'id, userPlantId, nextDue, enabled',
  careLogs: 'id, userPlantId, doneAt',
  images: 'title',
  settings: 'key',
})

export const uid = () =>
  typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36)

export async function getSetting<T>(key: string, fallback: T): Promise<T> {
  const row = await db.settings.get(key)
  return row ? (row.value as T) : fallback
}

export async function setSetting(key: string, value: unknown) {
  await db.settings.put({ key, value })
}
