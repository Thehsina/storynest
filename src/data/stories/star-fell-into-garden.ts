import type { Story } from '../../types'

export const starFellIntoGarden: Story = {
  id: 'star-fell-into-garden',
  title: 'The Star That Fell Into the Garden',
  subtitle: 'A gentle bedtime adventure with a lost star',
  author: 'StoryNest',
  categoryId: 'bedtime',
  coverClassName: 'from-indigo-950 via-purple-900 to-slate-950',
  readingTimeMinutes: 4,
  ageRange: '4–7',
  summary:
    'One quiet night, a tiny star falls from the sky into a garden. A child named Maya helps it find its way back home.',
  tags: ['star', 'garden', 'bedtime', 'magic', 'owl', 'night'],
  pages: [
    {
      id: 'star-1',
      pageNumber: 1,
      illustrationAlt: 'Maya looking out of her bedroom window as a glowing star falls into the garden',
      text: 'Maya was looking out of her bedroom window. The garden was quiet. Then suddenly... Something bright fell from the sky.',
      interactiveObjects: [
        {
          id: 'falling-star-1',
          label: 'Falling Star',
          x: 70,
          y: 30,
          animation: 'twinkle',
          sound: 'sparkle',
        },
      ],
    },
    {
      id: 'star-2',
      pageNumber: 2,
      illustrationAlt: 'Maya in the garden kneeling next to a tiny glowing star sitting on flowers',
      text: 'Maya went outside. There, sitting among the flowers, was a tiny glowing star. "Are you lost?" The little star blinked.',
      interactiveObjects: [
        {
          id: 'tiny-star-2',
          label: 'Little Star',
          x: 50,
          y: 65,
          animation: 'glow',
          sound: 'chime',
        },
      ],
    },
    {
      id: 'star-3',
      pageNumber: 3,
      illustrationAlt: 'A trail of glowing tiny stars leading from the garden up into the night sky',
      text: 'The little star pointed toward the sky. Maya looked up. A trail of tiny stars appeared above the garden.',
      interactiveObjects: [
        {
          id: 'star-trail-3',
          label: 'Star Trail',
          x: 60,
          y: 45,
          animation: 'scatter',
          sound: 'twinkle',
        },
      ],
    },
    {
      id: 'star-4',
      pageNumber: 4,
      illustrationAlt: 'Maya walking through garden flowers guided by the little star and dancing fireflies',
      text: 'Maya followed the little star through the garden. Fireflies joined them. They floated around the glowing star like tiny friends.',
      interactiveObjects: [
        {
          id: 'fireflies-4',
          label: 'Friendly Fireflies',
          x: 40,
          y: 55,
          animation: 'float',
          sound: 'chime',
        },
      ],
    },
    {
      id: 'star-5',
      pageNumber: 5,
      illustrationAlt: 'A wise friendly owl guiding Maya and the little star toward a high grassy hill',
      text: 'An owl flew down from a tree. It knew a high hill where the little star could reach the sky. Maya followed the owl.',
      interactiveObjects: [
        {
          id: 'owl-5',
          label: 'Wise Owl',
          x: 65,
          y: 35,
          animation: 'flap',
          sound: 'pop',
        },
      ],
    },
    {
      id: 'star-6',
      pageNumber: 6,
      illustrationAlt: 'The little star floating up from the hill back into the constellation sky',
      text: 'At the top of the hill, the little star began to rise. Higher... And higher... Until it reached the night sky.',
      interactiveObjects: [
        {
          id: 'rising-star-6',
          label: 'Rising Star',
          x: 50,
          y: 25,
          animation: 'lift',
          sound: 'sparkle',
        },
      ],
    },
    {
      id: 'star-7',
      pageNumber: 7,
      illustrationAlt: 'Maya snug in bed as the little star twinkles softly outside her window',
      text: 'The little star twinkled brightly. Maya smiled. Then she went back inside and climbed into bed. "Goodnight, little star."',
      interactiveObjects: [
        {
          id: 'window-star-7',
          label: 'Twinkling Star',
          x: 75,
          y: 30,
          animation: 'twinkle',
          sound: 'chime',
        },
      ],
    },
  ],
}
