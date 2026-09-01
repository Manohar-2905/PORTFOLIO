import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sparkles } from "lucide-react"
import { NAV_LINKS } from "../../data/portfolioData"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const scrollToSection = (id) => {
    setOpen(false)
    setActiveSection(id)
    const el = document.getElementById(id)
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -50, duration: 1.1 })
      } else {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8, 8, 8, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(59, 130, 246, 0.12)" : "1px solid transparent",
        padding: scrolled ? "12px 0" : "20px 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          data-h
          className="group flex items-center gap-2 font-mono text-lg font-black tracking-tighter"
        >
          <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:border-[#3B82F6] transition-colors">
            <span className="text-xs text-[#38BDF8] font-mono">{"<"}</span>
            <span className="text-xs text-white font-black">MK</span>
            <span className="text-xs text-[#38BDF8] font-mono">{"/>"}</span>
          </div>
          <span className="text-sm font-extrabold uppercase tracking-wider text-white group-hover:text-[#38BDF8] transition-colors">
            Manohar
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-gray-500 uppercase">
            // DEV
          </span>
        </a>

        {/* Desktop Nav Items with HUD underline */}
        <ul className="hidden md:flex items-center gap-1 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.06] backdrop-blur-md">
          {NAV_LINKS.map((l, i) => {
            const id = l.toLowerCase()
            return (
              <li key={l}>
                <button
                  onClick={() => scrollToSection(id)}
                  data-h
                  className="relative px-4 py-2 text-xs font-mono font-semibold text-gray-300 hover:text-white transition-colors group block uppercase tracking-wider"
                >
                  <span className="text-[#3B82F6] opacity-60 mr-1 text-[10px]">
                    0{i + 1}.
                  </span>
                  {l}
                  <span
                    className="absolute bottom-0 left-3 right-3 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"
                    style={{ background: "linear-gradient(90deg, #3B82F6, #38BDF8)" }}
                  />
                </button>
              </li>
            )
          })}
        </ul>

        {/* Availability Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/25">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse shadow-[0_0_8px_#38BDF8]" />
          <span className="font-mono text-[11px] font-semibold text-[#38BDF8] tracking-wider uppercase">
            AVAILABLE FOR HIRE
          </span>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          data-h
          className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.04] border border-[#3B82F6]/30 text-[#38BDF8]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={open ? "x" : "m"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.16 }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#080808]/98 border-t border-white/[0.08]"
          >
            <ul className="px-6 py-6 space-y-3">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <button
                    onClick={() => scrollToSection(l.toLowerCase())}
                    data-h
                    className="block w-full text-left py-2 text-gray-200 font-mono text-sm font-medium hover:text-[#38BDF8] transition-colors"
                  >
                    <span className="text-[#3B82F6] mr-3">0{i + 1}.</span>
                    {l}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
