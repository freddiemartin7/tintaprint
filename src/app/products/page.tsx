'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const allProducts = [
  { title: 'Business Cards',            href: '/products/business-cards' },
  { title: 'Flyers & Leaflets',         href: '/products/flyers-leaflets' },
  { title: 'Brochures & Books',         href: '/products/brochures-books' },
  { title: 'Posters',                   href: '/products/posters' },
  { title: 'Banners',                   href: '/products/banners' },
  { title: 'Signs & Boards',            href: '/products/signs-boards' },
  { title: 'Stickers',                  href: '/products/stickers' },
  { title: 'Cards',                     href: '/products/cards' },
  { title: 'Letterheads & Comp Slips',  href: '/products/letterheads-compliment-slips' },
  { title: 'Orders of Service',         href: '/products/orders-of-service' },
  { title: 'Event Print',               href: '/products/events' },
  { title: 'Canvas Prints',             href: '/products/canvas-prints' },
]

export default function ProductsPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem', background: '#000000' }}>

        <section style={{ padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-site">
            <p style={{ fontFamily: B, fontWeight: 600, fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>What We Print</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              Products &amp;{' '}
              <span>Services.</span>
            </h1>
            <p style={{ fontFamily: B, fontWeight: 300, fontSize: '1.125rem', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', lineHeight: 1.65 }}>
              From a single business card to a full exhibition fit-out — we handle it all.
            </p>
          </div>
        </section>

        <section style={{ padding: '3rem 0 5rem' }}>
          <div className="max-w-site">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="products-index-grid">
              {allProducts.map(p => (
                <Link key={p.title} href={p.href} style={{
                  display: 'block',
                  textDecoration: 'none',
                  position: 'relative',
                  borderRadius: 12,
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  background: '#262626',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)', pointerEvents: 'none', zIndex: 0 }} />
                  <p style={{ position: 'absolute', bottom: '1rem', left: '1rem', fontFamily: D, fontWeight: 700, fontSize: '1.125rem', color: '#ffffff', margin: 0, letterSpacing: '0.04em', lineHeight: 1.2, zIndex: 10 }}>{p.title}</p>
                </Link>
              ))}
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                height: 56, fontSize: '0.875rem', fontFamily: B, fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0 2.5rem',
                borderRadius: 9999, textDecoration: 'none',
                border: '1.5px solid #d946ef', color: '#d946ef', background: 'transparent',
              }}>Get a Quote</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`@media (max-width: 768px) { .products-index-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
    </>
  )
}
