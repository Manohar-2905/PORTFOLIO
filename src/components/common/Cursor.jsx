import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function Cursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Fluid magnetic spring for outer ring
  const springConfig = { damping: 26, stiffness: 280, mass: 0.5 }
  const ringX = useSpring(mouseX, springConfig)
  const ringY = useSpring(mouseY, springConfig)

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (!target || !(target instanceof Element)) return
      const isInteractive = !!target.closest(
        'a, button, [role="button"], input, textarea, select, canvas, [data-cursor], [data-h], .cursor-pointer, label'
      )
      setIsHovered(isInteractive)
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseover", handleMouseOver, { passive: true })
    window.addEventListener("mousedown", handleMouseDown, { passive: true })
    window.addEventListener("mouseup", handleMouseUp, { passive: true })
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    document.documentElement.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [mouseX, mouseY, isVisible])

  if (typeof document === "undefined") return null

  return createPortal(
    <div className="custom-cursor-layer pointer-events-none fixed inset-0 z-[2147483647] overflow-hidden">
      {/* Precision Pointer Dot — Instant 0ms Sync */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          background: "#38BDF8",
          boxShadow: "0 0 10px #38BDF8, 0 0 20px rgba(56,189,248,0.7)",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicked ? 0.5 : isHovered ? 0.35 : 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* Fluid Inertial Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none border border-[#3B82F6]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 36,
          height: 36,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovered ? 1.85 : 1,
          borderColor: isHovered ? "rgba(56,189,248,0.9)" : "rgba(59,130,246,0.6)",
          backgroundColor: isHovered ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.02)",
          boxShadow: isHovered
            ? "0 0 24px rgba(59,130,246,0.35), inset 0 0 10px rgba(56,189,248,0.2)"
            : "0 0 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </div>,
    document.body
  )
}
