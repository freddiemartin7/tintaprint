import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import GeometricBackground from '@/components/ui/GeometricBackground'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const packageTypes = [
  {
    title: 'Business Packages',
    desc: 'Everything a business needs to get noticed — from launch essentials to full brand collateral.',
    href: '/packages/business',
    tags: ['Business cards', 'Flyers', 'Banners', 'Brochures'],
  },
  {
    title: 'Event Packages',
    desc: 'From intimate gatherings to large-scale celebrations — all your event print in one place.',
    href: '/packages/events',
    tags: ['Invitations', 'Menus', 'Signage', 'Place cards'],
  },
  {
    title: 'Wedding Packages',
    desc: 'Every detail, perfectly printed. From save the dates to on-the-day signage — all in one package.',
    href: '/packages/weddings',
    tags: ['Invitations', 'Order of service', 'Signage', 'Thank you cards'],
  },
  {
    title: 'Salon & Beauty Packages',
    desc: 'Designed for salons, spas, and beauty businesses. Everything you need to look the part.',
    href: '/packages/salon',
    tags: ['Business cards', 'Price lists', 'Flyers', 'Loyalty cards'],
  },
  {
    title: 'Build Your Own',
    desc: "Can't find what you need? Put together a bespoke package with exactly the products you want.",
    href: '/packages/builder',
    tags: ['Custom', 'Any products', 'Any quantities'],
  },
]

export const metadata = {
  title: 'Print Packages | Tinta Print',
  description: 'Print packages for business, events, weddings, salons, and more. Everything you need, bundled together.',
}

export default function PackagesPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem', position: 'relative', overflow: 'hidden' }}>
        <GeometricBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>

        <section style={{ padding: '5rem 0 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-site" style={{ position: 'relative', zIndex: 2 }}>
            <p className="section-label mb-5">Bundles</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              Print Packages
            </h1>
            <p style={{ fontFamily: B, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.65 }}>
              Everything you need, bundled together. Designed to give you exactly what you need without the hassle of ordering everything separately.
            </p>
          </div>
        </section>

        <section style={{ padding: '3rem 0 6rem' }}>
          <div className="max-w-site">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {packageTypes.map(p => (
                <Link key={p.title} href={p.href} className="product-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2.5rem', textDecoration: 'none' }}>
                  <h2 style={{ fontFamily: D, fontSize: '1.375rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 1.1 }}>{p.title}</h2>
                  <p style={{ fontFamily: B, fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, flexGrow: 1 }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{ fontFamily: B, fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 4, padding: '0.2rem 0.5rem' }}>{tag}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        </div>

      </main>
      <Footer />
    </>
  )
}
