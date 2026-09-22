import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import ProductBackground from '@/components/canvas/ProductBackground'


const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

interface PackageCardProps {
  name: string
  tagline: string
  items: string[]
  featured?: boolean
}

function PackageCard({ name, tagline, items, featured }: PackageCardProps) {
  return (
    <div style={{ background: 'rgba(0,0,0,0.35)', border: `1px solid ${featured ? 'var(--accent-mid)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 16, padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative', boxShadow: featured ? '0 0 50px var(--accent-dim)' : 'none' }}>
      {featured && (
        <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: '#000000', fontFamily: B, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.3rem 1rem', borderRadius: 20, whiteSpace: 'nowrap' }}>Most Popular</div>
      )}
      <div>
        <h2 style={{ fontFamily: D, fontSize: '1.5rem', fontWeight: 700, color: featured ? 'var(--accent)' : '#ffffff', letterSpacing: '0.08em', marginBottom: '0.375rem' }}>{name}</h2>
        <p style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>{tagline}</p>
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem', flexGrow: 1 }}>
        {items.map(item => (
          <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontFamily: B, fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
            <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.3rem', fontSize: '0.5rem' }}>●</span>
            {item}
          </li>
        ))}
      </ul>
      <p style={{ fontFamily: B, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', margin: 0 }}>All POA</p>
      <Link href="/contact" className={featured ? 'btn-primary' : 'btn-outline'} style={{ width: '100%', justifyContent: 'center' }}>Get a Quote</Link>
    </div>
  )
}

export const metadata = {
  title: 'Hospitality Print Packages | Tinta Print',
  description: 'Print packages for restaurants, cafés, bars, and hospitality venues. Menus, posters, leaflets, and more.',
}

export default function HospitalityPackagesPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        <section style={{ padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
          <ProductBackground type="data-stream" />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, var(--accent-dim) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-site" style={{ position: 'relative', zIndex: 2 }}>
            <nav className="breadcrumb">
              <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
              <Link href="/packages">Packages</Link><span className="breadcrumb-sep">›</span>
              <span style={{ color: 'rgba(255,255,255,0.55)' }}>Hospitality</span>
            </nav>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.25rem' }}>
              Hospitality Package
            </h1>
            <p style={{ fontFamily: B, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.5)', maxWidth: '520px', lineHeight: 1.65 }}>
              For restaurants, cafés, bars, and venues — everything you need to look the part, front of house and beyond.
            </p>
          </div>
        </section>

        <section style={{ padding: '3rem 0 5rem' }}>
          <div className="max-w-site">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'start' }}>
              <PackageCard
                name="CAFÉ"
                tagline="For independent cafés & coffee shops"
                items={[
                  'Business cards (x250)',
                  'A4 menu (double-sided)',
                  'Loyalty cards (x500)',
                  'A5 flyers (x250)',
                ]}
              />
              <PackageCard
                name="RESTAURANT"
                tagline="For full dining venues"
                featured
                items={[
                  'Business cards (x500)',
                  'A4 menu (double-sided, laminated)',
                  'Specials board insert (A5, x50)',
                  'Takeaway flyers (x500)',
                  'Loyalty cards (x500)',
                  'Roller banner',
                ]}
              />
              <PackageCard
                name="VENUE"
                tagline="For bars, clubs & event spaces"
                items={[
                  'Business cards (x500)',
                  'A4 drinks menu',
                  'Event posters (A2, x50)',
                  'A5 promotional flyers (x1000)',
                  'Roller banners (x2)',
                  'Signage (Foamex or PVC)',
                ]}
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
