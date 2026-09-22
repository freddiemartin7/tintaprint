'use client'
import Link from 'next/link'
import RevealWrapper from '@/components/ui/RevealWrapper'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const productLinks = [
  { label: 'Business Cards',   href: '/products/business-cards' },
  { label: 'Flyers & Leaflets',href: '/products/flyers-leaflets' },
  { label: 'Brochures',        href: '/products/brochures-books' },
  { label: 'Banners',          href: '/products/banners' },
  { label: 'Posters',          href: '/products/posters' },
  { label: 'Signs & Boards',   href: '/products/signs-boards' },
  { label: 'Stickers',         href: '/products/stickers' },
]

const serviceLinks = [
  { label: 'Design & Artwork',          href: '/services/design-artwork' },
  { label: 'Large Format Installation', href: '/services/large-format-installation' },
]

const moreLinks = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'FAQ',          href: '/faq' },
  { label: 'Contact',      href: '/contact' },
  { label: 'Quick Buy',    href: '/quick-buy' },
]

const colHeadingStyle = {
  fontFamily: B,
  fontWeight: 700,
  fontSize: 12,
  color: '#ffffff',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.15em',
  marginBottom: '1rem',
}

const linkStyle = {
  fontFamily: B,
  fontWeight: 300,
  fontSize: 14,
  color: 'rgba(255,255,255,0.6)' as const,
  textDecoration: 'none',
  transition: 'color 0.2s',
  display: 'block',
}

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {links.map(l => (
        <li key={l.label}>
          <Link
            href={l.href}
            style={linkStyle}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#ffffff' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)' }}
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '60px 0 40px' }}>
      <div className="max-w-site">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
            gap: '3rem',
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          <RevealWrapper direction="up" delay={0}>
            <div>
              <Link href="/" style={{ fontFamily: D, fontWeight: 700, fontSize: 18, color: '#ffffff', textDecoration: 'none', letterSpacing: '0.05em', display: 'block', marginBottom: 12 }}>
                TINTA PRINT
              </Link>
              <p style={{ fontFamily: B, fontWeight: 300, fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.65 }}>
                AI-Powered Print. UK-wide delivery.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper direction="up" delay={0.08}>
            <div>
              <p style={colHeadingStyle}>Products</p>
              <FooterLinks links={productLinks} />
            </div>
          </RevealWrapper>

          <RevealWrapper direction="up" delay={0.12}>
            <div>
              <p style={colHeadingStyle}>Services</p>
              <FooterLinks links={serviceLinks} />
            </div>
          </RevealWrapper>

          <RevealWrapper direction="up" delay={0.16}>
            <div>
              <p style={colHeadingStyle}>More</p>
              <FooterLinks links={moreLinks} />
            </div>
          </RevealWrapper>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 20, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <p style={{ fontFamily: B, fontWeight: 300, fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            © 2026 Tinta Print. All rights reserved.
          </p>
          <p style={{ fontFamily: B, fontWeight: 300, fontSize: 12, color: 'rgba(255,255,255,0.2)', margin: 0 }}>
            Rebranding to Printelligence — August 2027
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
