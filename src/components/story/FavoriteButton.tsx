import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useFavorites } from '../../hooks/useFavorites'

type FavoriteButtonProps = {
  storyId: string
  className?: string
  label?: string
}

export function FavoriteButton({
  storyId,
  className = '',
  label = 'Toggle favorite',
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const active = isFavorite(storyId)

  return (
    <motion.button
      type="button"
      aria-label={label}
      aria-pressed={active}
      whileTap={{ scale: 0.92 }}
      onClick={() => toggleFavorite(storyId)}
      className={[
        'inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-[#eadcf8] transition-colors',
        'hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4b5fd]',
        className,
      ].join(' ')}
    >
      <Heart
        className={[
          'h-5 w-5 transition-colors',
          active ? 'fill-rose-500 text-rose-500' : 'text-[#a89bb8]',
        ].join(' ')}
        aria-hidden
      />
    </motion.button>
  )
}
