import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import ProductBackground from '@/components/canvas/ProductBackground'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

interface PackageCardProps {
  name: string
  items: string[]
  featured?: boolean
}

function PackageCard({ name, items, featured }: PackageCardProps) {
  return (
    <div style={{ background: 'rgba(0,0,0,0.35)', border: `1px solid ${featured ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 16, padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative', boxShadow: featured ? '0 0 50px rgba(255,255,255,0.06)' : 'none' }}>
      {featured && (
        <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: '#ffffff', color: '#000000', fontFamily: B, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.3rem 1rem', borderRadius: 20, whiteSpace: 'nowrap' }}>
          Most Popular
        </div>
      )}
      <h2 style={{ fontFamily: D, fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.08em', textShadow: featured ? '0 0 20px rgba(255,255,255,0.18)' : 'none' }}>{name}</h2>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem', flexGrow: 1 }}>
        {items.map(item => (
          <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontFamily: B, fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
            <span style={{ color: '#ffffff', flexShrink: 0, marginTop: '0.3rem', fontSize: '0.5rem' }}>●</span>
            {item}
          </li>
        ))}
      </ul>
      <p style={{ fontFamily: B, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>From £99</p>
      <Link href="/contact" className={featured ? 'btn-primary' : 'btn-outline'} style={{ width: '100%', justifyContent: 'center' }}>Get a Quote</Link>
    </div>
  )
}

export const metadata = {
  title: 'Wedding Print Packages | Tinta Print',
  description: 'Beautiful wedding stationery packages — invitations, menus, place cards and more. Every detail, perfectly printed.',
}

export default function WeddingPackagesPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        <section style={{ padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
          <ProductBackground type="data-stream" />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-site" style={{ position: 'relative', zIndex: 2 }}>
            <nav className="breadcrumb">
              <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
              <Link href="/packages">Packages</Link><span className="breadcrumb-sep">›</span>
              <span style={{ color: 'rgba(255,255,255,0.55)' }}>Wedding</span>
            </nav>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.25rem' }}>
              Wedding Packages
            </h1>
            <p style={{ fontFamily: B, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.5)', maxWidth: '520px', lineHeight: 1.65 }}>
              Every detail, perfectly printed. From save the dates to thank you cards, we handle every piece of your wedding stationery.
            </p>
          </div>
        </section>

        <section style={{ padding: '3rem 0 5rem' }}>
          <div className="max-w-site">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'start' }} className="packages-grid">
              <PackageCard
                name="ESSENTIAL"
                items={[
                  'Invitations (×50)',
                  'Order of service (×50)',
                  'Menu cards (×20)',
                ]}
              />
              <PackageCard
                name="PREMIUM"
                featured
                items={[
                  'Invitations (×75)',
                  'Order of service (×75)',
                  'Menu cards (×30)',
                  'Table plan',
                  'Place cards (×50)',
                ]}
              />
              <PackageCard
                name="DELUXE"
                items={[
                  'Invitations (×100)',
                  'Order of service (×100)',
                  'Menu cards (×50)',
                  'Table plan',
                  'Place cards (×100)',
                  'Thank you cards (×50)',
                  'Signage',
                ]}
              />
            </div>

            <p style={{ fontFamily: B, fontSize: '0.9rem', color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginTop: '2.5rem' }}>
              Want something specific?{' '}
              <Link href="/packages/bespoke" style={{ color: '#ffffff', textDecoration: 'none' }}>Build a bespoke package</Link>
              {' '}tailored to your day.
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`@media (max-width: 768px) { .packages-grid { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}
