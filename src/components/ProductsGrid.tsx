'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { getAccent, onAccentChange } from '@/lib/accentStore'
import GeometricBackground from '@/components/ui/GeometricBackground'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const PRODUCTS = [
  { category: 'Stationery',   name: 'Business Cards',     description: '400gsm board, full colour, premium finishes available.',                        href: '/products/business-cards' },
  { category: 'Marketing',    name: 'Flyers & Leaflets',  description: '150gsm–350gsm silk and uncoated, folded options available.',                    href: '/products/flyers-leaflets' },
  { category: 'Marketing',    name: 'Posters',            description: 'Small and large format, satin, gloss and matte papers.',                         href: '/products/posters' },
  { category: 'Large Format', name: 'Banners',            description: 'Roller, vinyl and alternative banners for any setting.',                         href: '/products/banners' },
  { category: 'Marketing',    name: 'Brochures',          description: 'Saddle stitch and perfect bound, full colour or mono.',                          href: '/products/brochures-books' },
  { category: 'Branding',     name: 'Stickers',           description: 'Roll stickers on durable polypropylene, gloss or uncoated.',                    href: '/products/stickers' },
  { category: 'Signage',      name: 'Signs & Boards',     description: 'Foamex, Dibond, Correx, magnetic and foamboard options.',                       href: '/products/signs-boards' },
  { category: 'Stationery',   name: 'Letterheads',        description: 'Professional letterheads and compliment slips.',                                 href: '/products/letterheads-compliment-slips' },
  { category: 'Events',       name: 'Orders of Service',  description: '300gsm silk cover, range of inside paper stocks.',                              href: '/products/orders-of-service' },
]

function GeometricCanvas({ accent }: { accent: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scrollRef = useRef(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onScroll = () => { scrollRef.current = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })

    const rects = Array.from({ length: 8 }, (_, i) => ({
      x: Math.random() * 1.2 - 0.1,
      y: Math.random() * 1.2 - 0.1,
      w: 0.06 + Math.random() * 0.12,
      h: 0.04 + Math.random() * 0.08,
      speed: 0.00008 + Math.random() * 0.00012,
      offset: Math.random() * Math.PI * 2,
    }))

    const crosshairs = Array.from({ length: 5 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: 10 + Math.random() * 20,
      speed: 0.0001 + Math.random() * 0.0002,
      offset: Math.random() * Math.PI * 2,
    }))

    let t = 0
    const draw = () => {
      rafRef.current = requestAnimationFrame(draw)
      t += 1
      const W = canvas.width
      const H = canvas.height
      const scroll = scrollRef.current
      const parallax = scroll * 0.08

      ctx.clearRect(0, 0, W, H)

      const accentRgb = hexToRgb(accent)
      const dim = accentRgb ? `rgba(${accentRgb},0.06)` : 'rgba(0,192,96,0.06)'
      const mid = accentRgb ? `rgba(${accentRgb},0.15)` : 'rgba(0,192,96,0.15)'

      // Perspective grid
      const vp = { x: W * 0.5, y: H * 0.35 - parallax * 0.3 }
      const COLS = 10
      for (let i = 0; i <= COLS; i++) {
        const x = (i / COLS) * W
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(vp.x, vp.y)
        ctx.strokeStyle = dim
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
      const ROWS = 8
      for (let j = 1; j <= ROWS; j++) {
        const y = (j / ROWS) * H
        const lerpX = (x: number) => vp.x + (x - vp.x) * (y / H)
        ctx.beginPath()
        ctx.moveTo(lerpX(0), y)
        ctx.lineTo(lerpX(W), y)
        ctx.strokeStyle = dim
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // Floating rects
      rects.forEach(r => {
        const rx = (r.x + Math.sin(t * r.speed + r.offset) * 0.04) * W
        const ry = (r.y + Math.cos(t * r.speed * 0.7 + r.offset) * 0.03) * H - parallax * 0.15
        ctx.strokeStyle = dim
        ctx.lineWidth = 0.5
        ctx.strokeRect(rx, ry, r.w * W, r.h * H)
      })

      // Crosshairs
      crosshairs.forEach(c => {
        const cx = (c.x + Math.sin(t * c.speed + c.offset) * 0.02) * W
        const cy = (c.y + Math.cos(t * c.speed * 0.8 + c.offset) * 0.015) * H - parallax * 0.1
        const s = c.size
        ctx.strokeStyle = mid
        ctx.lineWidth = 0.75
        ctx.beginPath()
        ctx.moveTo(cx - s, cy)
        ctx.lineTo(cx + s, cy)
        ctx.moveTo(cx, cy - s)
        ctx.lineTo(cx, cy + s)
        ctx.stroke()
        ctx.strokeRect(cx - s * 0.3, cy - s * 0.3, s * 0.6, s * 0.6)
      })
    }
    draw()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [accent])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  )
}

function hexToRgb(hex: string): string | null {
  const m = /^#([0-9a-f]{6})$/i.exec(hex.trim())
  if (!m) return null
  const n = parseInt(m[1], 16)
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`
}

function ProductCard({ product, index }: { product: typeof PRODUCTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <RevealWrapper direction="up" delay={index * 0.05}>
      <Link
        href={product.href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem 2rem 1.75rem',
          textDecoration: 'none',
          borderTop: '3px solid var(--accent)',
          borderLeft: '1px solid rgba(255,255,255,0.06)',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '0 0 12px 12px',
          background: hovered ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
          transition: 'background 0.25s',
          height: '100%',
        }}
      >
        <p style={{ fontFamily: B, fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8, opacity: 0.8 }}>
          {product.category}
        </p>
        <h3 style={{ fontFamily: D, fontSize: '1.1875rem', fontWeight: 600, color: '#ffffff', letterSpacing: '0.02em', marginBottom: '0.75rem', lineHeight: 1.2 }}>
          {product.name}
        </h3>
        <p style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, flexGrow: 1 }}>
          {product.description}
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginTop: 20,
            color: 'var(--accent)',
            fontFamily: B,
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            opacity: hovered ? 1 : 0.6,
            transition: 'opacity 0.25s',
          }}
        >
          Learn more
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Link>
    </RevealWrapper>
  )
}

export default function ProductsGrid() {
  const [accent, setAccent] = useState(getAccent)
  useEffect(() => onAccentChange(setAccent), [])

  return (
    <section style={{ position: 'relative', padding: '6rem 0 7rem', overflow: 'hidden' }}>
      <GeometricBackground />
      <GeometricCanvas accent={accent} />
      <div style={{ position: 'relative', zIndex: 1 }} className="max-w-site">
        <RevealWrapper direction="up">
          <p style={{ fontFamily: B, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
            What we print
          </p>
          <h2 style={{ fontFamily: D, fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.02em', marginBottom: '3rem', lineHeight: 1 }}>
            Products &amp; Services
          </h2>
        </RevealWrapper>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }}
          className="products-grid"
        >
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
