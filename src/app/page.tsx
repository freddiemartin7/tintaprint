'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import RadiantPromptInput from '@/components/RadiantPromptInput'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const heroSlides = [
  { name: 'Business Cards',  description: 'Premium finishes, fast turnaround' },
  { name: 'Banners & Signs', description: 'Large format for maximum impact' },
  { name: 'Wedding Print',   description: 'Elegant stationery for your big day' },
  { name: 'Flyers & Leaflets', description: 'Spread the word in style' },
  { name: 'Posters',         description: 'Bold print that commands attention' },
]

const productGrid = [
  { name: 'Business Cards',           desc: 'Professional cards for every occasion',     href: '/products/business-cards' },
  { name: 'Flyers',                   desc: 'Eye-catching flyers and leaflets',           href: '/products/flyers-leaflets' },
  { name: 'Posters',                  desc: 'High-impact print for any space',            href: '/products/posters' },
  { name: 'Banners',                  desc: 'Large format display printing',              href: '/products/banners' },
  { name: 'Stickers',                 desc: 'Custom stickers and labels',                 href: '/products/stickers' },
  { name: 'Brochures',                desc: 'Folded and bound marketing material',        href: '/products/brochures-books' },
  { name: 'Signs & Boards',           desc: 'Durable signage for every setting',          href: '/products/signs-boards' },
  { name: 'Letterheads',              desc: 'Branded stationery and comp slips',          href: '/products/letterheads-compliment-slips' },
  { name: 'Greeting Cards',           desc: 'Premium cards for every occasion',           href: '/products/cards' },
  { name: 'Orders of Service',        desc: 'Elegant ceremony programmes',                href: '/products/orders-of-service' },
  { name: 'Weddings',                 desc: 'Beautiful wedding print collections',         href: '/products/weddings' },
  { name: 'Event Print',              desc: 'Everything you need for your event',         href: '/products/events' },
  { name: 'Large Format Installation', desc: 'Wall graphics and installations',           href: '/products/events-weddings' },
  { name: 'Architectural Plans',      desc: 'Technical drawing reproduction',             href: '/products/canvas-prints' },
  { name: 'Design & Artwork',         desc: 'Professional design for your print',         href: '/services' },
]

const packages = [
  { name: 'Business',     href: '/packages/business', desc: 'Everything your business needs to look professional and consistent.' },
  { name: 'Events',       href: '/packages/events',   desc: 'Complete print solutions for events of any size.' },
  { name: 'Salon & Beauty', href: '/packages/salon',  desc: 'Branded print for salons, spas and beauty businesses.' },
  { name: 'Wedding',      href: '/packages/weddings', desc: 'Beautiful stationery for your most important day.' },
]

const featureBoxes = [
  { title: 'Swatch Book',  desc: 'Order a physical sample of our papers and finishes.',  cta: 'Order Now',      href: '/contact' },
  { title: 'Eco Printing', desc: 'Our commitment to sustainable print production.',       cta: 'Find Out More',  href: '/services' },
  { title: 'About Us',     desc: 'The team behind Tinta Print.',                          cta: 'Meet Us',        href: '/about' },
]

