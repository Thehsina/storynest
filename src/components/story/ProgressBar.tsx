import { motion } from 'framer-motion'

type ProgressBarProps = {
  currentPage: number
  totalPages: number
  className?: string
}

export function ProgressBar({
  currentPage,
  totalPages,
  className = '',
}: ProgressBarProps) {
  const safeTotal = Math.max(totalPages, 1)
  const clampedCurrent = Math.min(Math.max(currentPage, 1), safeTotal)
  const percent = (clampedCurrent / safeTotal) * 100

  return (
    <div className={['space-y-2', className].filter(Boolean).join(' ')}>
      <div className="flex items-center justify-between text-xs font-semibold text-[#8b7aa8]">
        <span>
          Page {clampedCurrent} of {safeTotal}
        </span>
        <span>{Math.round(percent)}%</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-[#f0e8ff]"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percent)}
        aria-label="Reading progress"
      >
        <motion.div
          className="h-full rounded-full bg-[#7c6bcf]"
          initial={false}
          animate={{ width: `${percent}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        />
      </div>
    </div>
  )
}
