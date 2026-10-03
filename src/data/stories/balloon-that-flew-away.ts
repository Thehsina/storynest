import type { Story } from '../../types'

export const balloonThatFlewAway: Story = {
  id: 'balloon-that-flew-away',
  title: 'The Balloon That Flew Away',
  subtitle: 'A red balloon\'s journey across the sky',
  author: 'StoryNest',
  categoryId: 'space',
  coverClassName: 'from-rose-400 via-sky-400 to-indigo-700',
  readingTimeMinutes: 4,
  ageRange: '4–7',
  summary:
    'When Noah\'s red balloon escapes into the sky, it floats over forests, through soft white clouds, and over tall mountains before drifting safely back home.',
  tags: ['balloon', 'sky', 'clouds', 'adventure'],
  pages: [
    {
      id: 'balloon-1',
      pageNumber: 1,
      illustrationAlt: 'Noah letting go of a bright red balloon as it flies up',
      text: 'Noah held a bright red balloon. He smiled. But suddenly... Whoosh! A gust of wind blew, and the balloon flew right up into the sky.',
      interactiveObjects: [
        {
          id: 'balloon-1-obj',
          label: 'Red Balloon',
          x: 65,
          y: 35,
          animation: 'fly',
          sound: 'whoosh',
        },
      ],
    },
    {
      id: 'balloon-2',
      pageNumber: 2,
      illustrationAlt: 'The red balloon floating higher above the green trees',
      text: 'The balloon floated higher and higher! Noah watched it drift above the treetops into the wide blue sky.',
      interactiveObjects: [
        {
          id: 'balloon-2-obj',
          label: 'Floating Balloon',
          x: 50,
          y: 30,
          animation: 'float',
          sound: 'whoosh',
        },
      ],
    },
    {
      id: 'balloon-3',
      pageNumber: 3,
      illustrationAlt: 'The red balloon floating over a forest alongside birds',
      text: 'The balloon floated high above a green forest. Little birds flew alongside it, tweeting a friendly hello.',
      interactiveObjects: [
        {
          id: 'bird-3',
          label: 'Sky Bird',
          x: 70,
          y: 25,
          animation: 'fly',
          sound: 'bird',
        },
      ],
    },
    {
      id: 'balloon-4',
      pageNumber: 4,
      illustrationAlt: 'The balloon popping out from behind a soft white cloud',
      text: 'The balloon entered a soft white cloud. For a moment, everything was quiet... Then pop! It came out the other side smiling!',
      interactiveObjects: [
        {
          id: 'cloud-4',
          label: 'Soft Cloud',
          x: 50,
          y: 45,
          animation: 'move',
          sound: 'pop',
        },
      ],
    },
    {
      id: 'balloon-5',
      pageNumber: 5,
      illustrationAlt: 'The balloon drifting over tall mountain peaks',
      text: 'The balloon floated over tall mountain peaks. The cool mountain wind carried it gracefully toward home.',
      interactiveObjects: [
        {
          id: 'balloon-5-obj',
          label: 'Mountain Breeze Balloon',
          x: 45,
          y: 30,
          animation: 'float',
          sound: 'whoosh',
        },
      ],
    },
    {
      id: 'balloon-6',
      pageNumber: 6,
      illustrationAlt: 'The wind changing direction and blowing the balloon back to town',
      text: 'A gentle breeze changed direction! The balloon began drifting back toward Noah\'s cozy little town in the distance.',
      interactiveObjects: [
        {
          id: 'breeze-6',
          label: 'Gentle Breeze',
          x: 30,
          y: 40,
          animation: 'move',
          sound: 'whoosh',
        },
      ],
    },
    {
      id: 'balloon-7',
      pageNumber: 7,
      illustrationAlt: 'Noah catching the balloon string in his garden',
      text: 'The balloon floated down right into Noah\'s garden. Noah caught the string with a big smile. "Welcome home, red balloon!"',
      interactiveObjects: [
        {
          id: 'balloon-7-obj',
          label: 'Home Balloon',
          x: 52,
          y: 55,
          animation: 'bounce',
          sound: 'chime',
        },
      ],
    },
  ],
}
