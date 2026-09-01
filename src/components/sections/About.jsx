import { lazy, Suspense } from "react"
import { motion } from "framer-motion"
import { Download, Sparkles, MapPin, GraduationCap, Briefcase, Award } from "lucide-react"
import { ScrollTextScrub, ScrollElementScrub } from "../common/ScrollReveal"
import { CAREER_TIMELINE } from "../../data/portfolioData"

const ProfileScene = lazy(() => import("../../three/ProfileScene.jsx"))

export default function About() {
  const bio =
    "I'm Manohar Kumar, a 4th-year Information Technology student at GGSIPU Delhi genuinely obsessed with building software that runs smoothly, looks stunning, and solves real-world bottlenecks. From multi-agent AI cost estimators to secure MERN enterprise platforms — I transform complex architectures into clean, accessible systems. When I'm not writing code or analyzing time complexities, you'll find me exploring mountains or pushing solutions on LeetCode at 2 AM."

  return (
    <section id="about" className="py-28 px-6 border-t border-white/[0.05] relative overflow-hidden bg-[#080808]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#3B82F6]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Bio & Career Timeline */}
        <div>
          <p className="font-mono text-xs mb-3 text-[#38BDF8] tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            // ABOUT.ME // IDENTITY
          </p>

          <ScrollTextScrub
            as="h2"
            className="font-black mb-8 leading-none text-white block tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
          >
            Engineering With Precision.
          </ScrollTextScrub>

          <div className="text-gray-300 text-base sm:text-lg leading-relaxed mb-12 font-normal">
            <ScrollTextScrub>{bio}</ScrollTextScrub>
          </div>

          {/* Career Nodes Timeline */}
          <div className="relative pl-8 border-l border-[#3B82F6]/20 space-y-8">
            {CAREER_TIMELINE.map((t, i) => (
              <ScrollElementScrub key={i} className="relative group">
                <span
                  className="absolute rounded-full -left-[39px] top-1.5 w-3.5 h-3.5 bg-[#080808] border-2 border-[#3B82F6] group-hover:border-[#38BDF8] group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                />
                <div className="font-mono text-xs mb-0.5 text-[#38BDF8] font-bold">
                  {t.year}
                </div>
                <div className="font-bold text-white text-base">{t.role}</div>
                <div className="text-gray-400 text-xs font-mono mb-1">{t.org}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{t.highlight}</p>
              </ScrollElementScrub>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Holographic Card & Quick Info */}
        <ScrollElementScrub className="flex flex-col items-center gap-8">
          <div className="relative w-full h-[400px] sm:h-[450px] flex items-center justify-center">
            {/* 3D Floating Avatar Canvas */}
            <div className="absolute inset-0">
              <Suspense fallback={null}>
                <ProfileScene />
              </Suspense>
            </div>

            {/* Floating Cyber HUD Badges */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 top-16 px-4 py-2 rounded-2xl bg-[#0c0d12]/90 border border-[#3B82F6]/30 backdrop-blur-xl shadow-2xl font-mono text-xs font-bold text-[#38BDF8] pointer-events-none"
            >
              MERN + FastApi
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 bottom-20 px-4 py-2 rounded-2xl bg-[#0c0d12]/90 border border-[#2DD4BF]/30 backdrop-blur-xl shadow-2xl font-mono text-xs font-bold text-[#2DD4BF] pointer-events-none"
            >
              250+ DSA Problems
            </motion.div>
          </div>

          {/* Quick Stats Grid */}
          <div className="flex flex-wrap gap-2.5 justify-center max-w-md">
            {[
              { icon: <MapPin size={13} className="text-[#3B82F6]" />, text: "Delhi, India" },
              { icon: <GraduationCap size={13} className="text-[#38BDF8]" />, text: "GGSIPU · 8.5 CGPA" },
              { icon: <Briefcase size={13} className="text-[#2DD4BF]" />, text: "2 Enterprise Clients" },
              { icon: <Award size={13} className="text-[#FBBF24]" />, text: "Hackathon Competitor" },
            ].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium bg-white/[0.04] border border-white/10 text-gray-300"
              >
                {item.icon}
                <span>{item.text}</span>
              </span>
            ))}
          </div>

          {/* Download Resume Button */}
          <a
            href="/IManohar_Resume.pdf"
            download
            data-h
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold transition-all border border-[#3B82F6]/40 text-white bg-white/[0.03] hover:bg-[#3B82F6]/15 hover:border-[#38BDF8] shadow-lg"
          >
            <Download size={16} className="text-[#38BDF8]" />
            <span>Download Official Resume</span>
          </a>
        </ScrollElementScrub>
      </div>
    </section>
  )
}
