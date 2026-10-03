import type { ReadingProgressEntry } from '../types'

export const homeFeaturedStoryId = 'little-moon'

export const homeNewStoryIds = ['cloud-couldnt-sleep', 'the-tiny-seed'] as const

export const homeExploreStoryIds = [
  'mia-goes-to-space',
  'lost-bear',
  'oliver-and-the-ocean',
  'little-moon',
] as const

export const demoContinueReading: ReadingProgressEntry[] = [
  {
    storyId: 'lost-bear',
    currentPage: 3,
    updatedAt: '2026-10-01T19:30:00.000Z',
  },
  {
    storyId: 'oliver-and-the-ocean',
    currentPage: 2,
    updatedAt: '2026-09-30T08:15:00.000Z',
  },
]
