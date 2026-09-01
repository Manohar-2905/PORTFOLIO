import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const fn = () => setShow(window.scrollY > window.innerHeight * 0.45)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Back to Top"
          data-h
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-black z-40 transition-transform hover:scale-110 active:scale-95 shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #3B82F6, #38BDF8)",
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.6), inset 0 0 10px rgba(255,255,255,0.4)",
          }}
        >
          <ArrowUp size={20} className="stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
