import { lazy, Suspense } from "react"
import { motion } from "framer-motion"
import { Cpu, Terminal, Code2, Award } from "lucide-react"
import { ScrollTextScrub, ScrollElementScrub } from "../common/ScrollReveal"
import { SKILL_CATEGORIES, TECH_PROFICIENCY, DSA_TOPICS } from "../../data/portfolioData"

const SkillsScene = lazy(() => import("../../three/SkillsScene.jsx"))

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 border-t border-white/[0.05] relative overflow-hidden bg-[#080808]"
    >
      {/* Background Radial Matrix */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.35) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* 3D Floating Skill Orbs Background */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <Suspense fallback={null}>
          <SkillsScene />
        </Suspense>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="font-mono text-xs mb-3 text-[#38BDF8] tracking-widest uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
          // SKILLS.JSON // CAPABILITIES
        </p>

        <ScrollTextScrub
          as="h2"
          className="font-black mb-14 leading-none text-white block tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
        >
          Technical Arsenal
        </ScrollTextScrub>

        {/* Categories Matrix Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {SKILL_CATEGORIES.map((cat) => (
            <ScrollElementScrub key={cat.title}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 rounded-3xl h-full transition-all bg-[#0a0c10]/85 border border-white/10 hover:border-[#3B82F6]/50 shadow-xl backdrop-blur-xl relative group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-black text-white text-base tracking-wide group-hover:text-[#38BDF8] transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-xl text-xs font-mono font-medium text-gray-300 bg-white/[0.04] border border-white/10 hover:border-[#38BDF8]/60 hover:text-white hover:bg-[#3B82F6]/10 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollElementScrub>
          ))}
        </div>

        {/* Proficiency & DSA Metrics Dashboard */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Proficiency Bars */}
          <ScrollElementScrub
            className="p-8 rounded-3xl bg-[#0a0c10]/90 border border-white/10 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <Cpu size={18} className="text-[#38BDF8]" />
                <span>Core Framework Proficiency</span>
              </h3>
              <span className="text-xs font-mono text-gray-500 uppercase">REAL-WORLD BENCHMARK</span>
            </div>

            <div className="space-y-6">
              {TECH_PROFICIENCY.map((p) => (
                <div key={p.name}>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-gray-300 font-semibold">{p.name}</span>
                    <span className="font-bold" style={{ color: p.color }}>
                      {p.val}%
                    </span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ background: "rgba(255, 255, 255, 0.06)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000 shadow-sm"
                      style={{
                        width: `${p.val}%`,
                        background: `linear-gradient(90deg, ${p.color}, #38BDF8)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ScrollElementScrub>

          {/* DSA Progress Card */}
          <ScrollElementScrub
            className="p-8 rounded-3xl flex flex-col justify-between bg-[#0a0c10]/90 border border-white/10 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <Code2 size={18} className="text-[#2DD4BF]" />
                <span>Algorithms & Problem Solving</span>
              </h3>
              <span className="text-xs font-mono text-[#2DD4BF] uppercase">ACTIVE PRACTITIONER</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center py-4">
              <div
                className="text-7xl font-black font-mono tracking-tight mb-2"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #38BDF8, #2DD4BF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                250+
              </div>
              <p className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-6">
                Data Structures & Algorithms Solved
              </p>

              {/* DSA Tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-6 max-w-md">
                {DSA_TOPICS.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] border border-white/10 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Platform Badges */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/25 text-center">
                  <div className="text-orange-400 font-mono text-xs font-bold uppercase tracking-wider">
                    LeetCode
                  </div>
                  <div className="text-white font-mono text-2xl font-black mt-1">200+</div>
                </div>
                <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/25 text-center">
                  <div className="text-green-400 font-mono text-xs font-bold uppercase tracking-wider">
                    HackerRank
                  </div>
                  <div className="text-white font-mono text-2xl font-black mt-1">50+</div>
                </div>
              </div>
            </div>
          </ScrollElementScrub>
        </div>
      </div>
    </section>
  )
}
