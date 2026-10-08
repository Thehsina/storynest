import { BookOpen, Heart } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#eadcf8]/70 bg-[#faf6f0]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        <NavLink to="/" className="group inline-flex items-center gap-2 sm:gap-3 shrink-0">
          <img
            src="/logo-mark.png"
            alt="StoryNest Logo"
            className="h-8 w-8 sm:h-11 sm:w-11 object-contain transition-transform group-hover:scale-105 filter drop-shadow-md"
          />
          <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#2f2840]">
            StoryNest
          </span>
        </NavLink>

        <nav aria-label="Main navigation" className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-semibold transition-colors ${
                isActive
                  ? 'bg-white text-[#2f2840] shadow-sm ring-1 ring-[#eadcf8]'
                  : 'text-[#5c536c] hover:bg-white/70 hover:text-[#2f2840]'
              }`
            }
          >
            <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
            <span>Stories</span>
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-semibold transition-colors ${
                isActive
                  ? 'bg-white text-[#2f2840] shadow-sm ring-1 ring-[#eadcf8]'
                  : 'text-[#5c536c] hover:bg-white/70 hover:text-[#2f2840]'
              }`
            }
          >
            <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
            <span>Favorites</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
