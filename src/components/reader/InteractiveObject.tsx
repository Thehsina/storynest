import type { Variants } from 'framer-motion'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { InteractiveAnimationType, InteractiveObject as InteractiveObjectType, ParticleType } from '../../types'
import { playSound } from '../../utils/soundEffects'
import {
  Cloud,
  Compass,
  Droplet,
  Eye,
  Heart,
  Moon,
  Rocket,
  Sparkles,
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

type ParticleItem = {
  id: string
  x: number
  y: number
  scale: number
  symbol: string
}

export function InteractiveObject({ object, isMuted = false }: InteractiveObjectProps) {
  const [isActive, setIsActive] = useState(false)
  const [particles, setParticles] = useState<ParticleItem[]>([])

  const posX = object.position?.x ?? object.x
  const posY = object.position?.y ?? object.y
  const animationType: InteractiveAnimationType = (
    object.animation ||
    object.animationType ||
    'glow'
  ).toLowerCase() as InteractiveAnimationType

  const particleType: ParticleType =
    object.particles || getParticleTypeForObject(object.id, animationType)

  const handleTap = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()

    // Trigger audio effect
    playSound(object.sound || animationType, isMuted)

    // Trigger active state
    setIsActive(true)

    // Spawn 5-7 magical floating particles
    const newParticles: ParticleItem[] = Array.from({ length: 6 }).map((_, i) => ({
      id: `${Date.now()}-${i}-${Math.random()}`,
      x: (Math.random() - 0.5) * 64,
      y: (Math.random() - 0.5) * 64 - 20,
      scale: 0.7 + Math.random() * 0.5,
      symbol: getParticleSymbol(particleType, i),
    }))
    setParticles(newParticles)

    // Reset after animation
    setTimeout(() => {
      setIsActive(false)
    }, 1200)

    setTimeout(() => {
      setParticles([])
    }, 1400)
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
      {/* Interactive Touch Container with Inviting Glow Ring */}
      <button
        type="button"
        onClick={handleTap}
        aria-label={object.label}
        aria-pressed={isActive}
        className="relative group focus:outline-none min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] flex items-center justify-center cursor-pointer p-1 rounded-full bg-slate-900/30 backdrop-blur-xs border border-amber-300/30 hover:border-amber-300/80 shadow-lg hover:shadow-amber-400/40 transition-all duration-200"
      >
        {/* Subtle Inviting Glow Ring */}
        {!isActive && (
          <span className="absolute inset-0 rounded-full bg-amber-400/20 opacity-60 group-hover:opacity-100 animate-ping pointer-events-none" />
        )}

        {/* Animated Object Visual */}
        <motion.div
          variants={motionVariants}
          animate={isActive ? 'active' : 'idle'}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center p-2 text-amber-300 filter drop-shadow-md"
        >
          <RenderObjectVisual id={object.id} animationType={animationType} />
        </motion.div>

        {/* Corner Sparkle Badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-slate-950 shadow-md group-hover:scale-110 transition-transform">
          <Sparkles className="w-2.5 h-2.5 fill-current" />
        </span>

        {/* Particle Burst Overlay */}
        <AnimatePresence>
          {particles.map((p) => (
            <motion.span
              key={p.id}
              initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [1, 1, 0],
                scale: [0, p.scale, p.scale * 0.8],
                x: p.x,
                y: p.y,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="absolute pointer-events-none text-base sm:text-lg z-30 drop-shadow-md"
            >
              {p.symbol}
            </motion.span>
          ))}
        </AnimatePresence>
      </button>
    </div>
  )
}

