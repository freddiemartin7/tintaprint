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
    bg: '#1e3a5f',
    imageBg: '#162d4a',
  },
  {
    title: 'File Submission, Proofing & AI Image Policies',
    copy: "We review every print file before it goes to press. Upload via WeTransfer, supply your specs, and we'll catch any issues before production starts.",
    cta: 'Find Out More',
    href: '/services/file-submission',
    imageRight: true,
    bg: '#f97316',
    imageBg: '#fb923c',
  },
  {
    title: 'Installation',
    copy: 'Large-format print installed professionally on-site. Vinyl wraps, display systems, window graphics — fully fitted by our installation team across the UK.',
    cta: 'Request Quote',
    href: '/contact',
    imageRight: false,
    bg: '#dc2626',
    imageBg: '#ef4444',
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
      <main style={{ paddingTop: '4rem', background: '#ffffff' }}>
        <div style={{ padding: '5rem 0 4rem', borderBottom: '1px solid rgba(0,0,0,0.08)', textAlign: 'right', background: '#ffffff' }}>
          <div className="max-w-site">
            <p className="section-label" style={{ marginBottom: '1rem', color: '#000000' }}>What We Do</p>
            <h1 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(3rem, 8vw, 7rem)', color: '#00BCD4', letterSpacing: '0.04em', lineHeight: 0.95, margin: 0 }}>
              Services.
            </h1>
          </div>
        </div>

        {sections.map((s) => (
          <div key={s.title} style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '6rem 0', background: s.bg }}>
            <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 65%)' }} />
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div className="max-w-site">
                <div className="services-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', direction: s.imageRight ? 'rtl' : 'ltr' }}>
                  <div style={{ direction: 'ltr' }}>
                    <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#ffffff', letterSpacing: '0.04em', lineHeight: 1.1, margin: '0 0 1.25rem' }}>{s.title}</h2>
                    <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, margin: '0 0 2rem' }}>{s.copy}</p>
                    <Link href={s.href} style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      height: 44, minHeight: 44, fontSize: '0.8125rem', fontFamily: B,
                      fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                      padding: '0 1.75rem', borderRadius: 9999, textDecoration: 'none',
                      border: '1.5px solid rgba(255,255,255,0.7)', color: '#ffffff', background: 'transparent',
                    }}>{s.cta}</Link>
                  </div>
                  <div style={{ direction: 'ltr', height: 320, background: s.imageBg, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <span style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>Image placeholder</span>
                  </div>
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
