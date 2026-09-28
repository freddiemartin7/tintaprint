'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const packages = [
  { name: 'Business',     tiers: ['Launch', 'Grow', 'Tinta'],        href: '/packages/business' },
  { name: 'Events',       tiers: ['Essential', 'Premium', 'Deluxe'],  href: '/packages/events' },
  { name: 'Salon & Beauty', tiers: ['Essential', 'Premium', 'Deluxe'], href: '/packages/salon' },
  { name: 'Wedding',      tiers: ['Essential', 'Premium', 'Deluxe'],  href: '/packages/wedding' },
  { name: 'Party',        tiers: ['Essential', 'Premium', 'Deluxe'],  href: '/packages/party' },
]

export default function PackagesPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        <section style={{ padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.12)', background: '#16a34a', textAlign: 'right' }}>
          <div className="max-w-site">
            <h1 style={{ fontFamily: '"urca", sans-serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, margin: 0 }}>
              Print Packages.
            </h1>
          </div>
        </section>

        <section style={{ padding: '4rem 0 6rem', background: '#000000' }}>
          <div className="max-w-site">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="packages-page-grid">
              {[...packages, null].map((pkg, i) => {
                if (!pkg) return (
                  <div key="empty" style={{ borderRadius: 10, background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(255,255,255,0.08)', minHeight: 280 }} />
                )
                return (
                  <div
                    key={pkg.name}
                    style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer', minHeight: 280, display: 'flex', flexDirection: 'column' }}
                    onMouseEnter={e => {
                      const overlay = (e.currentTarget as HTMLElement).querySelector('.pkg-overlay') as HTMLElement
                      if (overlay) overlay.style.opacity = '1'
                    }}
                    onMouseLeave={e => {
                      const overlay = (e.currentTarget as HTMLElement).querySelector('.pkg-overlay') as HTMLElement
                      if (overlay) overlay.style.opacity = '0'
                    }}
                  >
                    <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', padding: '1.5rem' }}>
                      <h2 style={{ fontFamily: '"urca", sans-serif', fontWeight: 600, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#ffffff', margin: 0, letterSpacing: '0.04em', lineHeight: 1.1 }}>
                        {pkg.name}
                      </h2>
                    </div>
                    <div className="pkg-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(22,163,74,0.92)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', opacity: 0, transition: 'opacity 0.25s ease', padding: '2rem' }}>
                      <p style={{ fontFamily: '"urca", sans-serif', fontWeight: 300, fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                        {pkg.tiers.join(' · ')}
                      </p>
                      <h2 style={{ fontFamily: '"urca", sans-serif', fontWeight: 600, fontSize: '1.75rem', color: '#ffffff', margin: 0, letterSpacing: '0.04em', textAlign: 'center' }}>
                        {pkg.name}
                      </h2>
                      <a href={pkg.href} style={{ marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 40, padding: '0 1.5rem', borderRadius: 9999, background: '#ffffff', color: '#16a34a', fontFamily: '"urca", sans-serif', fontWeight: 400, fontSize: '0.8125rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}>
                        Find Out More
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 52, padding: '0 2.5rem', borderRadius: 9999, border: '1.5px solid rgba(255,255,255,0.3)', color: '#ffffff', fontFamily: B, fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', background: 'transparent' }}>
                Need Something Bespoke? Get in Touch
              </a>
            </div>
          </div>
          <style>{`@media (max-width: 768px) { .packages-page-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

      </main>
      <Footer />
    </>
  )
}
