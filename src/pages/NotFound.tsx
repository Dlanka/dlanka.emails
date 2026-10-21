import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-8xl font-black text-violet-500/20 mb-4">404</p>
          <h1 className="text-2xl font-bold text-white mb-3">Page not found</h1>
          <p className="text-slate-400 mb-8">The page you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
