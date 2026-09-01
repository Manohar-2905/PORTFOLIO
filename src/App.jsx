// ================================================================
// MANOHAR KUMAR — 3D CYBER-MINIMALIST PORTFOLIO v3
// React 18 · React Three Fiber · GSAP · Lenis · Framer Motion
// ================================================================

import { useState, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

// Common Components
import Cursor from "./components/common/Cursor"
import Trail from "./components/common/Trail"
import ProgressBar from "./components/common/ProgressBar"
import ShootingStars from "./components/common/ShootingStars"
import Preloader from "./components/common/Preloader"
import BackToTop from "./components/common/BackToTop"
import EasterEgg from "./components/common/EasterEgg"
import CyberBackground from "./components/common/CyberBackground"

// Layout Components
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

// Section Components
import Hero from "./components/sections/Hero"
import Marquee from "./components/sections/Marquee"
import About from "./components/sections/About"
import Experience from "./components/sections/Experience"
import Skills from "./components/sections/Skills"
import Projects from "./components/sections/Projects"
import Hackathons from "./components/sections/Hackathons"
import Contact from "./components/sections/Contact"

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize Lenis smooth inertia scroll
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
    })
    window.__lenis = lenis

    lenis.on("scroll", ScrollTrigger.update)

    const updateTicker = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      delete window.__lenis
      lenis.destroy()
      gsap.ticker.remove(updateTicker)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-[#080808] text-white">
      {/* 3D Cyber Animated Background (Matching Preloader HUD) */}
      <CyberBackground />

      {/* Precision Pointer Layers */}
      <Cursor />
      <Trail />
      <ProgressBar />

      {/* Cyber-HUD Luxury Preloader */}
      {loading && (
        <Preloader
          onDone={() => {
            setLoading(false)
            ScrollTrigger.refresh()
            if (window.__lenis) window.__lenis.resize()
          }}
        />
      )}

      {/* Main Application Container */}
      <div
        className="app-content-reveal w-full relative z-10"
        style={{ willChange: "transform, opacity, filter" }}
      >
        <ShootingStars />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Hackathons />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
        <EasterEgg />
      </div>
    </div>
  )
}
