import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  action?: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = 'left',
}: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'mb-8 flex flex-col gap-4 md:mb-10',
        centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between',
      ].join(' ')}
    >
      <div className={centered ? 'max-w-2xl' : 'max-w-2xl space-y-2'}>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7aa8]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[#2f2840] sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-relaxed text-[#5c536c] sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </motion.div>
  )
}