const footerProducts = [
  { label: 'Business Cards',   href: '/products/business-cards' },
  { label: 'Flyers & Leaflets', href: '/products/flyers-leaflets' },
  { label: 'Brochures',        href: '/products/brochures-books' },
  { label: 'Banners',          href: '/products/banners' },
  { label: 'Posters',          href: '/products/posters' },
  { label: 'Signs & Boards',   href: '/products/signs-boards' },
  { label: 'Stickers',         href: '/products/stickers' },
  { label: 'Cards',            href: '/products/cards' },
  { label: 'Letterheads',      href: '/products/letterheads-compliment-slips' },
  { label: 'Orders of Service', href: '/products/orders-of-service' },
  { label: 'Event Print',      href: '/products/events' },
  { label: 'Wedding Print',    href: '/products/weddings' },
]

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M3 9h12M9 3l6 6-6 6" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function HomePage() {
  const [slide, setSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(s => (s + 1) % heroSlides.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `/products${searchQuery.trim() ? `?q=${encodeURIComponent(searchQuery.trim())}` : ''}`
  }

  const fireAI = (msg: string) => {
    window.dispatchEvent(new CustomEvent('openTintaAI', { detail: { message: msg } }))
  }

  return (
    <>
      <Nav />
      <main style={{ paddingTop: 64 }}>

        {/* ── Section 1: Hero ── */}
        <section style={{ height: '100vh', minHeight: 600, background: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', width: '100%', maxWidth: 1000 }}>
            <h1 style={{
              fontFamily: D,
              fontWeight: 700,
              fontSize: 'clamp(3.5rem, 11vw, 10rem)',
              letterSpacing: '0.04em',
              color: '#ffffff',
              margin: '0 0 1.25rem',
              lineHeight: 0.95,
            }}>
              TINTA PRINT
            </h1>
            <p style={{
              fontFamily: B,
              fontWeight: 400,
              fontSize: 'clamp(1rem, 1.8vw, 1.375rem)',
              color: '#ffffff',
              margin: '0 0 3rem',
              letterSpacing: '0.02em',
              opacity: 0.8,
            }}>
              Premium print. Fast turnaround. UK-wide delivery.
            </p>

            {/* Carousel */}
            <div style={{ position: 'relative', width: '100%', maxWidth: 680, margin: '0 auto 3rem', height: 300, background: '#111111', overflow: 'hidden' }}>
              {heroSlides.map((s, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: i % 2 === 0 ? '#111111' : '#161616',
                    opacity: i === slide ? 1 : 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.5rem',
                  }}
                >
                  <p style={{ fontFamily: D, fontWeight: 700, fontSize: '1.25rem', color: '#ffffff', margin: 0 }}>{s.name}</p>
                  <p style={{ fontFamily: B, fontWeight: 400, fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', margin: '0.25rem 0 0' }}>{s.description}</p>
                </div>
              ))}
              {/* Dot indicators */}
              <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', display: 'flex', gap: '0.4rem', zIndex: 10 }}>
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: i === slide ? '#ffffff' : 'rgba(255,255,255,0.25)',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Get a Quote</Link>
              <Link href="/products" className="btn-outline">View Products</Link>
            </div>
          </div>
        </section>

        {/* ── Section 2: Search ── */}
        <section style={{ background: '#000000', borderBottom: '1px solid rgba(255,255,255,0.15)', padding: '3.5rem 1.5rem' }}>
          <form onSubmit={handleSearch} style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', border: '1px solid #ffffff' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search for a product..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#ffffff',
                fontFamily: B,
                fontSize: 'clamp(1rem, 2vw, 1.375rem)',
                padding: '1.25rem 1.5rem',
                fontWeight: 400,
              }}
            />
            <button
              type="submit"
              aria-label="Search"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '1.25rem 1.5rem', color: '#ffffff', display: 'flex', alignItems: 'center', flexShrink: 0 }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </form>
        </section>

        {/* ── Section 3: AI Assistant ── */}
        <section style={{ background: '#000000', padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-site">
            <div className="ai-section-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', alignItems: 'center' }}>
              <div className="ai-left" style={{ paddingRight: '4rem' }}>
                <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', margin: '0 0 1.25rem', lineHeight: 1.1 }}>
                  Ask Tinta AI
                </h2>
                <p style={{ fontFamily: B, fontWeight: 400, fontSize: '1rem', color: '#ffffff', lineHeight: 1.75, margin: 0, opacity: 0.8 }}>
                  Have a question about specifications, turnaround times, pricing or materials?
                  Ask our AI assistant anything about your print project — available 24/7.
                </p>
              </div>
              <div className="ai-divider" style={{ background: 'rgba(255,255,255,0.15)', alignSelf: 'stretch', minHeight: 120 }} />
              <div className="ai-right" style={{ paddingLeft: '4rem' }}>
                <RadiantPromptInput
                  placeholder="Ask anything about print..."
                  onSubmit={fireAI}
                />
                <p style={{ fontFamily: B, fontWeight: 400, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', margin: '0.875rem 0 0' }}>
                  Turnaround times, file specs, pricing, delivery and more.
                </p>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .ai-section-grid { grid-template-columns: 1fr !important; }
              .ai-divider { display: none !important; }
              .ai-left { padding-right: 0 !important; padding-bottom: 2.5rem; }
              .ai-right { padding-left: 0 !important; }
            }
          `}</style>
        </section>

        {/* ── Section 4: Products Grid ── */}
        <section style={{ background: '#000000', padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-site">
            <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', margin: '0 0 3rem', lineHeight: 1.1 }}>
              Our Products
            </h2>
            <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {productGrid.map(p => (
                <Link key={p.name} href={p.href} style={{ textDecoration: 'none' }}>
                  <div className="product-card" style={{ cursor: 'pointer' }}>
                    <div className="product-card-img" style={{ background: '#1a1a1a', aspectRatio: '16/9', width: '100%' }} />
                    <div style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontFamily: D, fontWeight: 700, fontSize: '0.9375rem', color: '#ffffff', margin: 0 }}>{p.name}</p>
                        <p style={{ fontFamily: B, fontWeight: 400, fontSize: '0.8125rem', color: '#ffffff', margin: '0.3rem 0 0', opacity: 0.6, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.desc}</p>
                      </div>
                      <Arrow />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 1024px) { .products-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 640px)  { .products-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ── Section 5: Packages ── */}
        <section style={{ background: '#000000', padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-site">
            <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', margin: '0 0 3rem', lineHeight: 1.1 }}>
              Print Packages
            </h2>
            <div className="packages-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
              {packages.map(pkg => (
                <Link key={pkg.name} href={pkg.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div style={{ border: '1px solid #ffffff', padding: '2rem', background: '#000000', height: '100%', minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ fontFamily: D, fontWeight: 700, fontSize: '1.25rem', color: '#ffffff', margin: '0 0 0.75rem' }}>{pkg.name}</p>
                      <p style={{ fontFamily: B, fontWeight: 400, fontSize: '0.875rem', color: '#ffffff', margin: 0, lineHeight: 1.65, opacity: 0.75 }}>{pkg.desc}</p>
                    </div>
                    <div style={{ marginTop: '1.5rem' }}><Arrow /></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .packages-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 560px) { .packages-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ── Section 6: Social ── */}
        <section style={{ background: '#000000', padding: '5rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', margin: '0 0 2.5rem', lineHeight: 1.1 }}>
            Follow Us
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>
            <a href="#" aria-label="Instagram" style={{ color: '#ffffff', display: 'flex' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" style={{ color: '#ffffff', display: 'flex' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok" style={{ color: '#ffffff', display: 'flex' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.15 8.15 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
              </svg>
            </a>
          </div>
        </section>

        {/* ── Section 7: Feature Boxes ── */}
        <section style={{ background: '#000000', padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-site">
            <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {featureBoxes.map(box => (
                <div key={box.title} style={{ border: '1px solid #ffffff', background: '#000000', overflow: 'hidden' }}>
                  <div style={{ background: '#111111', height: 200, width: '100%' }} />
                  <div style={{ padding: '1.75rem' }}>
                    <p style={{ fontFamily: D, fontWeight: 700, fontSize: '1.25rem', color: '#ffffff', margin: '0 0 0.625rem' }}>{box.title}</p>
                    <p style={{ fontFamily: B, fontWeight: 400, fontSize: '0.9375rem', color: '#ffffff', margin: '0 0 1.5rem', lineHeight: 1.65, opacity: 0.8 }}>{box.desc}</p>
                    <Link href={box.href} className="btn-outline" style={{ height: 42, minHeight: 42, fontSize: '0.75rem', padding: '0 1.5rem' }}>
                      {box.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .features-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ── Section 8: Contact CTA ── */}
        <section style={{ background: '#000000', padding: '5rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <Link href="/contact" className="btn-outline" style={{ fontSize: '1rem', height: 56, minHeight: 56, padding: '0 3rem' }}>
            Contact Us
          </Link>
        </section>

        {/* ── Footer ── */}
        <footer style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '60px 0 40px' }}>
          <div className="max-w-site">
            <div className="footer-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem', marginBottom: 48 }}>

              {/* Products */}
              <div>
                <p style={{ fontFamily: D, fontWeight: 700, fontSize: '0.8125rem', color: '#ffffff', margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Products</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {footerProducts.map(l => (
                    <li key={l.label}><Link href={l.href} className="footer-link">{l.label}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <p style={{ fontFamily: D, fontWeight: 700, fontSize: '0.8125rem', color: '#ffffff', margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Services</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {[
                    { label: 'Packages',        href: '/packages' },
                    { label: 'Build Your Own',  href: '/packages/builder' },
                    { label: 'Quick Buy',       href: '/quick-buy' },
                    { label: 'Design & Artwork', href: '/services' },
                  ].map(l => (
                    <li key={l.label}><Link href={l.href} className="footer-link">{l.label}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <p style={{ fontFamily: D, fontWeight: 700, fontSize: '0.8125rem', color: '#ffffff', margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Company</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {[
                    { label: 'About Us',    href: '/about' },
                    { label: 'How It Works', href: '/how-it-works' },
                    { label: 'FAQ',         href: '/faq' },
                    { label: 'Eco Printing', href: '/services' },
                  ].map(l => (
                    <li key={l.label}><Link href={l.href} className="footer-link">{l.label}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p style={{ fontFamily: D, fontWeight: 700, fontSize: '0.8125rem', color: '#ffffff', margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Contact</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <li><a href="mailto:hello@tintaprint.uk" className="footer-link">hello@tintaprint.uk</a></li>
                </ul>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem', alignItems: 'center' }}>
                  <a href="#" aria-label="Instagram" style={{ color: 'rgba(255,255,255,0.55)', display: 'flex' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Facebook" style={{ color: 'rgba(255,255,255,0.55)', display: 'flex' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="TikTok" style={{ color: 'rgba(255,255,255,0.55)', display: 'flex' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.15 8.15 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <p style={{ fontFamily: B, fontWeight: 400, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                © 2025 Tinta Print. All rights reserved.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <Link href="/privacy-policy" style={{ fontFamily: B, fontWeight: 400, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</Link>
                <Link href="/terms-and-conditions" style={{ fontFamily: B, fontWeight: 400, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms & Conditions</Link>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .footer-cols { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 560px) { .footer-cols { grid-template-columns: 1fr !important; } }
          `}</style>
        </footer>

      </main>
    </>
  )
}
