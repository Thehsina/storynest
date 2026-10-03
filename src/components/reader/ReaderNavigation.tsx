import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

type ReaderNavigationProps = {
  currentPageIndex: number
  totalPages: number
  onPrevPage: () => void
  onNextPage: () => void
  onSelectPage: (index: number) => void
  onFinish?: () => void
}

export function ReaderNavigation({
  currentPageIndex,
  totalPages,
  onPrevPage,
  onNextPage,
  onSelectPage,
  onFinish,
}: ReaderNavigationProps) {
  const isFirstPage = currentPageIndex === 0
  const isLastPage = currentPageIndex === totalPages - 1
  const progressPercent = Math.round(
    ((currentPageIndex + 1) / totalPages) * 100,
  )

  return (
    <footer className="relative z-40 w-full px-3 py-2.5 sm:px-6 sm:py-3.5 bg-slate-950/85 backdrop-blur-xl border-t border-slate-800/80 text-slate-100 shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-5xl mx-auto flex flex-col gap-2">
        {/* Subtle Progress Bar */}
        <div className="w-full max-w-md mx-auto flex items-center gap-3 px-2">
          <div
            className="h-1.5 flex-1 rounded-full bg-slate-800/90 overflow-hidden ring-1 ring-amber-400/20 shadow-inner"
            role="progressbar"
            aria-valuenow={currentPageIndex + 1}
            aria-valuemin={1}
            aria-valuemax={totalPages}
            aria-label={`Page progress: ${currentPageIndex + 1} of ${totalPages}`}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.8)]"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
          <span className="text-[11px] font-bold text-amber-300 min-w-[36px] text-right tracking-wide">
            {progressPercent}%
          </span>
        </div>

        {/* Navigation Bar Row */}
        <div className="flex items-center justify-between w-full gap-2 pt-0.5">
          {/* Previous Button */}
          <motion.button
            type="button"
            onClick={onPrevPage}
            disabled={isFirstPage}
            whileHover={!isFirstPage ? { scale: 1.05 } : undefined}
            whileTap={!isFirstPage ? { scale: 0.95 } : undefined}
            aria-label="Previous page"
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 min-h-[48px] min-w-[105px] justify-center cursor-pointer ${
              isFirstPage
                ? 'opacity-30 bg-slate-900 text-slate-500 cursor-not-allowed border border-slate-800/50'
                : 'bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 border border-amber-400/30 shadow-lg shadow-black/40'
            }`}
          >
            <ArrowLeft className="w-4 h-4 text-amber-300" aria-hidden />
            <span>Previous</span>
          </motion.button>

          {/* Center: Glowing Page Dots */}
          <div className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 shadow-inner">
            {Array.from({ length: totalPages }).map((_, idx) => {
              const isActive = idx === currentPageIndex
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onSelectPage(idx)}
                  aria-label={`Go to page ${idx + 1}`}
                  aria-current={isActive ? 'page' : undefined}
                  className="group relative p-1.5 focus:outline-none cursor-pointer"
                >
                  <motion.span
                    animate={{
                      scale: isActive ? 1.25 : 1,
                      width: isActive ? '20px' : '10px',
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className={`block h-2.5 rounded-full transition-colors ${
                      isActive
                        ? 'bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]'
                        : 'bg-slate-700 group-hover:bg-amber-300/60'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Next / Finish Primary Action Button */}
          {isLastPage ? (
            <motion.button
              type="button"
              onClick={onFinish || onNextPage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Finish reading story"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 active:from-amber-500 text-slate-950 font-extrabold text-sm shadow-[0_4px_20px_rgba(251,191,36,0.4)] transition-all focus:outline-none focus:ring-2 focus:ring-amber-300 min-h-[48px] min-w-[105px] justify-center cursor-pointer"
            >
              <span>Finish</span>
              <CheckCircle2 className="w-5 h-5 text-slate-950" aria-hidden />
            </motion.button>
          ) : (
            <motion.button
              type="button"
              onClick={onNextPage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next page"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 active:from-amber-500 text-slate-950 font-extrabold text-sm shadow-[0_4px_20px_rgba(251,191,36,0.4)] transition-all focus:outline-none focus:ring-2 focus:ring-amber-300 min-h-[48px] min-w-[105px] justify-center cursor-pointer"
            >
              <span>Next</span>
              <ArrowRight className="w-5 h-5 text-slate-950" aria-hidden />
            </motion.button>
          )}
        </div>

        {/* Keyboard navigation helper footnote */}
        <p className="text-[11px] text-slate-400 text-center hidden md:flex items-center justify-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Press</span>
          <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700 text-[10px] font-mono">
            ←
          </kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700 text-[10px] font-mono">
            →
          </kbd>
          <span>or</span>
          <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700 text-[10px] font-mono">
            Space
          </kbd>
          <span>to flip pages</span>
        </p>
      </div>
    </footer>
  )
}
