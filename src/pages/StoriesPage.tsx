import { StoryCard } from '../components/story/StoryCard'
import { stories } from '../data/stories'

export function StoriesPage() {
  return (
    <div className="space-y-8 py-4">
      <header className="space-y-2 text-center max-w-2xl mx-auto">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#2a2238]">
          Choose a Story
        </h1>
        <p className="text-[#6d6280] text-base">
          Tap any story card below to start reading in full-screen mode.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  )
}
