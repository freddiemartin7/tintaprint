import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import ProductBackground from '@/components/canvas/ProductBackground'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const specs = [
  'Supplied on a roll',
  '90mic Gloss Laminate Polypropylene available',
  'Uncoated Polypropylene available',
]

export const metadata = {
  title: 'Stickers | Tinta Print',
  description: 'Custom stickers supplied on a roll — durable, high quality gloss or uncoated polypropylene.',
}

export default function StickersPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        <section style={{ padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
          <ProductBackground type="liquid-blobs" />
          <div className="max-w-site" style={{ position: 'relative', zIndex: 2 }}>
            <nav className="breadcrumb">
              <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
              <Link href="/products">Products</Link><span className="breadcrumb-sep">›</span>
              <span style={{ color: 'rgba(255,255,255,0.55)' }}>Stickers</span>
            </nav>
            <p className="section-label mb-5">Print Products</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.25rem' }}>
              Stickers
            </h1>
            <p style={{ fontFamily: B, fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '520px', lineHeight: 1.65 }}>
              Stickers supplied on rolls, printed on high quality, durable materials — perfect for product labelling, branding and promotions.
            </p>
          </div>
        </section>

        <section style={{ padding: '3rem 0 6rem' }}>
          <div className="max-w-site">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

              <div>
                <h2 style={{ fontFamily: D, fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>Specifications</h2>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {specs.map(spec => (
                    <li key={spec} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.55 }}>
                      <span style={{ color: '#ffffff', flexShrink: 0, marginTop: '0.35rem', fontSize: '0.5rem' }}>●</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '1.5rem' }}>
                  <p style={{ fontFamily: B, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1rem' }}>Order</p>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Link href="/quick-buy" className="btn-outline" style={{ fontSize: '0.8125rem', flex: 1, justifyContent: 'center' }}>Quick Buy</Link>
                    <Link href="/contact" className="btn-primary" style={{ fontSize: '0.8125rem', flex: 1, justifyContent: 'center' }}>Get a Quote</Link>
                  </div>
                </div>
                {[1, 2, 3].map(n => (
                  <div key={n} style={{ height: 180, borderRadius: 12, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: B, fontSize: '0.8rem', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Image {n}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0 6rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-site">
            <h2 style={{ fontFamily: D, fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '2.5rem', textAlign: 'center' }}>How It Works</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                { title: 'Send Us Your Brief', body: 'Tell us what you need via our quote form — quantities, sizes, and any special requirements.' },
                { title: 'We Check Your Files', body: 'Our team reviews your artwork for any issues before it goes into production.' },
                { title: 'Printed & Delivered', body: 'Your stickers are printed to the highest standard, then dispatched for fast, tracked delivery to your door.' },
              ].map((step, i) => (
                <div key={step.title} className="product-card" style={{ padding: '2rem' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: B, fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>0{i + 1}</span>
                  </div>
                  <h3 style={{ fontFamily: D, fontSize: '1rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>{step.title}</h3>
                  <p style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: 0 }}>{step.body}</p>
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
