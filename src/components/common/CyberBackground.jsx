// CyberBackground.jsx — High-Performance 3D Animated Background matching the Preloader HUD Aesthetic
import { useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sparkles, Float } from "@react-three/drei"
import * as THREE from "three"

/* ─── FLOATING 3D HOLOGRAPHIC WIREFRAME GEOMETRY ─── */
function CyberHoloMesh({ position, geomType, color, size, speed, rotSpeed }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime * speed
    meshRef.current.rotation.x = t * rotSpeed[0]
    meshRef.current.rotation.y = t * rotSpeed[1]
    meshRef.current.rotation.z = t * rotSpeed[2]
  })

  return (
    <Float speed={speed * 2} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        {geomType === "octahedron" && <octahedronGeometry args={[size, 0]} />}
        {geomType === "icosahedron" && <icosahedronGeometry args={[size, 0]} />}
        {geomType === "torus" && <torusGeometry args={[size, size * 0.12, 16, 64]} />}
        {geomType === "tetrahedron" && <tetrahedronGeometry args={[size, 0]} />}

        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </Float>
  )
}

/* ─── 3D CYBER CONSTELATION & GRID PLANE ─── */
function CyberGridPlane() {
  const gridRef = useRef()

  useFrame((state) => {
    if (!gridRef.current) return
    const t = state.clock.elapsedTime
    gridRef.current.position.z = ((t * 0.4) % 2) - 1
  })

  return (
    <group position={[0, -5, -4]} rotation={[-Math.PI / 2.3, 0, 0]}>
      <mesh ref={gridRef}>
        <planeGeometry args={[40, 40, 24, 24]} />
        <meshBasicMaterial
          color="#3B82F6"
          wireframe
          transparent
          opacity={0.06}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  )
}

/* ─── MOUSE PARALLAX CAMERA CONTROLLER ─── */
function CameraRig() {
  useFrame((state) => {
    const { pointer } = state
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, pointer.x * 1.5, 0.04)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, pointer.y * 1.0, 0.04)
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function CyberBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Deep Obsidian Space Base (Matching Preloader #080808) */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* 2. Center Horizontal Laser Light Beam (Exact Preloader Match) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 45% at 50% 50%, rgba(59, 130, 246, 0.09) 0%, rgba(56, 189, 248, 0.04) 45%, rgba(8, 8, 8, 0) 80%)",
        }}
      />

      {/* 3. Top & Bottom Atmospheric Radial Gradients */}
      <div
        className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59, 130, 246, 0.07) 0%, transparent 70%)",
        }}
      />

      {/* 4. Fine Cyber Matrix Grid Overlay (Matching Preloader HUD) */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56, 189, 248, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* 5. 3D Animated WebGL Scene */}
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 6]} intensity={1.8} color="#3B82F6" />
        <pointLight position={[-8, 6, 2]} intensity={1.5} color="#38BDF8" />
        <pointLight position={[8, -6, 2]} intensity={1.5} color="#2DD4BF" />

        <CameraRig />

        <Suspense fallback={null}>
          {/* Subtle 3D Perspective Grid */}
          <CyberGridPlane />

          {/* Left Floating Wireframe Octahedron */}
          <CyberHoloMesh
            position={[-7.5, 3.2, -2]}
            geomType="octahedron"
            color="#3B82F6"
            size={1.6}
            speed={0.4}
            rotSpeed={[0.3, 0.5, 0.2]}
          />

          {/* Right Floating Wireframe Icosahedron */}
          <CyberHoloMesh
            position={[8.0, 3.8, -3]}
            geomType="icosahedron"
            color="#38BDF8"
            size={1.8}
            speed={0.35}
            rotSpeed={[0.2, 0.4, 0.3]}
          />

          {/* Bottom Left Floating Cyber Torus */}
          <CyberHoloMesh
            position={[-8.2, -3.5, -2]}
            geomType="torus"
            color="#2DD4BF"
            size={1.5}
            speed={0.45}
            rotSpeed={[0.4, 0.3, 0.5]}
          />

          {/* Bottom Right Floating Tetrahedron */}
          <CyberHoloMesh
            position={[7.8, -3.2, -2]}
            geomType="tetrahedron"
            color="#3B82F6"
            size={1.7}
            speed={0.38}
            rotSpeed={[0.3, 0.6, 0.2]}
          />

          {/* Deep Ambient Dust Particles */}
          <Sparkles
            count={70}
            scale={18}
            size={1.8}
            speed={0.35}
            color="#38BDF8"
            opacity={0.35}
          />
        </Suspense>
      </Canvas>

      {/* 6. Soft Perimeter Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(8, 8, 8, 0.8) 85%, rgba(8, 8, 8, 0.98) 100%)",
        }}
      />
    </div>
  )
}
