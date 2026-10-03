import { BookOpen, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { categoryById } from '../../data/categories'
import type { Story } from '../../types'
import { FavoriteButton } from './FavoriteButton'
import { StoryIllustration } from './StoryIllustration'

type StoryCardProps = {
  story: Story
  badge?: string
}

export function StoryCard({ story, badge }: StoryCardProps) {
  const category = categoryById[story.categoryId]

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_12px_40px_-20px_rgba(74,54,106,0.35)] ring-1 ring-[#eadcf8]"
    >
      <Link to={`/reader/${story.id}`} className="flex h-full flex-col">
        <div className="relative overflow-hidden">
          <StoryIllustration
            storyId={story.id}
            className="aspect-[5/4] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2f2840]/35 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-[#5c536c] backdrop-blur-sm">
            {category.name}
          </div>
          {badge ? (
            <div className="absolute left-3 top-3 rounded-full bg-[#2f2840] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              {badge}
            </div>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col gap-2 p-5">
          <h3 className="font-display text-xl font-bold tracking-tight text-[#2f2840] group-hover:text-[#5b4aa8] transition-colors">
            {story.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-[#6d6280]">
            {story.summary}
          </p>

          <div className="mt-auto flex items-center justify-between pt-4">
            <div className="flex items-center gap-1.5 text-xs font-medium text-[#8b7aa8]">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              <span>{story.readingTimeMinutes} min</span>
              <span aria-hidden>·</span>
              <span>Ages {story.ageRange}</span>
            </div>

            <span className="inline-flex items-center gap-1 rounded-full bg-[#7c6bcf] px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-all group-hover:bg-[#6856be]">
              <BookOpen className="h-3.5 w-3.5" aria-hidden />
              <span>Read</span>
            </span>
          </div>
        </div>
      </Link>

      <div className="absolute right-3 top-3 z-10">
        <FavoriteButton storyId={story.id} />
      </div>
    </motion.article>
  )
}
