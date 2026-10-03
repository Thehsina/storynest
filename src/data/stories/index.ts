import type { Story } from '../../types'
import { balloonThatFlewAway } from './balloon-that-flew-away'
import { cloudCouldntSleep } from './cloud-couldnt-sleep'
import { gardenAtNight } from './garden-at-night'
import { littleDoorInTheTree } from './little-door-in-the-tree'
import { littleMoon } from './little-moon'
import { littleTrainsJourney } from './little-trains-journey'
import { lostBear } from './lost-bear'
import { miaGoesToSpace } from './mia-goes-to-space'
import { oliverAndTheOcean } from './oliver-and-the-ocean'
import { starFellIntoGarden } from './star-fell-into-garden'
import { theTinySeed } from './the-tiny-seed'
import { whaleWhoLostHisSong } from './whale-who-lost-his-song'

export const stories: Story[] = [
  littleMoon,
  lostBear,
  miaGoesToSpace,
  oliverAndTheOcean,
  theTinySeed,
  cloudCouldntSleep,
  littleDoorInTheTree,
  whaleWhoLostHisSong,
  balloonThatFlewAway,
  gardenAtNight,
  littleTrainsJourney,
  starFellIntoGarden,
]

export function getStoryById(storyId: string): Story | undefined {
  return stories.find((story) => story.id === storyId)
}

export function getStoriesByCategory(categoryId: Story['categoryId']): Story[] {
  return stories.filter((story) => story.categoryId === categoryId)
}
