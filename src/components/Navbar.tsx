import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-violet-900/20">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-lg tracking-tight text-white hover:text-violet-300 transition-colors"
        >
          <span className="text-violet-400">✦</span> Madebywimu
        </Link>
        <div className="flex items-center gap-6">
          <a
            href="/#projects"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="/#stack"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            Stack
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  )
}

