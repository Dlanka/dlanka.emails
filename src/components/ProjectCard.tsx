import { Link } from 'react-router-dom'
import type { Project } from '../config/site'

interface ProjectCardProps {
  project: Project
  index: number
}

const categoryColors: Record<string, string> = {
  'Marketing Email': 'bg-violet-500/10 text-violet-300 border border-violet-500/20',
  'HTML Signature': 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20',
}

const previewBg: Record<string, string> = {
  'orbitflow-launch': 'bg-gradient-to-br from-[#0f0f23] to-[#1e1b4b]',
  'northstar-signature': 'bg-gradient-to-br from-[#0c1929] to-[#0a2540]',
  'ingoude-signature': 'bg-gradient-to-br from-[#002244] to-[#0050c8]/40',
  'real-estate-agent': 'bg-gradient-to-br from-[#111116] to-[#27272e]',
  'modern-business': 'bg-gradient-to-br from-[#2a1712] to-[#3f1e14]',
}

const previewContent: Record<string, React.ReactNode> = {
  'orbitflow-launch': (
    <div className="w-full max-w-[360px] mx-auto rounded-xl overflow-hidden shadow-2xl">
      {/* Mock email top bar */}
      <div className="bg-[#0f0f23] px-5 py-4 text-center">
        <span className="text-violet-400 font-bold text-xl">◎</span>
        <span className="text-white font-bold text-xl ml-1">OrbitFlow</span>
      </div>
      <div className="bg-[#0f0f23] px-5 pb-5 text-center">
        <p className="text-violet-400 text-[10px] font-semibold tracking-widest mb-2">PRODUCT LAUNCH</p>
        <p className="text-white font-bold text-lg leading-snug mb-3">
          Your workflow,<br/>
          <span className="text-violet-400">supercharged.</span>
        </p>
        <p className="text-slate-400 text-xs leading-relaxed mb-4">
          OrbitFlow 2.0 is here. AI-powered project insights,<br/>real-time team sync, and a redesigned workspace.
        </p>
        <div className="bg-violet-600 text-white text-xs font-semibold px-6 py-2 rounded-lg inline-block">
          Start Free — No Card Required
        </div>
      </div>
      <div className="bg-[#1e1b4b] h-16 flex items-center justify-center">
        <span className="text-violet-300 text-xs opacity-60">[ Dashboard Preview ]</span>
      </div>
      <div className="bg-white px-5 py-4">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl">🤖</span>
          <div>
            <p className="text-slate-900 text-xs font-bold">AI Project Intelligence</p>
            <p className="text-slate-500 text-[10px] leading-relaxed">Automatically surface risks and predict delivery dates.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚡</span>
          <div>
            <p className="text-slate-900 text-xs font-bold">Real-Time Team Sync</p>
            <p className="text-slate-500 text-[10px] leading-relaxed">Live presence indicators and conflict-free editing.</p>
          </div>
        </div>
      </div>
    </div>
  ),
  'northstar-signature': (
    <div className="w-full max-w-[380px] mx-auto">
      <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
        {/* Accent bar */}
        <div className="h-1 bg-gradient-to-r from-cyan-600 to-sky-400" />
        <div className="p-5 flex gap-4">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-full bg-cyan-700 flex items-center justify-center text-white font-bold text-lg border-2 border-cyan-100">
              AR
            </div>
          </div>
          {/* Info */}
          <div className="flex-1 min-w-0">
            <p className="text-slate-900 font-bold text-base leading-tight">Alex Rivera</p>
            <p className="text-cyan-600 text-xs font-semibold mb-2">Lead Designer &amp; Creative Director</p>
            <p className="text-slate-700 text-[11px] font-bold tracking-widest uppercase mb-2">★ Northstar Studio</p>
            <div className="text-[11px] text-slate-500 space-y-1">
              <p>📞 +1 (555) 019-2837</p>
              <p>✉ alex@northstarstudio.example</p>
              <p>🌐 northstarstudio.example</p>
            </div>
          </div>
          {/* Logo block */}
          <div className="flex-shrink-0 text-center">
            <div className="w-14 h-14 rounded-xl bg-[#0c4a6e] flex items-center justify-center text-white font-bold text-lg">
              NS
            </div>
            <p className="text-[9px] text-slate-500 font-bold tracking-widest uppercase mt-1">Northstar<br/>Studio</p>
          </div>
        </div>
        {/* Banner */}
        <div className="bg-gradient-to-r from-[#0c4a6e] to-cyan-600 px-4 py-2 flex justify-between items-center">
          <span className="text-cyan-100 text-[10px] font-semibold">★ Now taking new client projects for Q1 2027</span>
          <span className="text-sky-300 text-[10px]">Book a call →</span>
        </div>
      </div>
    </div>
  ),
  'ingoude-signature': (
    <div className="w-full max-w-[380px] mx-auto">
      <div className="bg-white rounded-xl overflow-hidden shadow-2xl flex border border-slate-200">
        {/* Left blue panel */}
        <div className="w-8 bg-[#0050c8] relative flex-shrink-0" />
        {/* Avatar Seam Column */}
        <div
          className="w-28 flex items-center justify-center flex-shrink-0 py-3"
          style={{ background: 'linear-gradient(to right, #0050c8 50%, #ffffff 50%)' }}
        >
          <img
            src="/Ingoude-assets/profile-img.png"
            alt="Jonathan Patterson"
            className="w-24 h-24 object-contain"
          />
        </div>
        {/* Right info panel */}
        <div className="flex-1 p-3.5 bg-white text-left min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            <img src="/Ingoude-assets/cmp-logo.png" alt="Logo" className="w-4 h-4 object-contain" />
            <span className="text-[10px] font-bold text-slate-800">Ingoude Company</span>
          </div>
          <p className="text-[#0050c8] font-extrabold text-sm leading-tight">Jonathan Patterson</p>
          <p className="text-[#0050c8] text-[10px] font-semibold italic mb-2">Marketing Manager</p>
          <div className="space-y-1 text-[9px] text-slate-700">
            <div className="flex items-center gap-1.5">
              <img src="/Ingoude-assets/icon-world.png" alt="Web" className="w-3 h-3 object-contain" />
              <span className="truncate">www.reallygreatsite.com</span>
            </div>
            <div className="flex items-center gap-1.5">
              <img src="/Ingoude-assets/icon-phone.png" alt="Phone" className="w-3 h-3 object-contain" />
              <span>123-456-7890</span>
            </div>
            <div className="flex items-center gap-1.5">
              <img src="/Ingoude-assets/icon-mail.png" alt="Mail" className="w-3 h-3 object-contain" />
              <span className="truncate">hello@reallygreatsite.com</span>
            </div>
            <div className="flex items-center gap-1.5">
              <img src="/Ingoude-assets/icon-location.png" alt="Location" className="w-3 h-3 object-contain" />
              <span className="truncate">123 Anywhere St., Any City</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  'real-estate-agent': (
    <div className="w-full max-w-[380px] mx-auto">
      <div
        className="rounded-xl overflow-hidden shadow-2xl flex border border-slate-700/50"
        style={{ background: 'linear-gradient(to bottom, #1a191a 46%, #ededee 0%)' }}
      >
        {/* Left Photo */}
        <div className="w-[145px] flex-shrink-0 flex items-end justify-center pt-4">
          <img
            src="/real-estate-agent/profile.png"
            alt="Real Estate Agent"
            className="w-[130px] h-auto object-cover block"
          />
        </div>
        {/* Right Info */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Top dark block (46%) */}
          <div className="p-3 pl-4 flex flex-col justify-center min-h-[75px]">
            <img
              src="/real-estate-agent/signature.png"
              alt="Signature"
              className="w-28 h-auto object-contain block mb-1"
            />
            <p className="text-[9px] font-bold text-[#ededee] uppercase tracking-widest font-mono">
              Real Estate Agent
            </p>
          </div>
          {/* Bottom light block (54%) */}
          <div className="p-3 pl-4 text-left space-y-1 text-[9px] text-[#1a191a] font-medium flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-1.5 truncate">
              <img src="/real-estate-agent/icon-email.png" alt="Email" className="w-3.5 h-3.5 object-contain flex-shrink-0" />
              <span className="truncate">hello@reallygreatsite.com</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <img src="/real-estate-agent/icon-web-link.png" alt="Web" className="w-3.5 h-3.5 object-contain flex-shrink-0" />
              <span className="truncate">www.reallygreatsite.com</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <img src="/real-estate-agent/icon-phone.png" alt="Phone" className="w-3.5 h-3.5 object-contain flex-shrink-0" />
              <span>+1 (555) 234-5678</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <img src="/real-estate-agent/icon-location.png" alt="Location" className="w-3.5 h-3.5 object-contain flex-shrink-0" />
              <span className="truncate">123 Anywhere St., Any City</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  'modern-business': (
    <div className="w-full max-w-[380px] mx-auto">
      <div className="rounded-xl overflow-hidden shadow-2xl flex flex-col border border-orange-950/40">
        {/* Top Peach Surface */}
        <div className="bg-[#ffe5de] p-4 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
            <img
              src="https://i.ibb.co/CpvhCQw0/Photo-by-Veronika-Bykovich.png"
              alt="Samira Hadid"
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[#201e21] font-bold text-lg leading-tight">Samira Hadid</p>
            <div className="border-y border-[#201e21] py-1 my-1">
              <p className="text-[#201e21] text-[10px] font-semibold tracking-widest uppercase">
                Senior Manager
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Terracotta Surface (2x2 grid) */}
        <div className="bg-[#e56845] px-4 py-3">
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[10px] text-white font-medium">
            <div className="flex items-center gap-1.5 truncate">
              <img src="https://i.ibb.co/CppM9HRT/phone.png" alt="Phone" className="w-3.5 h-3.5 object-contain flex-shrink-0" />
              <span className="truncate">+1 (555) 000-1234</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <img src="https://i.ibb.co/Mx4rH3g8/Email.png" alt="Email" className="w-3.5 h-3.5 object-contain flex-shrink-0" />
              <span className="truncate">hello@mysample.com</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <img src="https://i.ibb.co/LXHyHC0f/Web-Link.png" alt="Web" className="w-3.5 h-3.5 object-contain flex-shrink-0" />
              <span className="truncate">www.mysample.com</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <img src="https://i.ibb.co/mCK72vcB/Location.png" alt="Location" className="w-3.5 h-3.5 object-contain flex-shrink-0" />
              <span className="truncate">12 Anywhere St., City</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const bgClass = previewBg[project.id] || 'bg-slate-900'
  const preview = previewContent[project.id]

  return (
    <article
      className="glass rounded-2xl overflow-hidden card-hover flex flex-col h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Visual preview */}
      <div className={`${bgClass} px-6 py-8 min-h-[260px] flex items-center justify-center`}>
        {preview}
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[project.category] ?? 'bg-slate-700 text-slate-300'}`}>
              {project.category}
            </span>
          </div>

          <h3 className="font-bold text-xl text-white mb-2 leading-tight">{project.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2">
          <Link
            to={project.previewPath}
            className="flex-1 text-center bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
          >
            View Preview
          </Link>
          <a
            href={`/${project.distFile}`}
            download
            className="text-sm text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 px-4 py-2.5 rounded-xl transition-colors font-medium"
          >
            Download HTML
          </a>
        </div>
      </div>
    </article>
  )
}

