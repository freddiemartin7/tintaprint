import Link from 'next/link'
import RevealWrapper from '@/components/ui/RevealWrapper'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const features = [
  {
    title: 'Popular Products',
    desc: 'Browse our full range of print products — from business cards to large-format signs.',
    href: '/popular-products',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="8" y="4" width="16" height="10" rx="1.5" stroke="#ffffff" strokeWidth="1.5"/>
        <rect x="4" y="11" width="24" height="13" rx="2" stroke="#ffffff" strokeWidth="1.5"/>
        <rect x="8" y="18" width="16" height="7" rx="1" stroke="#ffffff" strokeWidth="1.5"/>
        <circle cx="24" cy="17" r="1.5" fill="#ffffff"/>
      </svg>
    ),
  },
  {
    title: 'AI Assistant',
    desc: 'Not sure what you need? Get help finding the right product and spec for your job.',
    href: '/contact',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M5 7a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H12l-7 4V7z" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 12h12M10 17h7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Packages',
    href: '/packages',
    desc: 'Everything you need, bundled together. Packages for business, events, salons, and weddings.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 10l12-6 12 6v12l-12 6L4 22V10z" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M16 4v20M4 10l12 6 12-6" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function FeatureBoxes() {
  return (
    <section style={{ padding: '0 0 3rem', background: 'transparent' }}>
      <div className="max-w-site">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {features.map((f, i) => (
            <RevealWrapper key={f.title} direction="up" delay={i * 0.1}>
              <Link
                href={f.href}
                className="product-card"
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem', textDecoration: 'none', height: '100%' }}
              >
                <div>{f.icon}</div>
                <h3 style={{ fontFamily: D, fontSize: '1.0625rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em' }}>{f.title}</h3>
                <p style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
