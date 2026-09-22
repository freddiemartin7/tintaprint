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

const addOns = [
  'Gift vouchers (premium foiled option available)',
  'Appointment cards',
  'Referral cards',
  'Aftercare instruction cards',
  'Consultation / record cards',
  'Window vinyl / frosted window film',
  'Mirror clings',
  'Wall graphics / feature wall prints',
  'A-boards / pavement signs',
  'Product labels (for own-brand products)',
  'Shelf talkers / price tags',
  'Seasonal promotion flyers',
  'Social media graphics (digital)',
]

export const metadata = {
  title: 'Salon & Beauty Print Packages | Tinta Print',
  description: 'Print packages for salons and beauty businesses — Starter, Studio, and Deluxe, plus add-ons.',
}

export default function SalonPackagesPage() {
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
              <span style={{ color: 'rgba(255,255,255,0.55)' }}>Salon & Beauty</span>
            </nav>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.25rem' }}>
              Salon & Beauty Packages
            </h1>
            <p style={{ fontFamily: B, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.5)', maxWidth: '520px', lineHeight: 1.65 }}>
              Designed for salons, spas, and beauty professionals who want print that matches their standard.
            </p>
          </div>
        </section>

        <section style={{ padding: '3rem 0 5rem' }}>
          <div className="max-w-site">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'start' }}>
              <PackageCard
                name="STARTER"
                tagline="Open your doors in style"
                items={[
                  'Business cards ×100',
                  'Flyers ×100',
                  'A4 price list (single or double sided, up to ×5)',
                ]}
              />
              <PackageCard
                name="STUDIO"
                tagline="For the established salon"
                featured
                items={[
                  'Business cards ×200',
                  'Flyers (single or double sided) ×200',
                  'Price list (single or double sided, up to ×10)',
                  'Loyalty cards (double sided ×100 or single sided ×150)',
                  'Stickers ×200',
                ]}
              />
              <PackageCard
                name="DELUXE"
                tagline="Everything in Studio, plus"
                items={[
                  'Business cards ×500',
                  'Flyers ×500',
                  'Price list (single or double sided, up to ×10)',
                  'Loyalty cards (double sided ×100 or single sided ×150)',
                  'Stickers ×200',
                  'Roller banner',
                  'Poster',
                ]}
              />
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section style={{ padding: '4rem 0 6rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-site">
            <h2 style={{ fontFamily: D, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>
              Salon Add-Ons
            </h2>
            <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.45)', marginBottom: '2.5rem', lineHeight: 1.65 }}>
              Enhance your package with any of the following.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
              {addOns.map(addon => (
                <div key={addon} style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ fontFamily: B, fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, margin: 0, flexGrow: 1 }}>{addon}</p>
                  <Link href="/contact" className="btn-outline" style={{ fontSize: '0.7rem', alignSelf: 'flex-start', height: 36, minHeight: 36, padding: '0 1rem' }}>Get a Quote</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
