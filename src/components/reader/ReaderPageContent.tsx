import type { Variants } from 'framer-motion'
import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import type { StoryPage } from '../../types'
import { StoryIllustration } from '../story/StoryIllustration'
import { InteractiveObjectOverlay } from './InteractiveObjectOverlay'
import { NarrationControl } from './NarrationControl'

type ReaderPageContentProps = {
  storyId: string
  page: StoryPage
  direction: number
  isMuted: boolean
  onNextPage?: () => void
  onPrevPage?: () => void
}

export function ReaderPageContent({
  storyId,
  page,
  direction,
  isMuted,
}: ReaderPageContentProps) {
  const shouldReduceMotion = useReducedMotion()

  const pageVariants: Variants = {
    enter: (dir: number) => {
      if (shouldReduceMotion) return { opacity: 0 }
      return {
        x: dir > 0 ? '12%' : '-12%',
        opacity: 0,
        scale: 0.98,
      }
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { ease: [0.25, 1, 0.5, 1], duration: 0.45 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
      },
    },
    exit: (dir: number) => {
      if (shouldReduceMotion) return { opacity: 0 }
      return {
        x: dir < 0 ? '12%' : '-12%',
        opacity: 0,
        scale: 0.98,
        transition: {
          x: { ease: [0.25, 1, 0.5, 1], duration: 0.35 },
          opacity: { duration: 0.3 },
        },
      }
    },
  }

  const hasInteractiveObjects =
    page.interactiveObjects && page.interactiveObjects.length > 0

  return (
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="w-full h-full flex-1 flex flex-col md:flex-row items-center justify-between p-3 sm:p-6 md:p-8 overflow-hidden select-none"
    >
      {/* LEFT COLUMN — Large Animated Story Scene Illustration (55% on Desktop/Tablet) */}
      <div className="relative w-full md:w-[55%] h-[52vh] sm:h-[58vh] md:h-full flex flex-col items-center justify-center min-h-0">
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
          {/* Main Story SVG Illustration (object-contain, fills left half without cropping) */}
          <StoryIllustration
            storyId={storyId}
            pageNumber={page.pageNumber}
            className="w-full h-full max-h-[82vh] object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)]"
          />

          {/* Dynamic Interactive Objects Overlay */}
          <InteractiveObjectOverlay
            interactiveObjects={page.interactiveObjects}
            isMuted={isMuted}
          />
        </div>

        {/* Subtle Interactive Spot Discovery Pill */}
        {hasInteractiveObjects && (
          <div className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-200 text-xs font-semibold backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" aria-hidden />
            <span>Tap the picture to explore!</span>
          </div>
        )}
      </div>

      {/* RIGHT COLUMN — Large Readability Story Writing Section (45% on Desktop/Tablet) */}
      <div className="relative w-full md:w-[45%] h-auto md:h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 py-2 md:py-6 z-20 min-h-0 overflow-hidden">
        <div className="w-full max-w-xl flex flex-col items-center justify-center gap-4 my-auto">
          {/* Story Writing Text (Large, child-friendly clamp font size, no scrollbar) */}
          <p
            className="font-serif text-slate-100 font-normal tracking-wide drop-shadow-md leading-[1.45]"
            style={{
              fontSize: 'clamp(1.25rem, 2.2vw, 2.3rem)',
            }}
          >
            {page.text}
          </p>

          {/* Narration Voice Audio Control */}
          <NarrationControl
            audioSrc={page.narrationAudio}
            textToRead={page.text}
            className="mt-2 shadow-lg border-amber-400/30 bg-slate-900/80"
          />
        </div>
      </div>
    </motion.div>
  )
}
