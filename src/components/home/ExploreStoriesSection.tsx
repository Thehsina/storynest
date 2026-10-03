import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { homeExploreStoryIds } from '../../data/home'
import { getStoryById } from '../../data/stories'
import { StoryCard } from '../story/StoryCard'
import { SectionContainer } from './SectionContainer'
import { SectionHeader } from './SectionHeader'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function ExploreStoriesSection() {
  const stories = homeExploreStoryIds
    .map((id) => getStoryById(id))
    .filter((story): story is NonNullable<typeof story> => Boolean(story))

  return (
    <SectionContainer className="py-16 md:py-24">
      <SectionHeader
        eyebrow="Explore stories"
        title="Open a book, step into a world"
        description="Handpicked adventures with gentle pacing, rich language, and small surprises hidden on every spread."
        action={
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#5c536c] shadow-sm ring-1 ring-[#eadcf8] transition hover:text-[#2f2840]"
          >
            View all stories
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        }
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
      >
        {stories.map((story) => (
          <motion.div key={story.id} variants={item}>
            <StoryCard story={story} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  )
}