function getStoryActionVariants(type: InteractiveAnimationType): Variants[string] {
  switch (type) {
    case 'glow':
      return {
        scale: [1, 1.35, 1.1, 1.25, 1],
        filter: [
          'drop-shadow(0px 0px 4px rgba(253, 230, 138, 0.4))',
          'drop-shadow(0px 0px 24px rgba(253, 230, 138, 1))',
          'drop-shadow(0px 0px 12px rgba(253, 230, 138, 0.7))',
          'drop-shadow(0px 0px 4px rgba(253, 230, 138, 0.4))',
        ],
        transition: { duration: 1.1, ease: 'easeInOut' },
      }
    case 'twinkle':
      return {
        opacity: [1, 0.3, 1, 0.4, 1],
        scale: [1, 1.3, 0.9, 1.2, 1],
        rotate: [0, 25, -25, 12, 0],
        transition: { duration: 0.9, ease: 'easeInOut' },
      }
    case 'bounce':
    case 'pop':
    case 'hop':
      return {
        y: [0, -32, 2, -14, 0],
        scaleY: [1, 0.85, 1.15, 0.95, 1],
        scaleX: [1, 1.12, 0.92, 1.05, 1],
        transition: { duration: 0.9, ease: 'easeOut' },
      }
    case 'float':
    case 'move':
      return {
        x: [0, -28, 28, -14, 0],
        y: [0, -12, -4, -8, 0],
        transition: { duration: 1.3, ease: 'easeInOut' },
      }
    case 'fly':
    case 'flap':
      return {
        y: [0, -36, -18, -32, 0],
        x: [0, 20, -15, 10, 0],
        rotate: [0, 18, -14, 8, 0],
        transition: { duration: 1.2, ease: 'easeInOut' },
      }
    case 'wave':
      return {
        rotate: [0, -24, 24, -16, 16, -8, 8, 0],
        scale: [1, 1.1, 1],
        transition: { duration: 1.0, ease: 'easeInOut' },
      }
    case 'shake':
    case 'lift':
      return {
        x: [0, -6, 6, -4, 4, 0],
        y: [0, -4, -40, -25, -50, 0],
        scale: [1, 1.05, 1.15, 1.1, 1],
        transition: { duration: 1.3, ease: 'easeInOut' },
      }
    case 'rotate':
      return {
        rotate: [0, 180, 360],
        scale: [1, 1.15, 1],
        transition: { duration: 1.1, ease: 'easeInOut' },
      }
    case 'grow':
    case 'open':
      return {
        scale: [1, 1.4, 1.15, 1.3, 1],
        y: [0, -10, -5, -8, 0],
        transition: { duration: 1.1, ease: 'easeOut' },
      }
    case 'ripple':
      return {
        scale: [1, 1.25, 0.95, 1.1, 1],
        opacity: [1, 0.7, 1],
        transition: { duration: 1.0, ease: 'easeOut' },
      }
    default:
      return {
        scale: [1, 1.25, 1],
        transition: { duration: 0.8 },
      }
  }
}

function getParticleTypeForObject(id: string, animation: string): ParticleType {
  const lowId = id.toLowerCase()
  if (lowId.includes('star') || lowId.includes('moon') || animation === 'twinkle') return 'stars'
  if (lowId.includes('water') || lowId.includes('ocean') || lowId.includes('sea') || lowId.includes('dew') || animation === 'ripple') return 'water'
  if (lowId.includes('flower') || lowId.includes('seed') || lowId.includes('sprout') || animation === 'open') return 'petals'
  if (lowId.includes('cat') || lowId.includes('bear') || lowId.includes('rabbit') || animation === 'bounce') return 'hearts'
  if (lowId.includes('rocket') || lowId.includes('planet') || lowId.includes('space') || animation === 'glow') return 'glow'
  return 'sparkles'
}

function getParticleSymbol(type: ParticleType, index: number): string {
  switch (type) {
    case 'stars':
      return index % 2 === 0 ? '⭐' : '✨'
    case 'hearts':
      return index % 2 === 0 ? '❤️' : '💖'
    case 'water':
      return index % 2 === 0 ? '💧' : '💦'
    case 'petals':
      return index % 2 === 0 ? '🌸' : '🌺'
    case 'glow':
      return index % 2 === 0 ? '💫' : '✨'
    case 'sparkles':
    default:
      return index % 2 === 0 ? '✨' : '⭐'
  }
}

function RenderObjectVisual({
  id,
  animationType,
}: {
  id: string
  animationType: string
}) {
  const iconClass = 'w-7 h-7 sm:w-8 sm:h-8 text-amber-300 fill-amber-300/30 filter drop-shadow-md'
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
      return <Sparkles className={iconClass} />
  }
}
