'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Search, ChevronDown, X, Menu } from 'lucide-react'

const B = '"Switzer", sans-serif'
const D = '"Aeonik Pro", sans-serif'

const ALL_PRODUCTS_SERVICES = [
  'Banners', 'Booklets', 'Brochures', 'Business Cards', 'Canvas Prints',
  'Compliment Slips', 'Digital Products', 'Envelopes', 'Flyers',
  'Gift Vouchers', 'Greetings Cards', 'Labels', 'Leaflets', 'Letterheads',
  'Loyalty Cards', 'Menus', 'Notepads', 'Packaging', 'Posters',
  'Presentation Folders', 'Roll-Up Banners', 'Signage', 'Stickers',
  'Design & Artwork', 'File Submission', 'Installation', 'AI Image Fix',
].sort()

const shopDropdown = [
  { label: 'Business Cards', href: '/products/business-cards' },
  { label: 'Flyers & Leaflets', href: '/products/flyers-leaflets' },
  { label: 'Posters', href: '/products/posters' },
  { label: 'Banners', href: '/products/banners' },
  { label: 'Stickers & Labels', href: '/products/stickers' },
  { label: 'Brochures', href: '/products/brochures-books' },
  { label: 'Digital Products', href: '/digital-products' },
  { label: 'View All →', href: '/products' },
]

const packagesDropdown = [
  { label: 'Business Package', href: '/packages#business' },
  { label: 'Events Package', href: '/packages#events' },
  { label: 'Salon & Beauty Package', href: '/packages#salon' },
  { label: 'Wedding Package', href: '/packages#wedding' },
  { label: 'Build Your Own', href: '/build-your-own' },
]

const servicesDropdown = [
  { label: 'Design & Artwork', href: '/services/design-artwork' },
  { label: 'File Submission & Proofing', href: '/services/file-submission' },
  { label: 'Installation', href: '/services/installation' },
  { label: 'AI Image Fix', href: '/services/file-submission#ai' },
  { label: 'Tinta Ai', href: '/#ai-section' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [query, setQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearch(false)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const filtered = query.trim().length > 0
    ? ALL_PRODUCTS_SERVICES.filter(p => p.toLowerCase().includes(query.toLowerCase()))
    : []

  const linkColor = scrolled ? '#000000' : '#ffffff'
  const iconColor = scrolled ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)'

  return (
    <>
      <nav className={`nav-root${scrolled ? ' scrolled' : ''}`} style={{ height: 120 }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 2rem', height: '100%', display: 'flex', alignItems: 'center', gap: '2rem' }}>

          {/* Left: Logo + Wordmark */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none', flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={scrolled ? '/images/logo-green-blackoutline.svg' : '/images/logo-green-whiteoutline-whitetext.svg'}
              alt="Tinta Print"
              style={{ height: 72, width: 'auto', transition: 'opacity 0.3s' }}
            />
          </Link>

          {/* Centre: Search bar */}
          <div ref={searchRef} style={{ flex: 1, maxWidth: 520, position: 'relative' }}>
            <div className="nav-search-border" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '1px solid',
              borderRadius: 9999,
              padding: '0 1.25rem',
              height: 52,
              background: 'transparent',
              transition: 'border-color 0.3s ease',
            }}>
              <Search size={18} style={{ color: iconColor, flexShrink: 0 }} />
              <input
                className="nav-search-input"
                type="text"
                placeholder="Search products & services…"
                value={query}
                onChange={e => { setQuery(e.target.value); setShowSearch(true) }}
                onFocus={() => setShowSearch(true)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontFamily: B,
                  fontSize: '1rem',
                  transition: 'color 0.3s ease',
                  background: 'transparent',
                }}
              />
              {query && (
                <button onClick={() => { setQuery(''); setShowSearch(false) }} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: iconColor, display: 'flex' }}>
                  <X size={13} />
                </button>
              )}
            </div>
            {showSearch && filtered.length > 0 && (
              <div className="search-dropdown">
                {filtered.map(item => (
                  <Link
                    key={item}
                    href={`/products?q=${encodeURIComponent(item)}`}
                    className="search-dropdown-item"
                    onClick={() => { setQuery(''); setShowSearch(false) }}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Right: Nav items + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginLeft: 'auto', flexShrink: 0 }} className="desktop-nav">
            {[
              { label: 'Shop All Products', href: '/products', items: shopDropdown },
              { label: 'View Our Packages', href: '/packages', items: packagesDropdown },
              { label: 'Services We Offer', href: '/services', items: servicesDropdown },
            ].map(nav => (
              <div key={nav.label} className="nav-parent" style={{ position: 'relative' }}>
                <Link href={nav.href} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '3px',
                  padding: '0 1.125rem',
                  height: 120,
                  justifyContent: 'center',
                  textDecoration: 'none',
                }}>
                  <span className="nav-link" style={{
                    fontFamily: B,
                    fontWeight: 500,
                    fontSize: '1.0625rem',
                    transition: 'color 0.3s ease',
                    whiteSpace: 'nowrap',
                  }}>{nav.label}</span>
                  <ChevronDown size={15} style={{ color: iconColor }} />
                </Link>
                <div className="nav-dropdown-inverted">
                  {nav.items.map(item => (
                    <Link key={item.label} href={item.href} style={{
                      display: 'block',
                      padding: '0.625rem 1.25rem',
                      fontFamily: B,
                      fontSize: '0.875rem',
                      color: 'inherit',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(128,128,128,0.08)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link href="/contact" className="btn-primary" style={{
              marginLeft: '1rem',
              height: 52,
              minHeight: 52,
              fontSize: '0.875rem',
              padding: '0 2rem',
              background: scrolled ? '#000000' : '#ffffff',
              color: scrolled ? '#ffffff' : '#000000',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}>
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(true)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: linkColor, marginLeft: 'auto' }}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <div style={{ padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <Link href="/" onClick={() => setMobileOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-green-whiteoutline.svg" alt="Tinta Print" style={{ height: 26, width: 'auto' }} />
            <span style={{ fontFamily: D, fontWeight: 700, fontSize: '1rem', color: '#ffffff', letterSpacing: '0.06em' }}>Tinta Print</span>
          </Link>
          <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff' }}>
            <X size={22} />
          </button>
        </div>
        <div style={{ padding: '1.5rem' }}>
          {[
            { label: 'Shop All Products', items: shopDropdown },
            { label: 'Packages', items: packagesDropdown },
            { label: 'Services', items: servicesDropdown },
          ].map(group => (
            <MobileAccordion key={group.label} label={group.label} items={group.items} onClose={() => setMobileOpen(false)} />
          ))}
          <Link href="/contact" className="btn-primary" onClick={() => setMobileOpen(false)} style={{ display: 'block', textAlign: 'center', marginTop: '1.5rem' }}>
            Get a Quote
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}

function MobileAccordion({ label, items, onClose }: { label: string; items: { label: string; href: string }[]; onClose: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '0.125rem' }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1rem 0', background: 'none', border: 'none', cursor: 'pointer',
        fontFamily: B, fontWeight: 500, fontSize: '1rem', color: '#ffffff',
      }}>
        {label}
        <span style={{ fontSize: '1.25rem', fontWeight: 300 }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div style={{ paddingBottom: '0.75rem', paddingLeft: '0.75rem' }}>
          {items.map(item => (
            <Link key={item.label} href={item.href} onClick={onClose} style={{
              display: 'block', padding: '0.5rem 0', fontFamily: B, fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
            }}>{item.label}</Link>
          ))}
        </div>
      )}
    </div>
  )
}
