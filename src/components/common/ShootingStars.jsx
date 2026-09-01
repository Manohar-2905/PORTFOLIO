import { useState, useEffect } from "react"

export default function ShootingStars() {
  const [stars, setStars] = useState([])

  useEffect(() => {
    setStars(
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 120}%`,
        top: `${Math.random() * -30}%`,
        delay: Math.random() * 12,
        duration: 1.5 + Math.random() * 3,
        size: 0.5 + Math.random() * 1.5,
      }))
    )
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {stars.map((s) => (
        <div
          key={s.id}
          className="shooting-star"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            transform: `scale(${s.size})`,
          }}
        >
          <div className="star-inner">
            <div className="star-tail" />
            <div className="star-head" />
          </div>
        </div>
      ))}
      <style>{`
        .shooting-star {
          position: absolute;
          animation: falling-star linear infinite;
          opacity: 0;
        }
        .star-inner {
          position: relative;
          transform: rotate(135deg);
        }
        .star-head {
          position: absolute;
          top: -2px;
          left: -2px;
          width: 4px;
          height: 4px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 15px 3px rgba(59, 130, 246, 0.9);
        }
        .star-tail {
          position: absolute;
          top: -1px;
          left: -150px;
          width: 150px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), #fff);
        }
        @keyframes falling-star {
          0% { transform: translate3d(0, 0, 0); opacity: 0; }
          5% { opacity: 1; }
          15% { opacity: 0; }
          100% { transform: translate3d(-1500px, 1500px, 0); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
