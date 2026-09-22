'use client'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { getAccent, onAccentChange } from '@/lib/accentStore'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

function hexToRgb(hex: string): string {
  const m = /^#([0-9a-f]{6})$/i.exec(hex.trim())
  if (!m) return '0,192,96'
  const n = parseInt(m[1], 16)
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`
}

export default function ClosingCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [accent, setAccent] = useState(getAccent)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => onAccentChange(setAccent), [])

  const rgb = hexToRgb(accent)

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        padding: 'clamp(100px, 14vw, 180px) 24px',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(${rgb}, 0.12) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 40% 40% at 50% 50%, rgba(${rgb}, 0.06) 0%, transparent 60%)`,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 800,
          margin: '0 auto',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(32px)',
          transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <h2
          style={{
            fontFamily: D,
            fontSize: 'clamp(3rem, 7vw, 7rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            marginBottom: 32,
          }}
        >
          Ready to print{' '}
          <span
            style={{
              color: 'var(--accent)',
              textShadow: `0 0 60px rgba(${rgb}, 0.5), 0 0 120px rgba(${rgb}, 0.2)`,
            }}
          >
            smarter?
          </span>
        </h2>

        <p
          style={{
            fontFamily: B,
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.7,
            maxWidth: 560,
            margin: '0 auto 48px',
          }}
        >
          Get an instant quote, upload your files, and let our AI handle the rest. Print that performs — from the first click to the final delivery.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '18px 48px',
              background: 'var(--accent)',
              color: '#000000',
              fontFamily: B,
              fontSize: '0.9375rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 9999,
              transition: 'opacity 0.2s, transform 0.2s',
              boxShadow: `0 0 40px rgba(${rgb}, 0.35)`,
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.opacity = '0.85'
              el.style.transform = 'scale(1.03)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.opacity = '1'
              el.style.transform = 'scale(1)'
            }}
          >
            Get a quote
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <p style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.3)' }}>
            or email us at{' '}
            <a
              href="mailto:hello@tintaprint.co.uk"
              style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)' }}
            >
              hello@tintaprint.co.uk
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
