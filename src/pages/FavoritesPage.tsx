import { Heart } from 'lucide-react'
import { StoryCard } from '../components/story/StoryCard'
import { EmptyState } from '../components/common/EmptyState'
import { Button } from '../components/ui/Button'
import { stories } from '../data/stories'
import { useFavorites } from '../hooks/useFavorites'

export function FavoritesPage() {
  const { favoriteIds } = useFavorites()
  const favoriteStories = stories.filter((story) => favoriteIds.includes(story.id))

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="font-display text-3xl font-bold text-indigo-950">
          Favorites
        </h1>
        <p className="text-indigo-900/75">
          Stories you love stay here on this device—ready for bedtime repeats.
        </p>
      </header>

      {favoriteStories.length === 0 ? (
        <EmptyState
          icon={<Heart className="h-7 w-7" aria-hidden />}
          title="No favorites yet"
          description="Tap the heart on any story card to save it here for quick access."
          action={
            <Button to="/stories" variant="secondary">
              Find a story
            </Button>
          }
        />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      )}
    </div>
  )
}
