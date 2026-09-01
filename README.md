# 🚀 Manohar Kumar — 3D Cyber-Minimalist Portfolio v3

A high-performance, award-winning developer portfolio built with React 18, Three.js, React Three Fiber, GSAP ScrollTrigger, Lenis, and Framer Motion.

---

## 🛠️ Modern Tech Stack
- **Core**: React 18 + Vite
- **3D Graphics & WebGL**: Three.js + `@react-three/fiber` + `@react-three/drei`
- **Smooth Inertia Scroll**: Lenis (v1.3)
- **Timeline & Scroll Orchestration**: GSAP 3 + ScrollTrigger
- **Spring Physics & Gestures**: Framer Motion 11
- **Styling & Design Tokens**: Tailwind CSS + Custom HUD Glassmorphism
- **Typography**: Syne & JetBrains Mono (Google Fonts)
- **Icons**: Lucide React

---

## ⚡ Key Highlights & Architecture
- 🎬 **Cyber-HUD Preloader**: Live 00% → 100% telemetry counter with dual-curtain exit animation.
- 🌌 **3D Cyber Background**: Interactive WebGL layer with 3D wireframe polyhedra, mouse parallax, and center laser beam.
- 🖼️ **3D Hero Orbital Scene**: Depth photo cards with real-time mouse parallax and scanner lights.
- 💎 **3D Holographic Profile**: Floating avatar card with telemetry tags and career roadmap.
- 🔮 **3D Skills Constellation**: Translucent skill orbs with category matrix & DSA milestones.
- 📱 **Interactive Project Gallery**: Dynamic 2/3/4 column toggles with full-screen case study modal & live links.
- 🏆 **Hackathons & Achievements**: Matrix code rain animation and certificate previews.
- ⚡ **Magnetic Direct Connect**: Interactive WhatsApp gateway and instant copy-to-clipboard contact cards.
- 🎯 **Easter Egg**: Type `"hire"` anywhere on the page for an instant confetti celebration!

---

## 📁 Clean Project Structure
```
src/
├── components/
│   ├── common/
│   │   ├── BackToTop.jsx        # Floating scroll-to-top button
│   │   ├── Cursor.jsx           # Fluid magnetic dual-layer pointer
│   │   ├── CyberBackground.jsx  # Interactive 3D WebGL background layer
│   │   ├── EasterEgg.jsx        # "hire" secret keycode listener
│   │   ├── Preloader.jsx        # Cyber-HUD loading screen
│   │   ├── ProgressBar.jsx      # Top neon scroll progress indicator
│   │   ├── ScrollReveal.jsx     # Reusable Framer Motion scrub helpers
│   │   ├── ShootingStars.jsx    # Ambient meteor shower particles
│   │   └── Trail.jsx            # Custom canvas pointer trail
│   ├── layout/
│   │   ├── Navbar.jsx           # Glassmorphic top HUD navigation
│   │   └── Footer.jsx           # Telemetry status footer
│   ├── modals/
│   │   └── ProjectModal.jsx     # Case study modal with multi-image gallery
│   └── sections/
│       ├── About.jsx            # Bio, 3D avatar card, career timeline
│       ├── Contact.jsx          # Magnetic CTA, WhatsApp connect, email card
│       ├── Experience.jsx       # Work history timeline with glowing nodes
│       ├── Hackathons.jsx       # Award certificates and matrix rain
│       ├── Hero.jsx             # Typewriter roles, quick stats, 3D HeroScene
│       ├── Marquee.jsx          # Infinite dual-track technical skills ticker
│       ├── Projects.jsx         # Case studies and dynamic column switcher
│       └── Skills.jsx           # 3D SkillsScene + proficiency dashboard
├── data/
│   └── portfolioData.js         # Single source of truth for all projects & info
├── hooks/
│   └── useTypewriter.js         # Reusable typewriter hook
├── three/
│   ├── HeroScene.jsx            # 3D interactive depth card carousel
│   ├── ProfileScene.jsx         # 3D floating holographic avatar card
│   └── SkillsScene.jsx          # 3D orbiting skill spheres
├── index.css                    # Design tokens and custom utilities
├── App.jsx                      # Root coordinator with Lenis & ScrollTrigger
└── main.jsx                     # React 18 DOM mount point
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev

# 3. Build production bundle
npm run build
```

---

Built with precision by **Manohar Kumar** · © 2026
