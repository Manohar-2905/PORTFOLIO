import { motion } from "framer-motion"
import { Trophy, Award, Calendar, ExternalLink } from "lucide-react"
import { ScrollTextScrub, ScrollElementScrub } from "../common/ScrollReveal"
import { HACKATHONS } from "../../data/portfolioData"

export default function Hackathons() {
  return (
    <section
      id="hackathons"
      className="py-28 px-6 relative overflow-hidden border-t border-white/[0.05] bg-[#080808]"
    >
      {/* Background Matrix Rain Streams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-[10px]"
            style={{ left: `${(i * 5) % 100}%`, top: -60, color: "#3B82F6" }}
            animate={{ y: ["0vh", "120vh"] }}
            transition={{
              duration: 7 + (i % 4),
              repeat: Infinity,
              delay: i * 0.32,
              ease: "linear",
            }}
          >
            {Array.from({ length: 14 }).map((_, j) => (
              <div key={j}>{Math.random() > 0.5 ? "1" : "0"}</div>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="font-mono text-xs mb-3 text-[#38BDF8] tracking-widest uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
          // HACKATHONS.LOG // ACHIEVEMENTS
        </p>

        <ScrollTextScrub
          as="h2"
          className="font-black mb-14 leading-none text-white block tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
        >
          Hackathons & Certifications 🏆
        </ScrollTextScrub>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HACKATHONS.map((h, i) => (
            <ScrollElementScrub key={i}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.22 } }}
                className="p-7 rounded-3xl h-full flex flex-col justify-between bg-[#0a0c10]/90 border border-white/10 hover:border-[#3B82F6]/50 shadow-2xl backdrop-blur-xl group"
              >
                <div>
                  {/* Top Badge & Trophy Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-4xl">{h.icon}</div>
                    <Trophy
                      size={24}
                      className="text-[#FBBF24]"
                      style={{ filter: "drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))" }}
                    />
                  </div>

                  <h3 className="text-xl font-black mb-3 text-white group-hover:text-[#38BDF8] transition-colors">
                    {h.title}
                  </h3>

                  <div className="space-y-2 text-xs font-mono mb-4 text-gray-300">
                    <p>
                      <span className="text-[#3B82F6] font-bold">Event:</span> {h.event}
                    </p>
                    <p>
                      <span className="text-[#3B82F6] font-bold">Date:</span> {h.date}
                    </p>
                    <p>
                      <span className="text-[#3B82F6] font-bold">Role:</span> {h.role}
                    </p>
                    <p>
                      <span className="text-[#3B82F6] font-bold">Scope:</span> {h.built}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mt-4 mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider"
                      style={{
                        background: "rgba(59,130,246,0.12)",
                        border: "1px solid rgba(59,130,246,0.3)",
                        color: "#38BDF8",
                      }}
                    >
                      {h.result}
                    </span>
                  </div>

                  {/* Certificate Preview Image */}
                  {h.img ? (
                    <div className="h-44 rounded-2xl overflow-hidden border border-white/10 bg-[#050608] relative group/img">
                      <img
                        src={h.img}
                        alt={h.title}
                        className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover/img:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="h-32 rounded-2xl flex items-center justify-center bg-white/[0.02] border border-dashed border-white/10">
                      <span className="text-gray-500 text-xs font-mono">[ Certificate Verified ]</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </ScrollElementScrub>
          ))}
        </div>
      </div>
    </section>
  )
}
