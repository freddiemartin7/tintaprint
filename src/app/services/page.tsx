import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const sections = [
  {
    title: 'Design & Artwork',
    copy: 'Our designers create professional, print-ready files from scratch or using your existing assets. From business cards to large-format banners — we handle it all.',
    cta: 'Find Out More',
    href: '/services/design-artwork',
    imageRight: false,
  },
  {
    title: 'File Submission, Proofing & AI Image Policies',
    copy: "We review every print file before it goes to press. Upload via WeTransfer, supply your specs, and we'll catch any issues before production starts.",
    cta: 'Find Out More',
    href: '/services/file-submission',
    imageRight: true,
  },
  {
    title: 'Installation',
    copy: 'Large-format print installed professionally on-site. Vinyl wraps, display systems, window graphics — fully fitted by our installation team across the UK.',
    cta: 'Request Quote',
    href: '/contact',
    imageRight: false,
  },
]

export const metadata = {
  title: 'Services | Tinta Print',
  description: 'Design, file submission, proofing and installation services from Tinta Print.',
}

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem', background: '#000000' }}>
        <div style={{ padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'right' }}>
          <div className="max-w-site">
            <p className="section-label" style={{ marginBottom: '1rem' }}>What We Do</p>
            <h1 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(3rem, 8vw, 7rem)', color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, margin: 0 }}>
              Services.
            </h1>
          </div>
        </div>

        {sections.map((s) => (
          <div key={s.title} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '6rem 0' }}>
            <div className="max-w-site">
              <div className="services-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', direction: s.imageRight ? 'rtl' : 'ltr' }}>
                <div style={{ direction: 'ltr' }}>
                  <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#ffffff', letterSpacing: '0.04em', lineHeight: 1.1, margin: '0 0 1.25rem' }}>{s.title}</h2>
                  <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: '0 0 2rem' }}>{s.copy}</p>
                  <Link href={s.href} className="btn-primary" style={{ height: 44, minHeight: 44, fontSize: '0.8125rem' }}>{s.cta}</Link>
                </div>
                <div style={{ direction: 'ltr', height: 320, background: 'rgba(255,255,255,0.04)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(255,255,255,0.15)' }}>Image placeholder</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
      <Footer />
      <style>{`@media (max-width: 768px) { .services-section { grid-template-columns: 1fr !important; direction: ltr !important; } }`}</style>
    </>
  )
}
