import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

export const metadata = {
  title: 'Installation | Tinta Print',
  description: 'Professional large-format print installation across the UK.',
}

const imgPlaceholder = (label = 'Image') => (
  <div style={{ height: 280, background: 'rgba(255,255,255,0.04)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
    <span style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>{label}</span>
  </div>
)

export default function InstallationPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem', background: '#000000', minHeight: '100vh' }}>

        <div style={{ padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'right' }}>
          <div className="max-w-site">
            <p className="section-label" style={{ marginBottom: '1rem' }}>Services</p>
            <h1 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, margin: 0 }}>
              Installation.
            </h1>
          </div>
        </div>

        <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-site">
            <p style={{ fontFamily: B, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 680, marginBottom: '3.5rem' }}>
              Large-format print doesn&apos;t always hang itself. Our installation team covers the UK, fitting everything from window vinyl and wall graphics to exhibition systems and vehicle wraps. One call, one team — supply and fit.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3.5rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                'Window graphics and vinyl lettering',
                'Wall wraps and architectural vinyl',
                'Exhibition stands and pop-up displays',
                'Outdoor signage and wayfinding systems',
                'Vehicle livery and partial wraps',
                'Retail display and point-of-sale installation',
                'Removal and surface preparation included on request',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00c060', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="img-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '3rem' }}>
              {imgPlaceholder('Installation example 1')}
              {imgPlaceholder('Installation example 2')}
              {imgPlaceholder('Installation example 3')}
            </div>

            <Link href="/contact" className="btn-primary">Request Installation Quotation</Link>
          </div>
          <style>{`@media (max-width: 640px) { .img-row { grid-template-columns: 1fr !important; } }`}</style>
        </section>

      </main>
      <Footer />
    </>
  )
}
