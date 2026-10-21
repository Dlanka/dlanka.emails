import { siteConfig } from '../config/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-800 bg-[#060d1f]">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <p className="font-bold text-white">
              <span className="text-violet-400">✦</span> Darshaka Lanka
            </p>
            <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md bg-violet-500/20 text-violet-300 border border-violet-500/40 font-mono">
              Emails
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Senior Frontend &amp; Email Developer
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <a
            href={siteConfig.contact.mainPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition-colors"
          >
            Main Portfolio ↗
          </a>
          <a
            href={siteConfig.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-slate-600 text-xs">
          © {year} Darshaka Lanka. All samples are fictional demo work.
        </p>
      </div>
    </footer>
  )
}

