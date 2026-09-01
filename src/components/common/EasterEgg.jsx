import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function EasterEgg() {
  const [show, setShow] = useState(false)
  const [conf, setConf] = useState([])

  useEffect(() => {
    let buf = ""
    const fn = (e) => {
      buf = (buf + e.key.toLowerCase()).slice(-4)
      if (buf === "hire") {
        setShow(true)
        setConf(
          Array.from({ length: 80 }, (_, i) => ({
            id: i + Date.now(),
            x: Math.random() * window.innerWidth,
            c: ["#3B82F6", "#38BDF8", "#ffffff", "#60A5FA", "#2DD4BF"][i % 5],
          }))
        )
        setTimeout(() => {
          setShow(false)
          setConf([])
        }, 4000)
      }
    }
    window.addEventListener("keydown", fn)
    return () => window.removeEventListener("keydown", fn)
  }, [])

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9000] px-8 py-4 rounded-full text-black font-black text-base whitespace-nowrap shadow-2xl border border-white/20"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #38BDF8)",
              boxShadow: "0 10px 55px rgba(59, 130, 246, 0.7)",
            }}
          >
            🎉 Great choice! Let's build something amazing together!
          </motion.div>
        )}
      </AnimatePresence>
      <div className="fixed inset-0 pointer-events-none z-[8999] overflow-hidden">
        {conf.map((c) => (
          <motion.div
            key={c.id}
            initial={{ y: -30, x: c.x, opacity: 1, rotate: 0, scale: 1 }}
            animate={{
              y: window.innerHeight + 60,
              rotate: 720,
              opacity: 0,
              scale: 0.3,
            }}
            transition={{ duration: 3, ease: "easeIn" }}
            className="absolute w-3 h-3 rounded-sm"
            style={{ background: c.c, boxShadow: `0 0 8px ${c.c}` }}
          />
        ))}
      </div>
    </>
  )
}
