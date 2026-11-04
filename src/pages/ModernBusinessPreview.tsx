import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function ModernBusinessPreview() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-24 pb-8 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors mb-8"
          >
            ← Back to Portfolio
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-semibold bg-orange-500/10 text-orange-300 border border-orange-500/20 px-3 py-1 rounded-full">
                HTML Signature · Modern Executive
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3 tracking-tight">
                Modern Business — Executive Email Signature
              </h1>
              <p className="text-slate-400 max-w-2xl leading-relaxed">
                A warm, sophisticated two-tier corporate email signature built with bulletproof HTML tables.
                Features a soft blush header with a circular avatar frame, bold typographic identity with custom
                horizontal rules, and a terracotta contact section with a 2×2 icon grid.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-3">
              <a
                href="/dist/signatures/modern-business.html"
                download
                className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors text-center whitespace-nowrap"
              >
                Download HTML
              </a>
              <a
                href="/dist/signatures/modern-business.txt"
                download
                className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors text-center whitespace-nowrap"
              >
                Download Plain Text
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Layout', value: 'HTML Tables' },
              { label: 'Styling', value: 'Inline CSS only' },
              { label: 'Palette', value: 'Blush & Terracotta' },
              { label: 'Assets', value: 'Hosted HTTPS ✓' },
            ].map((item) => (
              <div key={item.label} className="glass rounded-xl p-4">
                <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                <p className="font-semibold text-sm text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-4 flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
              Browser Preview
            </h2>
            <p className="text-xs text-orange-400 bg-orange-400/10 border border-orange-400/20 px-3 py-1.5 rounded-full">
              ✓ Uses production HTTPS-hosted assets
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <div className="bg-slate-800 px-4 py-3 flex items-center gap-3 border-b border-slate-700">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 bg-slate-700/50 rounded-md px-3 py-1 text-xs text-slate-400 font-mono">
                modern-business.html — browser preview
              </div>
            </div>
            <div className="bg-slate-950/60 p-8 flex items-center justify-center min-h-64">
              <iframe
                src="/dist/signatures/modern-business.html"
                title="Modern Business email signature — browser preview"
                className="w-full bg-white rounded-lg shadow-xl"
                style={{ height: '250px', border: 'none', maxWidth: '440px' }}
                sandbox="allow-same-origin"
              />
            </div>
          </div>

          {/* Installation guide */}
          <div className="mt-8 glass rounded-xl p-6">
            <h3 className="text-white font-bold text-lg mb-4">
              Installing in Gmail / Outlook
            </h3>
            <ol className="space-y-3 text-sm text-slate-400">
              {[
                'Open the downloaded modern-business.html file in Google Chrome or any web browser.',
                'Select all content on the page (Ctrl + A on Windows / Cmd + A on Mac) and copy it (Ctrl + C / Cmd + C).',
                'Open Gmail Settings → "See all settings" → Scroll down to "Signature" → Click "+ Create new".',
                'Click inside the signature editor box and paste directly (Ctrl + V / Cmd + V).',
                'The blush and terracotta blocks, circular avatar, bold title rules, and contact rows will render instantly.',
                'Scroll down to the bottom and click "Save Changes".',
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 border-t border-slate-800 pt-4">
              <p className="text-slate-500 text-xs font-semibold mb-2">Files &amp; Assets</p>
              <div className="space-y-1 text-xs font-mono">
                <div className="flex gap-3"><span className="text-slate-500">Source:</span><span className="text-orange-300">src/signatures/modern-business.html</span></div>
                <div className="flex gap-3"><span className="text-slate-500">Dist:</span><span className="text-orange-300">dist/signatures/modern-business.html</span></div>
                <div className="flex gap-3"><span className="text-slate-500">Plain text:</span><span className="text-orange-300">dist/signatures/modern-business.txt</span></div>
                <div className="flex gap-3"><span className="text-slate-500">Assets:</span><span className="text-orange-300">HTTPS Hosted (Direct CDN)</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
