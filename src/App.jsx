// ================================================================
// MANOHAR KUMAR — 3D PORTFOLIO v3
// Orbital Photo Ring · Cinematic Horizontal Projects · GSAP + R3F
// ================================================================
import { useState, useEffect, useRef, useCallback, lazy, Suspense } from "react"
import { createPortal } from "react-dom"
import { motion, useScroll, useTransform, useInView,
         AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, ExternalLink,
         Trophy, ChevronDown, Menu, X, Check, ArrowUp, Download, Sparkles } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

const HeroScene    = lazy(() => import("./three/HeroScene.jsx"))
const ProfileScene = lazy(() => import("./three/ProfileScene.jsx"))
const SkillsScene  = lazy(() => import("./three/SkillsScene.jsx"))

gsap.registerPlugin(ScrollTrigger)

// ──────────────────────── DATA ────────────────────────
const NAV = ["About","Experience","Skills","Projects","Hackathons","Contact"]
const MQ1 = ["JavaScript","TypeScript","React.js","Redux Toolkit","Node.js","Express.js","FastAPI","Python","MongoDB","MySQL","Tailwind CSS"]
const MQ2 = ["REST APIs","JWT Auth","Gemini AI","LLMs","RAG","Cloudinary","Vercel","Render","Git","GitHub","VS Code","Postman"]

const SKILLS = [
  { icon:"💛", title:"Languages",      items:["JavaScript (ES6+)","TypeScript","C++","Java","Python"] },
  { icon:"⚛️", title:"Frontend",       items:["React.js","Redux Toolkit","HTML5","CSS3","Tailwind CSS","Bootstrap"] },
  { icon:"🟢", title:"Backend",        items:["Node.js","Express.js","FastAPI","REST APIs","MVC","Async Programming"] },
  { icon:"🗄️", title:"Databases",      items:["MongoDB","MongoDB Atlas","MySQL"] },
  { icon:"🤖", title:"AI & ML",        items:["Gemini AI","LLMs","RAG","Prompt Engineering","Multi-Agent Systems","API Orchestration"] },
  { icon:"🔐", title:"Security",       items:["JWT","Bcrypt","RBAC","Zoho Mail API","Nodemailer","Multer","Cloudinary"] },
  { icon:"🚀", title:"Deployment",     items:["Vercel","Render","cPanel","SSL/DNS (MX,SPF,DKIM)"] },
  { icon:"🛠️", title:"Tools",          items:["Git","GitHub","Postman","VS Code","GitHub Copilot","Agile/Scrum"] },
  { icon:"🧠", title:"Core CS",        items:["Data Structures","Algorithms","OOP","DBMS","Complexity Analysis"] },
]

const PROJECTS = [
  {
    num: "01",
    title: "Studify Hub",
    type: "Full Stack",
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Code Editor API"],
    desc: "Student productivity platform with integrated code editor, API tools, and workflow automation. Modular architecture reduced manual effort by 30%.",
    highlights: [
      "Integrated lightweight browser IDE with syntax highlighting and instant compilation",
      "Built study timer, task tracker, and developer quick-reference utilities",
      "Modular client-side architecture that slashed routine manual setup by 30%"
    ],
    color: "#8B5CF6",
    imgs: ["/photos/studify-main.png", "/photos/studify-sub1.png", "/photos/studify-sub2.png"],
    live: "https://manohar-2905.github.io/StudifyHub/",
    github: "https://github.com/Manohar-2905/StudifyHub"
  },
  {
    num: "02",
    title: "Dasgupta Maiti Portal",
    type: "MERN · Freelance",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "Cloudinary", "Nodemailer"],
    desc: "Secure enterprise portal for a Kolkata law firm — JWT/RBAC auth, Cloudinary media, Zoho Mail integration, full SSL + DNS production deploy.",
    highlights: [
      "Role-Based Access Control (RBAC) separating clients, lawyers, and administrators",
      "Secure document and case management with Cloudinary cloud storage and instant previews",
      "Transactional client notifications via Zoho Mail API & Nodemailer integration"
    ],
    color: "#EC4899",
    imgs: ["/photos/dasgupta-main.png", "/photos/dasgupta-sub1.png", "/photos/dasgupta-sub2.png"],
    live: "https://dasguptamaitiassociates.com/",
    github: "https://github.com/Manohar-2905/CAwebsite1"
  },
  {
    num: "03",
    title: "Yashoda Bhawan System",
    type: "Full Stack · Freelance",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    desc: "Hotel management system with admin dashboard for Jharkhand property. Optimised DB schema, REST APIs, performance-focused production deployment.",
    highlights: [
      "Real-time room availability matrix and reservation calendar management",
      "Optimized MongoDB indexing and aggregation pipelines for reporting analytics",
      "Streamlined guest check-in/check-out workflow with invoice generator"
    ],
    color: "#3B82F6",
    imgs: ["/photos/yashoda-main.png", "/photos/yashoda-sub1.png", "/photos/yashoda-sub2.png"],
    live: "https://yashodabhawan.in/",
    github: "https://github.com/Manohar-2905/HMS"
  },
  {
    num: "04",
    title: "Bank Statement Processor",
    type: "Python · Automation",
    tech: ["Python", "Gmail API", "Hashlib (SHA-256)", "macOS launchd", "OAuth 2.0"],
    desc: "Background daemon that ingests Gmail attachments, classifies banks, SHA-deduplicates documents — slashing manual effort by 90–95%.",
    highlights: [
      "Autonomous background daemon running via system launchd with OAuth 2.0 security",
      "SHA-256 cryptographic checksum hashing preventing duplicate statement uploads",
      "Automated extraction, classification, and organization cutting manual work by 95%"
    ],
    color: "#38BDF8",
    imgs: ["/photos/bankAutomate.png", "/photos/backAutomate1.png"],
    live: "https://drive.google.com/drive/folders/1FFbw6AWhhSe51KMzEjFmuqonHnsIlvnA?usp=drive_link",
    github: "https://github.com/Manohar-2905/EmailAutomate"
  },
  {
    num: "05",
    title: "AI Project Estimator",
    type: "AI/ML · Full Stack",
    tech: ["FastAPI", "React", "Gemini AI", "MongoDB", "Tailwind CSS", "Multi-Agent"],
    desc: "Multi-agent AI system that analyses GitHub repos and generates architecture reports, cost & timeline estimates. Built Repo Intelligence for deep codebase analysis.",
    highlights: [
      "Repo Intelligence engine parsing dependencies, code complexity, and framework metrics",
      "Google Gemini 1.5 Pro integration for structured sprint planning & cost estimation",
      "Asynchronous FastAPI backend streaming real-time analysis steps to React frontend"
    ],
    color: "#3B82F6",
    imgs: ["/photos/ai-estimator-main.png", "/photos/ai-estimator-sub1.png", "/photos/ai-estimator-sub2.png"],
    live: "https://software-cost-esstimator-frontend.vercel.app/",
    github: "https://github.com/Manohar-2905/SoftwareCost_esstimator_frontend"
  },
]



const HACKS = [
  { icon:"🚀", medal:"#C0C0C0", title:"HACKHAZARDS '25", event:"The NAMESPACE Community", date:"April 2025", role:"Team CODESYNC", built:"Cutting-edge project", result:"Participant", img:"/photos/hackhazards-cert.png" },
  { icon:"🧠", medal:"#C0C0C0", title:"CreaTech 2026", event:"Larsen & Toubro Limited (L&T)", date:"2026", role:"Team visionx", built:"Aptitude Assessment", result:"Participant", img:"/photos/createch-cert.png" },
]

const DSA = ["Arrays","Trees","Recursion","Sliding Window","Greedy","Dynamic Programming","Linked Lists","Graphs","Heaps","Binary Search"]

