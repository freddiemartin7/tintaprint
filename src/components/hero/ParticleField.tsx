'use client'
import { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { getAccent, onAccentChange } from '@/lib/accentStore'

interface Props {
  count: number
  mouse: React.MutableRefObject<[number, number]>
  scrollProgress: React.MutableRefObject<number>
}

export default function ParticleField({ count, mouse, scrollProgress }: Props) {
  const pointsRef = useRef<THREE.Points>(null!)
  const [color, setColor] = useState(getAccent)
  useEffect(() => onAccentChange(setColor), [])

  const { positions, origPositions } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 22
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6
    }
    return { positions, origPositions: Float32Array.from(positions) }
  }, [count])

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array
    const t = clock.elapsedTime
    const [mx, my] = mouse.current
    const scroll = scrollProgress.current

    for (let i = 0; i < count; i++) {
      const ix = i * 3, iy = ix + 1

      // Gentle sinusoidal drift
      pos[ix] += Math.sin(t * 0.15 + i * 0.4) * 0.0006
      pos[iy] += Math.cos(t * 0.12 + i * 0.3) * 0.0006

      // Mouse repulsion — mx/my are in world units (~[-11,11] and [-6,6])
      const dx = pos[ix] - mx
      const dy = pos[iy] - my
      const distSq = dx * dx + dy * dy
      const repelRadius = 3.5

      if (distSq < repelRadius * repelRadius && distSq > 0.001) {
        const dist = Math.sqrt(distSq)
        const force = ((repelRadius - dist) / repelRadius) * 0.06
        pos[ix] += (dx / dist) * force
        pos[iy] += (dy / dist) * force
      }

      // Soft return to origin
      pos[ix] += (origPositions[ix] - pos[ix]) * 0.003
      pos[iy] += (origPositions[iy] - pos[iy]) * 0.003

      // Scroll: particles drift upward and slightly outward
      pos[iy] += scroll * 0.04
      pos[ix] += (pos[ix] > 0 ? 1 : -1) * scroll * 0.01
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color={color}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
