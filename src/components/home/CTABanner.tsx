import Link from 'next/link'
import RevealWrapper from '@/components/ui/RevealWrapper'

const D = '"Aeonik Pro", sans-serif'

export default function CTABanner() {
  return (
    <section className="grain-overlay" style={{ background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '7rem 0', textAlign: 'center' }}>
      <div className="max-w-site" style={{ position: 'relative', zIndex: 2 }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, var(--accent-dim) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <RevealWrapper direction="wide">
          <h2 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '2.5rem', position: 'relative' }}>
            Let&apos;s get it{' '}
            <span style={{ color: 'var(--accent)', textShadow: '0 0 30px var(--accent-mid)' }}>printed.</span>
          </h2>
        </RevealWrapper>
        <RevealWrapper direction="up" delay={0.12}>
          <Link href="/contact" className="btn-primary" style={{ position: 'relative' }}>
            Get a Quote
          </Link>
        </RevealWrapper>
      </div>
    </section>
  )
}
