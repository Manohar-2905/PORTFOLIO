import { motion } from "framer-motion"
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react"
import { ScrollTextScrub, ScrollElementScrub } from "../common/ScrollReveal"
import { EXPERIENCES } from "../../data/portfolioData"

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 border-t border-white/[0.05] bg-[#060709] relative">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs mb-3 text-[#38BDF8] tracking-widest uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
          // CAREER.LOG // WORK HISTORY
        </p>

        <ScrollTextScrub
          as="h2"
          className="font-black mb-14 leading-none text-white block tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
        >
          Work Experience
        </ScrollTextScrub>

        <div className="relative border-l border-white/10 ml-3 md:ml-0 md:border-none space-y-10">
          {EXPERIENCES.map((it, i) => (
            <ScrollElementScrub
              key={i}
              className="relative pl-8 md:pl-0 md:grid md:grid-cols-[220px_1fr] gap-8 items-start group"
            >
              {/* Mobile Timeline Node Dot */}
              <div
                className="md:hidden absolute -left-[4.5px] top-2 w-2.5 h-2.5 rounded-full"
                style={{
                  background: it.color,
                  boxShadow: `0 0 10px ${it.color}`,
                }}
              />

              {/* Period Date Column */}
              <div className="mb-2 md:mb-0 pt-2 font-mono text-xs text-gray-400 font-semibold tracking-wider flex items-center gap-2">
                <Calendar size={14} className="text-[#38BDF8]" />
                <span>{it.period}</span>
              </div>

              {/* Experience Card */}
              <div
                className="p-7 sm:p-8 rounded-3xl transition-all relative overflow-hidden bg-[#0a0c10]/90 border border-white/10 hover:border-[#3B82F6]/50 shadow-xl group"
                style={{ backdropFilter: "blur(16px)" }}
              >
                {/* Accent Top Border Flare */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${it.color}, transparent)`,
                  }}
                />

                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#38BDF8] transition-colors">
                    {it.role}
                  </h3>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider"
                    style={{
                      color: it.color,
                      background: `${it.color}15`,
                      border: `1px solid ${it.color}35`,
                    }}
                  >
                    {it.badge}
                  </span>
                </div>

                <div className="text-gray-300 font-mono text-sm font-semibold mb-6 flex items-center gap-2">
                  <Briefcase size={14} className="text-[#3B82F6]" />
                  <span>{it.company}</span>
                </div>

                <ul className="space-y-3.5">
                  {it.points.map((pt, k) => (
                    <li
                      key={k}
                      className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 leading-relaxed font-normal"
                    >
                      <span className="mt-1 text-[#38BDF8] font-bold">▹</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollElementScrub>
          ))}
        </div>
      </div>
    </section>
  )
}
