'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import GeometricBackground from '@/components/ui/GeometricBackground'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const stages = [
  {
    n: 1,
    title: 'Place Your Order',
    body: 'Choose your product, tell us your spec, submit via our quote form or Quick Buy',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <rect x="8" y="6" width="28" height="32" rx="3" stroke="var(--accent)" strokeWidth="1.8" />
        <path d="M14 14h16M14 20h16M14 26h10" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="34" cy="34" r="6" fill="#000000" stroke="var(--accent)" strokeWidth="1.5" />
        <path d="M31 34l2 2 4-4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: 2,
    title: 'File Check',
    body: 'Our team reviews your artwork — we\'ll flag any issues before anything goes to print',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <rect x="10" y="4" width="24" height="30" rx="3" stroke="var(--accent)" strokeWidth="1.8" />
        <path d="M16 12h12M16 18h12M16 24h8" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10 8h24" stroke="var(--accent)" strokeWidth="1.8" strokeOpacity="0.3" />
        <rect x="10" y="8" width="24" height="3" fill="var(--accent-dim)" />
      </svg>
    ),
  },
  {
    n: 3,
    title: 'Into Production',
    body: 'Your job is processed and printed to the highest standard',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <rect x="6" y="16" width="32" height="16" rx="3" stroke="var(--accent)" strokeWidth="1.8" />
        <path d="M12 16V10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6" stroke="var(--accent)" strokeWidth="1.8" />
        <rect x="14" y="26" width="16" height="8" rx="1.5" stroke="var(--accent)" strokeWidth="1.5" />
        <circle cx="33" cy="22" r="2" fill="var(--accent)" />
      </svg>
    ),
  },
  {
    n: 4,
    title: 'Packaged',
    body: 'Carefully packed and prepared for dispatch',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <path d="M8 16l14-8 14 8v16l-14 8L8 32V16z" stroke="var(--accent)" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M22 8v24M8 16l14 8 14-8" stroke="var(--accent)" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M15 12l14 8" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    n: 5,
    title: 'Delivered',
    body: 'Fast, tracked delivery direct to you anywhere in the UK',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <path d="M4 28h24V14H4v14z" stroke="var(--accent)" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M28 20h8l4 8v4h-4" stroke="var(--accent)" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="11" cy="32" r="4" stroke="var(--accent)" strokeWidth="1.8" />
        <circle cx="33" cy="32" r="4" stroke="var(--accent)" strokeWidth="1.8" />
        <path d="M4 24h24" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.3" />
      </svg>
    ),
  },
]

export default function HowItWorksPage() {
  const stageRefs = useRef<(HTMLDivElement | null)[]>([])
  const lineRefs = useRef<(SVGPathElement | null)[]>([])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.3 }
    )
    stageRefs.current.forEach(el => el && observer.observe(el))
    lineRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem', position: 'relative', overflow: 'hidden' }}>
        <GeometricBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Hero */}
        <section style={{ padding: '1rem 0 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, var(--accent-dim) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-site" style={{ position: 'relative', zIndex: 2 }}>
            <p className="section-label mb-5">The Process</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              How It Works
            </h1>
            <p style={{ fontFamily: B, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.65 }}>
              From brief to door — here&apos;s what happens when you place an order with Tinta Print.
            </p>
          </div>
        </section>

        {/* Animated pipeline */}
        <section style={{ padding: '2rem 0 6rem', overflowX: 'auto' }}>
          <div className="max-w-site">
            {/* Horizontal stage row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, minWidth: 700, position: 'relative' }}>
              {stages.map((stage, i) => (
                <div key={stage.n} style={{ display: 'flex', alignItems: 'flex-start', flex: 1 }}>
                  {/* Stage */}
                  <div
                    ref={el => { stageRefs.current[i] = el }}
                    className="pipeline-icon-enter"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', flex: 1, padding: '0 0.5rem', transitionDelay: `${i * 0.15}s` }}
                  >
                    {/* Icon circle */}
                    <div style={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid var(--accent-dim)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 24px var(--accent-dim)',
                      flexShrink: 0,
                    }}>
                      {stage.icon}
                    </div>
                    {/* Stage number */}
                    <div style={{ fontFamily: B, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', color: 'var(--accent)', textTransform: 'uppercase' }}>
                      {String(stage.n).padStart(2, '0')}
                    </div>
                    {/* Title */}
                    <h3 style={{ fontFamily: D, fontSize: '1rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', textAlign: 'center', lineHeight: 1.2, margin: 0 }}>
                      {stage.title}
                    </h3>
                    {/* Body */}
                    <p style={{ fontFamily: B, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, textAlign: 'center', margin: 0, maxWidth: 160 }}>
                      {stage.body}
                    </p>
                  </div>

                  {/* Connecting dashed line */}
                  {i < stages.length - 1 && (
                    <div style={{ display: 'flex', alignItems: 'center', paddingTop: '2.4rem', flexShrink: 0, width: 40 }}>
                      <svg width="40" height="20" viewBox="0 0 40 20" fill="none" style={{ overflow: 'visible' }}>
                        <path
                          ref={el => { lineRefs.current[i] = el }}
                          d="M0 10 H40"
                          stroke="var(--accent-mid)"
                          strokeWidth="1.5"
                          strokeDasharray="5 4"
                          className="pipeline-line"
                          style={{ transitionDelay: `${i * 0.15 + 0.3}s` }}
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 0 6rem', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--accent-dim)', textAlign: 'center' }}>
          <div className="max-w-site">
            <h2 style={{ fontFamily: D, fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '2.5rem' }}>
              Ready to order?
            </h2>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
          </div>
        </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
