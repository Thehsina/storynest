import type { Category } from '../types'

export const categories: Category[] = [
  {
    id: 'bedtime',
    name: 'Bedtime',
    description: 'Gentle tales to help little ones drift off to sleep.',
    accentClassName: 'from-indigo-400 to-violet-500',
  },
  {
    id: 'adventure',
    name: 'Adventure',
    description: 'Brave journeys, curious discoveries, and happy endings.',
    accentClassName: 'from-amber-400 to-orange-500',
  },
  {
    id: 'nature',
    name: 'Nature',
    description: 'Stories rooted in gardens, oceans, seeds, and sky.',
    accentClassName: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'space',
    name: 'Space',
    description: 'Rockets, moons, and wonders beyond our world.',
    accentClassName: 'from-sky-400 to-blue-600',
  },
  {
    id: 'friendship',
    name: 'Friendship',
    description: 'Kindness, sharing, and finding friends along the way.',
    accentClassName: 'from-rose-400 to-pink-500',
  },
]

export const categoryById = Object.fromEntries(
  categories.map((category) => [category.id, category]),
) as Record<Category['id'], Category>
