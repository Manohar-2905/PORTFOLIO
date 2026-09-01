import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion } from "framer-motion"
import { X, Sparkles, ExternalLink, Github } from "lucide-react"

export default function ProjectModal({ project, onClose }) {
  const [selectedImg, setSelectedImg] = useState(
    project?.imgs && project.imgs.length > 0 ? project.imgs[0] : null
  )

  useEffect(() => {
    setSelectedImg(project?.imgs && project.imgs.length > 0 ? project.imgs[0] : null)
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

  if (typeof document === "undefined" || !project) return null

  return createPortal(
    <div className="fixed inset-0 z-[90000] flex items-center justify-center p-3 sm:p-6 md:p-8 select-none">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-5xl max-h-[90vh] rounded-3xl bg-[#0a0c10] border border-white/15 overflow-hidden flex flex-col lg:flex-row shadow-[0_20px_80px_rgba(0,0,0,0.9)]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          data-h
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#3B82F6] hover:text-black hover:scale-110 transition-all"
        >
          <X size={20} />
        </button>

        {/* Left Side: Media Showcase */}
        <div className="w-full lg:w-1/2 bg-[#050608] p-5 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0d0f14] border border-white/10 mb-4 flex items-center justify-center">
            {selectedImg ? (
              <img
                src={selectedImg}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
            ) : (
              <div className="text-center p-6">
                <div
                  className="text-6xl font-black mb-2 opacity-25 font-mono"
                  style={{ color: project.color }}
                >
                  {project.num}
                </div>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                  Architecture & Backend System
                </p>
              </div>
            )}
            <div
              className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wider backdrop-blur-md"
              style={{
                background: "rgba(0,0,0,0.75)",
                color: project.color,
                border: `1px solid ${project.color}40`,
              }}
            >
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
                  <img
                    src={src}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Case Study */}
        <div
          data-lenis-prevent
          className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col overflow-y-auto max-h-[60vh] lg:max-h-[85vh] bg-[#0a0c10]"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-4 mb-3">
            <span
              className="text-xs font-bold font-mono px-3 py-1 rounded-full uppercase tracking-wider"
              style={{
                background: `${project.color}18`,
                color: project.color,
                border: `1px solid ${project.color}35`,
              }}
            >
              {project.type}
            </span>
            <span className="font-mono text-sm font-bold text-gray-500">
              #{project.num}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
            {project.title}
          </h3>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            {project.desc}
          </p>

          {/* Key Architecture Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                <Sparkles size={14} className="text-[#3B82F6]" /> Key Architecture & Achievements
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                  >
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
                  className="px-3 py-1 rounded-lg text-xs font-semibold font-mono"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#e0e0e0",
                  }}
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
                style={{
                  background: project.color,
                  boxShadow: `0 10px 30px -8px ${project.color}80`,
                }}
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
