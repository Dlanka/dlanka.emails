import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ProjectCard } from '../components/ProjectCard'
import { siteConfig } from '../config/site'

const stackItems = [
  { icon: '📧', name: 'MJML', desc: 'Component-based email templating that compiles to responsive HTML.' },
  { icon: '🎨', name: 'HTML + CSS', desc: 'Table-based layouts, inline CSS, and conservative email-safe styling.' },
  { icon: '⚛️', name: 'React + TypeScript', desc: 'Portfolio UI built with Vite, React, and full TypeScript coverage.' },
  { icon: '🌊', name: 'Tailwind CSS v4', desc: 'Utility-first styling with the latest Oxide engine.' },
  { icon: '☁️', name: 'Cloudflare Pages', desc: 'Blazing-fast global CDN deployment with zero cold starts.' },
  { icon: '🔍', name: 'Email Validation', desc: 'Custom scripts to verify compiled HTML output integrity.' },
]

const workflowSteps = [
  {
    step: '01',
    title: 'Design Review',
    desc: 'Analyse client design files, identify email-compatible patterns, and flag any unsupported CSS early.',
  },
  {
    step: '02',
    title: 'MJML Authoring',
    desc: 'Build responsive email structure using MJML components — no layout guesswork, clean semantic output.',
  },
  {
    step: '03',
    title: 'Compile & Validate',
    desc: 'Compile MJML to standalone HTML, run validation scripts, and confirm all links, content, and assets.',
  },
  {
    step: '04',
    title: 'Preview & Deliver',
    desc: 'Browser preview, documented source files, and delivery-ready HTML — ready to drop into any ESP.',
  },
]

export function HomePage() {
  const signatureProjects = siteConfig.projects.filter((p) => p.category === 'HTML Signature')

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-700/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Open to new projects
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Email experiences{' '}
            <span className="text-gradient">built for the inbox.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Freelance email developer specialising in{' '}
            <span className="text-slate-200 font-medium">MJML</span>,{' '}
            <span className="text-slate-200 font-medium">responsive HTML emails</span>,{' '}
            <span className="text-slate-200 font-medium">HTML signatures</span>, and pixel-perfect
            design-to-HTML implementation — built for real email clients, not just browsers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-500/25 text-center"
            >
              View Projects
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="w-full sm:w-auto border border-slate-700 hover:border-violet-500/50 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─────────────────────────────────────────────── */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Portfolio Samples
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Production-quality email work
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl">
              All samples are fully implemented with working source files, compiled HTML, and
              browser previews. Browser preview does not guarantee identical rendering in every
              email client.
            </p>
          </div>

          {/* Featured Showcase: Marketing Email */}
          <div className="mb-14">
            <div className="glass rounded-2xl overflow-hidden border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Left Preview Column */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#0f0f23] via-[#161233] to-[#1e1b4b] p-6 sm:p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-800">
                  <div className="w-full max-w-[340px] rounded-xl overflow-hidden shadow-2xl border border-violet-900/40">
                    {/* Mock email top bar */}
                    <div className="bg-[#0f0f23] px-5 py-3 text-center border-b border-violet-900/30">
                      <span className="text-violet-400 font-bold text-lg">◎</span>
                      <span className="text-white font-bold text-lg ml-1">OrbitFlow</span>
                    </div>
                    <div className="bg-[#0f0f23] px-5 py-4 text-center">
                      <p className="text-violet-400 text-[10px] font-semibold tracking-widest mb-1">PRODUCT LAUNCH</p>
                      <p className="text-white font-bold text-base leading-tight mb-2">
                        Your workflow,<br />
                        <span className="text-violet-400">supercharged.</span>
                      </p>
                      <p className="text-slate-400 text-[11px] leading-relaxed mb-3">
                        OrbitFlow 2.0 is here. AI-powered insights &amp; real-time team sync.
                      </p>
                      <span className="bg-violet-600 text-white text-[11px] font-semibold px-4 py-1.5 rounded-lg inline-block">
                        Start Free — No Card Required
                      </span>
                    </div>
                    <div className="bg-[#1e1b4b] py-3 text-center border-y border-violet-900/30">
                      <span className="text-violet-300 text-xs opacity-75 font-mono">[ 2-Column Responsive Feature Grid ]</span>
                    </div>
                    <div className="bg-white p-4">
                      <div className="flex items-start gap-2.5 mb-2">
                        <span className="text-lg">🤖</span>
                        <div>
                          <p className="text-slate-900 text-xs font-bold leading-tight">AI Project Intelligence</p>
                          <p className="text-slate-500 text-[10px] leading-tight">Predict delivery dates with machine precision.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="text-lg">⚡</span>
                        <div>
                          <p className="text-slate-900 text-xs font-bold leading-tight">Real-Time Team Sync</p>
                          <p className="text-slate-500 text-[10px] leading-tight">Live presence indicators &amp; conflict-free editing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Details Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                        Featured • Marketing Email
                      </span>
                      <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded">
                        MJML 4.x
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      OrbitFlow — Product Launch Email
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                      A full-featured SaaS product-launch email built with MJML. Engineered for high conversion
                      with responsive single- and two-column layouts, Outlook VML fallbacks, and bulletproof CTA buttons.
                    </p>

                    {/* Highlights bullet points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                      <div className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span><strong className="text-white">mj-group:</strong> Side-by-side columns that never break on mobile</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span><strong className="text-white">VML Fallback:</strong> Bulletproof CTA buttons for Outlook 2016–2021</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span><strong className="text-white">Dark Mode:</strong> Color inverted gracefully with meta scheme tags</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span><strong className="text-white">Self-contained:</strong> Standalone HTML with alt text &amp; demo footer</span>
                      </div>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {['MJML', 'HTML', 'Inline CSS', 'Responsive', 'Outlook-tested'].map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-slate-800/80 text-slate-300 px-3 py-1 rounded-md font-mono border border-slate-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800">
                    <Link
                      to="/preview/orbitflow"
                      className="w-full sm:w-auto flex-1 text-center bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-500/25"
                    >
                      Open Live Browser Preview &amp; Spec →
                    </Link>
                    <a
                      href="https://github.com/Dlanka/dlanka.emails/blob/main/src/emails/orbitflow-launch.mjml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center border border-slate-700 hover:border-violet-500/50 text-slate-300 hover:text-white text-sm font-medium px-5 py-3 rounded-xl transition-colors"
                    >
                      View Source (MJML)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Corporate Email Signatures */}
          <div>
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-1">
                  Corporate &amp; Executive
                </p>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  HTML Email Signatures
                </h3>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Table-based • Inline CSS • Image-blocked fallbacks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {signatureProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i + 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STACK ────────────────────────────────────────────────── */}
      <section id="stack" className="py-20 px-6 bg-[#080f1f]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Technology Stack
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Tools of the trade
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stackItems.map((item) => (
              <div
                key={item.name}
                className="glass rounded-xl p-5 card-hover"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORKFLOW ────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
              My Workflow
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              From design to inbox
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step) => (
              <div key={step.step} className="relative">
                <p className="text-5xl font-black text-violet-500/20 mb-3 leading-none">{step.step}</p>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─────────────────────────────────────────────── */}
      <section id="contact" className="py-20 px-6 bg-[#080f1f]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Let's build your next email campaign
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Looking for a developer who understands both design and email-client quirks?
            I'm available for freelance projects on Upwork and direct contracts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="w-full sm:w-auto bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-500/25 text-center"
            >
              {siteConfig.contact.email}
            </a>
            <a
              href={siteConfig.contact.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-slate-700 hover:border-violet-500/50 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all text-center"
            >
              View on Upwork →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

