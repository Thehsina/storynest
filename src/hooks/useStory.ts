import { useMemo } from 'react'
import { getStoryById, stories } from '../data/stories'
import type { Story } from '../types'

export function useStories() {
  return stories
}

export function useStory(storyId: string | undefined): Story | undefined {
  return useMemo(() => {
    if (!storyId) return undefined
    return getStoryById(storyId)
  }, [storyId])
}
