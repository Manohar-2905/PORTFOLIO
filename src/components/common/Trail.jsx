import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

export default function Trail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let animationFrameId
    let points = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const onMouseMove = (e) => {
      points.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
        size: Math.random() * 2.5 + 1.5,
      })
    }
    window.addEventListener("mousemove", onMouseMove, { passive: true })

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        p.age++
        if (p.age > 28) {
          points.splice(i, 1)
          i--
          continue
        }
        const alpha = (1 - p.age / 28) * 0.35
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * (1 - p.age / 28), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`
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
