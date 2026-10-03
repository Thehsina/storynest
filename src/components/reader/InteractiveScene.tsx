import { motion } from 'framer-motion'
import type { InteractiveObject as InteractiveObjectType } from '../../types'
import { InteractiveObject } from './InteractiveObject'

type InteractiveSceneProps = {
  interactiveObjects?: InteractiveObjectType[]
  isMuted?: boolean
}

export function InteractiveScene({
  interactiveObjects = [],
  isMuted = false,
}: InteractiveSceneProps) {
  if (!interactiveObjects || interactiveObjects.length === 0) return null

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-2xl select-none">
      {/* Subtle ambient background glow drift (almost unnoticeable) */}
      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-radial from-amber-300/5 via-transparent to-transparent pointer-events-none"
      />

      {/* Render Dynamic Interactive Objects */}
      {interactiveObjects.map((obj) => (
        <InteractiveObject key={obj.id} object={obj} isMuted={isMuted} />
      ))}
    </div>
  )
}