// ──────────────────────── HOOKS ────────────────────────
function useTypewriter(words, speed=75, pause=2200) {
  const [txt,setTxt]=useState(""), [wi,setWi]=useState(0), [del,setDel]=useState(false)
  useEffect(()=>{
    const cur=words[wi]
    const t=setTimeout(()=>{
      if(!del){ if(txt.length<cur.length) setTxt(cur.slice(0,txt.length+1)); else setTimeout(()=>setDel(true),pause) }
      else { if(txt.length>0) setTxt(cur.slice(0,txt.length-1)); else{setDel(false);setWi(i=>(i+1)%words.length)} }
    }, del?speed/2:speed)
    return ()=>clearTimeout(t)
  },[txt,del,wi,words,speed,pause])
  return txt
}

// ──────────────────────── CURSOR ────────────────────────
function Cursor() {
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

function Trail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let animationFrameId
    let particles = []
    let lastPos = { x: -100, y: -100 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const onMouseMove = (e) => {
      const dx = e.clientX - lastPos.x
      const dy = e.clientY - lastPos.y
      const dist = Math.hypot(dx, dy)
      if (dist > 5) {
        lastPos = { x: e.clientX, y: e.clientY }
        particles.push({
          x: e.clientX,
          y: e.clientY,
          radius: 3,
          alpha: 0.55,
          decay: 0.032,
        })
        if (particles.length > 25) particles.shift()
      }
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.alpha -= p.decay
        p.radius = Math.max(0, p.radius - 0.07)
        if (p.alpha <= 0 || p.radius <= 0) {
          particles.splice(i, 1)
          continue
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`
        ctx.shadowBlur = 8
        ctx.shadowColor = "#38BDF8"
        ctx.fill()
      }
      animationFrameId = requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  if (typeof document === "undefined") return null

  return createPortal(
    <canvas
      ref={canvasRef}
      className="custom-cursor-layer fixed inset-0 pointer-events-none z-[2147483640]"
    />,
    document.body
  )
}

function ProgressBar() {
  const {scrollYProgress}=useScroll()
  return <motion.div className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[9996]"
    style={{scaleX:scrollYProgress,background:"linear-gradient(90deg,#3B82F6,#38BDF8,#3B82F6)"}}/>
}

// ──────────────────────── LOADER ────────────────────────
function Loader({onDone}) {
  const progressRef = useRef(null)
  const barRef = useRef(null)
  const clipRef = useRef(null)

  useEffect(()=>{
    const tl = gsap.timeline({onComplete: onDone})

    tl.set(".ld-content", { opacity: 0, scale: 0.92 })
      .to(".ld-content", { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" })
      .to({ p: 0 }, {
        p: 100,
        duration: 1.9,
        ease: "power1.inOut",
        onUpdate: function() {
          const val = Math.round(this.targets()[0].p)
          if (progressRef.current) progressRef.current.textContent = val + "%"
          if (barRef.current) barRef.current.style.width = val + "%"
          if (clipRef.current) clipRef.current.style.clipPath = `inset(0 ${100 - val}% 0 0)`
        }
      })
      .to({}, { duration: 0.15 })
      .to(".ld-content", { y: -50, opacity: 0, duration: 0.45, ease: "power2.in" })
      .to(".ld-wrap", { yPercent: -100, duration: 1.25, ease: "power4.inOut", force3D: true }, "-=0.15")
      .to(".main-reveal", { scale: 1, opacity: 1, duration: 1.25, ease: "power3.out", force3D: true, onComplete: () => { ScrollTrigger.refresh() } }, "-=1.25")
  }, [onDone])

  return(
    <div className="ld-wrap fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden pointer-events-auto"
      style={{
        background: "#080808",
        backgroundImage: "repeating-linear-gradient(0deg, #0e0e0e 0px, #0e0e0e 14px, #050505 15px, #050505 17px)",
        willChange: "transform"
      }}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-25"
        style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(59,130,246,0.05) 3px,rgba(59,130,246,0.05) 4px)" }}/>

      {/* Concentric radar rings */}
      {[0,1,2].map(i => (
        <motion.div key={i} className="absolute rounded-full border border-[#007AFF]/10 pointer-events-none"
          initial={{ width: 40, height: 40, opacity: 0.7 }} animate={{ width: 650, height: 650, opacity: 0 }}
          transition={{ duration: 2.5, delay: i * 0.6, repeat: Infinity, ease: "easeOut" }}/>
      ))}

      {/* Main Content Container (No Card Background) */}
      <div className="ld-content flex flex-col items-center justify-center z-10 relative px-4 w-full">
        
        {/* Outer Circular Ring Surrounding MK Text */}
        <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
          
          {/* Rotating Outer Dashed Accent Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-[#007AFF]/30 pointer-events-none"
          />

          {/* Glowing Glass Outer Ring */}
          <div className="absolute inset-2 rounded-full border-2 border-[#007AFF]/40 shadow-[0_0_50px_rgba(0,122,255,0.35),inset_0_0_25px_rgba(0,122,255,0.2)] backdrop-blur-md pointer-events-none" />

          {/* Inner Accent Ring */}
          <div className="absolute inset-5 rounded-full border border-white/10 pointer-events-none" />

          {/* Liquid SVG MK Text centered inside the Ring */}
          <div className="relative w-full h-full flex justify-center items-center">
            <svg viewBox="0 0 400 200" className="w-full h-auto max-w-[260px] select-none overflow-visible">
              <defs>
                {/* iPhone iOS Liquid Gradient */}
                <linearGradient id="iosLiquidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#007AFF" />
                  <stop offset="50%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>

                {/* Glass Specular Reflection Gradient */}
                <linearGradient id="glassReflection" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
                  <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>

                {/* MK Text Mask */}
                <mask id="mkMask">
                  <text x="200" y="132" textAnchor="middle" dominantBaseline="middle"
                    fill="#ffffff"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    style={{
                      fontSize: "115px",
                      fontWeight: "900",
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif',
                      letterSpacing: "-0.03em"
                    }}>
                    MK
                  </text>
                </mask>
              </defs>

              {/* Base Dim Faint Glass Outline (Visible at 0%) */}
              <text x="200" y="132" textAnchor="middle" dominantBaseline="middle"
                fill="none"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                style={{
                  fontSize: "115px",
                  fontWeight: "900",
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif',
                  letterSpacing: "-0.035em",
                  filter: "drop-shadow(0 0 12px rgba(0, 122, 255, 0.3))"
                }}>
                MK
              </text>

              {/* Liquid Group Filling Left-to-Right Masked by MK with GPU Accelerated ClipPath */}
              <g mask="url(#mkMask)">
                <g ref={clipRef} style={{ clipPath: "inset(0 100% 0 0)", willChange: "clip-path" }}>
                  {/* Solid Liquid Rectangle */}
                  <rect x="0" y="0" width="400" height="200" fill="url(#iosLiquidGrad)"
                    style={{ filter: "drop-shadow(0 0 25px rgba(0, 122, 255, 0.9))" }} />

                  {/* Animated Vertical Wave Surface */}
                  <motion.g animate={{ y: [-12, 12, -12] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                    <path
                      d="M 0 0 H 400 Q 418 50 400 100 T 418 150 T 400 200 H 0 Z"
                      fill="url(#iosLiquidGrad)"
                    />
                  </motion.g>

                  {/* 3D Glass Specular Reflection Overlay */}
                  <rect x="0" y="0" width="400" height="95" fill="url(#glassReflection)" />
                </g>
              </g>
            </svg>
          </div>

        </div>

        {/* Status Pill & Percentage */}
        <div className="flex items-center gap-3 mt-8 px-5 py-2.5 rounded-full bg-white/[0.06] border border-[#007AFF]/20 backdrop-blur-xl shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-[#007AFF] animate-pulse shadow-[0_0_12px_#007AFF]" />
          <span className="font-mono text-xs font-semibold tracking-wider text-white/80 uppercase">
            MK
          </span>
          <span className="text-white/30 text-xs">•</span>
          <span ref={progressRef} className="font-mono text-xs font-black text-[#38BDF8] min-w-[2.5rem]">
            0%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-56 h-1 mt-3 bg-white/10 rounded-full overflow-hidden relative">
          <div ref={barRef} className="h-full bg-gradient-to-r from-[#007AFF] via-[#38BDF8] to-[#60A5FA] rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_#38BDF8]"
            style={{ width: "0%" }} />
        </div>

      </div>

      {/* Shutter Bottom Handle Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2.5 bg-gradient-to-r from-[#007AFF]/40 via-[#38BDF8] to-[#007AFF]/40 shadow-[0_0_25px_#007AFF] flex justify-center items-center">
        <div className="w-20 h-1 bg-[#38BDF8] rounded-full shadow-[0_0_12px_#38BDF8]" />
      </div>
    </div>
  )
}

// ──────────────────────── SCROLL REVEAL HELPERS ────────────────────────
function ScrollTextScrub({ children, className = "", style = {}, as: Component = "div" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-block ${className}`}
      style={{ ...style, willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  )
}

function ScrollElementScrub({ children, className = "", style = {}, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={{ ...style, willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  )
}

// ──────────────────────── NAV ────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false), [open, setOpen] = useState(false)
  useEffect(() => { 
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const scrollToSection = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -50, duration: 1.1 })
      } else {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return(<motion.nav initial={{y:-80,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.3,duration:0.7}}
    className="fixed top-0 left-0 right-0 z-50"
    style={{background:scrolled?"rgba(8,8,8,0.94)":"transparent",backdropFilter:scrolled?"blur(24px)":"none",
      borderBottom:scrolled?"1px solid rgba(59,130,246,0.07)":"none",
      padding:scrolled?"12px 0":"22px 0",transition:"all 0.4s ease"}}>
    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <a href="#" onClick={(e)=>{e.preventDefault(); window.scrollTo({top:0, behavior:"smooth"})}} data-h className="font-mono text-lg font-black tracking-tighter">
        <span style={{color:"#3B82F6"}}>{"<"}</span>MK
        <motion.span animate={{opacity:[1,0,1]}} transition={{duration:1,repeat:Infinity}} style={{color:"#3B82F6"}}>_</motion.span>
        <span style={{color:"#3B82F6"}}>{"/>"}</span>
      </a>
      <ul className="hidden md:flex items-center gap-0.5">
        {NAV.map(l=>(
          <li key={l}><button onClick={()=>scrollToSection(l.toLowerCase())} data-h
            className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group block">
            {l}<span className="absolute bottom-0 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{background:"#3B82F6"}}/>
          </button></li>
        ))}
      </ul>
      <button onClick={()=>setOpen(!open)} data-h
        className="md:hidden w-10 h-10 rounded-full flex items-center justify-center"
        style={{border:"1px solid rgba(59,130,246,0.22)",color:"#3B82F6"}}>
        <AnimatePresence mode="wait">
          <motion.div key={open?"x":"m"} initial={{rotate:-90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:90,opacity:0}} transition={{duration:0.16}}>
            {open?<X size={18}/>:<Menu size={18}/>}
          </motion.div>
        </AnimatePresence>
      </button>
    </div>
    <AnimatePresence>
      {open&&(<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}
        className="md:hidden overflow-hidden" style={{background:"rgba(8,8,8,0.98)",borderTop:"1px solid rgba(59,130,246,0.07)"}}>
        <ul className="px-6 py-6 space-y-3">
          {NAV.map((l,i)=>(
            <motion.li key={l} initial={{x:-20,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:i*0.04}}>
              <button onClick={()=>scrollToSection(l.toLowerCase())} data-h className="block w-full text-left py-1.5 text-gray-300 font-medium">
                <span className="font-mono text-xs mr-3" style={{color:"#3B82F6"}}>0{i+1}.</span>{l}
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>)}
    </AnimatePresence>
  </motion.nav>)
}

// ──────────────────────── HERO ────────────────────────
function Hero() {
  const roles=["Full Stack Developer","AI/ML Enthusiast","Problem Solver","Freelancer","Open Source Contributor"]
  const role=useTypewriter(roles,72,2200)
  const [mx,setMx]=useState(0), [my,setMy]=useState(0)
  const heroRef=useRef()

  const handleMM=useCallback(e=>{
    const r=heroRef.current?.getBoundingClientRect(); if(!r) return
    setMx(((e.clientX-r.left)/r.width)*2-1); setMy(((e.clientY-r.top)/r.height)*2-1)
  },[])

  return(
    <section ref={heroRef} className="relative min-h-screen overflow-hidden flex flex-col"
      onMouseMove={handleMM} onMouseLeave={()=>{setMx(0);setMy(0)}}>
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{backgroundImage:"linear-gradient(rgba(59,130,246,0.026) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.026) 1px,transparent 1px)",backgroundSize:"68px 68px"}}/>
      {/* 3D Canvas — right 60% receives pointer events */}
      <div className="absolute inset-0" style={{pointerEvents:"none"}}>
        <div className="absolute inset-0" style={{left:"42%", pointerEvents:"auto"}}>
          <Suspense fallback={null}><HeroScene mouseX={mx} mouseY={my}/></Suspense>
        </div>
      </div>
      {/* Left gradient to make text readable */}
      <div className="absolute inset-0 pointer-events-none"
        style={{background:"linear-gradient(90deg,rgba(8,8,8,1) 0%,rgba(8,8,8,0.97) 28%,rgba(8,8,8,0.88) 45%,rgba(8,8,8,0.35) 62%,transparent 78%)"}}/>
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{background:"linear-gradient(to top,#080808,transparent)"}}/>

      <div className="relative z-10 flex flex-col min-h-screen px-6 pt-28 pb-10 pointer-events-none">
        <div className="w-full flex-1 flex flex-col justify-center pointer-events-auto" style={{maxWidth:600}}>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 w-fit"
            style={{border:"1px solid rgba(59,130,246,0.28)",background:"rgba(59,130,246,0.04)"}}>
            <motion.span animate={{scale:[1,1.7,1],opacity:[1,0.3,1]}} transition={{duration:1.5,repeat:Infinity}}
              className="w-2 h-2 rounded-full flex-shrink-0" style={{background:"#3B82F6",boxShadow:"0 0 10px #3B82F6"}}/>
            <span className="text-sm font-semibold" style={{color:"#3B82F6"}}>Available for Opportunities</span>
          </motion.div>

          <div className="mb-3">
            <motion.h1 initial={{y:80,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1,duration:0.9,ease:[0.22,1,0.36,1]}}
              className="font-black uppercase leading-none tracking-tighter whitespace-nowrap"
              style={{fontSize:"clamp(1.8rem,3.6vw,3.5rem)",background:"linear-gradient(180deg,#FFFFFF 0%,#A0A0A0 100%)",
                WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",lineHeight:"0.95"}}>
              MANOHAR<br/>KUMAR
            </motion.h1>
          </div>

          <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.35,duration:0.6}} className="font-mono text-xl md:text-2xl text-gray-400 mb-5 flex items-center h-8">
            <span style={{color:"#3B82F6"}}>{">"}&nbsp;</span><span>{role}</span>
            <motion.span animate={{opacity:[1,0,1]}} transition={{duration:0.75,repeat:Infinity}} style={{color:"#3B82F6"}}>|</motion.span>
          </motion.div>

          <motion.p initial={{y:18,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.5,duration:0.55}} className="text-gray-300 text-base md:text-lg mb-8 max-w-md leading-relaxed">
            IT undergrad @ GGSIPU Delhi · 250+ DSA problems · Building AI-powered apps that&nbsp;
            <span style={{color:"#3B82F6"}}>actually matter</span>
          </motion.p>

          <motion.div initial={{y:16,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.62,duration:0.5}} className="flex flex-wrap gap-3 mb-8">
            <a href="#projects" data-h className="h-btn px-7 py-3 rounded-full font-bold text-sm text-black"
              style={{background:"linear-gradient(135deg,#3B82F6,#38BDF8)",boxShadow:"0 0 30px rgba(59,130,246,0.28)"}}>
              View Work →
            </a>
            <a href="/IManohar_Resume.pdf" download data-h className="h-btn flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all"
              style={{border:"1px solid rgba(59,130,246,0.28)",color:"#3B82F6"}}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(59,130,246,0.07)"}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent"}}>
              <Download size={14}/>Resume
            </a>
            <div className="flex gap-2 h-btn">
              {[{I:Github,h:"https://github.com/Manohar-2905"},{I:Linkedin,h:"https://www.linkedin.com/in/manohar-kumar-661981294/"},{I:Mail,h:"mailto:manoharkumar6206@gmail.com"}].map(({I,h},k)=>(
                <a key={k} href={h} target="_blank" rel="noreferrer" data-h
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
                  style={{border:"1px solid rgba(59,130,246,0.2)",color:"#3B82F6"}}
                  onMouseEnter={e=>{e.currentTarget.style.background="#3B82F6";e.currentTarget.style.color="#000"}}
                  onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color="#3B82F6"}}>
                  <I size={15}/>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.78}} className="flex flex-wrap gap-2.5">
            {[{v:"250+",l:"DSA Problems"},{v:"5+",l:"Projects"},{v:"2",l:"Clients"},{v:"8.5",l:"CGPA"},{v:"3+",l:"Yrs Coding"}].map((s,i)=>(
              <span key={i} className="h-chip flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                style={{background:"rgba(14,14,14,0.9)",border:"1px solid rgba(59,130,246,0.1)"}}>
                <strong className="font-mono" style={{color:"#3B82F6"}}>{s.v}</strong>
                <span className="text-gray-400 text-xs">{s.l}</span>
              </span>
            ))}
          </motion.div>

          <div className="flex items-center gap-1.5 mt-5">
            <MapPin size={12} style={{color:"#3B82F6"}}/>
            <span className="text-gray-500 text-xs">Delhi, India</span>
          </div>
        </div>
      </div>

      <motion.div animate={{y:[0,9,0]}} transition={{duration:1.9,repeat:Infinity}}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
        style={{color:"rgba(59,130,246,0.4)"}}>
        <span className="font-mono text-[9px] tracking-[0.35em]">SCROLL</span>
        <ChevronDown size={14}/>
      </motion.div>
    </section>
  )
}

// ──────────────────────── MARQUEE ────────────────────────
function MTag({t}) {
  return(<div className="flex items-center gap-2.5 px-5 py-2 rounded-full mx-2 flex-shrink-0"
    style={{border:"1px solid rgba(59,130,246,0.12)",background:"rgba(59,130,246,0.024)"}}>
    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:"#3B82F6"}}/>
    <span className="text-gray-400 text-sm font-medium whitespace-nowrap">{t}</span>
  </div>)
}
function Marquee() {
  return(<section className="py-12 overflow-hidden" style={{borderTop:"1px solid rgba(255,255,255,0.03)",borderBottom:"1px solid rgba(255,255,255,0.03)"}}>
    <div className="mb-3" style={{maskImage:"linear-gradient(90deg,transparent,black 8%,black 92%,transparent)"}}>
      <div style={{display:"flex",animation:"marquee-l 26s linear infinite",width:"max-content"}}>
        {[...MQ1,...MQ1,...MQ1].map((t,i)=><MTag key={i} t={t}/>)}
      </div>
    </div>
    <div style={{maskImage:"linear-gradient(90deg,transparent,black 8%,black 92%,transparent)"}}>
      <div style={{display:"flex",animation:"marquee-r 20s linear infinite",width:"max-content"}}>
        {[...MQ2,...MQ2,...MQ2].map((t,i)=><MTag key={i} t={t}/>)}
      </div>
    </div>
  </section>)
}

