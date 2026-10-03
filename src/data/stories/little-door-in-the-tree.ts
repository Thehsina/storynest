import type { Story } from '../../types'

export const littleDoorInTheTree: Story = {
  id: 'little-door-in-the-tree',
  title: 'The Little Door in the Tree',
  subtitle: 'A tiny world hidden inside an old oak',
  author: 'StoryNest',
  categoryId: 'adventure',
  coverClassName: 'from-emerald-500 via-teal-600 to-amber-900',
  readingTimeMinutes: 4,
  ageRange: '4–7',
  summary:
    'Lily discovers a mysterious tiny wooden door at the base of a giant forest tree and enters a magical miniature world of fireflies and friendly forest people.',
  tags: ['tree', 'magic', 'fireflies', 'forest'],
  pages: [
    {
      id: 'little-door-1',
      pageNumber: 1,
      illustrationAlt: 'Lily kneeling by a giant tree with a tiny wooden door',
      text: 'Lily was walking through the forest when she noticed something strange. There was a tiny wooden door at the bottom of an old tree. Lily knelt down. "Who lives in there?"',
      interactiveObjects: [
        {
          id: 'door-1',
          label: 'Tiny Door',
          x: 52,
          y: 72,
          animation: 'glow',
          sound: 'chime',
        },
        {
          id: 'tree-1',
          label: 'Giant Oak Tree',
          x: 45,
          y: 35,
          animation: 'shake',
          sound: 'whoosh',
        },
      ],
    },
    {
      id: 'little-door-2',
      pageNumber: 2,
      illustrationAlt: 'Lily knocking on the tiny door as it opens with warm light',
      text: 'Lily gently knocked on the little door. Knock, knock! For a moment, nothing happened. Then the tiny door slowly opened, spilling a warm golden light.',
      interactiveObjects: [
        {
          id: 'door-2',
          label: 'Opening Door',
          x: 52,
          y: 68,
          animation: 'open',
          sound: 'chime',
        },
      ],
    },
    {
      id: 'little-door-3',
      pageNumber: 3,
      illustrationAlt: 'A miniature world of tiny houses and tiny people waving',
      text: 'Behind the door was a tiny forest world! There were tiny houses, glowing flowers, and little people no bigger than Lily\'s hand. Everyone smiled and waved.',
      interactiveObjects: [
        {
          id: 'people-3',
          label: 'Tiny Forest People',
          x: 58,
          y: 60,
          animation: 'wave',
          sound: 'chime',
        },
        {
          id: 'firefly-3',
          label: 'Glowing Firefly',
          x: 35,
          y: 30,
          animation: 'twinkle',
          sound: 'sparkle',
        },
      ],
    },
    {
      id: 'little-door-4',
      pageNumber: 4,
      illustrationAlt: 'A little firefly leading Lily through the miniature forest',
      text: 'A little firefly flew toward Lily. Its friends were missing! Lily followed the bright firefly through the tiny glowing forest path.',
      interactiveObjects: [
        {
          id: 'firefly-4',
          label: 'Little Firefly',
          x: 40,
          y: 40,
          animation: 'fly',
          sound: 'sparkle',
        },
      ],
    },
    {
      id: 'little-door-5',
      pageNumber: 5,
      illustrationAlt: 'Lily following the firefly past glowing mushrooms and an owl',
      text: 'Lily followed the firefly past giant mushrooms and glowing flowers. A friendly little owl flew overhead and showed her the way.',
      interactiveObjects: [
        {
          id: 'owl-5',
          label: 'Little Owl',
          x: 75,
          y: 22,
          animation: 'fly',
          sound: 'bird',
        },
        {
          id: 'mushroom-5',
          label: 'Glowing Mushroom',
          x: 30,
          y: 70,
          animation: 'glow',
          sound: 'chime',
        },
      ],
    },
    {
      id: 'little-door-6',
      pageNumber: 6,
      illustrationAlt: 'Fireflies reunited and dancing behind giant leaves',
      text: 'Behind a group of giant leaves, Lily found the missing fireflies. They were all glowing together! The little firefly happily flew back to its family.',
      interactiveObjects: [
        {
          id: 'fireflies-6',
          label: 'Firefly Family',
          x: 50,
          y: 45,
          animation: 'scatter',
          sound: 'twinkle',
        },
      ],
    },
    {
      id: 'little-door-7',
      pageNumber: 7,
      illustrationAlt: 'Lily stepping back out as one firefly follows her home',
      text: 'The tiny people waved goodbye. Lily stepped back through the little door. When she looked again, the door was gone. But one tiny firefly followed her home.',
      interactiveObjects: [
        {
          id: 'firefly-7',
          label: 'Special Firefly',
          x: 65,
          y: 35,
          animation: 'glow',
          sound: 'chime',
        },
      ],
    },
  ],
}
