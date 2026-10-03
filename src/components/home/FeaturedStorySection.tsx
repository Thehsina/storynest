import { motion } from 'framer-motion'
import { Headphones, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categoryById } from '../../data/categories'
import { homeFeaturedStoryId } from '../../data/home'
import { getStoryById } from '../../data/stories'
import { Button } from '../ui/Button'
import { FavoriteButton } from '../story/FavoriteButton'
import { StoryIllustration } from '../story/StoryIllustration'
import { SectionContainer } from './SectionContainer'
import { SectionHeader } from './SectionHeader'

export function FeaturedStorySection() {
  const story = getStoryById(homeFeaturedStoryId)
  if (!story) return null

  const category = categoryById[story.categoryId]
  const interactivePageCount = story.pages.filter(
    (page) => (page.interactiveObjects?.length ?? 0) > 0,
  ).length

  return (
    <SectionContainer className="py-16 md:py-24">
      <SectionHeader
        eyebrow="Featured story"
        title="A soft glow for bedtime"
        description="Editor’s choice this week—a quiet tale about bravery, kindness, and a moon who learns she shines just enough."
      />

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_50px_-24px_rgba(74,54,106,0.35)] ring-1 ring-[#eadcf8]"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[280px] p-4 sm:p-6 lg:min-h-[420px]">
            <StoryIllustration
              storyId={story.id}
              className="h-full w-full rounded-[1.5rem] object-cover shadow-inner"
            />
            <div className="absolute left-8 top-8">
              <FavoriteButton storyId={story.id} />
            </div>
            <div className="absolute bottom-8 left-8 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#5c536c] backdrop-blur-sm">
              Illustrated chapter book · {story.pages.length} pages
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#f3ebff] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#7c6bcf]">
                {category.name}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-[#6d6280]">
                <Sparkles className="h-4 w-4 text-[#c4b5fd]" aria-hidden />
                Interactive moments on {interactivePageCount}{' '}
                {interactivePageCount === 1 ? 'page' : 'pages'}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-3xl font-semibold tracking-tight text-[#2f2840] sm:text-4xl">
                {story.title}
              </h3>
              {story.subtitle ? (
                <p className="text-lg text-[#7a7088]">{story.subtitle}</p>
              ) : null}
            </div>

            <p className="text-base leading-relaxed text-[#5c536c] sm:text-lg">
              {story.summary} Perfect for snuggly read-alouds and first
              independent page turns.
            </p>

            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="rounded-2xl bg-[#faf6f0] px-4 py-3 text-sm text-[#5c536c]">
                <span className="font-semibold text-[#2f2840]">Ages {story.ageRange}</span>
                <br />
                {story.readingTimeMinutes} minute read
              </li>
              <li className="rounded-2xl bg-[#faf6f0] px-4 py-3 text-sm text-[#5c536c]">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#2f2840]">
                  <Headphones className="h-4 w-4" aria-hidden />
                  Listen soon
                </span>
                <br />
                Audio narration arrives in a future update
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button to={`/reader/${story.id}`} size="lg">
                Read now
              </Button>
              <Button to={`/stories/${story.id}`} variant="secondary" size="lg">
                Story details
              </Button>
            </div>

            <Link
              to="/stories"
              className="text-sm font-semibold text-[#7c6bcf] hover:text-[#5b4aa8]"
            >
              Browse the full library →
            </Link>
          </div>
        </div>
      </motion.article>
    </SectionContainer>
  )
}
