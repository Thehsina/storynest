import { motion, useReducedMotion } from 'framer-motion'

type StoryIllustrationProps = {
  storyId: string
  pageNumber?: number
  className?: string
}

export function StoryIllustration({
  storyId,
  pageNumber = 1,
  className = '',
}: StoryIllustrationProps) {
  const shouldReduceMotion = useReducedMotion()

  switch (storyId) {
    case 'little-moon':
      return (
        <LittleMoonIllustration
          pageNumber={pageNumber}
          className={className}
          shouldReduceMotion={shouldReduceMotion ?? false}
        />
      )
    case 'lost-bear':
      return (
        <LostBearIllustration
          pageNumber={pageNumber}
          className={className}
          shouldReduceMotion={shouldReduceMotion ?? false}
        />
      )
    case 'mia-goes-to-space':
      return (
        <MiaSpaceIllustration
          pageNumber={pageNumber}
          className={className}
          shouldReduceMotion={shouldReduceMotion ?? false}
        />
      )
    case 'oliver-and-the-ocean':
      return (
        <OceanIllustration
          pageNumber={pageNumber}
          className={className}
          shouldReduceMotion={shouldReduceMotion ?? false}
        />
      )
    case 'the-tiny-seed':
      return (
        <SeedIllustration
          pageNumber={pageNumber}
          className={className}
          shouldReduceMotion={shouldReduceMotion ?? false}
        />
      )
    case 'cloud-couldnt-sleep':
      return (
        <CloudSleepIllustration
          pageNumber={pageNumber}
          className={className}
          shouldReduceMotion={shouldReduceMotion ?? false}
        />
      )
    case 'little-door-in-the-tree':
      return (
        <DoorTreeIllustration
          pageNumber={pageNumber}
          className={className}
          shouldReduceMotion={shouldReduceMotion ?? false}
        />
      )
    case 'whale-who-lost-his-song':
      return (
        <WhaleSongIllustration
          pageNumber={pageNumber}
          className={className}
          shouldReduceMotion={shouldReduceMotion ?? false}
        />
      )
    case 'balloon-that-flew-away':
      return (
        <BalloonSkyIllustration
          pageNumber={pageNumber}
          className={className}
          shouldReduceMotion={shouldReduceMotion ?? false}
        />
      )
    case 'garden-at-night':
      return (
        <GardenNightIllustration
          pageNumber={pageNumber}
          className={className}
          shouldReduceMotion={shouldReduceMotion ?? false}
        />
      )
    case 'little-trains-journey':
      return (
        <TrainJourneyIllustration
          pageNumber={pageNumber}
          className={className}
          shouldReduceMotion={shouldReduceMotion ?? false}
        />
      )
    case 'star-fell-into-garden':
      return (
        <StarFellIllustration
          pageNumber={pageNumber}
          className={className}
          shouldReduceMotion={shouldReduceMotion ?? false}
        />
      )
    default:
      return <DefaultIllustration className={className} />
  }
}

/* =========================================================================
   1. THE LITTLE MOON ILLUSTRATIONS
   ========================================================================= */
