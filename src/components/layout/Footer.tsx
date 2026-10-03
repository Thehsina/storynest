import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="mt-12 border-t border-[#eadcf8]/80 bg-[#fffaf5] py-8">
      <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <Link to="/" className="inline-flex items-center gap-3">
          <img
            src="/logo-mark.png"
            alt="StoryNest Logo"
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain transition-transform hover:scale-105 filter drop-shadow-sm"
          />
          <span className="font-display text-xl sm:text-2xl font-bold text-[#2f2840]">
            StoryNest
          </span>
        </Link>

        <p className="text-xs text-[#8b7aa8]">
          © {new Date().getFullYear()} StoryNest. Simple magical stories for children.
        </p>
      </div>
    </footer>
  )
}
