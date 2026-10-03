import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { useState } from 'react'
import type { InteractiveAnimationType, InteractiveObject as InteractiveObjectType } from '../../types'
import { playSound } from '../../utils/soundEffects'
import {
  Cloud,
  Compass,
  Droplet,
  Eye,
  Heart,
  Moon,
  Rocket,
  Star,
  Sun,
  Trees,
  Waves,
  Wind,
} from 'lucide-react'

type InteractiveObjectProps = {
  object: InteractiveObjectType
  isMuted?: boolean
}

export function InteractiveObject({ object, isMuted = false }: InteractiveObjectProps) {
  const [isActive, setIsActive] = useState(false)

  const posX = object.position?.x ?? object.x
  const posY = object.position?.y ?? object.y
  const animationType: InteractiveAnimationType = (
    object.animation ||
    object.animationType ||
    'glow'
  ).toLowerCase() as InteractiveAnimationType

  const handleTap = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()

    // Play subtle story audio chime/sound
    playSound(object.sound || animationType, isMuted)

    // Trigger story action animation
    setIsActive(true)

    // Reset after story action duration (~1.2s)
    setTimeout(() => {
      setIsActive(false)
    }, 1200)
  }

  // Motion variants for story-driven character & object actions
  const motionVariants: Variants = {
    idle: { scale: 1, x: 0, y: 0, rotate: 0, opacity: 1 },
    active: getStoryActionVariants(animationType),
  }

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto select-none"
      style={{ left: `${posX}%`, top: `${posY}%` }}
    >
      {/* Invisible touch hit area — large target for children, no boxes or borders */}
      <button
        type="button"
        onClick={handleTap}
        aria-label={object.label}
        aria-pressed={isActive}
        className="relative group focus:outline-none min-w-[56px] min-h-[56px] sm:min-w-[68px] sm:min-h-[68px] flex items-center justify-center cursor-pointer p-1 rounded-full bg-transparent"
      >
        {/* Story Character / Object Component (Acts out story on touch) */}
        <motion.div
          variants={motionVariants}
          animate={isActive ? 'active' : 'idle'}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="flex items-center justify-center p-2 text-amber-300 filter drop-shadow-lg transition-all duration-200"
        >
          <RenderObjectVisual id={object.id} animationType={animationType} />
        </motion.div>
      </button>
    </div>
  )
}

