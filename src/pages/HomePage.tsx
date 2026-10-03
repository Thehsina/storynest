import { ArrowRight, Sparkles } from 'lucide-react'
import { StoryCard } from '../components/story/StoryCard'
import { Button } from '../components/ui/Button'
import { stories } from '../data/stories'

export function HomePage() {
  const scrollToStories = () => {
    const section = document.getElementById('choose-a-story')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="space-y-16 pb-12">
      {/* Simple Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-8 sm:pt-10 sm:pb-12 text-center max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#eadcf8] bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#7d6b9a] shadow-sm backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" aria-hidden />
            Original Children&apos;s Stories
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2a2238] leading-tight">
            Big stories for little imaginations.
          </h1>

          <p className="max-w-xl mx-auto text-lg sm:text-xl text-[#5c536c] leading-relaxed">
            Read, listen, and explore magical stories.
          </p>

          <div className="pt-2 flex justify-center">
            <Button
              onClick={scrollToStories}
              size="lg"
              className="shadow-lg shadow-[#7c6bcf]/20 hover:scale-[1.02] transition-transform cursor-pointer"
            >
              <span>Explore Stories</span>
              <ArrowRight className="h-4 w-4 ml-1" aria-hidden />
            </Button>
          </div>
        </div>
      </section>

      {/* Choose a Story Section */}
      <section id="choose-a-story" className="space-y-8 scroll-mt-20">
        <div className="flex flex-col items-center text-center space-y-2">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2a2238]">
            Choose a Story
          </h2>
          <p className="text-base text-[#6d6280] max-w-md">
            Tap any story to open the full-screen reader immediately.
          </p>
        </div>

        {/* Clean 6-Story Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>
    </div>
  )
}
