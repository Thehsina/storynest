import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, BookOpenCheck, Sparkles, Trophy } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { EmptyState } from '../components/common/EmptyState'
import { ReaderHeader } from '../components/reader/ReaderHeader'
import { ReaderPageContent } from '../components/reader/ReaderPageContent'
import { Button } from '../components/ui/Button'
import { saveReadingProgress } from '../hooks/useContinueReading'
import { useStory } from '../hooks/useStory'
import { stopSpeech } from '../utils/textToSpeech'

function getStoryBackgroundClass(storyId: string): string {
  switch (storyId) {
    case 'little-moon':
      return 'from-[#070a18] via-[#0e142a] to-[#181d38]'
    case 'lost-bear':
      return 'from-[#0b170e] via-[#142618] to-[#1c2e1f]'
    case 'mia-goes-to-space':
      return 'from-[#0c0714] via-[#160d2b] to-[#1f123b]'
    case 'oliver-and-the-ocean':
      return 'from-[#06151f] via-[#0c2433] to-[#103247]'
    case 'the-tiny-seed':
      return 'from-[#0e1c0c] via-[#182e16] to-[#203a1d]'
    case 'cloud-couldnt-sleep':
      return 'from-[#0d111a] via-[#141b29] to-[#1e2738]'
    default:
      return 'from-[#0b0f19] via-[#111827] to-[#1f2937]'
  }
}

