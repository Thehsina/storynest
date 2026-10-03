import type { Story } from '../../types'

export const littleTrainsJourney: Story = {
  id: 'little-trains-journey',
  title: "The Little Train's Journey",
  subtitle: 'Mountains, bridges, and a golden sunset',
  author: 'StoryNest',
  categoryId: 'adventure',
  coverClassName: 'from-sky-500 via-blue-600 to-indigo-800',
  readingTimeMinutes: 4,
  ageRange: '4–7',
  summary:
    'A little blue train sets off on its first journey and discovers mountains, bridges, forests, and a beautiful sunset along the way.',
  tags: ['train', 'journey', 'adventure', 'mountains', 'countryside'],
  pages: [
    {
      id: 'train-1',
      pageNumber: 1,
      illustrationAlt: 'The little blue train waiting happily at the station under bright blue sky',
      text: 'The little blue train was waiting at the station. "All aboard!" The train gave a cheerful whistle. And off it went.',
      interactiveObjects: [
        {
          id: 'train-whistle-1',
          label: 'Train Whistle',
          x: 45,
          y: 40,
          animation: 'bounce',
          sound: 'chime',
        },
      ],
    },
    {
      id: 'train-2',
      pageNumber: 2,
      illustrationAlt: 'Little blue train chugging through rolling green hills with birds flying above',
      text: 'The little train travelled through green hills. Birds flew above the trees. The train went: "Chug, chug, chug!"',
      interactiveObjects: [
        {
          id: 'birds-2',
          label: 'Flying Birds',
          x: 70,
          y: 25,
          animation: 'fly',
          sound: 'chime',
        },
      ],
    },
    {
      id: 'train-3',
      pageNumber: 3,
      illustrationAlt: 'Little blue train crossing a long stone bridge over a sparkling river',
      text: 'Soon the train reached a long bridge. Below it, a river sparkled in the sunshine. The little train crossed carefully.',
      interactiveObjects: [
        {
          id: 'river-3',
          label: 'Sparkling River',
          x: 50,
          y: 80,
          animation: 'ripple',
          sound: 'water',
        },
      ],
    },
    {
      id: 'train-4',
      pageNumber: 4,
      illustrationAlt: 'Little blue train slowing down beside a forest where a deer stands in gentle trees',
      text: 'The train entered a quiet forest. A little deer stood beside the tracks. The train slowed down to say hello.',
      interactiveObjects: [
        {
          id: 'deer-4',
          label: 'Gentle Deer',
          x: 75,
          y: 65,
          animation: 'bounce',
          sound: 'pop',
        },
      ],
    },
    {
      id: 'train-5',
      pageNumber: 5,
      illustrationAlt: 'Little blue train climbing up a high mountain track toward a beautiful peak',
      text: 'The tracks climbed higher and higher. The train worked hard. Chug... Chug... Chug! At last, it reached the top.',
      interactiveObjects: [
        {
          id: 'mountain-5',
          label: 'Mountain Peak',
          x: 50,
          y: 35,
          animation: 'lift',
          sound: 'chime',
        },
      ],
    },
    {
      id: 'train-6',
      pageNumber: 6,
      illustrationAlt: 'View from mountain peak showing forests, rivers, villages, and a golden orange sunset',
      text: 'From the top of the mountain, the little train could see everything. The forests. The river. The tiny villages. And a beautiful orange sunset.',
      interactiveObjects: [
        {
          id: 'sunset-6',
          label: 'Golden Sunset',
          x: 60,
          y: 20,
          animation: 'glow',
          sound: 'chime',
        },
      ],
    },
    {
      id: 'train-7',
      pageNumber: 7,
      illustrationAlt: 'Little blue train travelling back home under a starry night sky',
      text: 'The stars appeared. The little train travelled home beneath the night sky. "What a wonderful journey!"',
      interactiveObjects: [
        {
          id: 'stars-7',
          label: 'Night Stars',
          x: 35,
          y: 25,
          animation: 'twinkle',
          sound: 'sparkle',
        },
      ],
    },
  ],
}
