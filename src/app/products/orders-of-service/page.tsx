import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import ProductBackground from '@/components/canvas/ProductBackground'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const specs = [
  '300gsm Silk cover as standard, range of inside paper stocks available',
  'Premium cover stocks with lamination options',
]

const useCases = [
  { title: 'Weddings', body: 'Ceremony programmes, order of service, and vow booklets — matched to your wedding stationery suite.' },
  { title: 'Funerals & Memorial Services', body: 'Tasteful, respectful programmes produced with care and fast turnaround for when you need them most.' },
  { title: 'Christenings & Naming Ceremonies', body: 'Mark the occasion with a keepsake programme that guests will treasure.' },
  { title: 'Religious Services', body: 'Order of service sheets and booklets for church services, carol concerts, and special services.' },
]

const fileRequirements = [
  'Supply as a single multi-page PDF',
  'Pages in reading order (not printer spreads)',
  '3mm bleed on all sides if possible',
  'CMYK at 300dpi minimum if possible',
  'Feel free to contact us with any questions regarding your files',
]

export const metadata = {
  title: 'Orders of Service | Tinta Print',
  description: 'Order of service booklets and programmes for weddings, funerals, and special occasions. Printed on premium stocks.',
}

export default function OrdersOfServicePage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        <section style={{ padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
          <ProductBackground type="crystal-shards" />
          <div className="max-w-site" style={{ position: 'relative', zIndex: 2 }}>
            <nav className="breadcrumb">
              <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
              <Link href="/products">Products</Link><span className="breadcrumb-sep">›</span>
              <span style={{ color: 'rgba(255,255,255,0.55)' }}>Orders of Service</span>
            </nav>
            <p className="section-label mb-5">Print Products</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.25rem' }}>
              Orders of Service
            </h1>
            <p style={{ fontFamily: B, fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '520px', lineHeight: 1.65 }}>
              Beautiful programmes and order of service booklets for weddings, funerals, and special occasions — printed with care on premium stocks.
            </p>
          </div>
        </section>

        <section style={{ padding: '3rem 0 5rem' }}>
          <div className="max-w-site">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

              <div>
                <h2 style={{ fontFamily: D, fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>Specifications</h2>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {specs.map(spec => (
                    <li key={spec} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.55 }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.35rem', fontSize: '0.5rem' }}>●</span>
                      {spec}
                    </li>
                  ))}
                </ul>

                <div style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent-dim)', borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
                  <p style={{ fontFamily: B, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>File Requirements</p>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {fileRequirements.map(item => (
                      <li key={item} style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, paddingLeft: '1rem', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid var(--accent-dim)', borderRadius: 12, padding: '1.5rem' }}>
                  <p style={{ fontFamily: B, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1rem' }}>Order</p>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Link href="/quick-buy" className="btn-outline" style={{ fontSize: '0.8125rem', flex: 1, justifyContent: 'center' }}>Quick Buy</Link>
                    <Link href="/contact" className="btn-primary" style={{ fontSize: '0.8125rem', flex: 1, justifyContent: 'center' }}>Get a Quote</Link>
                  </div>
                </div>
              </div>

              <div>
                <h2 style={{ fontFamily: D, fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>What We Print</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {useCases.map(u => (
                    <div key={u.title} className="product-card" style={{ padding: '1.5rem' }}>
                      <h3 style={{ fontFamily: D, fontSize: '1rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>{u.title}</h3>
                      <p style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: 0 }}>{u.body}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
