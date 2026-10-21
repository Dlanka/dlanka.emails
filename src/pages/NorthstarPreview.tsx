import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function NorthstarPreview() {
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
              <span className="text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-3 py-1 rounded-full">
                HTML Signature · Email-safe
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3 tracking-tight">
                Northstar Studio — Email Signature
              </h1>
              <p className="text-slate-400 max-w-2xl leading-relaxed">
                A compact, professional HTML email signature using table-based layout and full
                inline CSS. Includes a circular headshot, dual Instagram links, an optional
                banner, and a plain-text fallback.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-3">
              <a
                href="/dist/signatures/northstar-signature.html"
                download
                className="bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors text-center whitespace-nowrap"
              >
                Download HTML
              </a>
              <a
                href="/dist/signatures/northstar-signature.txt"
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
              { label: 'Max width', value: '560px' },
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

      <div className="flex-1 px-6 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-4 flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
              Browser Preview
            </h2>
            <p className="text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-full">
              ⚠ Browser preview only — images shown as placeholders until hosted over HTTPS
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
                northstar-signature.html — browser preview
              </div>
            </div>
            <div className="bg-white p-8 flex items-start justify-center min-h-48">
              <iframe
                src="/dist/signatures/northstar-signature.html"
                title="Northstar Studio email signature — browser preview"
                className="w-full"
                style={{ height: '280px', border: 'none', maxWidth: '600px' }}
                sandbox="allow-same-origin"
              />
            </div>
          </div>

          {/* Gmail installation guide */}
          <div className="mt-8 glass rounded-xl p-6">
            <h3 className="text-white font-bold text-lg mb-4">
              Installing in Gmail
            </h3>
            <ol className="space-y-3 text-sm text-slate-400">
              {[
                'Open Gmail and click the ⚙ Settings gear → "See all settings".',
                'Scroll to the "Signature" section and click "+ Create new".',
                'Give your signature a name (e.g., "Northstar Studio").',
                'Click the "< >" (insert HTML) icon in the signature editor toolbar.',
                'Paste the contents of dist/signatures/northstar-signature.html into the HTML editor.',
                'Replace all placeholder image src attributes with absolute HTTPS URLs before saving.',
                'Click "Save Changes" at the bottom of the Settings page.',
                'Compose a new email to verify the signature renders correctly.',
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 text-violet-300 text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-5 p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl">
              <p className="text-amber-300 text-sm font-semibold mb-1">⚠ Important before deploying</p>
              <p className="text-slate-400 text-sm">
                All images in the signature source use placeholder URLs from{' '}
                <code className="text-violet-300 bg-slate-800 px-1 py-0.5 rounded text-xs">placehold.co</code>.
                Replace every <code className="text-violet-300 bg-slate-800 px-1 py-0.5 rounded text-xs">src</code> attribute
                with an absolute HTTPS URL to a publicly hosted image before real-world use.
              </p>
            </div>

            <div className="mt-4">
              <p className="text-slate-500 text-xs font-semibold mb-2">Files</p>
              <div className="space-y-1 text-xs font-mono">
                <div className="flex gap-3"><span className="text-slate-500">Source:</span><span className="text-violet-300">src/signatures/northstar-signature.html</span></div>
                <div className="flex gap-3"><span className="text-slate-500">Dist:</span><span className="text-violet-300">dist/signatures/northstar-signature.html</span></div>
                <div className="flex gap-3"><span className="text-slate-500">Plain text:</span><span className="text-violet-300">dist/signatures/northstar-signature.txt</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
