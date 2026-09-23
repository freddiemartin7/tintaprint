import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

export const metadata = {
  title: 'Design & Artwork | Tinta Print',
  description: 'Professional print-ready artwork design from scratch or using your assets.',
}

const imgPlaceholder = (label = 'Image') => (
  <div style={{ height: 260, background: 'rgba(255,255,255,0.04)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
    <span style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>{label}</span>
  </div>
)

export default function DesignArtworkPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem', background: '#000000', minHeight: '100vh' }}>

        <div style={{ padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'right' }}>
          <div className="max-w-site">
            <p className="section-label" style={{ marginBottom: '1rem' }}>Services</p>
            <h1 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, margin: 0 }}>
              Design &amp; Artwork.
            </h1>
          </div>
        </div>

        <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-site">
            <p style={{ fontFamily: B, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 680, marginBottom: '3.5rem' }}>
              Our design team creates professional, print-ready artwork from scratch — or we can work with your existing brand assets and take them to the finish line. Every file we produce is properly set up with correct bleed, colour profiles, and resolution so that nothing surprises you at the press.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                'Logo and brand identity design',
                'Business card and stationery layouts',
                'Flyer, poster and large-format design',
                'Brochure and multi-page artwork',
                'Signage and vehicle graphics',
                'Social media graphics and digital assets',
                'File correction and pre-press preparation',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00c060', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="img-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '3rem' }}>
              {imgPlaceholder('Design example 1')}
              {imgPlaceholder('Design example 2')}
              {imgPlaceholder('Design example 3')}
            </div>
            <Link href="/contact" className="btn-primary">Request a Quote</Link>
          </div>
          <style>{`@media (max-width: 640px) { .img-row { grid-template-columns: 1fr !important; } }`}</style>
        </section>

      </main>
      <Footer />
    </>
  )
}
