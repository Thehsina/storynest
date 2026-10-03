import { motion } from 'framer-motion'
import { homeNewStoryIds } from '../../data/home'
import { getStoryById } from '../../data/stories'
import { StoryCard } from '../story/StoryCard'
import { SectionContainer } from './SectionContainer'
import { SectionHeader } from './SectionHeader'

const releaseNotes: Record<string, string> = {
  'cloud-couldnt-sleep':
    'New this week — a bedtime lullaby about trusting the night sky.',
  'the-tiny-seed':
    'Just added — a patient garden tale about growing in your own time.',
}

export function NewStoriesSection() {
  const stories = homeNewStoryIds
    .map((id) => getStoryById(id))
    .filter((story): story is NonNullable<typeof story> => Boolean(story))

  return (
    <SectionContainer className="pb-16 md:pb-24">
      <SectionHeader
        eyebrow="New stories"
        title="Fresh from the nest"
        description="Recently published originals—still warm from the storyteller’s desk."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="space-y-3"
          >
            <p className="text-sm font-medium text-[#7a7088]">
              {releaseNotes[story.id]}
            </p>
            <StoryCard story={story} badge="New" />
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}
