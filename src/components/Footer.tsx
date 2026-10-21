import { siteConfig } from '../config/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-800 bg-[#060d1f]">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-bold text-white">
            <span className="text-violet-400">✦</span> Madebywimu
          </p>
          <p className="text-slate-500 text-sm mt-1">
            Freelance Email Developer
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <a
            href={siteConfig.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Twitter
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
          © {year} Madebywimu. All samples are fictional demo work.
        </p>
      </div>
    </footer>
  )
}

