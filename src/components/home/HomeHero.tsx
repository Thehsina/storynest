import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#eadcf8]/70 blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-[#ffe4cc]/80 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-[#d4ede4]/60 blur-3xl" />
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-[#eadcf8] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7d6b9a] shadow-sm backdrop-blur-sm">
            <img src="/logo-mark.png" alt="" className="h-6 w-6 object-contain" />
            StoryNest originals
          </p>

          <div className="space-y-5">
            <h1 className="font-display max-w-xl text-4xl leading-[1.2] pb-1 font-semibold tracking-tight text-[#2a2238] sm:text-5xl lg:text-6xl">
              Big stories for little imaginations.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-[#5c536c] sm:text-xl">
              Discover magical stories made to read, listen to, and explore.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button to="/stories" size="lg" className="shadow-lg shadow-[#7c6bcf]/20">
              Explore Stories
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <p className="text-sm text-[#7a7088]">
              Gentle adventures for ages 3–8 · Read aloud or tap to explore
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_24px_60px_-20px_rgba(84,62,120,0.25)] ring-1 ring-[#eadcf8]">
            <HeroScene />
            <motion.div
              aria-hidden
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-6 top-6 rounded-2xl bg-white/90 px-4 py-3 text-sm shadow-md backdrop-blur-sm"
            >
              <p className="font-semibold text-[#2f2840]">Tonight&apos;s pick</p>
              <p className="text-[#6d6280]">The Little Moon</p>
            </motion.div>
            <motion.div
              aria-hidden
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-6 right-6 rounded-2xl bg-[#2f2840]/85 px-4 py-3 text-sm text-white shadow-lg backdrop-blur-sm"
            >
              Tap the pictures as you read
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function HeroScene() {
  return (
    <svg viewBox="0 0 640 480" className="h-auto w-full" aria-hidden>
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3e8ff" />
          <stop offset="55%" stopColor="#c7d2fe" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </linearGradient>
        <linearGradient id="hero-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8e0d2" />
          <stop offset="100%" stopColor="#8ecae6" />
        </linearGradient>
      </defs>
      <rect width="640" height="480" fill="url(#hero-sky)" rx="28" />
      {[
        [80, 70],
        [160, 45],
        [520, 60],
        [580, 110],
        [420, 40],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" fill="#fff" opacity="0.85" />
      ))}
      <circle cx="500" cy="95" r="48" fill="#fff7e6" />
      <circle cx="488" cy="88" r="38" fill="#fde68a" opacity="0.85" />
      <path
        d="M0 320 C140 260 240 340 360 300 S560 280 640 310 V480 H0 Z"
        fill="url(#hero-hill)"
      />
      <path
        d="M0 360 C120 330 220 380 340 350 S520 340 640 360 V480 H0 Z"
        fill="#95d5b2"
        opacity="0.65"
      />
      <g transform="translate(120 210)">
        <rect x="0" y="40" width="120" height="90" rx="10" fill="#ffe8d6" />
        <path d="M0 40 L60 0 L120 40 Z" fill="#ffd6a5" />
        <rect x="48" y="78" width="24" height="52" rx="6" fill="#fff5eb" />
        <rect x="18" y="62" width="22" height="22" rx="6" fill="#fffaf5" opacity="0.9" />
        <rect x="80" y="62" width="22" height="22" rx="6" fill="#fffaf5" opacity="0.9" />
      </g>
      <g transform="translate(380 170)">
        <ellipse cx="70" cy="120" rx="95" ry="24" fill="#cdb4db" opacity="0.35" />
        <path
          d="M20 95 C40 40 100 40 120 95 C140 40 200 40 220 95 C240 55 280 55 300 95 C310 110 290 125 260 125 H60 C35 125 15 110 20 95 Z"
          fill="#fff"
          opacity="0.95"
        />
        <circle cx="95" cy="88" r="8" fill="#ffd6e0" />
        <circle cx="165" cy="92" r="6" fill="#bde0fe" />
      </g>
      <g transform="translate(250 120)">
        <rect x="20" y="30" width="110" height="14" rx="7" fill="#8b5e34" />
        <path
          d="M75 44 V95 C75 120 55 130 55 150"
          stroke="#588157"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="55" cy="150" r="28" fill="#ffd60a" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse
            key={deg}
            cx="55"
            cy="150"
            rx="8"
            ry="18"
            fill="#ffe066"
            transform={`rotate(${deg} 55 150)`}
          />
        ))}
      </g>
    </svg>
  )
}
