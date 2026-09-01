import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Mail, Linkedin, Github, MapPin, Check, Sparkles, Send } from "lucide-react"
import { ScrollTextScrub, ScrollElementScrub } from "../common/ScrollReveal"
import { SOCIAL_LINKS } from "../../data/portfolioData"

function MagneticButton({ children, onClick, className = "", style = {} }) {
  const ref = useRef()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { damping: 14, stiffness: 180 }
  const sx = useSpring(x, springConfig)
  const sy = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    x.set((e.clientX - r.left - r.width / 2) * 0.32)
    y.set((e.clientY - r.top - r.height / 2) * 0.32)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: sx, y: sy, ...style }}
      onClick={onClick}
      className={className}
      data-h
    >
      {children}
    </motion.button>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("manoharkumar6206@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/916206293136?text=Hi%20Manohar,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
      "_blank"
    )
  }

  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden min-h-screen flex items-center justify-center border-t border-white/[0.05] bg-[#050608] select-none"
    >
      {/* Ambient Pulsating Laser Flare */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #38BDF8 0%, #3B82F6 40%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full flex flex-col items-center">
        {/* Telemetry Tag */}
        <p className="font-mono text-xs mb-4 text-[#38BDF8] tracking-widest uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
          // CONTACT.CONNECT // INITIATE TRANSMISSION
        </p>

        {/* Hero Title */}
        <div className="mb-6">
          <ScrollTextScrub
            as="h2"
            className="font-black tracking-tight leading-[0.92] text-center"
            style={{
              fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
              background: "linear-gradient(135deg, #FFFFFF 0%, #38BDF8 50%, #2DD4BF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 40px rgba(56, 189, 248, 0.25))",
            }}
          >
            Let's Build<br />Something<br />Exceptional.
          </ScrollTextScrub>
        </div>

        {/* Subtitle */}
        <div className="text-gray-300 text-sm sm:text-lg mb-12 max-w-xl mx-auto font-normal leading-relaxed">
          <ScrollTextScrub>
            Currently open to full-time engineering roles, high-impact freelance contracts, and
            innovative developer collaborations.
          </ScrollTextScrub>
        </div>

        {/* Glowing Magnetic CTA */}
        <ScrollElementScrub className="flex justify-center mb-16">
          <MagneticButton
            onClick={openWhatsApp}
            className="px-10 py-4 sm:px-12 sm:py-4.5 rounded-full text-base sm:text-lg font-black text-black flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #2DD4BF 0%, #38BDF8 50%, #3B82F6 100%)",
              boxShadow:
                "0 0 45px rgba(45, 212, 191, 0.5), 0 0 80px rgba(56, 189, 248, 0.3)",
            }}
          >
            <Sparkles size={20} className="text-black" />
            <span>Initiate Direct Message</span>
          </MagneticButton>
        </ScrollElementScrub>

        {/* Contact Cards Grid */}
        <ScrollElementScrub className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-3xl">
          {/* Email Copy Card */}
          <button
            onClick={copyEmail}
            data-h
            className="p-5 rounded-3xl flex flex-col items-center justify-center gap-2.5 transition-all bg-[#0a0c10]/90 border border-white/10 hover:border-[#38BDF8]/60 hover:bg-white/[0.04] group shadow-xl backdrop-blur-xl"
          >
            <div className="text-[#38BDF8] group-hover:text-[#2DD4BF] transition-colors">
              {copied ? <Check size={22} className="text-[#2DD4BF]" /> : <Mail size={22} />}
            </div>
            <span className="text-xs font-mono text-gray-300 group-hover:text-white transition-colors break-all text-center font-medium">
              {copied ? "Copied to Clipboard!" : "manoharkumar6206@gmail.com"}
            </span>
          </button>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/manohar-kumar-661981294/"
            target="_blank"
            rel="noreferrer"
            data-h
            className="p-5 rounded-3xl flex flex-col items-center justify-center gap-2.5 transition-all bg-[#0a0c10]/90 border border-white/10 hover:border-[#38BDF8]/60 hover:bg-white/[0.04] group shadow-xl backdrop-blur-xl"
          >
            <div className="text-[#38BDF8] group-hover:text-[#2DD4BF] transition-colors">
              <Linkedin size={22} />
            </div>
            <span className="text-xs font-mono text-gray-300 group-hover:text-white transition-colors break-all text-center font-medium">
              linkedin/manohar-kumar
            </span>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/Manohar-2905"
            target="_blank"
            rel="noreferrer"
            data-h
            className="p-5 rounded-3xl flex flex-col items-center justify-center gap-2.5 transition-all bg-[#0a0c10]/90 border border-white/10 hover:border-[#38BDF8]/60 hover:bg-white/[0.04] group shadow-xl backdrop-blur-xl"
          >
            <div className="text-[#38BDF8] group-hover:text-[#2DD4BF] transition-colors">
              <Github size={22} />
            </div>
            <span className="text-xs font-mono text-gray-300 group-hover:text-white transition-colors break-all text-center font-medium">
              github/Manohar-2905
            </span>
          </a>

          {/* Location Card */}
          <div className="p-5 rounded-3xl flex flex-col items-center justify-center gap-2.5 bg-[#0a0c10]/90 border border-white/10 text-center shadow-xl backdrop-blur-xl">
            <div className="text-[#38BDF8]">
              <MapPin size={22} />
            </div>
            <span className="text-xs font-mono text-gray-300 font-medium">
              Delhi, India [28.61° N]
            </span>
          </div>
        </ScrollElementScrub>
      </div>
    </section>
  )
}
