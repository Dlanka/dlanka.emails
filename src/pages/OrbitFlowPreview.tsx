import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function OrbitFlowPreview() {
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
              <span className="text-xs font-semibold bg-violet-500/10 text-violet-300 border border-violet-500/20 px-3 py-1 rounded-full">
                Marketing Email · MJML
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3 tracking-tight">
                OrbitFlow — Product Launch Email
              </h1>
              <p className="text-slate-400 max-w-2xl leading-relaxed">
                A full-featured SaaS product-launch email built with MJML. Features a dark hero,
                dashboard mockup placeholder, three feature highlights, and dual CTAs.
                Compiled to standalone HTML using the MJML CLI.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-3">
              <a
                href="/dist/emails/orbitflow-launch.html"
                download
                className="bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors text-center whitespace-nowrap"
              >
                Download HTML
              </a>
              <a
                href="/dist/emails/orbitflow-launch.html"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors text-center whitespace-nowrap"
              >
                Open Standalone ↗
              </a>
            </div>
          </div>

          {/* Tech + info strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Authoring format', value: 'MJML' },
              { label: 'Max width', value: '600px' },
              { label: 'Layout', value: 'Single-column' },
              { label: 'Client testing', value: 'Not tested' },
            ].map((item) => (
              <div key={item.label} className="glass rounded-xl p-4">
                <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                <p className="text-white font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Email preview iframe ─────────────────────────────────── */}
      <div className="flex-1 px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
              Browser Preview
            </h2>
            <p className="text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-full">
              ⚠ Browser preview only — not a guarantee of email-client rendering
            </p>
          </div>

          {/* Device frame */}
          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            {/* Browser chrome */}
            <div className="bg-slate-800 px-4 py-3 flex items-center gap-3 border-b border-slate-700">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 bg-slate-700/50 rounded-md px-3 py-1 text-xs text-slate-400 font-mono">
                orbitflow-launch.html — browser preview
              </div>
            </div>

            {/* iframe */}
            <iframe
              src="/dist/emails/orbitflow-launch.html"
              title="OrbitFlow Product Launch Email — browser preview"
              className="w-full bg-white"
              style={{ height: '720px', border: 'none' }}
              sandbox="allow-same-origin"
            />
          </div>

          {/* Source note */}
          <div className="mt-6 glass rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">Source file</h3>
            <p className="text-slate-400 text-sm mb-3">
              The email is authored in MJML and compiled to standalone HTML using{' '}
              <code className="bg-slate-800 px-1.5 py-0.5 rounded text-violet-300 text-xs">
                mjml src/emails/orbitflow-launch.mjml -o dist/emails/orbitflow-launch.html
              </code>
            </p>
            <div className="flex gap-3 text-sm">
              <span className="text-slate-500">MJML source:</span>
              <code className="text-violet-300 font-mono text-xs">src/emails/orbitflow-launch.mjml</code>
            </div>
            <div className="flex gap-3 text-sm mt-1">
              <span className="text-slate-500">Compiled output:</span>
              <code className="text-violet-300 font-mono text-xs">dist/emails/orbitflow-launch.html</code>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
