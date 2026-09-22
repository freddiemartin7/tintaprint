'use client'
import Link from 'next/link'
import { useState } from 'react'
import RevealWrapper from '@/components/ui/RevealWrapper'
import ProductBackground, { type BackgroundType } from '@/components/canvas/ProductBackground'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const howItWorksSteps = [
  { title: 'Send Us Your Brief', body: 'Tell us what you need via our quote form — quantities, sizes, and any special requirements.' },
  { title: 'We Check Your Files', body: 'Our team reviews your artwork for any issues before it goes into production.' },
  { title: 'Printed & Delivered', body: 'Your job is processed and printed to the highest standard, then dispatched for fast, tracked delivery to your door.' },
]

export interface TabSpec {
  label: string
  description: string
  specs: string[]
  pricingNote?: string
  noteBox?: { title: string; items: string[] }
}

export interface ProductTabData {
  name: string
  tagline: string
  tabs: TabSpec[]
  globalPricingNote?: string
  backgroundType?: BackgroundType
}

export default function ProductTabsTemplate({ data }: { data: ProductTabData }) {
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredTab, setHoveredTab] = useState<number | null>(null)

  return (
    <main style={{ paddingTop: '4rem' }}>

      {/* Hero */}
      <section style={{ padding: '4rem 0 3rem', position: 'relative', overflow: 'hidden' }}>
        {data.backgroundType && <ProductBackground type={data.backgroundType} />}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,0,0,0) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 2 }} />
        <div className="max-w-site" style={{ position: 'relative', zIndex: 3 }}>
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <Link href="/products">Products</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>{data.name}</span>
          </nav>
          <RevealWrapper direction="wide">
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.25rem' }}>
              {data.name}
            </h1>
          </RevealWrapper>
          <RevealWrapper direction="up" delay={0.1}>
            <p style={{ fontFamily: B, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', lineHeight: 1.65 }}>
              {data.tagline}
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* Tab navigation */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.25)', position: 'sticky', top: 64, zIndex: 50 }}>
        <div className="max-w-site">
          <div style={{ display: 'flex', overflowX: 'auto' }}>
            {data.tabs.map((tab, i) => {
              const isActive = activeTab === i
              const isHovered = hoveredTab === i
              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  onMouseEnter={() => setHoveredTab(i)}
                  onMouseLeave={() => setHoveredTab(null)}
                  style={{
                    padding: '1rem 1.75rem',
                    fontFamily: B,
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: isActive || isHovered ? 'var(--accent)' : 'rgba(255,255,255,0.35)',
                    textShadow: isHovered && !isActive ? '0 0 20px var(--accent)' : 'none',
                    background: 'none',
                    border: 'none',
                    borderBottom: isActive || isHovered ? '2px solid var(--accent)' : '2px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    marginBottom: -1,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tab panels */}
      <section style={{ padding: '4rem 0' }}>
        <div className="max-w-site">
          {data.tabs.map((tab, i) => (
            <div
              key={tab.label}
              className={activeTab === i ? 'tab-panel-active' : ''}
              style={{
                display: activeTab === i ? 'grid' : 'none',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'start',
              }}
            >
              {/* Left col */}
              <div>
                <RevealWrapper direction="wide">
                  <h2 style={{ fontFamily: D, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '1rem', lineHeight: 1.05 }}>
                    {tab.label}
                  </h2>
                </RevealWrapper>
                <RevealWrapper direction="up" delay={0.08}>
                  <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                    {tab.description}
                  </p>
                </RevealWrapper>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {tab.specs.map((spec, si) => (
                    <RevealWrapper key={spec} direction="left" delay={si * 0.06}>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55 }}>
                        <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.3rem', fontSize: '0.55rem' }}>●</span>
                        {spec}
                      </li>
                    </RevealWrapper>
                  ))}
                </ul>
                {tab.noteBox && (
                  <RevealWrapper direction="up" delay={0.15}>
                    <div style={{ marginTop: '2rem', background: 'var(--accent-dim)', border: '1px solid var(--accent-mid)', borderRadius: 12, padding: '1.25rem 1.5rem' }}>
                      <p style={{ fontFamily: B, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>{tab.noteBox.title}</p>
                      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {tab.noteBox.items.map(item => (
                          <li key={item} style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, paddingLeft: '1rem', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </RevealWrapper>
                )}
              </div>

              {/* Right col */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <RevealWrapper direction="right" delay={0.05}>
                  <div style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid var(--accent-mid)', borderRadius: 12, padding: '1.5rem' }}>
                    <p style={{ fontFamily: B, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1rem' }}>Order</p>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <Link href="/quick-buy" className="btn-outline" style={{ fontSize: '0.8125rem', flex: 1, justifyContent: 'center' }}>Quick Buy</Link>
                      <Link href="/contact" className="btn-primary" style={{ fontSize: '0.8125rem', flex: 1, justifyContent: 'center' }}>Get a Quote</Link>
                    </div>
                  </div>
                </RevealWrapper>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[1, 2, 3].map((n, ni) => (
                    <RevealWrapper key={n} direction="right" delay={0.1 + ni * 0.08}>
                      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontFamily: B, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em' }}>Image {n}</span>
                      </div>
                    </RevealWrapper>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '5rem 0', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-site">
          <p className="section-label mb-4">The Process</p>
          <RevealWrapper direction="wide">
            <h2 style={{ fontFamily: D, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '3rem', lineHeight: 1 }}>
              How It Works
            </h2>
          </RevealWrapper>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
            {howItWorksSteps.map((step, i) => (
              <RevealWrapper key={step.title} direction="up" delay={i * 0.1}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px var(--accent-mid)', flexShrink: 0 }}>
                    <span style={{ fontFamily: D, fontSize: '1.125rem', fontWeight: 700, color: '#000000' }}>{i + 1}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: D, fontSize: '1.125rem', fontWeight: 600, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>{step.title}</h3>
                    <p style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{step.body}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0 6rem' }}>
        <div className="max-w-site">
          <RevealWrapper direction="wide">
            <div style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid var(--accent-mid)', borderRadius: 24, padding: 'clamp(2.5rem, 6vw, 4rem)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 50%, var(--accent-dim) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <h2 style={{ fontFamily: D, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1rem', position: 'relative' }}>
                Ready to order?
              </h2>
              <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem', position: 'relative' }}>
                Get in touch and we&apos;ll come back to you with a quote — usually the same day.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', position: 'relative' }}>
                <Link href="/quick-buy" className="btn-outline">Quick Buy</Link>
                <Link href="/contact" className="btn-primary">Get a Quote →</Link>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

    </main>
  )
}
