import type { Variants } from 'framer-motion'
import { motion, useReducedMotion } from 'framer-motion'
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
        x: dir > 0 ? '40%' : '-40%',
        opacity: 0,
        scale: 0.98,
      }
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 32 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    },
    exit: (dir: number) => {
      if (shouldReduceMotion) return { opacity: 0 }
      return {
        x: dir < 0 ? '40%' : '-40%',
        opacity: 0,
        scale: 0.98,
        transition: {
          x: { type: 'spring' as const, stiffness: 300, damping: 32 },
          opacity: { duration: 0.2 },
        },
      }
    },
  }

  return (
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="w-full h-full flex-1 flex flex-col items-center justify-between p-3 sm:p-6 overflow-hidden select-none"
    >
      {/* Immersive Main Story Illustration Stage (Fills most of screen without card boxes) */}
      <div className="relative w-full flex-1 max-w-5xl flex flex-col items-center justify-center min-h-0">
        <div className="relative w-full h-full max-h-[62vh] sm:max-h-[66vh] aspect-[4/3] flex items-center justify-center overflow-hidden rounded-2xl">
          {/* Story SVG Illustration (object-contain, transparent background blends with story atmosphere) */}
          <StoryIllustration
            storyId={storyId}
            pageNumber={page.pageNumber}
            className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
          />

          {/* Interactive Objects Overlay Layer */}
          <InteractiveObjectOverlay
            interactiveObjects={page.interactiveObjects}
            isMuted={isMuted}
          />
        </div>
      </div>

      {/* Story Text & Audio Control Section */}
      <div className="w-full max-w-3xl flex flex-col items-center gap-3 pt-2 pb-1 px-4 text-center z-20">
        <p className="font-serif text-lg sm:text-2xl md:text-3xl text-slate-100 leading-relaxed font-normal tracking-wide drop-shadow-md">
          {page.text}
        </p>

        {/* Subtle Narration Control */}
        <NarrationControl
          audioSrc={page.narrationAudio}
          textToRead={page.text}
          className="mt-1 shadow-lg border-amber-400/30 bg-slate-900/80"
        />
      </div>
    </motion.div>
  )
}
