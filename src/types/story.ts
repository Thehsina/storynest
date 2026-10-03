import type { CategoryId } from './category'

export type InteractiveAnimationType =
  | 'glow'
  | 'twinkle'
  | 'bounce'
  | 'pop'
  | 'float'
  | 'move'
  | 'wave'
  | 'rotate'
  | 'shake'
  | 'grow'
  | 'fade'
  | 'scatter'
  | 'ripple'
  | 'open'
  | 'fly'
  | 'flap'
  | 'hop'
  | 'lift'
  | string

export interface InteractiveObject {
  id: string
  label: string
  hint?: string
  /** Horizontal position on the illustration (0–100). */
  x: number
  /** Vertical position on the illustration (0–100). */
  y: number
  /** Position object alternative for { x, y } */
  position?: { x: number; y: number }
  animationType?: InteractiveAnimationType
  animation?: InteractiveAnimationType
  sound?: string
  particles?: 'sparkles' | 'stars' | 'hearts' | 'water' | 'petals' | 'glow'
}

export interface StoryPage {
  id: string
  pageNumber: number
  text: string
  illustrationAlt: string
  interactiveObjects?: InteractiveObject[]
  narrationAudio?: string
}

export interface Story {
  id: string
  title: string
  subtitle?: string
  author: string
  categoryId: CategoryId
  coverClassName: string
  readingTimeMinutes: number
  ageRange: string
  summary: string
  tags: string[]
  pages: StoryPage[]
}