export function ReaderPage() {
  const { storyId } = useParams<{ storyId: string }>()
  const story = useStory(storyId)
  const navigate = useNavigate()

  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [direction, setDirection] = useState(1) // +1 for next, -1 for prev
  const [isMuted, setIsMuted] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  // Touch swipe tracking
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  // Save reading progress when page changes
  useEffect(() => {
    if (story) {
      saveReadingProgress(story.id, currentPageIndex + 1, story.pages.length)
    }
  }, [story, currentPageIndex])

  // Stop speech on unmount
  useEffect(() => {
    return () => {
      stopSpeech()
    }
  }, [])

  const handleNextPage = useCallback(() => {
    if (!story) return
    stopSpeech()

    if (currentPageIndex < story.pages.length - 1) {
      setDirection(1)
      setCurrentPageIndex((prev) => prev + 1)
    } else {
      setIsFinished(true)
    }
  }, [story, currentPageIndex])

  const handlePrevPage = useCallback(() => {
    if (!story) return
    stopSpeech()

    if (currentPageIndex > 0) {
      setDirection(-1)
      setCurrentPageIndex((prev) => prev - 1)
      setIsFinished(false)
    }
  }, [story, currentPageIndex])

  const handleExit = useCallback(() => {
    stopSpeech()
    navigate('/')
  }, [navigate])

  const handleToggleMute = useCallback(() => {
    setIsMuted((prev) => !prev)
  }, [])

  // Keyboard Navigation Handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement &&
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(
          document.activeElement.tagName,
        )
      ) {
        return
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault()
          handleNextPage()
          break
        case 'ArrowLeft':
          e.preventDefault()
          handlePrevPage()
          break
        case 'Escape':
          e.preventDefault()
          handleExit()
          break
        case 'm':
        case 'M':
          e.preventDefault()
          handleToggleMute()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNextPage, handlePrevPage, handleExit, handleToggleMute])

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
    touchEndX.current = null
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const deltaX = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (deltaX > minSwipeDistance) {
      handleNextPage()
    } else if (deltaX < -minSwipeDistance) {
      handlePrevPage()
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  if (!story) {
    return (
      <div className="w-screen h-screen fixed inset-0 z-50 bg-slate-950 flex items-center justify-center p-6 text-slate-100">
        <EmptyState
          icon={<BookOpenCheck className="h-8 w-8 text-amber-400" aria-hidden />}
          title="This book isn’t on the shelf"
          description="Check the story link or return to the library to choose another tale."
          action={
            <Button to="/" variant="secondary">
              Return Home
            </Button>
          }
        />
      </div>
    )
  }

  const currentPage = story.pages[currentPageIndex] || story.pages[0]
  const bgGradient = getStoryBackgroundClass(story.id)
  const isFirstPage = currentPageIndex === 0

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`fixed inset-0 z-50 w-screen h-screen min-h-screen bg-gradient-to-br ${bgGradient} text-slate-100 select-none flex flex-col justify-between overflow-hidden font-sans touch-pan-y`}
      style={{ width: '100vw', height: '100vh', minHeight: '100vh' }}
    >
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_50%_40%,rgba(251,191,36,0.15),transparent_70%)]" />

      {/* Reader Top Header Bar */}
      <ReaderHeader
        story={story}
        currentPageNumber={currentPageIndex + 1}
        totalPages={story.pages.length}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onExit={handleExit}
      />

      {/* Main Full Viewport Storybook Scene Container */}
      <main className="relative flex-1 flex flex-col justify-between items-center overflow-hidden z-20 w-full h-full min-h-0">
        {/* Invisible Left & Right Click Navigation Tap Zones (Desktop/Tablet) */}
        {!isFinished && (
          <>
            {/* Left Tap Zone */}
            <div
              onClick={handlePrevPage}
              className={`absolute top-0 left-0 w-1/4 h-full z-10 cursor-pointer ${
                isFirstPage ? 'pointer-events-none' : ''
              }`}
              title="Previous page"
              aria-hidden
            />

            {/* Right Tap Zone */}
            <div
              onClick={handleNextPage}
              className="absolute top-0 right-0 w-1/4 h-full z-10 cursor-pointer"
              title="Next page"
              aria-hidden
            />
          </>
        )}

        {/* Visible Floating Friendly Side Navigation Arrows */}
        {!isFinished && (
          <>
            {/* Floating Left Arrow (Previous) */}
            {!isFirstPage && (
              <motion.button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevPage()
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous page"
                title="Previous page"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-900/80 hover:bg-slate-800 text-amber-300 border-2 border-amber-400/40 shadow-[0_0_20px_rgba(251,191,36,0.3)] backdrop-blur-md cursor-pointer transition-colors focus:outline-none focus:ring-4 focus:ring-amber-400"
              >
                <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />
              </motion.button>
            )}

            {/* Floating Right Arrow (Next) */}
            <motion.button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleNextPage()
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next page"
              title="Next page"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold border-2 border-amber-300 shadow-[0_0_24px_rgba(251,191,36,0.6)] cursor-pointer transition-colors focus:outline-none focus:ring-4 focus:ring-amber-300"
            >
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-slate-950" aria-hidden />
            </motion.button>
          </>
        )}

        {/* Main Content Area */}
        {isFinished ? (
          <StoryCompletionCard
            story={story}
            onReplay={() => {
              setIsFinished(false)
              setCurrentPageIndex(0)
            }}
            onExit={handleExit}
          />
        ) : (
          <AnimatePresence mode="wait" custom={direction}>
            <ReaderPageContent
              key={currentPage.id}
              storyId={story.id}
              page={currentPage}
              direction={direction}
              isMuted={isMuted}
            />
          </AnimatePresence>
        )}
      </main>
    </div>
  )
}

function StoryCompletionCard({
  story,
  onReplay,
  onExit,
}: {
  story: ReturnType<typeof useStory> & {}
  onReplay: () => void
  onExit: () => void
}) {
  return (
    <div className="p-8 sm:p-12 max-w-lg mx-auto bg-slate-900/90 border border-amber-400/40 rounded-3xl text-center space-y-6 shadow-2xl backdrop-blur-xl animate-fade-in my-auto z-30">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/20 border border-amber-400 text-amber-300">
        <Trophy className="h-8 w-8" />
      </div>

      <div className="space-y-2">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-amber-200">
          The End! 🎉
        </h2>
        <p className="text-sm sm:text-base text-slate-300">
          You finished reading <span className="font-semibold text-amber-300">"{story.title}"</span>. Great reading!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
        <button
          type="button"
          onClick={onReplay}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-colors cursor-pointer min-h-[44px]"
        >
          <Sparkles className="w-4 h-4" />
          Read Again
        </button>

        <button
          type="button"
          onClick={onExit}
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors cursor-pointer min-h-[44px]"
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}
