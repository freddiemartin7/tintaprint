'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const products = [
  { label: 'Business Cards',           href: '/products/business-cards' },
  { label: 'Flyers & Leaflets',        href: '/products/flyers-leaflets' },
  { label: 'Brochures & Books',        href: '/products/brochures-books' },
  { label: 'Stickers',                 href: '/products/stickers' },
  { label: 'Banners',                  href: '/products/banners' },
  { label: 'Posters',                  href: '/products/posters' },
  { label: 'Signs & Boards',           href: '/products/signs-boards' },
  { label: 'Cards',                    href: '/products/cards' },
  { label: 'Letterheads & Comp Slips', href: '/products/letterheads-compliment-slips' },
  { label: 'Orders of Service',        href: '/products/orders-of-service' },
  { label: 'Event Print',              href: '/products/events' },
  { label: 'Wedding Print',            href: '/products/weddings' },
  { label: 'Canvas Prints',            href: '/products/canvas-prints' },
]

const packages = [
  { label: 'Business',       href: '/packages/business' },
  { label: 'Events',         href: '/packages/events' },
  { label: 'Weddings',       href: '/packages/weddings' },
  { label: 'Salon & Beauty', href: '/packages/salon' },
  { label: 'Build Your Own', href: '/packages/builder' },
]

const services = [
  { label: 'Design & Artwork',           href: '/services' },
  { label: 'Large Format Installation',  href: '/services' },
]

const more = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Quick Buy',    href: '/quick-buy' },
  { label: 'Contact Us',   href: '/contact' },
]

const mobileGroups = [
  { label: 'Products', items: products },
  { label: 'Packages', items: packages },
  { label: 'Services', items: services },
  { label: 'More',     items: more },
]

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const navLinkStyle = {
  fontFamily: B,
  fontSize: '0.8125rem',
  fontWeight: 500,
  letterSpacing: '0.08em',
  color: 'rgba(255,255,255,0.65)',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  padding: '1.5rem 0',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
} as const

const dropItemStyle = {
  display: 'block',
  padding: '0.625rem 1.25rem',
  fontFamily: B,
  fontSize: '0.8125rem',
  color: 'rgba(255,255,255,0.65)',
  textDecoration: 'none',
} as const

const chevron = (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.5 }}>
    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    setMobileOpen(false)
    setOpenSubmenu(null)
  }, [pathname])

  return (
    <>
      <nav
        style={{
          background: '#000000',
          zIndex: 150,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
        className="fixed top-0 left-0 right-0 h-16"
      >
        <div className="max-w-site h-full flex items-center justify-between">

          {/* Wordmark */}
          <Link href="/" style={{ fontFamily: D, fontSize: '1.375rem', fontWeight: 700, letterSpacing: '0.06em', color: '#ffffff', textDecoration: 'none', flexShrink: 0 }}>
            TINTA PRINT
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">

            <div className="nav-parent">
              <Link href="/products" style={navLinkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                Products {chevron}
              </Link>
              <div className="nav-dropdown">
                {products.map(p => (
                  <Link key={p.label} href={p.href} style={dropItemStyle}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; e.currentTarget.style.background = 'transparent' }}
                  >{p.label}</Link>
                ))}
              </div>
            </div>

            <div className="nav-parent">
              <Link href="/packages" style={navLinkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                Packages {chevron}
              </Link>
              <div className="nav-dropdown">
                {packages.map(p => (
                  <Link key={p.label} href={p.href} style={dropItemStyle}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; e.currentTarget.style.background = 'transparent' }}
                  >{p.label}</Link>
                ))}
              </div>
            </div>

            <div className="nav-parent">
              <Link href="/services" style={navLinkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                Services {chevron}
              </Link>
              <div className="nav-dropdown">
                {services.map(s => (
                  <Link key={s.label} href={s.href} style={dropItemStyle}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; e.currentTarget.style.background = 'transparent' }}
                  >{s.label}</Link>
                ))}
              </div>
            </div>

            <div className="nav-parent">
              <button style={navLinkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                More {chevron}
              </button>
              <div className="nav-dropdown">
                {more.map(m => (
                  <Link key={m.label} href={m.href} style={dropItemStyle}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; e.currentTarget.style.background = 'transparent' }}
                  >{m.label}</Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="btn-primary" style={{ height: 38, minHeight: 38, fontSize: '0.75rem' }}>
              Get a Quote
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span style={{ display: 'block', width: 24, height: 1.5, background: '#fff' }} />
            <span style={{ display: 'block', width: 24, height: 1.5, background: '#fff', opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: mobileOpen ? 24 : 16, height: 1.5, background: '#fff' }} />
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <div
        className={`mobile-nav lg:hidden${mobileOpen ? ' open' : ''}`}
        style={{ top: 64 }}
      >
        <div style={{ padding: '8px 0 24px' }}>
          {mobileGroups.map(group => (
            <div key={group.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <button
                onClick={() => setOpenSubmenu(openSubmenu === group.label ? null : group.label)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 24px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: D,
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  letterSpacing: '0.04em',
                  color: '#ffffff',
                }}
              >
                {group.label}
                <span style={{ fontFamily: B, fontWeight: 400, fontSize: '1.25rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1 }}>
                  {openSubmenu === group.label ? '−' : '+'}
                </span>
              </button>

              {openSubmenu === group.label && (
                <div style={{ padding: '4px 0 12px 24px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {group.items.map(item => (
                    <Link
                      key={item.label}
                      href={item.href}
                      style={{
                        fontFamily: B,
                        fontSize: '0.9375rem',
                        color: 'rgba(255,255,255,0.65)',
                        textDecoration: 'none',
                        padding: '9px 0',
                        display: 'block',
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div style={{ padding: '20px 24px 8px' }}>
            <Link href="/contact" className="btn-primary" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
