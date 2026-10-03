import { motion } from 'framer-motion'

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
  switch (storyId) {
    case 'little-moon':
      return <LittleMoonIllustration pageNumber={pageNumber} className={className} />
    case 'lost-bear':
      return <LostBearIllustration pageNumber={pageNumber} className={className} />
    case 'mia-goes-to-space':
      return <MiaSpaceIllustration pageNumber={pageNumber} className={className} />
    case 'oliver-and-the-ocean':
      return <OceanIllustration pageNumber={pageNumber} className={className} />
    case 'the-tiny-seed':
      return <SeedIllustration pageNumber={pageNumber} className={className} />
    case 'cloud-couldnt-sleep':
      return <CloudSleepIllustration pageNumber={pageNumber} className={className} />
    default:
      return <DefaultIllustration className={className} />
  }
}

/* =========================================================================
   1. THE LITTLE MOON ILLUSTRATIONS
   ========================================================================= */
function LittleMoonIllustration({ pageNumber, className }: { pageNumber: number; className: string }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lm-sky-1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
        <radialGradient id="moon-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sky Background */}
      <rect width="400" height="320" fill="url(#lm-sky-1)" rx="24" />

      {/* Ambient Twinkling Stars */}
      {[
        { x: 30, y: 40 },
        { x: 110, y: 30 },
        { x: 210, y: 55 },
        { x: 320, y: 35 },
        { x: 370, y: 80 },
        { x: 70, y: 90 },
      ].map((star, i) => (
        <motion.circle
          key={i}
          cx={star.x}
          cy={star.y}
          r={1.8 + (i % 2)}
          fill="#fef3c7"
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Page 1: Moon peeking over hillside */}
      {pageNumber === 1 && (
        <>
          {/* Gentle Cloud drifting */}
          <motion.path
            d="M 60,65 Q 85,45 110,65 Q 130,55 145,70 Q 120,85 70,80 Z"
            fill="#e0e7ff"
            opacity="0.25"
            animate={{ x: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Little Moon peeking & glowing */}
          <motion.g
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <circle cx="300" cy="70" r="38" fill="url(#moon-glow)" />
            <circle cx="300" cy="70" r="26" fill="#fef08a" />
            <circle cx="290" cy="64" r="20" fill="#1e1b4b" />
          </motion.g>

          {/* Sleepy Hillside */}
          <path d="M 0,220 Q 150,170 400,210 V 320 H 0 Z" fill="#1e293b" />
          <path d="M 0,250 Q 200,210 400,240 V 320 H 0 Z" fill="#0f172a" />
        </>
      )}

      {/* Page 2: Eli looking out window */}
      {pageNumber === 2 && (
        <>
          <path d="M 0,200 Q 200,160 400,200 V 320 H 0 Z" fill="#0f172a" />
          {/* House Window */}
          <rect x="220" y="110" width="110" height="130" rx="12" fill="#fef3c7" opacity="0.9" />
          <rect x="230" y="120" width="42" height="52" rx="4" fill="#38bdf8" opacity="0.4" />
          <rect x="278" y="120" width="42" height="52" rx="4" fill="#38bdf8" opacity="0.4" />
          <rect x="230" y="178" width="42" height="52" rx="4" fill="#38bdf8" opacity="0.4" />
          <rect x="278" y="178" width="42" height="52" rx="4" fill="#38bdf8" opacity="0.4" />

          {/* Eli Silhouette turning toward window */}
          <motion.g animate={{ rotate: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <circle cx="150" cy="190" r="22" fill="#fbbf24" />
            <path d="M 120,240 Q 150,210 180,240 Z" fill="#3b82f6" />
          </motion.g>
        </>
      )}

      {/* Page 3: Moon shining silver dew path */}
      {pageNumber === 3 && (
        <>
          {/* Silver Dew Path glowing across grass */}
          <motion.path
            d="M 290,90 Q 200,180 80,320 H 160 Q 250,200 310,90 Z"
            fill="#e0e7ff"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Glowing Silver Moon */}
          <motion.g animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity }}>
            <circle cx="300" cy="70" r="45" fill="url(#moon-glow)" />
            <circle cx="300" cy="70" r="30" fill="#fef08a" />
          </motion.g>

          <path d="M 0,230 Q 200,190 400,230 V 320 H 0 Z" fill="#0f172a" opacity="0.8" />
        </>
      )}

      {/* Page 4: Mitten under oak tree */}
      {pageNumber === 4 && (
        <>
          {/* Old Oak Tree */}
          <path d="M 70,320 Q 90,160 50,110 Q 120,130 160,80 Q 200,140 280,110 Q 240,200 250,320 Z" fill="#1e293b" />
          {/* Blue Mitten glowing under tree */}
          <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <rect x="150" y="250" width="24" height="28" rx="8" fill="#38bdf8" />
            <circle cx="144" cy="262" r="7" fill="#38bdf8" />
          </motion.g>
        </>
      )}

      {/* Page 5: Moon smiling over town */}
      {(pageNumber >= 5 || pageNumber < 1) && (
        <>
          {/* Sleeping Town Silhouettes */}
          <path d="M 30,320 V 220 H 70 V 320 M 80,320 V 240 H 130 V 320 M 240,320 V 230 H 290 V 320 M 300,320 V 210 H 360 V 320" fill="#0f172a" />
          {/* Smiling Moon settled in sky */}
          <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <circle cx="200" cy="80" r="48" fill="url(#moon-glow)" />
            <circle cx="200" cy="80" r="32" fill="#fef08a" />
            <path d="M 190,88 Q 200,98 210,88" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
          </motion.g>
        </>
      )}
    </svg>
  )
}

/* =========================================================================
   2. THE LOST BEAR ILLUSTRATIONS
   ========================================================================= */
function LostBearIllustration({ pageNumber, className }: { pageNumber: number; className: string }) {
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

      {/* Page 1: Barney sitting on bench */}
      {pageNumber === 1 && (
        <>
          {/* Park Bench */}
          <rect x="130" y="170" width="140" height="16" rx="8" fill="#b45309" />
          <rect x="145" y="186" width="10" height="40" fill="#78350f" />
          <rect x="245" y="186" width="10" height="40" fill="#78350f" />

          {/* Barney the Bear */}
          <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <circle cx="200" cy="155" r="32" fill="#d97706" />
            <circle cx="178" cy="132" r="12" fill="#d97706" />
            <circle cx="222" cy="132" r="12" fill="#d97706" />
            <circle cx="192" cy="150" r="4" fill="#451a03" />
            <circle cx="208" cy="150" r="4" fill="#451a03" />
          </motion.g>

          {/* Hopping Bunny */}
          <motion.g animate={{ y: [0, -14, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}>
            <circle cx="80" cy="235" r="14" fill="#ffffff" />
            <ellipse cx="76" cy="214" rx="4" ry="12" fill="#ffffff" />
            <ellipse cx="84" cy="214" rx="4" ry="12" fill="#ffffff" />
          </motion.g>
        </>
      )}

      {/* Page 2: Pip the Squirrel scampering down */}
      {pageNumber === 2 && (
        <>
          {/* Oak Tree Trunk */}
          <path d="M 320,0 V 320 H 400 V 0 Z" fill="#78350f" />
          {/* Pip the Squirrel scampering down */}
          <motion.g animate={{ y: [0, 25, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
            <ellipse cx="295" cy="120" rx="14" ry="20" fill="#c2410c" />
            <circle cx="295" cy="96" r="12" fill="#c2410c" />
            <path d="M 305,120 Q 340,110 325,140" stroke="#c2410c" strokeWidth="8" fill="none" strokeLinecap="round" />
          </motion.g>
        </>
      )}

      {/* Page 3: Yellow ribbon & footprint trail */}
      {pageNumber === 3 && (
        <>
          {/* Trail of footprints */}
          {[60, 120, 180, 240, 300].map((x, i) => (
            <motion.ellipse
              key={x}
              cx={x}
              cy={250 + (i % 2) * 12}
              rx="6"
              ry="4"
              fill="#b45309"
              opacity="0.6"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 1.8, delay: i * 0.3, repeat: Infinity }}
            />
          ))}

          {/* Yellow Ribbon on Fence */}
          <motion.path
            d="M 320,170 Q 335,160 345,175 Q 330,190 320,170 Z"
            fill="#facc15"
            animate={{ rotate: [-6, 6, -6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </>
      )}

      {/* Page 4 & 5: Noa & Barney Hug / Happy Ending */}
      {(pageNumber >= 4 || pageNumber < 1) && (
        <>
          <rect x="230" y="100" width="130" height="150" rx="12" fill="#60a5fa" />
          <rect x="270" y="150" width="50" height="100" rx="4" fill="#1e3a8a" />
          {/* Noa hugging Barney */}
          <motion.g animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            <circle cx="170" cy="170" r="26" fill="#fde047" />
            <circle cx="185" cy="180" r="20" fill="#d97706" />
          </motion.g>
        </>
      )}
    </svg>
  )
}

/* =========================================================================
   3. MIA GOES TO SPACE ILLUSTRATIONS
   ========================================================================= */
function MiaSpaceIllustration({ pageNumber, className }: { pageNumber: number; className: string }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="320" fill="#0f172a" rx="24" />

      {/* Stars in Space */}
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

      {/* Rocket Component (Animates lift off on page 2) */}
      <motion.g
        animate={
          pageNumber === 2
            ? { y: [0, -80, -180], x: [0, 4, -4, 0] }
            : { y: [0, -6, 0] }
        }
        transition={
          pageNumber === 2
            ? { duration: 4, repeat: Infinity, ease: 'easeIn' }
            : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <path d="M 160,240 L 200,90 L 240,240 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
        <circle cx="200" cy="140" r="16" fill="#38bdf8" />
        <path d="M 175,240 L 200,280 L 225,240 Z" fill="#f97316" />
      </motion.g>

      {/* Page 3 & 4: Rotating Planets */}
      {(pageNumber === 3 || pageNumber === 4) && (
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
          <circle cx="310" cy="90" r="28" fill="#f59e0b" />
          <ellipse cx="310" cy="90" rx="44" ry="8" fill="none" stroke="#fbbf24" strokeWidth="4" />
        </motion.g>
      )}
    </svg>
  )
}

/* =========================================================================
   4. OLIVER AND THE OCEAN ILLUSTRATIONS
   ========================================================================= */
function OceanIllustration({ pageNumber, className }: { pageNumber: number; className: string }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sea-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      <rect width="400" height="320" fill="url(#sea-bg)" rx="24" />

      {/* Swimming Fish */}
      <motion.g
        animate={{ x: [-40, 420] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
      >
        <path d="M 0,160 Q 15,150 30,160 L 40,150 L 40,170 Z" fill="#f97316" />
        <circle cx="22" cy="157" r="2" fill="#ffffff" />
      </motion.g>

      {/* Dolphin Jumping (Page 3) */}
      {pageNumber === 3 && (
        <motion.g
          animate={{ y: [40, -60, 40], x: [80, 220, 320], rotate: [-20, 20, 40] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M 0,200 Q 30,160 70,180 Q 50,210 0,200 Z" fill="#e0e7ff" />
        </motion.g>
      )}

      {/* Sea Floor / Coral */}
      <path d="M 0,260 Q 100,240 200,270 T 400,250 V 320 H 0 Z" fill="#fde047" opacity="0.85" />
    </svg>
  )
}

/* =========================================================================
   5. THE TINY SEED ILLUSTRATIONS
   ========================================================================= */
function SeedIllustration({ pageNumber, className }: { pageNumber: number; className: string }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="320" fill="#fef9c3" rx="24" />
      <rect y="210" width="400" height="110" fill="#78350f" />

      {/* Sun in sky */}
      <motion.circle
        cx="320"
        cy="70"
        r="36"
        fill="#fde047"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Plant Growth Sequence */}
      <motion.g animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>
        {/* Stem */}
        <path
          d={`M 200,210 Q 200,${210 - pageNumber * 25} 200,${210 - pageNumber * 30}`}
          stroke="#16a34a"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Flower Opening on Page 4 & 5 */}
        {pageNumber >= 4 && (
          <g transform={`translate(200, ${210 - pageNumber * 30})`}>
            <circle cx="0" cy="0" r="20" fill="#facc15" />
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <ellipse key={deg} cx="0" cy="-24" rx="8" ry="18" fill="#f43f5e" transform={`rotate(${deg})`} />
            ))}
          </g>
        )}
      </motion.g>
    </svg>
  )
}

/* =========================================================================
   6. THE CLOUD THAT COULDN'T SLEEP ILLUSTRATIONS
   ========================================================================= */
function CloudSleepIllustration({ pageNumber, className }: { pageNumber: number; className: string }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="320" fill="#1e1b4b" rx="24" />

      {/* Restless Cloud moving */}
      <motion.g
        animate={
          pageNumber === 5
            ? { x: [0, 10, 0], y: [0, 2, 0] } // Quiet calm sleep on page 5
            : { x: [0, -25, 25, -10, 0], y: [0, -8, 8, 0] }
        }
        transition={{ duration: pageNumber === 5 ? 6 : 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <circle cx="200" cy="130" r="50" fill="#ffffff" opacity="0.95" />
        <circle cx="160" cy="145" r="38" fill="#f8fafc" />
        <circle cx="244" cy="142" r="40" fill="#f1f5f9" />
      </motion.g>

      {/* Moon floating close on Page 3-5 */}
      {pageNumber >= 3 && (
        <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <circle cx="310" cy="80" r="32" fill="#fef08a" />
        </motion.g>
      )}
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