// ──────────────────────── ABOUT ────────────────────────
function About() {
  const bio="I'm Manohar Kumar, a 4th-year IT student at GGSIPU Delhi genuinely obsessed with building things that work beautifully. From AI-powered estimators to full-stack freelance systems — I turn complex problems into clean, scalable solutions. When I'm not coding, I'm exploring mountains or grinding LeetCode at 2am."
  const tl=[{y:"2023",l:"Started B.Tech IT",p:"GGSIPU, New Delhi"},{y:"Jun 2025",l:"Frontend Dev Intern",p:"Coding Bits"},{y:"Nov 2025",l:"Freelance Full-Stack Dev",p:"2 Clients · MERN Stack"},{y:"2026",l:"Software Dev Intern",p:"WinProFX · Currently"}]
  return(<section id="about" className="py-28 px-6" style={{borderTop:"1px solid rgba(59,130,246,0.05)"}}>
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <p className="font-mono text-sm mb-3" style={{color:"#3B82F6"}}>// about.me</p>
        <ScrollTextScrub as="h2" className="font-black mb-8 leading-none text-white block" style={{fontSize:"clamp(2.2rem,6vw,5rem)"}}>
          Who Am I?
        </ScrollTextScrub>
        <div className="text-gray-400 text-lg leading-relaxed mb-12">
          <ScrollTextScrub>{bio}</ScrollTextScrub>
        </div>
        <div className="relative pl-8" style={{borderLeft:"1px solid rgba(59,130,246,0.14)"}}>
          {tl.map((t,i)=>(
            <ScrollElementScrub key={i} className="relative mb-8 last:mb-0">
              <span className="absolute rounded-full" style={{left:-34,top:5,width:14,height:14,background:"#080808",border:"2px solid #3B82F6",boxShadow:"0 0 14px rgba(59,130,246,0.7)"}}/>
              <div className="font-mono text-xs mb-0.5" style={{color:"#3B82F6"}}>{t.y}</div>
              <div className="font-bold text-white">{t.l}</div>
              <div className="text-gray-500 text-sm">{t.p}</div>
            </ScrollElementScrub>
          ))}
        </div>
      </div>
      <ScrollElementScrub className="flex flex-col items-center gap-7">
        <div className="relative group flex items-center justify-center w-full h-[360px] md:h-[400px]">
          <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 m-auto w-64 h-64 rounded-full blur-[80px]" style={{ background: "#3B82F6" }} />
          
          <motion.div whileHover={{ scale: 1.05, rotate: -2 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-10 w-64 h-80 rounded-[2rem] overflow-hidden shadow-2xl"
            style={{ border: "2px solid rgba(59,130,246,0.3)", boxShadow: "0 20px 50px -10px rgba(59,130,246,0.3)" }}>
            <img src="/photos/hero.jpeg" alt="Manohar Kumar" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%)" }}/>
          </motion.div>

          <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-20 -right-4 top-20 px-4 py-2 rounded-2xl backdrop-blur-md font-bold text-xs"
            style={{ background: "rgba(10,10,10,0.8)", border: "1px solid rgba(59,130,246,0.3)", color: "#3B82F6" }}>
            MERN Stack
          </motion.div>
          
          <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-20 -left-6 bottom-24 px-4 py-2 rounded-2xl backdrop-blur-md font-bold text-xs"
            style={{ background: "rgba(10,10,10,0.8)", border: "1px solid rgba(56,189,248,0.3)", color: "#38BDF8" }}>
            AI Integrations
          </motion.div>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {[["📍","Delhi, India"],["🎓","GGSIPU · 8.5 CGPA"],["💼","2 Clients"],["⚡","Open to Work"]].map(([ic,tx],i)=>(
            <span key={i} className="px-4 py-2 rounded-full text-sm font-medium"
              style={{background:"rgba(14,14,14,0.9)",border:"1px solid rgba(59,130,246,0.1)",color:"#d0d0d0"}}>
              {ic} {tx}
            </span>
          ))}
        </div>
        <a href="/IManohar_Resume.pdf" download data-h
          className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all"
          style={{border:"1px solid rgba(59,130,246,0.25)",color:"#3B82F6"}}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(59,130,246,0.07)"}}
          onMouseLeave={e=>{e.currentTarget.style.background="transparent"}}>
          <Download size={15}/>Download Resume
        </a>
      </ScrollElementScrub>
    </div>
  </section>)
}

// ──────────────────────── SKILLS ────────────────────────
function Skills() {
  const prof=[{name:"JavaScript / React",v:90,c:"#F7DF1E"},{name:"Node.js / Express",v:82,c:"#339933"},{name:"Python / FastAPI",v:75,c:"#3776AB"},{name:"C++",v:70,c:"#00599C"},{name:"MongoDB / MySQL",v:80,c:"#47A248"}]
  return(<section id="skills" className="py-28 px-6 relative overflow-hidden" style={{borderTop:"1px solid rgba(59,130,246,0.05)"}}>
    <div className="absolute inset-0 pointer-events-none opacity-[0.14]"
      style={{backgroundImage:"radial-gradient(circle,rgba(59,130,246,0.35) 1px,transparent 1px)",backgroundSize:"30px 30px"}}/>
    <div className="absolute inset-0 pointer-events-none opacity-50">
      <Suspense fallback={null}><SkillsScene/></Suspense>
    </div>
    <div className="max-w-7xl mx-auto relative z-10">
      <p className="font-mono text-sm mb-3" style={{color:"#3B82F6"}}>// skills.json</p>
      <ScrollTextScrub as="h2" className="font-black mb-14 leading-none text-white block" style={{fontSize:"clamp(2.2rem,6vw,5rem)"}}>
        Tech Stack
      </ScrollTextScrub>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {SKILLS.map((cat,i)=>(
          <ScrollElementScrub key={cat.title}>
            <motion.div
              whileHover={{y:-6,transition:{duration:0.2}}}
              className="p-6 rounded-2xl transition-colors h-full"
              style={{background:"rgba(10,10,10,0.88)",border:"1px solid rgba(59,130,246,0.08)",backdropFilter:"blur(12px)"}}
              onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(59,130,246,0.28)"}
              onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(59,130,246,0.08)"}>
              <div className="flex items-center gap-3 mb-5"><span className="text-2xl">{cat.icon}</span><h3 className="font-bold text-white">{cat.title}</h3></div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item=>(
                  <span key={item} className="skill-pill px-3 py-1 rounded-full text-xs font-medium text-gray-400"
                    style={{background:"#080808",border:"1px solid rgba(59,130,246,0.1)"}}>{item}</span>
                ))}
              </div>
            </motion.div>
          </ScrollElementScrub>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <ScrollElementScrub className="p-8 rounded-2xl" style={{background:"rgba(10,10,10,0.9)",border:"1px solid rgba(59,130,246,0.08)"}}>
          <h3 className="text-lg font-bold mb-7 text-white">Proficiency</h3>
          <div className="space-y-5">
            {prof.map((p,i)=>(
              <div key={p.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300 font-medium">{p.name}</span>
                  <span className="font-mono font-bold" style={{color:p.c}}>{p.v}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{background:"rgba(255,255,255,0.05)"}}>
                  <div className="h-full rounded-full transition-all duration-1000" style={{width:`${p.v}%`, background:`linear-gradient(90deg,${p.c},#38BDF8)`}}/>
                </div>
              </div>
            ))}
          </div>
        </ScrollElementScrub>
        <ScrollElementScrub className="p-8 rounded-2xl flex flex-col" style={{background:"rgba(10,10,10,0.9)",border:"1px solid rgba(59,130,246,0.08)"}}>
          <h3 className="text-lg font-bold mb-5 text-white">DSA Progress</h3>
          <div className="flex-1 flex flex-col items-center justify-center text-center py-4">
            <div className="text-7xl font-black font-mono mb-2"
              style={{background:"linear-gradient(135deg,#3B82F6,#38BDF8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>250+</div>
            <p className="text-gray-500 text-sm mb-5">Problems Solved</p>
            <div className="flex flex-wrap gap-2 justify-center mb-5">
              {DSA.map(t=><span key={t} className="px-3 py-1 rounded-full text-xs" style={{background:"#080808",border:"1px solid rgba(59,130,246,0.1)",color:"#aaa"}}>{t}</span>)}
            </div>
            <div className="flex gap-3 w-full">
              <div className="flex-1 p-3 rounded-xl text-center" style={{background:"rgba(249,115,22,0.07)",border:"1px solid rgba(249,115,22,0.18)"}}>
                <div className="text-orange-400 font-bold text-sm">LeetCode</div>
                <div className="text-white font-mono text-2xl font-bold">200+</div>
              </div>
              <div className="flex-1 p-3 rounded-xl text-center" style={{background:"rgba(34,197,94,0.07)",border:"1px solid rgba(34,197,94,0.18)"}}>
                <div className="text-green-400 font-bold text-sm">HackerRank</div>
                <div className="text-white font-mono text-2xl font-bold">50+</div>
              </div>
            </div>
          </div>
        </ScrollElementScrub>
      </div>
    </div>
  </section>)
}

// ──────────────────────── PROJECT DETAILS MODAL ────────────────────────
function ProjectModal({ project, onClose }) {
  const [selectedImg, setSelectedImg] = useState(
    project.imgs && project.imgs.length > 0 ? project.imgs[0] : null
  )

  useEffect(() => {
    setSelectedImg(project.imgs && project.imgs.length > 0 ? project.imgs[0] : null)
  }, [project])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    if (window.__lenis) window.__lenis.stop()
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      if (window.__lenis) window.__lenis.start()
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  if (typeof document === "undefined") return null

  return createPortal(
    <div className="fixed inset-0 z-[90000] flex items-center justify-center p-3 sm:p-6 md:p-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-5xl max-h-[90vh] rounded-3xl bg-[#0a0a0a] border border-white/15 overflow-hidden flex flex-col lg:flex-row shadow-[0_20px_80px_rgba(0,0,0,0.9)]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          data-h
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#3B82F6] hover:text-black hover:scale-110 transition-all"
        >
          <X size={20} />
        </button>

        {/* Left Side: Media Showcase */}
        <div className="w-full lg:w-1/2 bg-[#050505] p-5 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0d0d0d] border border-white/10 mb-4 flex items-center justify-center">
            {selectedImg ? (
              <img
                src={selectedImg}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
            ) : (
              <div className="text-center p-6">
                <div className="text-6xl font-black mb-2 opacity-25 font-mono" style={{ color: project.color }}>
                  {project.num}
                </div>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                  Architecture & Backend System
                </p>
              </div>
            )}
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wider backdrop-blur-md"
              style={{ background: "rgba(0,0,0,0.7)", color: project.color, border: `1px solid ${project.color}40` }}>
              {project.type}
            </div>
          </div>

          {/* Thumbnail Selector */}
          {project.imgs && project.imgs.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1">
              {project.imgs.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(src)}
                  data-h
                  className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                    selectedImg === src
                      ? "border-[#3B82F6] scale-105 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                      : "border-white/15 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={src} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Detailed Case Study */}
        <div
          data-lenis-prevent
          className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col overflow-y-auto max-h-[60vh] lg:max-h-[85vh] bg-[#0a0a0a]"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-4 mb-3">
            <span
              className="text-xs font-bold font-mono px-3 py-1 rounded-full uppercase tracking-wider"
              style={{ background: `${project.color}18`, color: project.color, border: `1px solid ${project.color}35` }}
            >
              {project.type}
            </span>
            <span className="font-mono text-sm font-bold text-gray-500">#{project.num}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
            {project.title}
          </h3>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            {project.desc}
          </p>

          {/* Key Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                <Sparkles size={14} className="text-[#3B82F6]" /> Key Architecture & Achievements
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <span className="text-[#3B82F6] font-bold mt-0.5">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400 mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-semibold"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#e0e0e0" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/10">
            {project.live && project.live !== "#" ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                data-h
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-sm text-black transition-transform hover:scale-105 active:scale-95 shadow-lg"
                style={{ background: project.color, boxShadow: `0 10px 30px -8px ${project.color}80` }}
              >
                Live Preview <ExternalLink size={16} />
              </a>
            ) : (
              <span className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-xs text-gray-400 bg-white/5 border border-white/10">
                Client / Private Deployment
              </span>
            )}

            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                data-h
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all hover:scale-105 active:scale-95"
              >
                <Github size={18} /> Source Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  )
}

// ──────────────────────── PROJECTS — EXPANDABLE GALLERY ────────────────────────
function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [cols, setCols] = useState(2)

  return (
    <section id="projects" className="py-32 px-6 relative" style={{ borderTop: "1px solid rgba(59,130,246,0.05)", background: "#000" }}>
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 pointer-events-none opacity-[0.12]" 
           style={{ background: "radial-gradient(ellipse at top, #3B82F6, transparent 70%)" }} />
           
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 flex flex-col items-center">
          <p className="font-mono text-sm mb-4 tracking-widest uppercase" style={{ color: "#3B82F6" }}>
            // project.gallery
          </p>
          <ScrollTextScrub as="h2" className="font-black leading-none block"
            style={{ fontSize: "clamp(3rem,9vw,6rem)", background: "linear-gradient(180deg,#FFFFFF 0%,#808080 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Selected Work
          </ScrollTextScrub>
          <div className="mt-6 text-gray-400 max-w-2xl text-base md:text-lg">
            <ScrollTextScrub>
              Explore my entire portfolio of full-stack systems, automation bots, and AI tools. Click on any card to view detailed architecture breakdowns, screenshots, and live demos.
            </ScrollTextScrub>
          </div>
        </div>

        {/* View Toggle Controls */}
        <ScrollElementScrub className="flex justify-center mb-12">
          <div className="flex bg-[#0a0a0a] border border-white/10 p-1.5 rounded-full items-center">
             <span className="text-gray-500 text-xs font-mono uppercase tracking-widest px-4 hidden sm:block">Columns:</span>
             {[2, 3, 4].map(num => (
               <button
                 key={num}
                 onClick={() => setCols(num)}
                 data-h
                 className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${cols === num ? 'bg-[#3B82F6] text-black shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
               >
                 {num}
               </button>
             ))}
          </div>
        </ScrollElementScrub>

        {/* Grid View */}
        <div className={`grid gap-6 md:gap-8 transition-all duration-500 ${
          cols === 2 ? "grid-cols-1 md:grid-cols-2" :
          cols === 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" :
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
        }`}>
          {PROJECTS.map((p) => (
            <ScrollElementScrub key={p.num}>
              <motion.div
                whileHover={{ y: -6 }}
                onClick={() => setActiveProject(p)}
                data-h
                className="group cursor-pointer rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-[#3B82F6]/50 relative flex flex-col h-[420px] shadow-2xl transition-all duration-300"
                style={{ transform: "translateZ(0)" }}
              >
                {/* Image Box */}
                <div className="h-[55%] w-full relative overflow-hidden bg-[#0d0d0d]">
                  {p.imgs && p.imgs.length > 0 ? (
                    <img
                      src={p.imgs[0]}
                      alt={p.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-108 group-hover:opacity-100 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-black text-6xl opacity-15 font-mono" style={{ color: p.color }}>
                      {p.num}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent opacity-95" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider backdrop-blur-md"
                      style={{ background: "rgba(0,0,0,0.7)", color: p.color, border: `1px solid ${p.color}40` }}
                    >
                      {p.type}
                    </span>
                  </div>

                  {/* Hover "View Details" Pill */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#3B82F6] text-black shadow-[0_0_12px_rgba(59,130,246,0.6)]">
                      View Details ↗
                    </span>
                  </div>
                </div>
                
                {/* Content Summary */}
                <div className="p-6 flex flex-col flex-1 relative z-10 -mt-6">
                   <div className="flex justify-between items-start mb-2">
                     <h3 className="text-xl font-black text-white group-hover:text-[#3B82F6] transition-colors line-clamp-1">
                       {p.title}
                     </h3>
                     <span className="font-mono text-sm font-bold text-gray-500 ml-2">{p.num}</span>
                   </div>
                   
                   <p className="text-gray-400 text-xs line-clamp-2 mb-4 flex-1">
                     {p.desc}
                   </p>
                   
                   <div className="flex flex-wrap gap-1.5 mb-4">
                     {p.tech.slice(0, 3).map((t) => (
                       <span
                         key={t}
                         className="px-2 py-0.5 rounded-md text-[10px] font-medium"
                         style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#aaa" }}
                       >
                         {t}
                       </span>
                     ))}
                     {p.tech.length > 3 && (
                       <span className="px-2 py-0.5 rounded-md text-[10px] font-medium text-gray-500">
                         +{p.tech.length - 3}
                       </span>
                     )}
                   </div>

                   {/* Card Footer with Click Prompt */}
                   <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400 group-hover:text-[#38BDF8] transition-colors">
                     <span className="font-medium">Explore Architecture & Preview</span>
                     <ArrowUp size={14} className="rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                   </div>
                </div>
              </motion.div>
            </ScrollElementScrub>
          ))}
        </div>
        
        <ScrollElementScrub className="mt-16 flex justify-center">
          <a href="https://github.com/Manohar-2905" target="_blank" rel="noreferrer" data-h 
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm transition-all hover:scale-105 hover:bg-[#3B82F6] hover:text-black"
            style={{ border: "1px solid rgba(59,130,246,0.3)", color: "#3B82F6" }}>
            Explore GitHub Profile <ArrowUp size={16} className="rotate-45" />
          </a>
        </ScrollElementScrub>
      </div>

      {/* Expanded Modal View via Portal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

// ──────────────────────── EXPERIENCE ────────────────────────
function Experience() {
  const items=[
    {role:"Software Developer Intern",company:"WinProFX",period:"Jan 2026 – Present",badge:"Current · Intern",c:"#3B82F6",
     pts:[
       "Built multi-step broker onboarding & integration flows with React, TypeScript & Tailwind CSS for platforms like Exness & WinProFX.",
       "Engineered scalable UI components (accessible dropdowns, sliders, animated status modals) improving UX & performance.",
       "Implemented complex state management, route protection, async verification, and secure auth workflows."
     ]},
    {role:"Frontend Developer Intern",company:"Coding Bits",period:"June 2025 – July 2025",badge:"Internship",c:"#38BDF8",
     pts:["Developed reusable React components, improving scalability","Optimized performance & cross-browser compatibility","Collaborated in Agile environment with code reviews"]},
    {role:"Freelance Full-Stack Developer",company:"Self-Employed",period:"Nov 2025 – Jan 2026",badge:"Freelance",c:"#8B5CF6",
     pts:["Dasgupta Maiti & Associates (Kolkata) — MERN, JWT, Zoho Mail API, Cloudinary, SSL+DNS production deploy","Yashoda Bhawan (Jharkhand) — Hotel system, admin dashboard, optimised DB schema, production deployment"]},
  ]
  return(<section id="experience" className="py-24 px-6" style={{borderTop:"1px solid rgba(59,130,246,0.05)"}}>
    <div className="max-w-4xl mx-auto">
      <p className="font-mono text-sm mb-3" style={{color:"#3B82F6"}}>// career.log</p>
      <ScrollTextScrub as="h2" className="font-black mb-12 leading-none text-white block" style={{fontSize:"clamp(2.2rem,6vw,4.5rem)"}}>
        Experience
      </ScrollTextScrub>
      <div className="relative border-l border-gray-800 ml-3 md:ml-0 md:border-none space-y-8">
        {items.map((it,i)=>(
          <ScrollElementScrub key={i} className="relative pl-8 md:pl-0 md:grid md:grid-cols-[200px_1fr] gap-8 items-start group">
            <div className="md:hidden absolute left-[-4.5px] top-2 w-2 h-2 rounded-full" style={{background:it.c,boxShadow:`0 0 8px ${it.c}`}}/>
            <div className="mb-2 md:mb-0 mt-1.5">
              <p className="font-mono text-sm text-gray-500">{it.period}</p>
            </div>
            <div className="p-7 rounded-2xl transition-all" style={{background:"rgba(10,10,10,0.8)",border:"1px solid rgba(59,130,246,0.08)"}}
              onMouseEnter={e=>e.currentTarget.style.borderColor=`${it.c}40`}
              onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(59,130,246,0.08)"}>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-white">{it.role}</h3>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{color:it.c,background:`${it.c}12`,border:`1px solid ${it.c}30`}}>{it.badge}</span>
              </div>
              <p className="text-gray-400 font-medium mb-5">{it.company}</p>
              <ul className="space-y-3">
                {it.pts.map((pt,k)=>(
                  <li key={k} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                    <span className="flex-shrink-0 mt-0.5" style={{color:it.c}}>▹</span>
                    <ScrollTextScrub>{pt}</ScrollTextScrub>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollElementScrub>
        ))}
      </div>
    </div>
  </section>)
}

// ──────────────────────── HACKATHONS ────────────────────────
function Hackathons() {
  return(<section id="hackathons" className="py-28 px-6 relative overflow-hidden" style={{borderTop:"1px solid rgba(59,130,246,0.05)"}}>
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06]">
      {Array.from({length:20}).map((_,i)=>(
        <motion.div key={i} className="absolute font-mono text-[10px]" style={{left:`${(i*5)%100}%`,top:-60,color:"#3B82F6"}}
          animate={{y:["0vh","120vh"]}} transition={{duration:7+(i%4),repeat:Infinity,delay:i*0.32,ease:"linear"}}>
          {Array.from({length:14}).map((_,j)=><div key={j}>{Math.random()>0.5?"1":"0"}</div>)}
        </motion.div>
      ))}
    </div>
    <div className="max-w-7xl mx-auto relative">
      <p className="font-mono text-sm mb-3" style={{color:"#3B82F6"}}>// hackathons.log</p>
      <ScrollTextScrub as="h2" className="font-black mb-12 leading-none text-white block" style={{fontSize:"clamp(2.2rem,6vw,5rem)"}}>
        Hackathon Arena 🏆
      </ScrollTextScrub>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HACKS.map((h,i)=>(
          <ScrollElementScrub key={i}>
            <motion.div whileHover={{y:-8,transition:{duration:0.22}}}
              className="p-6 rounded-2xl h-full" style={{background:"rgba(59,130,246,0.024)",backdropFilter:"blur(10px)",border:"1px solid rgba(59,130,246,0.14)"}}>
              <div className="text-5xl mb-4">{h.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{h.title}</h3>
              {[["Event",h.event],["Date",h.date],["Role",h.role],["Built",h.built]].map(([k,v])=>(
                <p key={k} className="text-sm text-gray-400 mb-1.5"><span style={{color:"#3B82F6"}}>{k}:</span> {v}</p>
              ))}
              <div className="flex items-center justify-between mt-4">
                <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{background:"rgba(59,130,246,0.1)",border:"1px solid rgba(59,130,246,0.3)",color:"#3B82F6"}}>{h.result}</span>
                <Trophy size={22} style={{color:h.medal,filter:`drop-shadow(0 0 7px ${h.medal})`}}/>
              </div>
              {h.img ? (
                <div className="mt-4 h-40 rounded-xl overflow-hidden border border-[rgba(59,130,246,0.2)] bg-black/40">
                  <img src={h.img} alt={h.title} className="w-full h-full object-contain p-2 transition-transform duration-300 hover:scale-105" />
                </div>
              ) : (
                <div className="mt-4 h-28 rounded-xl flex items-center justify-center"
                  style={{background:"linear-gradient(135deg,rgba(59,130,246,0.06),rgba(56,189,248,0.06))",border:"1px dashed rgba(59,130,246,0.1)"}}>
                  <span className="text-gray-600 text-xs font-mono">[ Certificate Image ]</span>
                </div>
              )}
            </motion.div>
          </ScrollElementScrub>
        ))}
      </div>
    </div>
  </section>)
}

// ──────────────────────── CONTACT ────────────────────────
function MagBtn({children,onClick,style:s,className}) {
  const ref=useRef()
  const x=useMotionValue(0),y=useMotionValue(0)
  const sx=useSpring(x,{damping:13,stiffness:190}),sy=useSpring(y,{damping:13,stiffness:190})
  const mv=e=>{const r=ref.current?.getBoundingClientRect();if(!r)return;x.set((e.clientX-r.left-r.width/2)*0.32);y.set((e.clientY-r.top-r.height/2)*0.32)}
  return(<motion.button ref={ref} onMouseMove={mv} onMouseLeave={()=>{x.set(0);y.set(0)}}
    style={{x:sx,y:sy,...s}} onClick={onClick} className={className} data-h>{children}</motion.button>)
}
function Contact() {
  const [copied, setCopied] = useState(false)
  const cp = () => {
    navigator.clipboard.writeText("manoharkumar6206@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden min-h-screen flex items-center justify-center" style={{ borderTop: "1px solid rgba(59,130,246,0.08)", background: "#050505" }}>
      {/* Dynamic Ambient Background Glows */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #38BDF8 0%, #3B82F6 40%, transparent 70%)", filter: "blur(90px)" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full flex flex-col items-center">
        {/* Giant Hero Heading */}
        <div className="mb-8 select-none">
          <ScrollTextScrub
            as="h2"
            className="font-black tracking-tight leading-[0.95] text-center"
            style={{
              fontSize: "clamp(3.2rem, 9.5vw, 6.8rem)",
              background: "linear-gradient(135deg, #38BDF8 0%, #2DD4BF 45%, #60A5FA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 35px rgba(56, 189, 248, 0.25))"
            }}
          >
            Let's Build<br />Something<br />Amazing.
          </ScrollTextScrub>
        </div>

        {/* Subtitle */}
        <div className="text-gray-300 text-base sm:text-xl mb-10 max-w-xl mx-auto font-normal leading-relaxed">
          <ScrollTextScrub>
            Open to internships, full-time roles, freelance projects, and cool collabs.
          </ScrollTextScrub>
        </div>

        {/* Glowing Send a Message CTA */}
        <ScrollElementScrub className="flex justify-center mb-16">
          <MagBtn
            onClick={() => window.open("https://wa.me/916206293136?text=Hi%20Manohar,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!", "_blank")}
            className="px-10 py-4 sm:px-12 sm:py-4.5 rounded-full text-base sm:text-lg font-black text-black flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #2DD4BF 0%, #38BDF8 100%)",
              boxShadow: "0 0 45px rgba(45, 212, 191, 0.45), 0 0 80px rgba(56, 189, 248, 0.25)"
            }}
          >
            <Sparkles size={20} className="text-black" />
            <span>Send a Message</span>
          </MagBtn>
        </ScrollElementScrub>

        {/* Social / Contact Grid Cards */}
        <ScrollElementScrub className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-3xl">
          {[
            {
              icon: copied ? <Check size={22} className="text-[#2DD4BF]" /> : <Mail size={22} />,
              label: copied ? "Copied to Clipboard!" : "manoharkumar6206@gmail.com",
              onClick: cp
            },
            {
              icon: <Linkedin size={22} />,
              label: "linkedin/in/manohar-kumar",
              href: "https://www.linkedin.com/in/manohar-kumar-661981294/"
            },
            {
              icon: <Github size={22} />,
              label: "github/Manohar-2905",
              href: "https://github.com/Manohar-2905"
            },
            {
              icon: <MapPin size={22} />,
              label: "Delhi, India"
            },
          ].map((c, i) => {
            const cls = "p-5 rounded-2xl flex flex-col items-center justify-center gap-2.5 transition-all group border"
            const sty = { background: "rgba(10, 10, 10, 0.8)", borderColor: "rgba(255, 255, 255, 0.08)", backdropFilter: "blur(12px)" }
            const hi = (e) => {
              e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.4)"
              e.currentTarget.style.background = "rgba(18, 18, 18, 0.95)"
              e.currentTarget.style.transform = "translateY(-3px)"
            }
            const ho = (e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)"
              e.currentTarget.style.background = "rgba(10, 10, 10, 0.8)"
              e.currentTarget.style.transform = "translateY(0)"
            }
            return c.href ? (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                data-h
                className={cls}
                style={sty}
                onMouseEnter={hi}
                onMouseLeave={ho}
              >
                <div className="text-[#38BDF8] group-hover:text-[#2DD4BF] transition-colors">{c.icon}</div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors break-all text-center font-medium">
                  {c.label}
                </span>
              </a>
            ) : (
              <button
                key={i}
                onClick={c.onClick}
                data-h
                className={cls}
                style={sty}
                onMouseEnter={hi}
                onMouseLeave={ho}
              >
                <div className="text-[#38BDF8] group-hover:text-[#2DD4BF] transition-colors">{c.icon}</div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors break-all text-center font-medium">
                  {c.label}
                </span>
              </button>
            )
          })}
        </ScrollElementScrub>
      </div>
    </section>
  )
}

function Footer() {
  return(<footer className="py-7 px-6" style={{borderTop:"1px solid rgba(59,130,246,0.07)"}}>
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4 items-center text-sm text-gray-600">
      <p>© 2026 Manohar Kumar · Built with ☕ + late nights</p>
      <p className="text-center hidden md:block">React · R3F · GSAP · Framer Motion · Three.js</p>
      <div className="flex gap-4 md:justify-end">
        {[{I:Github,h:"https://github.com/Manohar-2905"},{I:Linkedin,h:"https://www.linkedin.com/in/manohar-kumar-661981294/"},{I:Mail,h:"mailto:manoharkumar6206@gmail.com"}].map(({I,h},k)=>(
          <a key={k} href={h} target="_blank" rel="noreferrer" data-h className="transition-colors hover:text-[#3B82F6]"><I size={16}/></a>
        ))}
      </div>
    </div>
  </footer>)
}

function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fn = () => setShow(window.scrollY > window.innerHeight * 0.55)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={() => {
            if (window.__lenis) {
              window.__lenis.scrollTo(0, { duration: 1.2 })
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          }}
          data-h
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-black z-40 transition-transform hover:scale-110 active:scale-95"
          style={{ background: "linear-gradient(135deg,#3B82F6,#38BDF8)", boxShadow: "0 0 30px rgba(59,130,246,0.55)" }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

function EasterEgg() {
  const [show,setShow]=useState(false),[conf,setConf]=useState([])
  useEffect(()=>{
    let buf=""
    const fn=e=>{
      buf=(buf+e.key.toLowerCase()).slice(-4)
      if(buf==="hire"){
        setShow(true)
        setConf(Array.from({length:80},(_,i)=>({id:i+Date.now(),x:Math.random()*window.innerWidth,c:["#3B82F6","#38BDF8","#fff","#60A5FA","#1D4ED8"][i%5]})))
        setTimeout(()=>{setShow(false);setConf([])},4000)
      }
    }
    window.addEventListener("keydown",fn); return()=>window.removeEventListener("keydown",fn)
  },[])
  return(<>
    <AnimatePresence>
      {show&&(<motion.div initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} exit={{y:80,opacity:0}}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9000] px-8 py-4 rounded-full text-black font-black text-base whitespace-nowrap"
        style={{background:"linear-gradient(135deg,#3B82F6,#38BDF8)",boxShadow:"0 10px 55px rgba(59,130,246,0.6)"}}>
        🎉 Great choice! Let's build something amazing!
      </motion.div>)}
    </AnimatePresence>
    <div className="fixed inset-0 pointer-events-none z-[8999]">
      {conf.map(c=>(
        <motion.div key={c.id} initial={{y:-30,x:c.x,opacity:1,rotate:0,scale:1}}
          animate={{y:window.innerHeight+60,rotate:720,opacity:0,scale:0.3}} transition={{duration:3,ease:"easeIn"}}
          className="absolute w-3 h-3 rounded-sm" style={{background:c.c,boxShadow:`0 0 8px ${c.c}`}}/>
      ))}
    </div>
  </>)
}

// ──────────────────────── SHOOTING STARS ────────────────────────
function ShootingStars() {
  const [stars, setStars] = useState([])
  useEffect(() => {
    setStars(Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 120}%`,
      top: `${Math.random() * -30}%`,
      delay: Math.random() * 12,
      duration: 1.5 + Math.random() * 3,
      size: 0.5 + Math.random() * 1.5
    })))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {stars.map((s) => (
        <div key={s.id} className="shooting-star"
          style={{
            left: s.left, top: s.top,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            transform: `scale(${s.size})`
          }}>
          <div className="star-inner">
            <div className="star-tail" />
            <div className="star-head" />
          </div>
        </div>
      ))}
      <style>{`
        .shooting-star {
          position: absolute;
          animation: falling-star linear infinite;
          opacity: 0;
        }
        .star-inner {
          position: relative;
          transform: rotate(135deg);
        }
        .star-head {
          position: absolute;
          top: -2px; left: -2px;
          width: 4px; height: 4px; background: #fff; border-radius: 50%;
          box-shadow: 0 0 15px 3px rgba(59, 130, 246, 0.9);
        }
        .star-tail {
          position: absolute;
          top: -1px; left: -150px;
          width: 150px; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.8), #fff);
        }
        @keyframes falling-star {
          0% { transform: translate3d(0, 0, 0); opacity: 0; }
          5% { opacity: 1; }
          15% { opacity: 0; }
          100% { transform: translate3d(-1500px, 1500px, 0); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

// ──────────────────────── APP ────────────────────────
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

    lenis.on('scroll', ScrollTrigger.update)

    const updateTicker = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      delete window.__lenis
      lenis.destroy()
      gsap.ticker.remove(updateTicker)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-[#080808]">
      <Cursor/>
      <Trail/>
      <ProgressBar/>

      {loading && <Loader onDone={() => {
        setLoading(false)
        ScrollTrigger.refresh()
        if (window.__lenis) window.__lenis.resize()
      }} />}

      <div className="main-reveal" style={{ scale: 0.96, opacity: 0.85, transformOrigin: "center top", willChange: "transform, opacity" }}>
        <ShootingStars/><Nav/>
        <main>
          <Hero/><Marquee/><About/><Experience/><Skills/>
          <Projects/><Hackathons/><Contact/>
        </main>
        <Footer/><BackToTop/><EasterEgg/>
      </div>
    </div>
  )
}
