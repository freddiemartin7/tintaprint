import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import GeometricBackground from '@/components/ui/GeometricBackground'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const sections = [
  {
    heading: 'Business Cards',
    products: [
      { name: 'Standard Business Cards', desc: '400gsm board, full colour single or double sided' },
      { name: 'Laminated Business Cards', desc: 'Matt, Gloss or Soft Touch lamination' },
      { name: 'Premium Business Cards', desc: 'Foiling, duplex and embossing available' },
      { name: 'Metallic Business Cards', desc: 'Pink, Damask Blue or Gold metallic board' },
    ],
  },
  {
    heading: 'Flyers & Leaflets',
    products: [
      { name: 'Standard Flyers', desc: '150gsm or 170gsm Silk, A6 to A3' },
      { name: 'Folded Leaflets', desc: 'Half fold, tri-fold, z-fold, DL fold' },
      { name: 'Premium Flyers', desc: '200gsm–350gsm with lamination options' },
    ],
  },
  {
    heading: 'Posters',
    products: [
      { name: 'Small Format Posters', desc: 'A4 and A3, range of paper stocks' },
      { name: 'Large Format Posters', desc: 'A2, A1, A0 — satin, gloss and matte papers' },
      { name: 'Premium Posters', desc: 'Backlit, magnetic, PVC and blueback options' },
    ],
  },
  {
    heading: 'Banners',
    products: [
      { name: 'Roller Banners', desc: '850 × 2000mm standard, other sizes available' },
      { name: 'Vinyl PVC Banners', desc: '440gsm PVC, hemmed edges and eyelets' },
      { name: 'Feather & Mesh Flags', desc: 'Feather flags, tear-drop flags, mesh banners' },
    ],
  },
  {
    heading: 'Cards',
    products: [
      { name: 'Greeting Cards', desc: 'A6 or A5 folded, 300–400gsm' },
      { name: 'Thank You Cards', desc: 'A6, standard or premium stock' },
      { name: 'Loyalty Cards', desc: '85.5 × 54mm, 350gsm board' },
    ],
  },
  {
    heading: 'Signs & Boards',
    products: [
      { name: 'Foamboard', desc: '5mm Foamex (plastic board), indoor use' },
      { name: 'Foamex & Correx', desc: 'Rigid boards for indoor and outdoor signage' },
    ],
  },
]

export const metadata = {
  title: 'Quick Buy | Tinta Print',
  description: 'Fast ordering for our most popular print products — business cards, flyers, posters, banners, cards, and signs.',
}

export default function QuickBuyPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem', position: 'relative', overflow: 'hidden' }}>
        <GeometricBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>

        <section style={{ padding: '5rem 0 3rem', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, var(--accent-dim) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-site" style={{ position: 'relative', zIndex: 2 }}>
            <p className="section-label mb-5">Coming Soon</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              Quick Buy
            </h1>
            <p style={{ fontFamily: B, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '520px', lineHeight: 1.65, marginBottom: '1rem' }}>
              Fast ordering for our most popular products — coming soon.
            </p>
            <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.4)', maxWidth: '480px', lineHeight: 1.65, marginBottom: '2.5rem' }}>
              Our Quick Buy system is on its way. In the meantime, get in touch and we&apos;ll turn your order around fast.
            </p>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
          </div>
        </section>

        <section style={{ padding: '3rem 0 6rem' }}>
          <div className="max-w-site" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {sections.map(section => (
              <div key={section.heading}>
                {/* Section heading with left border accent */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: 4, height: 28, background: 'var(--accent)', borderRadius: 2, flexShrink: 0 }} />
                  <h2 style={{ fontFamily: D, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', margin: 0 }}>
                    {section.heading}
                  </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
                  {section.products.map(product => (
                    <div
                      key={product.name}
                      className="product-card"
                      style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                    >
                      <h3 style={{ fontFamily: D, fontSize: '1rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', margin: 0 }}>
                        {product.name}
                      </h3>
                      <p style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>
                        {product.desc}
                      </p>
                      <Link href="/contact" className="btn-primary" style={{ fontSize: '0.75rem', height: 38, minHeight: 38 }}>
                        Order Now
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        </div>

      </main>
      <Footer />
    </>
  )
}
