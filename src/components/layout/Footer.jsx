import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { SOCIAL_LINKS } from "../../data/portfolioData"

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/[0.06] bg-transparent relative overflow-hidden">
      {/* Ambient Laser Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-gray-500">
        {/* Telemetry Status */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse shadow-[0_0_8px_#2DD4BF]" />
          <span className="text-gray-400 font-semibold tracking-wider uppercase">
            SYSTEM STATUS: 100% OPERATIONAL
          </span>
          <span className="text-gray-600">•</span>
          <span>© 2026 MANOHAR KUMAR</span>
        </div>

        {/* Tech Stack Info */}
        <div className="hidden lg:flex items-center gap-2 text-gray-400">
          <span>BUILT WITH REACT 18</span>
          <span>•</span>
          <span>THREE.JS (R3F)</span>
          <span>•</span>
          <span>GSAP</span>
          <span>•</span>
          <span>LENIS</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.filter(s => s.name !== "WhatsApp").map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              data-h
              aria-label={s.name}
              className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3B82F6] hover:bg-[#3B82F6]/10 transition-all hover:scale-105"
            >
              {s.name === "GitHub" && <Github size={15} />}
              {s.name === "LinkedIn" && <Linkedin size={15} />}
              {s.name === "Email" && <Mail size={15} />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
