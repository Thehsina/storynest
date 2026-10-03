import { Heart, Volume2, VolumeX, X } from 'lucide-react'
import { useFavorites } from '../../hooks/useFavorites'
import type { Story } from '../../types'

type ReaderHeaderProps = {
  story: Story
  currentPageNumber?: number
  totalPages?: number
  isMuted: boolean
  onToggleMute: () => void
  onExit: () => void
}

export function ReaderHeader({
  story,
  isMuted,
  onToggleMute,
  onExit,
}: ReaderHeaderProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorited = isFavorite(story.id)

  return (
    <header className="relative z-40 flex items-center justify-between px-4 py-3 sm:px-8 bg-slate-950/70 backdrop-blur-md text-slate-100 border-b border-slate-800/40">
      {/* Top Left: Exit Close Button */}
      <button
        type="button"
        onClick={onExit}
        aria-label="Exit story reader"
        title="Exit Story Reader"
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 shadow-md text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 min-h-[44px] min-w-[44px] cursor-pointer"
      >
        <X className="w-5 h-5 text-amber-300" aria-hidden />
        <span className="hidden sm:inline">Exit</span>
      </button>

      {/* Center: Story Title */}
      <div className="flex flex-col items-center text-center px-2">
        <h1 className="font-display text-sm sm:text-base font-bold text-amber-200 truncate max-w-[160px] sm:max-w-md">
          {story.title}
        </h1>
      </div>

      {/* Top Right: Sound Effect Mute & Favorite Buttons */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onToggleMute}
          aria-label={isMuted ? 'Unmute sound effects' : 'Mute sound effects'}
          aria-pressed={isMuted}
          title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
          className={`p-2.5 rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer ${
            isMuted
              ? 'bg-rose-950/50 text-rose-300 border-rose-800/60'
              : 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-700/60'
          }`}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-rose-400" aria-hidden />
          ) : (
            <Volume2 className="w-5 h-5 text-slate-300" aria-hidden />
          )}
        </button>

        <button
          type="button"
          onClick={() => toggleFavorite(story.id)}
          aria-label={
            favorited
              ? `Remove ${story.title} from favorites`
              : `Add ${story.title} to favorites`
          }
          aria-pressed={favorited}
          title={favorited ? 'Favorited' : 'Add to Favorites'}
          className={`p-2.5 rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer ${
            favorited
              ? 'bg-rose-500/20 text-rose-400 border-rose-500/40'
              : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border-slate-700/60'
          }`}
        >
          <Heart
            className={`w-5 h-5 ${
              favorited ? 'fill-rose-500 text-rose-500' : ''
            }`}
            aria-hidden
          />
        </button>
      </div>
    </header>
  )
}
