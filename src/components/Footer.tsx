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
            <p style={{ fontFamily: D, fontWeight: 700, fontSize: '0.875rem', color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Contact Us</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.75rem' }}>
              <span style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Phone: placeholder</span>
              <span style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Email: hello@tintaprint.uk</span>
              <span style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Hours: 9am – 5pm</span>
              <span style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Days: Mon – Fri</span>
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
              <svg width="38" height="16" viewBox="0 0 60 25" fill="none" aria-label="Stripe">
                <path d="M5 10.2c0-1 .8-1.4 2.1-1.4 1.9 0 4.3.6 6.2 1.6V4.8C11.4 4 9.3 3.6 7.1 3.6 2.9 3.6 0 5.8 0 10.5c0 7.3 10 6.1 10 9.2 0 1.2-1 1.6-2.4 1.6C5.6 21.3 3 20.5 1 19.4v5.6c2.2 1 4.5 1.4 6.6 1.4 4.3 0 7.4-2.1 7.4-6.9-.1-7.8-10-6.4-10-9.3zm18.7-8.9l-5.7 1.2v4.7h-3.3V12h3.3v8.6c0 4 2.3 5.4 5.8 5.4 1.5 0 3-.2 4.2-.8v-4.7c-.8.4-4.3 1.3-4.3-1.6V12h4.3V7.2h-4.3V1.3zm9.2 10.9h-.1c-.4-1.4-1.5-5-1.6-5.6h-5.7l4.6 13.5-2.6 5.9h5.4l7.1-19.4h-5.6l-1.5 5.6zm13.2-5.9c-2 0-3.3.9-4 1.6l-.2-1.3H37v19.4h5.5V14c.4-.5 1.7-2 3.2-2 2.3 0 2.8 1.8 2.8 3.5v10.7h5.5V14.8c0-4.7-2.5-7.4-7.9-7.4zm14.9 0c-5.3 0-8.1 4-8.1 9.9s2.8 9.8 8.1 9.8c5.3 0 8.1-4 8.1-9.8S66.3 6.3 61 6.3zm0 15.1c-2.1 0-2.6-2.6-2.6-5.3 0-2.6.5-5.2 2.6-5.2s2.6 2.6 2.6 5.2c0 2.7-.5 5.3-2.6 5.3z" fill="rgba(255,255,255,0.45)"/>
              </svg>
            </div>
            <a href="https://wetransfer.com" target="_blank" rel="noreferrer" className="btn-outline" style={{ height: 32, minHeight: 32, fontSize: '0.6875rem', padding: '0 0.875rem', letterSpacing: '0.08em' }}>
              WeTransfer
            </a>
          </div>

          {/* Col 2: Our Products */}
          <div>
            <p style={{ fontFamily: D, fontWeight: 700, fontSize: '0.875rem', color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Our Products</p>
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
            <p style={{ fontFamily: D, fontWeight: 700, fontSize: '0.875rem', color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Services</p>
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
            <p style={{ fontFamily: D, fontWeight: 700, fontSize: '0.875rem', color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>About</p>
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
