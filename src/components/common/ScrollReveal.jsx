import { motion } from "framer-motion"

export function ScrollTextScrub({ children, className = "", style = {}, as: Component = "div" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-block ${className}`}
      style={{ ...style, willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  )
}

export function ScrollElementScrub({ children, className = "", style = {}, delay = 0 }) {
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
