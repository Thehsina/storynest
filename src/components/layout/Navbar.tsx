import { BookOpen, Heart, Sparkles } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#eadcf8]/70 bg-[#faf6f0]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="group inline-flex items-center gap-2.5">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#7c6bcf] text-white shadow-md transition-transform group-hover:scale-105">
            <Sparkles className="h-4 w-4" aria-hidden />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-[#2f2840]">
            StoryNest
          </span>
        </NavLink>

        <nav aria-label="Main navigation" className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? 'bg-white text-[#2f2840] shadow-sm ring-1 ring-[#eadcf8]'
                  : 'text-[#5c536c] hover:bg-white/70 hover:text-[#2f2840]'
              }`
            }
          >
            <BookOpen className="h-4 w-4" aria-hidden />
            <span>Stories</span>
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? 'bg-white text-[#2f2840] shadow-sm ring-1 ring-[#eadcf8]'
                  : 'text-[#5c536c] hover:bg-white/70 hover:text-[#2f2840]'
              }`
            }
          >
            <Heart className="h-4 w-4" aria-hidden />
            <span>Favorites</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
