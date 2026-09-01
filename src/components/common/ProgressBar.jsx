import { motion, useScroll } from "framer-motion"

export default function ProgressBar() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] origin-left z-[9996] pointer-events-none"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, #3B82F6, #38BDF8, #2DD4BF)",
        boxShadow: "0 0 12px rgba(56, 189, 248, 0.8)",
      }}
    />
  )
}
