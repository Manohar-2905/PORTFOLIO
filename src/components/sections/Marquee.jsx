import { MARQUEE_TECH_1, MARQUEE_TECH_2 } from "../../data/portfolioData"

function MarqueePill({ title }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-2 rounded-full mx-2 flex-shrink-0 border border-white/[0.08] bg-white/[0.02] backdrop-blur-md hover:border-[#3B82F6]/50 transition-colors">
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
      <span className="text-gray-300 text-xs font-mono font-medium whitespace-nowrap uppercase tracking-wider">
        {title}
      </span>
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="py-12 overflow-hidden border-y border-white/[0.04] bg-transparent select-none">
      {/* Row 1: Leftward Scroll */}
      <div
        className="mb-3.5"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            animation: "marquee-l 28s linear infinite",
            width: "max-content",
          }}
        >
          {[...MARQUEE_TECH_1, ...MARQUEE_TECH_1, ...MARQUEE_TECH_1].map((t, i) => (
            <MarqueePill key={`r1-${i}`} title={t} />
          ))}
        </div>
      </div>

      {/* Row 2: Rightward Scroll */}
      <div
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            animation: "marquee-r 22s linear infinite",
            width: "max-content",
          }}
        >
          {[...MARQUEE_TECH_2, ...MARQUEE_TECH_2, ...MARQUEE_TECH_2].map((t, i) => (
            <MarqueePill key={`r2-${i}`} title={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
