import { useCallback, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'storynest:favorites'

function readFavoriteIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed)
      ? parsed.filter((id): id is string => typeof id === 'string')
      : []
  } catch {
    return []
  }
}

function writeFavoriteIds(ids: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
}

let favoriteIds = readFavoriteIds()
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return favoriteIds
}

function emitChange() {
  for (const listener of listeners) {
    listener()
  }
}

function toggleFavoriteId(storyId: string) {
  const next = favoriteIds.includes(storyId)
    ? favoriteIds.filter((id) => id !== storyId)
    : [...favoriteIds, storyId]
  favoriteIds = next
  writeFavoriteIds(next)
  emitChange()
}

export function useFavorites() {
  const ids = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)

  const isFavorite = useCallback(
    (storyId: string) => ids.includes(storyId),
    [ids],
  )

  const toggleFavorite = useCallback((storyId: string) => {
    toggleFavoriteId(storyId)
  }, [])

  return { favoriteIds: ids, isFavorite, toggleFavorite }
}
