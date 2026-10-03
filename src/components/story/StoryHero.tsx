import { motion } from 'framer-motion'
import { Clock, UserRound } from 'lucide-react'
import { categoryById } from '../../data/categories'
import type { Story } from '../../types'
import { Button } from '../ui/Button'
import { FavoriteButton } from './FavoriteButton'

type StoryHeroProps = {
  story: Story
}

export function StoryHero({ story }: StoryHeroProps) {
  const category = categoryById[story.categoryId]

  return (
    <section className="overflow-hidden rounded-[2rem] bg-white shadow-lg ring-1 ring-indigo-100">
      <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className={[
            'relative min-h-56 bg-gradient-to-br md:min-h-full',
            story.coverClassName,
          ].join(' ')}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_50%)]" />
          <div className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {category.name}
          </div>
          <div className="absolute right-4 top-4">
            <FavoriteButton storyId={story.id} />
          </div>
        </motion.div>

        <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-indigo-950 sm:text-4xl">
              {story.title}
            </h1>
            {story.subtitle ? (
              <p className="mt-2 text-lg text-indigo-800/75">{story.subtitle}</p>
            ) : null}
          </div>
          <p className="text-base leading-relaxed text-indigo-900/80">
            {story.summary}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-indigo-800/70">
            <span className="inline-flex items-center gap-1.5">
              <UserRound className="h-4 w-4" aria-hidden />
              {story.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden />
              {story.readingTimeMinutes} min read
            </span>
            <span>Ages {story.ageRange}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {story.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button to={`/reader/${story.id}`} size="lg">
              Start reading
            </Button>
            <Button to="/stories" variant="secondary" size="lg">
              Back to library
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
