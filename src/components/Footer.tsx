import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

export default function Footer() {
  return (
    <footer style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '4rem' }}>
      <div className="max-w-site">
        <div className="footer-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

          {/* Col 1: Contact */}
          <div>
            <p style={{ fontFamily: D, fontWeight: 700, fontSize: '1rem', color: '#4CAF50', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Contact Us</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.75rem' }}>
              <span style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.85)' }}>Phone: placeholder</span>
              <span style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.85)' }}>Email: hello@tintaprint.uk</span>
              <span style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.85)' }}>Hours: 9am – 5pm</span>
              <span style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.85)' }}>Days: Mon – Fri</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.75rem' }}>
              {[
                { label: 'Instagram', href: 'https://instagram.com', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#ffffff" stroke="none"/></svg> },
                { label: 'Facebook', href: 'https://facebook.com', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                { label: 'TikTok', href: 'https://tiktok.com', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                  {s.icon}
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>Secure payments by</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/STRIPE LOGO WHITE.svg" alt="Stripe" style={{ height: 16, width: 'auto' }} />
            </div>
            <a href="https://wetransfer.com" target="_blank" rel="noreferrer" style={{ fontFamily: B, fontSize: '0.875rem', color: '#22d3ee', textDecoration: 'none', letterSpacing: '0.04em' }}>
              WeTransfer ↗
            </a>
          </div>

          {/* Col 2: Our Products */}
          <div>
            <p style={{ fontFamily: D, fontWeight: 700, fontSize: '1rem', color: '#4CAF50', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Our Products</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Products', href: '/products' },
                { label: 'Packages', href: '/packages' },
                { label: 'Digital', href: '/digital-products' },
              ].map(l => <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>)}
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <p style={{ fontFamily: D, fontWeight: 700, fontSize: '1rem', color: '#4CAF50', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Services</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'File Submission Guide', href: '/services/file-submission' },
                { label: 'Design & Artwork', href: '/services/design-artwork' },
                { label: 'Low Res AI Render Fix', href: '/services/file-submission' },
                { label: 'Installation', href: '/services/installation' },
                { label: 'Tinta Ai', href: '/#ai-section' },
              ].map(l => <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>)}
            </div>
          </div>

          {/* Col 4: About */}
          <div>
            <p style={{ fontFamily: D, fontWeight: 700, fontSize: '1rem', color: '#4CAF50', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>About</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'About Tinta Print', href: '/about' },
                { label: 'How to Order', href: '/how-it-works' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Eco', href: '/eco' },
                { label: 'Swatch Book', href: '/swatch-book' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Cookie Policy', href: '/cookie-policy' },
                { label: 'Shipping & Delivery', href: '/shipping' },
                { label: 'T&C', href: '/terms-and-conditions' },
              ].map(l => <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>)}
            </div>
          </div>
        </div>

        <div style={{ padding: '1.75rem 0', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <p style={{ fontFamily: B, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>© 2026 Tinta Print</p>
          <p style={{ fontFamily: B, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>All Rights Reserved</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .footer-cols { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 500px) { .footer-cols { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