function LittleMoonIllustration({
  pageNumber,
  className,
  shouldReduceMotion,
}: {
  pageNumber: number
  className: string
  shouldReduceMotion: boolean
}) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lm-sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
        <radialGradient id="moon-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dew-path" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <rect width="400" height="320" fill="url(#lm-sky)" rx="24" />

      {[
        { x: 35, y: 35 },
        { x: 110, y: 45 },
        { x: 190, y: 25 },
        { x: 270, y: 55 },
        { x: 340, y: 35 },
        { x: 75, y: 95 },
        { x: 360, y: 90 },
      ].map((star, i) => (
        <motion.circle
          key={i}
          cx={star.x}
          cy={star.y}
          r={1.8 + (i % 2)}
          fill="#fef3c7"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.9, 0.3], scale: shouldReduceMotion ? 1 : [0.8, 1.2, 0.8] }}
          transition={{ duration: 2.4 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
        />
      ))}

      {pageNumber === 1 && (
        <motion.g initial="hidden" animate="show">
          <motion.path
            d="M 0,210 Q 140,165 400,205 V 320 H 0 Z"
            fill="#1e293b"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <path d="M 0,245 Q 180,205 400,235 V 320 H 0 Z" fill="#0f172a" />
          <motion.path
            d="M 50,70 Q 80,48 110,70 Q 130,58 150,75 Q 120,90 60,85 Z"
            fill="#e0e7ff"
            opacity="0.25"
            animate={shouldReduceMotion ? { opacity: 0.25 } : { x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.g
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <motion.g
              animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <circle cx="300" cy="70" r="40" fill="url(#moon-glow)" />
              <circle cx="300" cy="70" r="26" fill="#fef08a" />
              <circle cx="288" cy="64" r="21" fill="#1e1b4b" />
            </motion.g>
          </motion.g>
        </motion.g>
      )}

      {pageNumber === 2 && (
        <g>
          <path d="M 0,195 Q 200,155 400,195 V 320 H 0 Z" fill="#0f172a" />
          <rect x="220" y="105" width="115" height="135" rx="14" fill="#fef3c7" opacity="0.95" />
          <rect x="230" y="115" width="44" height="54" rx="4" fill="#38bdf8" opacity="0.35" />
          <rect x="281" y="115" width="44" height="54" rx="4" fill="#38bdf8" opacity="0.35" />
          <rect x="230" y="176" width="44" height="54" rx="4" fill="#38bdf8" opacity="0.35" />
          <rect x="281" y="176" width="44" height="54" rx="4" fill="#38bdf8" opacity="0.35" />
          <motion.g animate={shouldReduceMotion ? {} : { rotate: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>
            <circle cx="155" cy="185" r="22" fill="#fbbf24" />
            <path d="M 125,235 Q 155,205 185,235 Z" fill="#3b82f6" />
          </motion.g>
        </g>
      )}

      {pageNumber >= 3 && (
        <g>
          <path d="M 0,225 Q 200,185 400,225 V 320 H 0 Z" fill="#0f172a" opacity="0.85" />
          <motion.path
            d="M 290,90 Q 200,180 70,320 H 160 Q 250,200 310,90 Z"
            fill="url(#dew-path)"
            animate={{ opacity: [0.3, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.g animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity }}>
            <circle cx="300" cy="70" r="48" fill="url(#moon-glow)" />
            <circle cx="300" cy="70" r="30" fill="#fef08a" />
          </motion.g>
        </g>
      )}
    </svg>
  )
}

/* =========================================================================
   2. THE LOST BEAR ILLUSTRATIONS
   ========================================================================= */
function LostBearIllustration({ pageNumber, className, shouldReduceMotion }: { pageNumber: number; className: string; shouldReduceMotion: boolean }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lb-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <rect width="400" height="320" fill="url(#lb-bg)" rx="24" />
      <rect y="210" width="400" height="110" fill="#86efac" />
      <rect x="130" y="170" width="140" height="16" rx="8" fill="#b45309" />
      <motion.g animate={shouldReduceMotion ? {} : { y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity }}>
        <circle cx="200" cy="155" r="32" fill="#d97706" />
        <circle cx="178" cy="132" r="12" fill="#d97706" />
        <circle cx="222" cy="132" r="12" fill="#d97706" />
      </motion.g>
      {pageNumber >= 2 && (
        <motion.g animate={shouldReduceMotion ? {} : { y: [0, 15, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <ellipse cx="300" cy="120" rx="14" ry="20" fill="#c2410c" />
          <circle cx="300" cy="96" r="12" fill="#c2410c" />
        </motion.g>
      )}
    </svg>
  )
}

/* =========================================================================
   3. MIA GOES TO SPACE ILLUSTRATIONS
   ========================================================================= */
function MiaSpaceIllustration({ pageNumber, className, shouldReduceMotion }: { pageNumber: number; className: string; shouldReduceMotion: boolean }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="320" fill="#0f172a" rx="24" />
      {[...Array(18)].map((_, i) => (
        <motion.circle
          key={i}
          cx={(i * 53) % 380 + 10}
          cy={(i * 37) % 280 + 10}
          r={1.5 + (i % 2)}
          fill="#ffffff"
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 2 + (i % 4), repeat: Infinity }}
        />
      ))}
      <motion.g
        animate={
          pageNumber === 2 && !shouldReduceMotion
            ? { y: [0, -80, -180], x: [0, 4, -4, 0] }
            : { y: [0, -6, 0] }
        }
        transition={{ duration: 3, repeat: Infinity }}
      >
        <path d="M 160,240 L 200,90 L 240,240 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
        <circle cx="200" cy="140" r="16" fill="#38bdf8" />
        <path d="M 175,240 L 200,280 L 225,240 Z" fill="#f97316" />
      </motion.g>
    </svg>
  )
}

/* =========================================================================
   4. OLIVER AND THE OCEAN ILLUSTRATIONS
   ========================================================================= */
function OceanIllustration({ className, shouldReduceMotion }: { pageNumber: number; className: string; shouldReduceMotion: boolean }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sea-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      <rect width="400" height="320" fill="url(#sea-bg)" rx="24" />
      <motion.g animate={shouldReduceMotion ? {} : { x: [-40, 420] }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
        <path d="M 0,160 Q 15,150 30,160 L 40,150 L 40,170 Z" fill="#f97316" />
      </motion.g>
      <path d="M 0,260 Q 100,240 200,270 T 400,250 V 320 H 0 Z" fill="#fde047" opacity="0.85" />
    </svg>
  )
}

/* =========================================================================
   5. THE TINY SEED ILLUSTRATIONS
   ========================================================================= */
function SeedIllustration({ pageNumber, className, shouldReduceMotion }: { pageNumber: number; className: string; shouldReduceMotion: boolean }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="320" fill="#fef9c3" rx="24" />
      <rect y="210" width="400" height="110" fill="#78350f" />
      <motion.circle cx="320" cy="70" r="36" fill="#fde047" animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.path
        d={`M 200,210 Q 200,${210 - pageNumber * 25} 200,${210 - pageNumber * 30}`}
        stroke="#16a34a"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* =========================================================================
   6. THE CLOUD THAT COULDN'T SLEEP ILLUSTRATIONS
   ========================================================================= */
function CloudSleepIllustration({ pageNumber: _pageNumber, className, shouldReduceMotion }: { pageNumber: number; className: string; shouldReduceMotion: boolean }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="320" fill="#1e1b4b" rx="24" />
      <motion.g
        animate={shouldReduceMotion ? {} : { x: [0, -25, 25, -10, 0], y: [0, -8, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <circle cx="200" cy="130" r="50" fill="#ffffff" opacity="0.95" />
        <circle cx="160" cy="145" r="38" fill="#f8fafc" />
        <circle cx="244" cy="142" r="40" fill="#f1f5f9" />
      </motion.g>
    </svg>
  )
}

/* =========================================================================
   7. STORY 7: THE LITTLE DOOR IN THE TREE
   ========================================================================= */
function DoorTreeIllustration({ pageNumber, className, shouldReduceMotion }: { pageNumber: number; className: string; shouldReduceMotion: boolean }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dt-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#064e3b" />
          <stop offset="100%" stopColor="#022c22" />
        </linearGradient>
        <radialGradient id="door-glow-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Layer 1: Magical Forest Sky & Ground */}
      <rect width="400" height="320" fill="url(#dt-bg)" rx="24" />
      <rect y="230" width="400" height="90" fill="#065f46" />

      {/* Giant Oak Tree Trunk */}
      <path d="M 120,0 V 320 H 280 V 0 Z" fill="#451a03" />

      {/* Swaying Forest Foliage */}
      <motion.circle
        cx="100"
        cy="50"
        r="70"
        fill="#047857"
        animate={shouldReduceMotion ? {} : { scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="300"
        cy="50"
        r="70"
        fill="#047857"
        animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Tiny Wooden Door at Bottom of Tree */}
      <g transform="translate(180, 210)">
        <rect x="0" y="0" width="40" height="60" rx="20" fill="#78350f" stroke="#fef08a" strokeWidth="2" />
        <circle cx="8" cy="32" r="3" fill="#facc15" />

        {/* Door Glow & Opening on Page 2+ */}
        {pageNumber >= 2 && (
          <motion.circle
            cx="20"
            cy="30"
            r="35"
            fill="url(#door-glow-grad)"
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        )}
      </g>

      {/* Fireflies floating through scene */}
      {[
        { x: 90, y: 160 },
        { x: 310, y: 140 },
        { x: 150, y: 100 },
        { x: 260, y: 180 },
      ].map((ff, i) => (
        <motion.circle
          key={i}
          cx={ff.x}
          cy={ff.y}
          r="4"
          fill="#fef08a"
          animate={
            shouldReduceMotion
              ? { opacity: [0.4, 1, 0.4] }
              : { y: [0, -12, 0], x: [0, 8, 0], opacity: [0.3, 1, 0.3] }
          }
          transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </svg>
  )
}

/* =========================================================================
   8. STORY 8: THE WHALE WHO LOST HIS SONG
   ========================================================================= */
function WhaleSongIllustration({ pageNumber, className, shouldReduceMotion }: { pageNumber: number; className: string; shouldReduceMotion: boolean }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ws-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>

      <rect width="400" height="320" fill="url(#ws-bg)" rx="24" />

      {/* Wally the Whale swimming */}
      <motion.g
        animate={shouldReduceMotion ? {} : { y: [0, -8, 0], x: [0, 6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ellipse cx="200" cy="160" rx="90" ry="48" fill="#1e3a8a" />
        <path d="M 110,160 Q 80,130 60,150 Q 80,170 110,160 Z" fill="#1e3a8a" />
        <circle cx="260" cy="150" r="5" fill="#ffffff" />
        <circle cx="261" cy="150" r="2.5" fill="#0f172a" />
        <path d="M 240,175 Q 260,185 270,170" stroke="#93c5fd" strokeWidth="3" fill="none" strokeLinecap="round" />
      </motion.g>

      {/* Dolphin on Page 3+ */}
      {pageNumber >= 3 && (
        <motion.g
          animate={shouldReduceMotion ? {} : { y: [0, -15, 0], x: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M 290,90 Q 320,70 350,90 Q 330,110 290,90 Z" fill="#cbd5e1" />
        </motion.g>
      )}

      {/* Song Ripple Waves on Page 7 */}
      {pageNumber === 7 && (
        <motion.circle
          cx="270"
          cy="170"
          r="80"
          fill="none"
          stroke="#fef08a"
          strokeWidth="3"
          animate={{ scale: [0.5, 1.4], opacity: [0.8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </svg>
  )
}

/* =========================================================================
   9. STORY 9: THE BALLOON THAT FLEW AWAY
   ========================================================================= */
function BalloonSkyIllustration({ pageNumber, className, shouldReduceMotion }: { pageNumber: number; className: string; shouldReduceMotion: boolean }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bs-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      <rect width="400" height="320" fill="url(#bs-bg)" rx="24" />

      {/* Parallax Clouds */}
      <motion.path
        d="M 20,80 Q 50,60 80,80 Q 100,70 120,85 Q 80,100 20,95 Z"
        fill="#ffffff"
        opacity="0.8"
        animate={shouldReduceMotion ? {} : { x: [-20, 30, -20] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Red Balloon floating */}
      <motion.g
        animate={
          pageNumber === 1
            ? { y: [40, 0] }
            : shouldReduceMotion
            ? {}
            : { y: [0, -18, 0], x: [-6, 6, -6] }
        }
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ellipse cx="200" cy="120" rx="32" ry="40" fill="#f43f5e" />
        <polygon points="200,160 196,166 204,166" fill="#e11d48" />
        <path d="M 200,166 Q 195,190 205,210" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.8" />
      </motion.g>

      {/* Flying Birds */}
      <motion.path
        d="M 80,50 Q 90,40 100,50 Q 110,40 120,50"
        stroke="#1e293b"
        strokeWidth="2"
        fill="none"
        animate={shouldReduceMotion ? {} : { x: [0, 40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </svg>
  )
}

/* =========================================================================
   10. STORY 10: THE GARDEN AT NIGHT
   ========================================================================= */
function GardenNightIllustration({ pageNumber, className, shouldReduceMotion }: { pageNumber: number; className: string; shouldReduceMotion: boolean }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gn-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
      </defs>

      <rect width="400" height="320" fill="url(#gn-bg)" rx="24" />
      <rect y="220" width="400" height="100" fill="#064e3b" />

      {/* Calm Glowing Moon */}
      <motion.circle
        cx="320"
        cy="70"
        r="32"
        fill="#fef08a"
        animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Night Garden Blooming Flowers */}
      {[100, 200, 300].map((x, i) => (
        <g key={x} transform={`translate(${x}, 220)`}>
          <path d="M 0,0 V 40" stroke="#10b981" strokeWidth="4" />
          <motion.circle
            cx="0"
            cy="0"
            r={pageNumber >= 3 ? 16 : 8}
            fill="#ec4899"
            animate={pageNumber >= 3 ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 3 + i }}
          />
        </g>
      ))}

      {/* Blinking Fireflies */}
      {[
        { x: 120, y: 150 },
        { x: 220, y: 130 },
        { x: 280, y: 170 },
      ].map((ff, i) => (
        <motion.circle
          key={i}
          cx={ff.x}
          cy={ff.y}
          r="4"
          fill="#fde047"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
        />
      ))}
    </svg>
  )
}

/* =========================================================================
   11. STORY 11: THE LITTLE TRAIN'S JOURNEY
   ========================================================================= */
function TrainJourneyIllustration({
  pageNumber,
  className,
  shouldReduceMotion,
}: {
  pageNumber: number
  className: string
  shouldReduceMotion: boolean
}) {
  const isNight = pageNumber === 7
  const isSunset = pageNumber === 6
  const isMountain = pageNumber === 5
  const isBridge = pageNumber === 3

  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tj-bg-day" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="tj-bg-sunset" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdba74" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="tj-bg-night" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
      </defs>

      <rect
        width="400"
        height="320"
        fill={isNight ? 'url(#tj-bg-night)' : isSunset ? 'url(#tj-bg-sunset)' : 'url(#tj-bg-day)'}
        rx="24"
      />

      {isNight ? (
        [
          { cx: 80, cy: 50 },
          { cx: 180, cy: 40 },
          { cx: 300, cy: 60 },
          { cx: 340, cy: 100 },
        ].map((s, i) => (
          <motion.circle
            key={i}
            cx={s.cx}
            cy={s.cy}
            r="3"
            fill="#fef08a"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
          />
        ))
      ) : (
        <motion.circle
          cx={isSunset ? 320 : 340}
          cy={isSunset ? 180 : 60}
          r={isSunset ? 36 : 28}
          fill="#fef08a"
          animate={shouldReduceMotion ? {} : { scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      )}

      {isMountain ? (
        <path d="M 0,320 L 150,120 L 280,240 L 400,100 L 400,320 Z" fill="#15803d" />
      ) : (
        <>
          <path d="M 0,220 Q 120,180 250,220 Q 340,240 400,210 V 320 H 0 Z" fill="#16a34a" />
          <path d="M 0,240 Q 150,220 400,245 V 320 H 0 Z" fill="#15803d" />
        </>
      )}

      {isBridge && (
        <g>
          <path d="M 160,240 C 180,270 200,300 220,320 H 300 C 270,300 240,270 220,240 Z" fill="#0284c7" />
          <rect x="140" y="235" width="140" height="15" fill="#78350f" rx="4" />
          <rect x="160" y="250" width="15" height="30" fill="#451a03" />
          <rect x="230" y="250" width="15" height="30" fill="#451a03" />
        </g>
      )}

      <line x1="0" y1="240" x2="400" y2="240" stroke="#475569" strokeWidth="4" />
      <line x1="0" y1="244" x2="400" y2="244" stroke="#334155" strokeWidth="3" />

      <motion.g
        animate={
          shouldReduceMotion
            ? {}
            : isMountain
            ? { x: [0, 40, 0], y: [0, -20, 0] }
            : { x: [-10, 10, -10], y: [0, -2, 0] }
        }
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.circle
          cx="245"
          cy="180"
          r="8"
          fill="#ffffff"
          opacity="0.8"
          animate={shouldReduceMotion ? {} : { y: [-5, -25], opacity: [0.8, 0], scale: [1, 1.8] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        <motion.circle
          cx="255"
          cy="165"
          r="12"
          fill="#ffffff"
          opacity="0.6"
          animate={shouldReduceMotion ? {} : { y: [-5, -30], opacity: [0.6, 0], scale: [1, 2] }}
          transition={{ duration: 2, delay: 0.4, repeat: Infinity }}
        />

        <rect x="140" y="200" width="100" height="38" fill="#0284c7" rx="6" />
        <rect x="140" y="185" width="45" height="53" fill="#0369a1" rx="4" />
        <rect x="225" y="190" width="12" height="12" fill="#334155" />

        <rect x="150" y="193" width="25" height="20" fill="#bae6fd" rx="3" />

        {[160, 195, 225].map((wx, i) => (
          <motion.circle
            key={i}
            cx={wx}
            cy={240}
            r="10"
            fill="#1e293b"
            stroke="#94a3b8"
            strokeWidth="3"
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </motion.g>
    </svg>
  )
}

/* =========================================================================
   12. STORY 12: THE STAR THAT FELL INTO THE GARDEN
   ========================================================================= */
function StarFellIllustration({
  pageNumber,
  className,
  shouldReduceMotion,
}: {
  pageNumber: number
  className: string
  shouldReduceMotion: boolean
}) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sf-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b132b" />
          <stop offset="100%" stopColor="#1c2541" />
        </linearGradient>
        <radialGradient id="star-glow-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
          <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="320" fill="url(#sf-bg)" rx="24" />

      <circle cx="340" cy="65" r="28" fill="#fef08a" />
      <circle cx="330" cy="60" r="24" fill="#0b132b" />

      <path d="M 0,230 Q 150,210 400,240 V 320 H 0 Z" fill="#064e3b" />

      {pageNumber === 1 && (
        <motion.g
          animate={{ x: [0, -120], y: [0, 140], opacity: [1, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeIn' }}
        >
          <circle cx="300" cy="40" r="8" fill="#fde047" />
          <line x1="300" y1="40" x2="330" y2="20" stroke="#fde047" strokeWidth="3" opacity="0.6" />
        </motion.g>
      )}

      {pageNumber >= 2 && pageNumber <= 5 && (
        <g transform="translate(180, 210)">
          <motion.circle
            cx="20"
            cy="20"
            r="35"
            fill="url(#star-glow-grad)"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <path
            d="M 20,5 L 24,15 L 35,16 L 27,24 L 29,35 L 20,29 L 11,35 L 13,24 L 5,16 L 16,15 Z"
            fill="#facc15"
          />
        </g>
      )}

      {pageNumber === 3 &&
        [
          { x: 190, y: 190 },
          { x: 210, y: 150 },
          { x: 240, y: 110 },
          { x: 270, y: 70 },
        ].map((pt, i) => (
          <motion.circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r="4"
            fill="#fde047"
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
            transition={{ duration: 1.8, delay: i * 0.3, repeat: Infinity }}
          />
        ))}

      {pageNumber === 5 && (
        <motion.g
          animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <ellipse cx="100" cy="140" rx="18" ry="24" fill="#78350f" />
          <circle cx="93" cy="132" r="6" fill="#ffffff" />
          <circle cx="107" cy="132" r="6" fill="#ffffff" />
          <circle cx="93" cy="132" r="3" fill="#000000" />
          <circle cx="107" cy="132" r="3" fill="#000000" />
          <polygon points="100,138 97,144 103,144" fill="#f59e0b" />
        </motion.g>
      )}

      {pageNumber === 6 && (
        <motion.g
          animate={{ y: [160, 20], scale: [1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeOut' }}
        >
          <path
            d="M 200,20 L 204,30 L 215,31 L 207,39 L 209,50 L 200,44 L 191,50 L 193,39 L 185,31 L 196,30 Z"
            fill="#facc15"
          />
        </motion.g>
      )}

      {pageNumber === 7 && (
        <motion.path
          d="M 280,40 L 284,50 L 295,51 L 287,59 L 289,70 L 280,64 L 271,70 L 273,59 L 265,51 L 276,50 Z"
          fill="#fef08a"
          animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      )}

      {[
        { x: 100, y: 190 },
        { x: 260, y: 180 },
        { x: 310, y: 220 },
      ].map((ff, i) => (
        <motion.circle
          key={i}
          cx={ff.x}
          cy={ff.y}
          r="3"
          fill="#fde047"
          animate={shouldReduceMotion ? {} : { y: [0, -12, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.5, delay: i * 0.5, repeat: Infinity }}
        />
      ))}
    </svg>
  )
}

function DefaultIllustration({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="320" fill="#ede7f6" rx="24" />
      <circle cx="200" cy="160" r="60" fill="#d4c1ec" />
    </svg>
  )
}
