import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

export const metadata = {
  title: 'Digital Products | Tinta Print',
  description: 'Editable templates and digital content creation from Tinta Print.',
}

const items = {
  templates: [
    'Business Card Template',
    'Flyer Template',
    'Poster Template',
    'Social Media Kit',
  ],
  creation: [
    'Social Media Graphics',
    'Email Newsletter Design',
    'Digital Brand Pack',
    'Presentation Deck',
  ],
}

function ProductCard({ label }: { label: string }) {
  return (
    <div style={{
      background: '#0a0a0a',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 10,
      padding: '1.75rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
    }}>
      <div style={{ height: 140, background: 'rgba(255,255,255,0.04)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>Preview</span>
      </div>
      <h3 style={{ fontFamily: D, fontWeight: 700, fontSize: '1.0625rem', color: '#ffffff', margin: 0, letterSpacing: '0.04em' }}>{label}</h3>
      <Link href="/contact" style={{ fontFamily: B, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#00c060', textDecoration: 'none' }}>
        Get a Quote →
      </Link>
    </div>
  )
}

export default function DigitalProductsPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem', background: '#000000', minHeight: '100vh' }}>

        <div style={{ padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'right' }}>
          <div className="max-w-site">
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <p className="section-label">What We Offer</p>
              <span style={{ fontFamily: B, fontWeight: 700, fontSize: '0.625rem', letterSpacing: '0.15em', textTransform: 'uppercase', background: '#ffffff', color: '#000000', padding: '3px 9px', borderRadius: 9999 }}>NEW</span>
            </div>
            <h1 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2.5rem, 7vw, 6rem)', color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, margin: 0 }}>
              Digital Products.
            </h1>
          </div>
        </div>

        <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-site">
            <p className="section-label" style={{ marginBottom: '0.875rem' }}>Section 01</p>
            <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#ffffff', letterSpacing: '0.04em', margin: '0 0 1.25rem', lineHeight: 1.1 }}>
              Editable Templates
            </h2>
            <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 580, marginBottom: '3rem' }}>
              Download, customise and reuse. Our templates are fully editable in Canva and Adobe Express — perfect for in-house marketing teams that need professional artwork at scale.
            </p>
            <div className="dig-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {items.templates.map(t => <ProductCard key={t} label={t} />)}
            </div>
            <Link href="/contact" className="btn-outline" style={{ height: 44, minHeight: 44, fontSize: '0.8125rem' }}>Request Custom Template</Link>
          </div>
        </section>

        <section style={{ padding: '5rem 0' }}>
          <div className="max-w-site">
            <p className="section-label" style={{ marginBottom: '0.875rem' }}>Section 02</p>
            <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#ffffff', letterSpacing: '0.04em', margin: '0 0 1.25rem', lineHeight: 1.1 }}>
              Digital Content Creation
            </h2>
            <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 580, marginBottom: '3rem' }}>
              Bespoke digital assets created by our design team. Social posts, newsletters, digital brand packs and presentation decks — all matched to your brand.
            </p>
            <div className="dig-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {items.creation.map(t => <ProductCard key={t} label={t} />)}
            </div>
            <Link href="/contact" className="btn-primary" style={{ height: 44, minHeight: 44, fontSize: '0.8125rem' }}>Get a Quote</Link>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`@media (max-width: 900px) { .dig-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
    </>
  )
}
