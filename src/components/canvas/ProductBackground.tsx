'use client'
import { useRef, useEffect, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

export type BackgroundType =
  | 'particles-drift'
  | 'grid-warp'
  | 'floating-rings'
  | 'liquid-blobs'
  | 'data-stream'
  | 'crystal-shards'

const fallbackGradients: Record<BackgroundType, string> = {
  'particles-drift': 'radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.04) 0%, transparent 60%)',
  'grid-warp':       'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%)',
  'floating-rings':  'radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 60%)',
  'liquid-blobs':    'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.04) 0%, transparent 50%)',
  'data-stream':     'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)',
  'crystal-shards':  'radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.04) 0%, transparent 60%)',
}

/* ── Particles Drift ── */
function ParticlesDrift() {
  const ref = useRef<THREE.Points>(null)
  const count = 200

  const { geo, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const sp: number[] = []
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4
      sp.push(Math.random() * 0.006 + 0.002)
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    return { geo: g, speeds: sp }
  }, [])

  useFrame(() => {
    if (!ref.current) return
    const attr = ref.current.geometry.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < count; i++) {
      attr.setY(i, attr.getY(i) + speeds[i])
      if (attr.getY(i) > 6) attr.setY(i, -6)
      attr.setX(i, attr.getX(i) + Math.sin(Date.now() * 0.0003 + i) * 0.001)
    }
    attr.needsUpdate = true
  })

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.025} color="#ffffff" transparent opacity={0.4} />
    </points>
  )
}

/* ── Grid Warp ── */
const gridVert = /* glsl */`
  varying vec2 vUv;
  uniform float uTime;
  void main() {
    vUv = uv;
    vec3 pos = position;
    pos.z += sin(pos.x * 2.5 + uTime * 0.6) * 0.18 + sin(pos.y * 2.0 + uTime * 0.4) * 0.12;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`
const gridFrag = /* glsl */`
  varying vec2 vUv;
  void main() {
    float lx = abs(fract(vUv.x * 28.0) - 0.5) * 2.0;
    float ly = abs(fract(vUv.y * 28.0) - 0.5) * 2.0;
    float grid = max(lx, ly);
    grid = smoothstep(0.88, 1.0, grid);
    gl_FragColor = vec4(0.267, 0.267, 0.267, grid * 0.55);
  }
`

