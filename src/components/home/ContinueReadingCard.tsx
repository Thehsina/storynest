import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ReadingProgressEntry, Story } from '../../types'
import { ProgressBar } from '../story/ProgressBar'
import { StoryIllustration } from '../story/StoryIllustration'

type ContinueReadingCardProps = {
  story: Story
  entry: ReadingProgressEntry
}

export function ContinueReadingCard({ story, entry }: ContinueReadingCardProps) {
  const updatedLabel = new Intl.DateTimeFormat(undefined, {
    month: 'short',
    day: 'numeric',
  }).format(new Date(entry.updatedAt))

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group overflow-hidden rounded-[1.75rem] bg-white shadow-md ring-1 ring-[#eadcf8] transition-shadow hover:shadow-lg"
    >
      <Link to={`/reader/${story.id}`} className="grid sm:grid-cols-[140px_1fr]">
        <div className="relative h-36 sm:h-full sm:min-h-[160px]">
          <StoryIllustration storyId={story.id} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2f2840]/25 to-transparent sm:bg-gradient-to-r" />
        </div>
        <div className="space-y-4 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#8b7aa8]">
                Continue reading
              </p>
              <h3 className="font-display mt-1 text-xl font-semibold text-[#2f2840] group-hover:text-[#5b4aa8]">
                {story.title}
              </h3>
            </div>
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f3ebff] text-[#7c6bcf]">
              <BookOpen className="h-4 w-4" aria-hidden />
            </span>
          </div>
          <ProgressBar
            currentPage={entry.currentPage}
            totalPages={story.pages.length}
          />
          <p className="text-sm text-[#7a7088]">
            Last opened {updatedLabel} · Page {entry.currentPage} of{' '}
            {story.pages.length}
          </p>
        </div>
      </Link>
    </motion.article>
  )
}
