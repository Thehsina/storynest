import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Category } from '../../types'

type CategoryCardProps = {
  category: Category
  storyCount: number
}

export function CategoryCard({ category, storyCount }: CategoryCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
      <Link
        to={`/stories?category=${category.id}`}
        className="group block h-full overflow-hidden rounded-[1.75rem] bg-white p-5 shadow-md ring-1 ring-[#eadcf8] transition-shadow hover:shadow-lg"
      >
        <div
          className={[
            'relative mb-4 h-24 overflow-hidden rounded-2xl bg-gradient-to-br',
            category.accentClassName,
          ].join(' ')}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_55%)]" />
          <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-[#5c536c] transition group-hover:bg-white">
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </div>
        <h3 className="font-display text-lg font-semibold text-[#2f2840] group-hover:text-[#5b4aa8]">
          {category.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#6d6280]">{category.description}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#8b7aa8]">
          {storyCount} {storyCount === 1 ? 'story' : 'stories'}
        </p>
      </Link>
    </motion.div>
  )
}
