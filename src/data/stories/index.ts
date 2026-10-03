import type { Story } from '../../types'
import { cloudCouldntSleep } from './cloud-couldnt-sleep'
import { littleMoon } from './little-moon'
import { lostBear } from './lost-bear'
import { miaGoesToSpace } from './mia-goes-to-space'
import { oliverAndTheOcean } from './oliver-and-the-ocean'
import { theTinySeed } from './the-tiny-seed'

export const stories: Story[] = [
  littleMoon,
  lostBear,
  miaGoesToSpace,
  oliverAndTheOcean,
  theTinySeed,
  cloudCouldntSleep,
]

export function getStoryById(storyId: string): Story | undefined {
  return stories.find((story) => story.id === storyId)
}

export function getStoriesByCategory(categoryId: Story['categoryId']): Story[] {
  return stories.filter((story) => story.categoryId === categoryId)
}
