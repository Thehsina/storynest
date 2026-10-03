import type { Story } from '../../types'

export const whaleWhoLostHisSong: Story = {
  id: 'whale-who-lost-his-song',
  title: 'The Whale Who Lost His Song',
  subtitle: 'Searching the deep blue sea for a lost melody',
  author: 'StoryNest',
  categoryId: 'friendship',
  coverClassName: 'from-cyan-500 via-blue-600 to-indigo-900',
  readingTimeMinutes: 4,
  ageRange: '4–7',
  summary:
    'Wally the whale wakes up without his song, but with the help of a dolphin, sea turtle, and school of fish, he discovers that friendship helps him find his voice again.',
  tags: ['whale', 'ocean', 'song', 'friends'],
  pages: [
    {
      id: 'whale-song-1',
      pageNumber: 1,
      illustrationAlt: 'Wally the whale swimming in the ocean trying to sing',
      text: 'Wally loved singing. Every morning, he sang a beautiful song across the ocean. But one day... no sound came out! Wally was very surprised.',
      interactiveObjects: [
        {
          id: 'wally-1',
          label: 'Wally the Whale',
          x: 50,
          y: 50,
          animation: 'bounce',
          sound: 'splash',
        },
      ],
    },
    {
      id: 'whale-song-2',
      pageNumber: 2,
      illustrationAlt: 'Wally swimming past coral looking for his song',
      text: 'Wally swam through the ocean looking for his song. Maybe it was hiding near the colorful coral reef! Fish swam past as he looked around.',
      interactiveObjects: [
        {
          id: 'wally-2',
          label: 'Searching Wally',
          x: 45,
          y: 55,
          animation: 'move',
          sound: 'splash',
        },
        {
          id: 'fish-2',
          label: 'Ocean Fish',
          x: 75,
          y: 35,
          animation: 'scatter',
          sound: 'pop',
        },
      ],
    },
    {
      id: 'whale-song-3',
      pageNumber: 3,
      illustrationAlt: 'A friendly dolphin swimming alongside Wally',
      text: 'A friendly dolphin appeared! "Maybe your song is hiding deeper in the ocean," said the dolphin. Wally happily followed.',
      interactiveObjects: [
        {
          id: 'dolphin-3',
          label: 'Friendly Dolphin',
          x: 70,
          y: 40,
          animation: 'bounce',
          sound: 'chime',
        },
      ],
    },
    {
      id: 'whale-song-4',
      pageNumber: 4,
      illustrationAlt: 'A sea turtle pointing the way toward the reef',
      text: 'They met a gentle sea turtle gliding through the current. "I heard something beautiful near the reef," said the turtle kindly.',
      interactiveObjects: [
        {
          id: 'turtle-4',
          label: 'Gentle Sea Turtle',
          x: 30,
          y: 60,
          animation: 'move',
          sound: 'whoosh',
        },
      ],
    },
    {
      id: 'whale-song-5',
      pageNumber: 5,
      illustrationAlt: 'Fish dancing between colorful coral as Wally listens',
      text: 'The reef was full of color! Fish danced between the coral. Wally listened carefully, but he still couldn\'t find his song.',
      interactiveObjects: [
        {
          id: 'coral-5',
          label: 'Swaying Coral',
          x: 60,
          y: 75,
          animation: 'wave',
          sound: 'ripple',
        },
        {
          id: 'fish-5',
          label: 'Dancing Fish',
          x: 25,
          y: 45,
          animation: 'scatter',
          sound: 'pop',
        },
      ],
    },
    {
      id: 'whale-song-6',
      pageNumber: 6,
      illustrationAlt: 'The dolphin clicking and turtle humming to encourage Wally',
      text: 'The dolphin clicked, the turtle hummed, and the little fish swam in circles. Wally listened... then he took a deep breath to try again.',
      interactiveObjects: [
        {
          id: 'dolphin-6',
          label: 'Clicking Dolphin',
          x: 75,
          y: 35,
          animation: 'bounce',
          sound: 'chime',
        },
      ],
    },
    {
      id: 'whale-song-7',
      pageNumber: 7,
      illustrationAlt: 'Wally singing a joyful song with ocean waves glowing',
      text: 'A beautiful song filled the ocean! Wally had not lost his song after all. He only needed his friends to help him find it.',
      interactiveObjects: [
        {
          id: 'wally-7',
          label: 'Singing Wally',
          x: 50,
          y: 48,
          animation: 'glow',
          sound: 'chime',
        },
      ],
    },
  ],
}
