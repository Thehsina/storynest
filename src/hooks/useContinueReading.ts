import { useMemo, useSyncExternalStore } from 'react'
import { demoContinueReading } from '../data/home'
import { getStoryById } from '../data/stories'
import type { ReadingProgressEntry, Story } from '../types'

const STORAGE_KEY = 'storynest:reading-progress'

function readProgress(): ReadingProgressEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (entry): entry is ReadingProgressEntry =>
        typeof entry === 'object' &&
        entry !== null &&
        typeof (entry as ReadingProgressEntry).storyId === 'string' &&
        typeof (entry as ReadingProgressEntry).currentPage === 'number',
    )
  } catch {
    return []
  }
}

let progressEntries = readProgress()
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return progressEntries
}

function writeProgress(entries: ReadingProgressEntry[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
  } catch {
    // ignore
  }
}

function emitChange() {
  for (const listener of listeners) {
    listener()
  }
}

export function saveReadingProgress(
  storyId: string,
  currentPage: number,
  totalPages: number,
) {
  const current = readProgress()
  const existingIdx = current.findIndex((e) => e.storyId === storyId)
  const now = new Date().toISOString()
  const newEntry: ReadingProgressEntry = {
    storyId,
    currentPage,
    totalPages,
    updatedAt: now,
  }

  let next: ReadingProgressEntry[]
  if (existingIdx >= 0) {
    next = [...current]
    next[existingIdx] = newEntry
  } else {
    next = [newEntry, ...current]
  }

  progressEntries = next
  writeProgress(next)
  emitChange()
}

export function useContinueReading() {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)

  const entries = stored.length > 0 ? stored : demoContinueReading

  const items = useMemo(() => {
    return entries
      .map((entry) => {
        const story = getStoryById(entry.storyId)
        if (!story) return null
        return { entry, story }
      })
      .filter(
        (item): item is { entry: ReadingProgressEntry; story: Story } =>
          item !== null,
      )
      .sort(
        (a, b) =>
          new Date(b.entry.updatedAt).getTime() -
          new Date(a.entry.updatedAt).getTime(),
      )
  }, [entries])

  return { items, saveReadingProgress }
}
