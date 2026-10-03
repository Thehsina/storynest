import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="mt-12 border-t border-[#eadcf8]/80 bg-[#fffaf5] py-8">
      <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <Link to="/" className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#7c6bcf] text-white shadow-sm">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
          </span>
          <span className="font-display text-lg font-bold text-[#2f2840]">
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
