'use client'
import { useRef, useEffect, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import ParticleField from './ParticleField'

interface Props {
  particleCount: number
}

export default function ParticleScene({ particleCount }: Props) {
  const mouse = useRef<[number, number]>([9999, 9999])
  const scrollProgress = useRef(0)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Map screen coords to approximate Three.js world space
    // Camera at z=6, fov=60 → at z=0 half-height≈6tan(30°)≈3.46, half-width scales with aspect
    const aspect = window.innerWidth / window.innerHeight
    const halfH = 6
    const halfW = halfH * aspect
    const nx = (e.clientX / window.innerWidth) * 2 - 1
    const ny = -((e.clientY / window.innerHeight) * 2 - 1)
    mouse.current = [nx * halfW, ny * halfH]
  }, [])

  const handleScroll = useCallback(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.current = max > 0 ? window.scrollY / max : 0
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleMouseMove, handleScroll])

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }}
      dpr={[1, 1.5]}
    >
      <ParticleField
        count={particleCount}
        mouse={mouse}
        scrollProgress={scrollProgress}
      />
    </Canvas>
  )
}
