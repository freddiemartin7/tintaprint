import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import GeometricBackground from '@/components/ui/GeometricBackground'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const services = [
  {
    title: 'Design & Artwork',
    desc: 'Our design team can create print-ready artwork from scratch or adapt your existing brand assets. Logos, layouts, brochures and more.',
    details: ['Brand identity', 'Print-ready file prep', 'Layout design', 'Artwork corrections'],
  },
  {
    title: 'File Submission & Proofing',
    desc: "Upload your artwork and we'll run a full prepress check — bleed, resolution, colour mode, and more — before anything goes to press.",
    details: ['Prepress artwork checks', 'Digital soft proofs', 'Hard copy proofing available', 'CMYK colour advice'],
  },
  {
    title: 'Large Format Installation',
    desc: 'Beyond printing, we can arrange professional installation of large-format graphics — wall murals, window graphics, and exhibition stands.',
    details: ['Wall & window graphics', 'Exhibition stand builds', 'Nationwide installation'],
  },
]

export const metadata = {
  title: 'Services | Tinta Print',
  description: 'Design, prepress, and large-format installation services from Tinta Print.',
}

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem', position: 'relative', overflow: 'hidden' }}>
        <GeometricBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>

        <section style={{ padding: '6rem 0 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-site" style={{ position: 'relative', zIndex: 2 }}>
            <p className="section-label mb-5">Tinta Print</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              Services
            </h1>
            <p style={{ fontFamily: B, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.65 }}>
              Everything around the print — design, proofing, and installation. We handle the whole job.
            </p>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
          </div>
        </section>

        <section style={{ padding: '5rem 0 6rem' }}>
          <div className="max-w-site">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {services.map(s => (
                <div key={s.title} className="product-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h2 style={{ fontFamily: D, fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 1.1 }}>
                    {s.title}
                  </h2>
                  <p style={{ fontFamily: B, fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, flexGrow: 1 }}>
                    {s.desc}
                  </p>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem' }}>
                    {s.details.map(d => (
                      <li key={d} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontFamily: B, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ffffff', flexShrink: 0 }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0 6rem', textAlign: 'center', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-site">
            <h2 style={{ fontFamily: D, fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '2rem' }}>
              Let&apos;s talk about<br />
              <span style={{ color: '#ffffff',   }}>your project.</span>
            </h2>
            <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
          </div>
        </section>
        </div>

      </main>
      <Footer />
    </>
  )
}
