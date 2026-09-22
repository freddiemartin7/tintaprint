import Link from 'next/link'
import RevealWrapper from '@/components/ui/RevealWrapper'
import ProductBackground, { type BackgroundType } from '@/components/canvas/ProductBackground'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

export interface ProductData {
  name: string
  tagline: string
  intro: string
  backgroundType?: BackgroundType
  quickSpecs?: Array<{ label: string; value: string }>
  columns: Array<{
    heading: string
    items: string[]
  }>
  steps?: Array<{ title: string; body: string }>
}

const defaultSteps = [
  { title: 'Send Your Brief', body: 'Tell us what you need — quantity, size, finish, and deadline. No jargon, no fuss.' },
  { title: 'We Quote & Confirm', body: 'We come back to you quickly with a price and turnaround time, ready to go to press.' },
  { title: 'Approve & Print', body: 'Approve your proof, we handle the rest — print, QC, and delivery to your door.' },
]

export default function ProductPageTemplate({ data }: { data: ProductData }) {
  const steps = data.steps ?? defaultSteps

  return (
    <>
      <main style={{ paddingTop: '4rem' }}>

        {/* Hero */}
        <section style={{ padding: '6rem 0 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          {data.backgroundType && <ProductBackground type={data.backgroundType} />}
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 2 }} />
          <div className="max-w-site" style={{ position: 'relative', zIndex: 3 }}>
            <p className="section-label mb-5">Tinta Print</p>
            <RevealWrapper direction="wide">
              <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
                {data.name}
              </h1>
            </RevealWrapper>
            <RevealWrapper direction="up" delay={0.1}>
              <p style={{ fontFamily: B, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.65 }}>
                {data.tagline}
              </p>
            </RevealWrapper>
            <RevealWrapper direction="up" delay={0.18}>
              <Link href="/contact" className="btn-primary">Get a Quote</Link>
            </RevealWrapper>
          </div>
        </section>

        {/* Introduction */}
        <section style={{ padding: '5rem 0', background: 'rgba(0,0,0,0.2)' }}>
          <div className="max-w-site" style={{ display: 'grid', gridTemplateColumns: data.quickSpecs?.length ? '1fr 1fr' : '1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <RevealWrapper direction="wide">
                <h2 style={{ fontFamily: D, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '1.25rem', lineHeight: 1.05 }}>
                  About This Product
                </h2>
              </RevealWrapper>
              <RevealWrapper direction="up" delay={0.08}>
                <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                  {data.intro}
                </p>
              </RevealWrapper>
            </div>
            {data.quickSpecs && data.quickSpecs.length > 0 && (
              <RevealWrapper direction="right" delay={0.1}>
                <div style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 16, padding: '2rem' }}>
                  <h3 style={{ fontFamily: B, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '1.25rem' }}>
                    Quick Specs
                  </h3>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                    {data.quickSpecs.map(spec => (
                      <li key={spec.label} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', paddingBottom: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <span style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)' }}>{spec.label}</span>
                        <span style={{ fontFamily: B, fontSize: '0.875rem', fontWeight: 600, color: '#ffffff', textAlign: 'right' }}>{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealWrapper>
            )}
          </div>
        </section>

        {/* Options grid */}
        <section style={{ padding: '5rem 0' }}>
          <div className="max-w-site">
            <p className="section-label mb-4">What&apos;s Available</p>
            <RevealWrapper direction="wide">
              <h2 style={{ fontFamily: D, fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '3rem', lineHeight: 1 }}>
                Options & Finishes
              </h2>
            </RevealWrapper>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {data.columns.map((col, ci) => (
                <RevealWrapper key={col.heading} direction="up" delay={ci * 0.08}>
                  <div className="product-card" style={{ padding: '2rem' }}>
                    <h3 style={{ fontFamily: D, fontSize: '1rem', fontWeight: 600, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                      {col.heading}
                    </h3>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                      {col.items.map(item => (
                        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>
                          <span style={{ color: '#ffffff', marginTop: '0.25rem', flexShrink: 0 }}>—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section style={{ padding: '5rem 0', background: 'rgba(0,0,0,0.2)' }}>
          <div className="max-w-site">
            <p className="section-label mb-4">The Process</p>
            <RevealWrapper direction="wide">
              <h2 style={{ fontFamily: D, fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '3.5rem', lineHeight: 1 }}>
                How It Works
              </h2>
            </RevealWrapper>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
              {steps.map((step, i) => (
                <RevealWrapper key={step.title} direction="up" delay={i * 0.1}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 20px rgba(255,255,255,0.18)' }}>
                      <span style={{ fontFamily: D, fontSize: '1.125rem', fontWeight: 700, color: '#000000' }}>{i + 1}</span>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: D, fontSize: '1.125rem', fontWeight: 600, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                        {step.title}
                      </h3>
                      <p style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                        {step.body}
                      </p>
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* CTA card */}
        <section style={{ padding: '5rem 0 6rem' }}>
          <div className="max-w-site">
            <RevealWrapper direction="wide">
              <div style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 24, padding: 'clamp(2.5rem, 6vw, 4rem)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <h2 style={{ fontFamily: D, fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '2rem', position: 'relative' }}>
                  Ready to order?<br />
                  <span style={{ color: '#ffffff',   }}>Let&apos;s talk.</span>
                </h2>
                <Link href="/contact" className="btn-primary" style={{ position: 'relative' }}>
                  Get a Free Quote
                </Link>
              </div>
            </RevealWrapper>
          </div>
        </section>

      </main>
    </>
  )
}
