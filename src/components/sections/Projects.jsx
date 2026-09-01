import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, Sparkles, ExternalLink, Github, LayoutGrid } from "lucide-react"
import { ScrollTextScrub, ScrollElementScrub } from "../common/ScrollReveal"
import ProjectModal from "../modals/ProjectModal"
import { PROJECTS } from "../../data/portfolioData"

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [cols, setCols] = useState(2)

  return (
    <section
      id="projects"
      className="py-32 px-6 relative border-t border-white/[0.05] bg-[#060709] select-none"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 pointer-events-none opacity-[0.14]"
        style={{
          background: "radial-gradient(ellipse at top, #3B82F6, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <p className="font-mono text-xs mb-3 text-[#38BDF8] tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            // PROJECTS.GALLERY // SELECTED ARCHITECTURES
          </p>

          <ScrollTextScrub
            as="h2"
            className="font-black leading-none block tracking-tight"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
              background: "linear-gradient(180deg, #FFFFFF 0%, #9095A0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Featured Deployments
          </ScrollTextScrub>

          <div className="mt-5 text-gray-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            <ScrollTextScrub>
              A curated selection of full-stack web applications, background automation bots, and
              multi-agent AI estimators built for enterprise clients and open-source impact.
            </ScrollTextScrub>
          </div>
        </div>

        {/* View Layout Controls */}
        <ScrollElementScrub className="flex justify-center mb-12">
          <div className="flex bg-[#0a0c10] border border-white/10 p-1.5 rounded-full items-center shadow-lg">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest px-4 hidden sm:flex items-center gap-1.5">
              <LayoutGrid size={13} className="text-[#38BDF8]" /> Columns:
            </span>
            {[2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => setCols(num)}
                data-h
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${cols === num
                    ? "bg-[#3B82F6] text-black shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {num}
              </button>
            ))}
          </div>
        </ScrollElementScrub>

        {/* Projects Dynamic Grid */}
        <div
          className={`grid gap-6 md:gap-8 transition-all duration-500 ${cols === 2
              ? "grid-cols-1 md:grid-cols-2"
              : cols === 3
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            }`}
        >
          {PROJECTS.map((p) => (
            <ScrollElementScrub key={p.num}>
              <motion.div
                whileHover={{ y: -6 }}
                onClick={() => setActiveProject(p)}
                data-h
                className="group cursor-pointer rounded-3xl overflow-hidden bg-[#0a0c10] border border-white/10 hover:border-[#3B82F6]/60 relative flex flex-col h-[420px] shadow-2xl transition-all duration-300"
              >
                {/* Image Showcase Box */}
                <div className="h-[55%] w-full relative overflow-hidden bg-[#0d0f14]">
                  {p.imgs && p.imgs.length > 0 ? (
                    <img
                      src={p.imgs[0]}
                      alt={p.title}
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center font-black text-6xl opacity-15 font-mono"
                      style={{ color: p.color }}
                    >
                      {p.num}
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/30 to-transparent opacity-95" />

                  {/* Floating Type Pill */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider backdrop-blur-md"
                      style={{
                        background: "rgba(0,0,0,0.75)",
                        color: p.color,
                        border: `1px solid ${p.color}40`,
                      }}
                    >
                      {p.type}
                    </span>
                  </div>

                  {/* Hover Prompt Pill */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#3B82F6] text-black shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                      Explore Case Study ↗
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col flex-1 relative z-10 -mt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-black text-white group-hover:text-[#38BDF8] transition-colors line-clamp-1">
                      {p.title}
                    </h3>
                    <span className="font-mono text-xs font-bold text-gray-500 ml-2">
                      #{p.num}
                    </span>
                  </div>

                  <p className="text-gray-400 text-xs line-clamp-2 mb-4 flex-1 font-normal leading-relaxed">
                    {p.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium text-gray-300 bg-white/[0.04] border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-gray-500">
                        +{p.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Card Bottom Link */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400 group-hover:text-[#38BDF8] transition-colors">
                    <span>View Architecture & Demo</span>
                    <ArrowUp
                      size={14}
                      className="rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>
              </motion.div>
            </ScrollElementScrub>
          ))}
        </div>

        {/* GitHub Direct Link Button */}
        <ScrollElementScrub className="mt-16 flex justify-center">
          <a
            href="https://github.com/Manohar-2905"
            target="_blank"
            rel="noreferrer"
            data-h
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm transition-all hover:scale-105 hover:bg-[#3B82F6] hover:text-black border border-[#3B82F6]/30 text-[#38BDF8] bg-white/[0.02]"
          >
            <Github size={18} />
            <span>Explore All GitHub Repositories</span>
            <ArrowUp size={16} className="rotate-45" />
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
