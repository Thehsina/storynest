import type { Story } from '../../types'

export const gardenAtNight: Story = {
  id: 'garden-at-night',
  title: 'The Garden at Night',
  subtitle: 'Moonlight, fireflies, and night blooms',
  author: 'StoryNest',
  categoryId: 'nature',
  coverClassName: 'from-indigo-600 via-purple-700 to-slate-900',
  readingTimeMinutes: 4,
  ageRange: '4–7',
  summary:
    'After bedtime, Sophie looks out her window to see a quiet garden awaken with blinking fireflies, blooming night flowers, and a gentle hedgehog.',
  tags: ['garden', 'night', 'fireflies', 'nature'],
  pages: [
    {
      id: 'garden-1',
      pageNumber: 1,
      illustrationAlt: 'Sophie looking out her window at the quiet dark garden',
      text: 'Sophie looked out of her window. The garden was quiet under the night sky. Everyone seemed to be fast asleep.',
      interactiveObjects: [
        {
          id: 'window-1',
          label: 'Sophie\'s Window',
          x: 75,
          y: 40,
          animation: 'glow',
          sound: 'chime',
        },
      ],
    },
    {
      id: 'garden-2',
      pageNumber: 2,
      illustrationAlt: 'A tiny firefly blinking in the dark garden grass',
      text: 'Then Sophie saw a tiny light. Blink... blink... A little firefly floated gently through the dark garden grass.',
      interactiveObjects: [
        {
          id: 'firefly-2',
          label: 'Blinking Firefly',
          x: 40,
          y: 65,
          animation: 'twinkle',
          sound: 'sparkle',
        },
      ],
    },
    {
      id: 'garden-3',
      pageNumber: 3,
      illustrationAlt: 'Night flowers opening one by one as the firefly floats by',
      text: 'The firefly flew over the flowerbeds. One flower slowly opened... then another... and another! The garden was waking up.',
      interactiveObjects: [
        {
          id: 'flower-3',
          label: 'Night Bloom',
          x: 50,
          y: 70,
          animation: 'open',
          sound: 'chime',
        },
      ],
    },
    {
      id: 'garden-4',
      pageNumber: 4,
      illustrationAlt: 'A little hedgehog walking through the grass under moonlight',
      text: 'Tiny creatures appeared! A friendly little hedgehog walked softly through the grass, smelling the night flowers.',
      interactiveObjects: [
        {
          id: 'hedgehog-4',
          label: 'Little Hedgehog',
          x: 35,
          y: 75,
          animation: 'bounce',
          sound: 'pop',
        },
      ],
    },
    {
      id: 'garden-5',
      pageNumber: 5,
      illustrationAlt: 'Fireflies gathering into a glowing dance of light',
      text: 'The fireflies began floating together! They moved through the garden like tiny dancing stars in the dark.',
      interactiveObjects: [
        {
          id: 'fireflies-5',
          label: 'Dance of Lights',
          x: 55,
          y: 40,
          animation: 'scatter',
          sound: 'twinkle',
        },
      ],
    },
    {
      id: 'garden-6',
      pageNumber: 6,
      illustrationAlt: 'The moon shining calmly as flowers close for sleep',
      text: 'The moon shone brightly above the garden. Everything became quiet again. The flowers slowly closed their petals.',
      interactiveObjects: [
        {
          id: 'moon-6',
          label: 'Calm Moon',
          x: 75,
          y: 20,
          animation: 'glow',
          sound: 'chime',
        },
      ],
    },
    {
      id: 'garden-7',
      pageNumber: 7,
      illustrationAlt: 'Sophie smiling in bed while the moon watches over the quiet garden',
      text: 'Sophie smiled and climbed back into bed. Outside, the moon watched over the peaceful, quiet garden. "Goodnight, garden."',
      interactiveObjects: [
        {
          id: 'bed-7',
          label: 'Cozy Bed',
          x: 50,
          y: 60,
          animation: 'glow',
          sound: 'chime',
        },
      ],
    },
  ],
}
