import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Preloader({ onDone }) {
  const [percent, setPercent] = useState(0)
  const [statusIdx, setStatusIdx] = useState(0)
  const counterRef = useRef(null)
  const barRef = useRef(null)
  const topCurtainRef = useRef(null)
  const bottomCurtainRef = useRef(null)
  const contentRef = useRef(null)
  const flareRef = useRef(null)

  const statusMessages = [
    "INITIALIZING CORE SYSTEM",
    "LOADING 3D ENGINE & SHADERS",
    "COMPILING SCENE GEOMETRY",
    "HYDRATING INTERACTIVE LAYERS",
    "SYSTEM READY · WELCOME"
  ]

  useEffect(() => {
    // Prevent document scrolling during preloader
    document.body.style.overflow = "hidden"

    const obj = { val: 0 }
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ""
        onDone()
      }
    })

    // 1. Initial Content Entrance (Smooth Alpha + Scale Up)
    tl.fromTo(
      contentRef.current,
      { opacity: 0, scale: 0.94, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "power3.out" }
    )

    // 2. Numerical Progress Interpolation (Snappy & Natural Tech Feel)
    tl.to(obj, {
      val: 100,
      duration: 2.0,
      ease: "power2.inOut",
      onUpdate: () => {
        const p = Math.round(obj.val)
        setPercent(p)
        if (counterRef.current) {
          counterRef.current.textContent = `${String(p).padStart(2, "0")}%`
        }
        if (barRef.current) {
          barRef.current.style.width = `${p}%`
        }
        if (flareRef.current) {
          flareRef.current.style.left = `${p}%`
        }
        // Adaptive telemetry state
        if (p < 25) setStatusIdx(0)
        else if (p < 55) setStatusIdx(1)
        else if (p < 80) setStatusIdx(2)
        else if (p < 98) setStatusIdx(3)
        else setStatusIdx(4)
      }
    })

    // 3. Peak Linger
    tl.to({}, { duration: 0.25 })

    // 4. Content Dissolve (Subtle Blur & Upward Float)
    tl.to(contentRef.current, {
      opacity: 0,
      scale: 1.04,
      y: -20,
      filter: "blur(10px)",
      duration: 0.55,
      ease: "power2.in"
    })

    // 5. Cinematic Dual-Curtain Symmetrical Wipe Exit
    tl.to(
      topCurtainRef.current,
      {
        yPercent: -100,
        duration: 0.95,
        ease: "power4.inOut",
        force3D: true
      },
      "-=0.15"
    )

    tl.to(
      bottomCurtainRef.current,
      {
        yPercent: 100,
        duration: 0.95,
        ease: "power4.inOut",
        force3D: true
      },
      "<"
    )

    // 6. Main Application Depth Reveal
    tl.fromTo(
      ".app-content-reveal",
      { scale: 1.03, opacity: 0.4, filter: "blur(8px)" },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.0,
        ease: "power3.out",
        force3D: true,
        onComplete: () => {
          ScrollTrigger.refresh()
          if (window.__lenis) window.__lenis.resize()
        }
      },
      "-=0.75"
    )

    return () => {
      document.body.style.overflow = ""
    }
  }, [onDone])

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-auto select-none overflow-hidden">
      {/* Top Split Curtain */}
      <div
        ref={topCurtainRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#080808] border-b border-white/[0.06] z-10 will-change-transform flex items-end justify-center"
        style={{
          backgroundImage: "radial-gradient(ellipse 80% 80% at 50% 100%, rgba(59,130,246,0.06) 0%, rgba(8,8,8,1) 85%)"
        }}
      />

      {/* Bottom Split Curtain */}
      <div
        ref={bottomCurtainRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#080808] border-t border-white/[0.06] z-10 will-change-transform flex items-start justify-center"
        style={{
          backgroundImage: "radial-gradient(ellipse 80% 80% at 50% 0%, rgba(56,189,248,0.06) 0%, rgba(8,8,8,1) 85%)"
        }}
      />

      {/* Background Ambient Grid & Telemetry Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-6 md:p-10">
        {/* Top Telemetry Header */}
        <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-gray-500 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-ping" />
            <span className="text-gray-400 font-semibold">MK // PORTFOLIO_V3</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-gray-500">
            <span>SYS_OK</span>
            <span>•</span>
            <span>WebGL 2.0 / R3F</span>
          </div>
        </div>

        {/* Center UI / UX Showcase Core */}
        <div
          ref={contentRef}
          className="flex flex-col items-center justify-center my-auto w-full max-w-lg mx-auto px-4 z-30"
          style={{ willChange: "transform, opacity, filter" }}
        >
          {/* Ambient Glow Aura */}
          <div className="relative mb-8 flex items-center justify-center">
            <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-[#3B82F6]/25 to-[#38BDF8]/20 blur-2xl animate-pulse pointer-events-none" />

            {/* Futuristic Tech Monogram Card */}
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-3xl p-0.5 bg-gradient-to-b from-white/20 via-[#3B82F6]/30 to-white/5 backdrop-blur-2xl shadow-[0_0_50px_rgba(59,130,246,0.25)] flex items-center justify-center">
              <div className="w-full h-full rounded-[22px] bg-[#0c0d12]/90 flex flex-col items-center justify-center relative overflow-hidden border border-white/10">
                {/* Micro Corner HUD Crosshairs */}
                <div className="absolute top-2 left-2 text-[8px] font-mono text-[#38BDF8]/50">+</div>
                <div className="absolute top-2 right-2 text-[8px] font-mono text-[#38BDF8]/50">+</div>
                <div className="absolute bottom-2 left-2 text-[8px] font-mono text-[#38BDF8]/50">+</div>
                <div className="absolute bottom-2 right-2 text-[8px] font-mono text-[#38BDF8]/50">+</div>

                {/* Animated Scanner Beam */}
                <motion.div
                  animate={{ y: [-45, 45, -45] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-[#38BDF8]/15 to-transparent pointer-events-none"
                />

                {/* Monogram Text */}
                <div className="font-mono text-2xl md:text-3xl font-black tracking-tighter text-white flex items-center gap-0.5">
                  <span className="text-[#3B82F6]">{"<"}</span>
                  <span className="bg-gradient-to-r from-white via-slate-100 to-gray-400 bg-clip-text text-transparent">MK</span>
                  <span className="text-[#38BDF8]">{"/>"}</span>
                </div>
                <span className="font-mono text-[9px] text-[#38BDF8] tracking-widest mt-1 opacity-80 uppercase">DEV // 2026</span>
              </div>
            </div>
          </div>

          {/* Name & Role Title */}
          <div className="text-center mb-6">
            <h2 className="font-extrabold tracking-tight text-white text-base md:text-lg uppercase">
              Manohar Kumar
            </h2>
            <p className="font-mono text-xs text-gray-400 mt-1 tracking-wider">
              Full Stack Developer & AI Enthusiast
            </p>
          </div>

          {/* Precision Neon Progress Track */}
          <div className="w-full max-w-xs space-y-2.5">
            <div className="h-[3px] w-full bg-white/[0.08] rounded-full overflow-hidden relative backdrop-blur-sm">
              <div
                ref={barRef}
                className="h-full bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-white rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_#38BDF8]"
                style={{ width: "0%" }}
              />
              <div
                ref={flareRef}
                className="absolute top-0 bottom-0 w-8 bg-white/40 blur-sm -translate-x-1/2 pointer-events-none"
                style={{ left: "0%" }}
              />
            </div>

            {/* Dynamic Status Readout & Counter */}
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span className="text-[11px] tracking-wider text-gray-300 font-medium">
                  {statusMessages[statusIdx]}
                </span>
              </div>
              <span
                ref={counterRef}
                className="text-xs font-black text-white font-mono min-w-[36px] text-right"
              >
                00%
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Telemetry Footer */}
        <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-gray-500 uppercase">
          <div>DELHI, INDIA [28.61° N, 77.20° E]</div>
          <div className="hidden sm:block">INITIALIZING IMMERSIVE EXPERIENCE</div>
        </div>
      </div>
    </div>
  )
}