function getStoryActionVariants(type: InteractiveAnimationType): Variants[string] {
  switch (type) {
    case 'glow':
      // Moon / Light gently grows and shines bright
      return {
        scale: [1, 1.3, 1.1, 1.2, 1],
        filter: [
          'drop-shadow(0px 0px 4px rgba(253, 230, 138, 0.4))',
          'drop-shadow(0px 0px 24px rgba(253, 230, 138, 1))',
          'drop-shadow(0px 0px 12px rgba(253, 230, 138, 0.7))',
          'drop-shadow(0px 0px 4px rgba(253, 230, 138, 0.4))',
        ],
        transition: { duration: 1.1, ease: 'easeInOut' },
      }

    case 'twinkle':
      // Stars flicker brightly
      return {
        opacity: [1, 0.3, 1, 0.4, 1],
        scale: [1, 1.25, 0.9, 1.15, 1],
        rotate: [0, 15, -15, 8, 0],
        transition: { duration: 0.9, ease: 'easeInOut' },
      }

    case 'bounce':
    case 'pop':
    case 'hop':
      // Character (bear, rabbit) hops happily
      return {
        y: [0, -32, 2, -14, 0],
        scaleY: [1, 0.85, 1.15, 0.95, 1],
        scaleX: [1, 1.12, 0.92, 1.05, 1],
        transition: { duration: 0.9, ease: 'easeOut' },
      }

    case 'float':
    case 'move':
      // Cloud / Moon moves across the sky
      return {
        x: [0, -28, 28, -14, 0],
        y: [0, -12, -4, -8, 0],
        transition: { duration: 1.3, ease: 'easeInOut' },
      }

    case 'fly':
    case 'flap':
      // Butterfly / Bird flaps wings and flies across scene
      return {
        y: [0, -36, -18, -32, 0],
        x: [0, 20, -15, 10, 0],
        rotate: [0, 18, -14, 8, 0],
        transition: { duration: 1.2, ease: 'easeInOut' },
      }

    case 'wave':
      // Character (alien, bear, girl) waves hello
      return {
        rotate: [0, -24, 24, -16, 16, -8, 8, 0],
        scale: [1, 1.1, 1],
        transition: { duration: 1.0, ease: 'easeInOut' },
      }

    case 'shake':
    case 'lift':
      // Rocket shakes and launches upward
      return {
        x: [0, -6, 6, -4, 4, 0],
        y: [0, -4, -40, -25, -50, 0],
        scale: [1, 1.05, 1.15, 1.1, 1],
        transition: { duration: 1.3, ease: 'easeInOut' },
      }

    case 'rotate':
      // Planet / Jupiter rotates smoothly
      return {
        rotate: [0, 180, 360],
        scale: [1, 1.15, 1],
        transition: { duration: 1.1, ease: 'easeInOut' },
      }

    case 'grow':
    case 'open':
      // Flower opens / Sprout grows out of soil
      return {
        scale: [1, 1.4, 1.15, 1.3, 1],
        y: [0, -10, -5, -8, 0],
        transition: { duration: 1.1, ease: 'easeOut' },
      }

    case 'ripple':
      // Water / Stream ripples gracefully
      return {
        scale: [1, 1.25, 0.95, 1.1, 1],
        opacity: [1, 0.7, 1],
        transition: { duration: 1.0, ease: 'easeOut' },
      }

    default:
      return {
        scale: [1, 1.2, 1],
        transition: { duration: 0.8 },
      }
  }
}

function RenderObjectVisual({
  id,
  animationType,
}: {
  id: string
  animationType: string
}) {
  const iconClass = 'w-7 h-7 sm:w-9 sm:h-9 text-amber-300 fill-amber-300/30 filter drop-shadow-md'
  const lowId = id.toLowerCase()

  if (lowId.includes('moon')) return <Moon className={iconClass} />
  if (lowId.includes('star')) return <Star className={iconClass} />
  if (lowId.includes('cloud') || lowId.includes('breeze')) return <Cloud className={iconClass} />
  if (lowId.includes('rocket') || lowId.includes('alien') || lowId.includes('planet')) return <Rocket className={iconClass} />
  if (lowId.includes('flower') || lowId.includes('seed') || lowId.includes('sprout')) return <Sun className={iconClass} />
  if (lowId.includes('water') || lowId.includes('ocean') || lowId.includes('sea') || lowId.includes('lake')) return <Waves className={iconClass} />
  if (lowId.includes('tree') || lowId.includes('oak')) return <Trees className={iconClass} />
  if (lowId.includes('wind') || lowId.includes('butterfly')) return <Wind className={iconClass} />
  if (lowId.includes('drop') || lowId.includes('can')) return <Droplet className={iconClass} />
  if (lowId.includes('bear') || lowId.includes('cat') || lowId.includes('rabbit') || lowId.includes('turtle')) return <Heart className={iconClass} />
  if (lowId.includes('owl') || lowId.includes('shell')) return <Compass className={iconClass} />
  if (lowId.includes('window') || lowId.includes('telescope')) return <Eye className={iconClass} />

  switch (animationType) {
    case 'glow':
      return <Moon className={iconClass} />
    case 'twinkle':
      return <Star className={iconClass} />
    case 'move':
    case 'float':
      return <Cloud className={iconClass} />
    case 'rotate':
    case 'grow':
    case 'open':
      return <Sun className={iconClass} />
    default:
      return <Moon className={iconClass} />
  }
}
