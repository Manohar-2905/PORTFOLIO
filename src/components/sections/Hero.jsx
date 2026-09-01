import { useState, useRef, useCallback, lazy, Suspense } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Download, ChevronDown, Sparkles } from "lucide-react"
import { useTypewriter } from "../../hooks/useTypewriter"
import { HERO_ROLES, HERO_STATS, SOCIAL_LINKS } from "../../data/portfolioData"

const HeroScene = lazy(() => import("../../three/HeroScene.jsx"))

export default function Hero() {
  const role = useTypewriter(HERO_ROLES, 72, 2200)
  const [mx, setMx] = useState(0)
  const [my, setMy] = useState(0)
  const heroRef = useRef()

  const handleMM = useCallback((e) => {
    const r = heroRef.current?.getBoundingClientRect()
    if (!r) return
    setMx(((e.clientX - r.left) / r.width) * 2 - 1)
    setMy(((e.clientY - r.top) / r.height) * 2 - 1)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex flex-col justify-between"
      onMouseMove={handleMM}
      onMouseLeave={() => {
        setMx(0)
        setMy(0)
      }}
    >
      {/* Background Cyber Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* 3D Canvas Background & Interactive Card Ring */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{ left: "42%", pointerEvents: "auto" }}
        >
          <Suspense fallback={null}>
            <HeroScene mouseX={mx} mouseY={my} />
          </Suspense>
        </div>
      </div>

      {/* Left Radial Readability Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.5) 35%, rgba(8,8,8,0.2) 65%, transparent 85%)",
        }}
      />

      {/* Bottom Dissolve Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #080808, transparent)",
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-6 sm:px-10 pt-32 pb-16 pointer-events-none max-w-7xl mx-auto w-full">
        <div
          className="w-full flex flex-col justify-center pointer-events-auto"
          style={{ maxWidth: 620 }}
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 w-fit backdrop-blur-md"
            style={{
              border: "1px solid rgba(59,130,246,0.3)",
              background: "rgba(59,130,246,0.06)",
              boxShadow: "0 0 20px rgba(59,130,246,0.15)",
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-2 h-2 rounded-full flex-shrink-0 bg-[#3B82F6]"
              style={{ boxShadow: "0 0 10px #3B82F6" }}
            />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#38BDF8]">
              Available for Full-Time & Freelance
            </span>
          </motion.div>

          {/* Main Giant Heading */}
          <div className="mb-4">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-black uppercase tracking-tighter leading-none"
              style={{
                fontSize: "clamp(2.4rem, 4.8vw, 4.5rem)",
                background: "linear-gradient(180deg, #FFFFFF 0%, #B0B5C0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: "0.95",
              }}
            >
              MANOHAR<br />KUMAR
            </motion.h1>
          </div>

          {/* Dynamic Typewriter Terminal */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-mono text-xl sm:text-2xl text-gray-400 mb-5 flex items-center h-8"
          >
            <span className="text-[#3B82F6] font-bold">{">"}&nbsp;</span>
            <span className="text-gray-200 font-semibold">{role}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.75, repeat: Infinity }}
              className="text-[#38BDF8] ml-0.5"
            >
              |
            </motion.span>
          </motion.div>

          {/* Bio Subtitle */}
          <motion.p
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.55 }}
            className="text-gray-300 text-sm sm:text-base mb-8 max-w-lg leading-relaxed font-normal"
          >
            IT Undergrad @ GGSIPU Delhi · 250+ DSA Solutions · Architecting AI-powered
            platforms and high-performance full-stack web applications that&nbsp;
            <span className="text-[#38BDF8] font-semibold">scale effortlessly</span>.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="flex flex-wrap gap-3.5 mb-8 items-center"
          >
            <a
              href="#projects"
              data-h
              className="px-7 py-3.5 rounded-full font-extrabold text-sm text-black flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #38BDF8)",
                boxShadow: "0 0 35px rgba(59,130,246,0.45)",
              }}
            >
              <span>Explore Work</span>
              <span>→</span>
            </a>

            <a
              href="/IManohar_Resume.pdf"
              download
              data-h
              className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold transition-all border border-[#3B82F6]/30 text-[#38BDF8] bg-white/[0.03] hover:bg-[#3B82F6]/10 hover:border-[#3B82F6]"
            >
              <Download size={15} />
              <span>Resume</span>
            </a>

            {/* Social Icons */}
            <div className="flex gap-2 items-center">
              {SOCIAL_LINKS.filter(s => s.name !== "WhatsApp").map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  data-h
                  aria-label={s.name}
                  className="w-11 h-11 rounded-full flex items-center justify-center border border-white/15 bg-white/[0.02] text-[#38BDF8] hover:bg-[#3B82F6] hover:text-black hover:border-[#3B82F6] transition-all hover:scale-110"
                >
                  {s.name === "GitHub" && <Github size={16} />}
                  {s.name === "LinkedIn" && <Linkedin size={16} />}
                  {s.name === "Email" && <Mail size={16} />}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Metrics Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-2"
          >
            {HERO_STATS.map((s, i) => (
              <span
                key={i}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10"
              >
                <strong className="text-[#38BDF8]">{s.value}</strong>
                <span className="text-gray-400">{s.label}</span>
              </span>
            ))}
          </motion.div>

          {/* Location Telemetry */}
          <div className="flex items-center gap-2 mt-6 text-xs font-mono text-gray-500">
            <MapPin size={13} className="text-[#3B82F6]" />
            <span>DELHI, INDIA [28.61° N, 77.20° E]</span>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.9, repeat: Infinity }}
        className="flex flex-col items-center gap-1 pb-6 select-none z-10"
        style={{ color: "rgba(59, 130, 246, 0.45)" }}
      >
        <span className="font-mono text-[9px] tracking-[0.35em] uppercase">SCROLL</span>
        <ChevronDown size={14} />
      </motion.div>
    </section>
  )
}