function GridWarp() {
  const matRef = useRef<THREE.ShaderMaterial>(null)

  useFrame((s) => {
    if (matRef.current) matRef.current.uniforms.uTime.value = s.clock.elapsedTime
  })

  return (
    <mesh rotation={[-Math.PI / 3.5, 0, 0.3]} scale={7} position={[0, -1, -1]}>
      <planeGeometry args={[1, 1, 60, 60]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={gridVert}
        fragmentShader={gridFrag}
        uniforms={{ uTime: { value: 0 } }}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

/* ── Floating Rings ── */
function FloatingRings() {
  const groupRef = useRef<THREE.Group>(null)
  const rings = useMemo(() => [
    { scale: 1.5, pos: [0, 0, 0] as [number,number,number],         rx: 0.8  },
    { scale: 2.8, pos: [0.5, 0.3, -1] as [number,number,number],   rx: 0.3  },
    { scale: 1.1, pos: [-0.9, -0.4, 0.5] as [number,number,number], rx: 1.2  },
    { scale: 3.5, pos: [0, 0, -2.5] as [number,number,number],     rx: 0.1  },
    { scale: 0.9, pos: [1.2, 0.8, 0.5] as [number,number,number],  rx: -0.9 },
  ], [])

  const ringRefs = useRef<(THREE.Mesh | null)[]>(Array(5).fill(null))

  useFrame((s) => {
    const t = s.clock.elapsedTime
    if (groupRef.current) groupRef.current.rotation.y = t * 0.08
    ringRefs.current.forEach((mesh, i) => {
      if (!mesh) return
      mesh.rotation.x = t * 0.12 * (i % 2 === 0 ? 1 : -1) + rings[i].rx
      mesh.rotation.z = t * 0.06 * (i % 3 === 0 ? -1 : 1)
    })
  })

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh key={i} ref={el => { ringRefs.current[i] = el }} position={ring.pos} scale={ring.scale}>
          <torusGeometry args={[1, 0.025, 8, 48]} />
          <meshBasicMaterial color="#333333" wireframe transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

/* ── Liquid Blobs ── */
function LiquidBlobs() {
  const b1 = useRef<THREE.Mesh>(null)
  const b2 = useRef<THREE.Mesh>(null)
  const b3 = useRef<THREE.Mesh>(null)

  useFrame((s) => {
    const t = s.clock.elapsedTime
    if (b1.current) { b1.current.position.x = Math.sin(t * 0.28) * 2.2; b1.current.position.y = Math.cos(t * 0.2) * 1.4 }
    if (b2.current) { b2.current.position.x = Math.cos(t * 0.22) * 2.5; b2.current.position.y = Math.sin(t * 0.32) * 1.8 }
    if (b3.current) { b3.current.position.x = Math.sin(t * 0.35 + 2) * 2; b3.current.position.y = Math.cos(t * 0.27 + 1) * 1.2 }
  })

  return (
    <>
      <ambientLight intensity={0.4} />
      <mesh ref={b1} scale={1.2}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial color="#1a1a1a" distort={0.4} speed={0.3} transparent opacity={0.9} />
      </mesh>
      <mesh ref={b2} scale={0.9}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial color="#1a1a1a" distort={0.5} speed={0.25} transparent opacity={0.7} />
      </mesh>
      <mesh ref={b3} scale={1.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial color="#1a1a1a" distort={0.35} speed={0.4} transparent opacity={0.6} />
      </mesh>
    </>
  )
}

/* ── Data Stream ── */
function DataStream() {
  const NUM = 14
  const PER = 7

  const streams = useMemo(() =>
    Array.from({ length: NUM }, () => ({
      x: (Math.random() - 0.5) * 10,
      z: (Math.random() - 0.5) * 3,
      speed: Math.random() * 0.025 + 0.01,
      ys: Array.from({ length: PER }, () => (Math.random() - 0.5) * 12),
    })), [])

  const refs = useRef<(THREE.Mesh | null)[][]>(
    Array.from({ length: NUM }, () => Array(PER).fill(null))
  )

  useFrame(() => {
    streams.forEach((stream, si) => {
      refs.current[si].forEach((mesh) => {
        if (!mesh) return
        mesh.position.y -= stream.speed
        if (mesh.position.y < -6) mesh.position.y += 12
        mesh.rotation.x += 0.02
        mesh.rotation.z += 0.01
      })
    })
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      {streams.map((stream, si) =>
        Array.from({ length: PER }, (_, ci) => (
          <mesh
            key={`${si}-${ci}`}
            ref={el => { refs.current[si][ci] = el }}
            position={[stream.x, stream.ys[ci], stream.z]}
          >
            <boxGeometry args={[0.04, 0.04, 0.04]} />
            <meshBasicMaterial color="#222222" transparent opacity={0.8} />
          </mesh>
        ))
      )}
    </>
  )
}

/* ── Crystal Shards ── */
function CrystalShards() {
  const shards = useMemo(() =>
    Array.from({ length: 12 }, () => ({
      pos: [(Math.random() - 0.5) * 9, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 4] as [number,number,number],
      scale: Math.random() * 0.4 + 0.12,
      rx: (Math.random() - 0.5) * 0.012,
      ry: (Math.random() - 0.5) * 0.009,
      rz: (Math.random() - 0.5) * 0.007,
    })), [])

  const refs = useRef<(THREE.Mesh | null)[]>(Array(12).fill(null))

  useFrame(() => {
    refs.current.forEach((mesh, i) => {
      if (!mesh) return
      mesh.rotation.x += shards[i].rx
      mesh.rotation.y += shards[i].ry
      mesh.rotation.z += shards[i].rz
    })
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 4, 3]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-3, -2, 2]} intensity={0.8} color="#ffffff" />
      {shards.map((shard, i) => (
        <mesh key={i} ref={el => { refs.current[i] = el }} position={shard.pos} scale={shard.scale}>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transparent
            opacity={0.15}
            roughness={0.05}
            metalness={0}
            transmission={0.9}
          />
        </mesh>
      ))}
    </>
  )
}

const SceneMap: Record<BackgroundType, React.FC> = {
  'particles-drift': ParticlesDrift,
  'grid-warp':       GridWarp,
  'floating-rings':  FloatingRings,
  'liquid-blobs':    LiquidBlobs,
  'data-stream':     DataStream,
  'crystal-shards':  CrystalShards,
}

export default function ProductBackground({ type }: { type: BackgroundType }) {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsMobile(window.innerWidth < 768)
  }, [])

  if (!mounted || isMobile) {
    return (
      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', background: fallbackGradients[type] }}
      />
    )
  }

  const Scene = SceneMap[type]

  return (
    <>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 70 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
          style={{ width: '100%', height: '100%' }}
        >
          <Scene />
        </Canvas>
      </div>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'rgba(0,0,0,0.72)', pointerEvents: 'none' }} />
    </>
  )
}
