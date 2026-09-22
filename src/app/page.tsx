'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import RadiantPromptInput from '@/components/RadiantPromptInput'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const heroSlides = [
  { name: 'Business Cards',    description: 'Premium finishes, fast turnaround' },
  { name: 'Flyers & Leaflets', description: 'Eye-catching print for any campaign' },
  { name: 'Posters',           description: 'Bold print that commands attention' },
  { name: 'Banners',           description: 'Large format for maximum impact' },
  { name: 'Stickers',          description: 'Custom shapes, any size' },
  { name: 'Brochures',         description: 'Folded and bound marketing material' },
  { name: 'Wedding Print',     description: 'Elegant stationery for your big day' },
  { name: 'Swatch Book',       description: 'Feel the quality before you order' },
]

const productGrid = [
  { name: 'Business Cards', desc: 'Professional cards for every occasion',    href: '/products/business-cards' },
  { name: 'Flyers',         desc: 'Eye-catching flyers and leaflets',          href: '/products/flyers-leaflets' },
  { name: 'Posters',        desc: 'High-impact print for any space',           href: '/products/posters' },
  { name: 'Stickers',       desc: 'Custom stickers and labels',                href: '/products/stickers' },
  { name: 'Banners',        desc: 'Large format display printing',             href: '/products/banners' },
  { name: 'Brochures',      desc: 'Folded and bound marketing material',       href: '/products/brochures-books' },
]

const packages = [
  { name: 'Business',      desc: 'Everything your business needs to look professional.', items: ['Business cards', 'Flyers', 'Letterheads', 'Compliment slips'], href: '/packages/business' },
  { name: 'Events',        desc: 'Complete print for events of any size.',                items: ['Posters', 'Banners', 'Flyers', 'Programmes'],                    href: '/packages/events' },
  { name: 'Salon & Beauty', desc: 'Branded print for salons and beauty businesses.',      items: ['Loyalty cards', 'Appointment cards', 'Flyers', 'Gift vouchers'], href: '/packages/salon' },
  { name: 'Wedding',       desc: 'Beautiful stationery for your most important day.',     items: ['Invitations', 'Order of service', 'Place cards', 'Menus'],       href: '/packages/weddings' },
]

const featureBoxes = [
  { title: 'Swatch Book',  desc: 'Order a physical sample of our papers and finishes.',  cta: 'Order Now',     href: '/swatch-book' },
  { title: 'Eco Printing', desc: 'Our commitment to sustainable print production.',       cta: 'Find Out More', href: '/eco' },
  { title: 'About Us',     desc: 'The story behind Tinta Print.',                         cta: 'Meet Us',       href: '/about' },
]

const footerProducts = [
  { label: 'Business Cards',    href: '/products/business-cards' },
  { label: 'Flyers & Leaflets', href: '/products/flyers-leaflets' },
  { label: 'Brochures',         href: '/products/brochures-books' },
  { label: 'Banners',           href: '/products/banners' },
  { label: 'Posters',           href: '/products/posters' },
  { label: 'Signs & Boards',    href: '/products/signs-boards' },
  { label: 'Stickers',          href: '/products/stickers' },
  { label: 'Cards',             href: '/products/cards' },
  { label: 'Letterheads',       href: '/products/letterheads-compliment-slips' },
  { label: 'Orders of Service', href: '/products/orders-of-service' },
  { label: 'Event Print',       href: '/products/events' },
  { label: 'Wedding Print',     href: '/products/weddings' },
]

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function HeroSlideshow() {
  const [slide, setSlide] = useState(0)
  const pointerStartX = useRef<number | null>(null)

  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 8000)
    return () => clearInterval(timer)
  }, [])

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = e.clientX
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return
    const dx = e.clientX - pointerStartX.current
    if (Math.abs(dx) > 40) {
      setSlide(s => dx < 0 ? (s + 1) % heroSlides.length : (s - 1 + heroSlides.length) % heroSlides.length)
    }
    pointerStartX.current = null
  }

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '100%', background: '#111111', overflow: 'hidden', cursor: 'grab', userSelect: 'none' }}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => { pointerStartX.current = null }}
    >
      {heroSlides.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            background: i % 2 === 0 ? '#111111' : '#161616',
            opacity: i === slide ? 1 : 0,
            transition: 'opacity 0.6s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '2rem',
            pointerEvents: 'none',
          }}
        >
          <p style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#ffffff', margin: 0, letterSpacing: '0.04em' }}>{s.name}</p>
          <p style={{ fontFamily: B, fontWeight: 400, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', margin: '0.375rem 0 0' }}>{s.description}</p>
        </div>
      ))}
      {/* Dot indicators */}
      <div style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem', display: 'flex', gap: '0.4rem', zIndex: 10, pointerEvents: 'auto' }}>
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={`Slide ${i + 1}`}
            style={{ width: 7, height: 7, borderRadius: '50%', background: i === slide ? '#ffffff' : 'rgba(255,255,255,0.25)', border: 'none', cursor: 'pointer', padding: 0 }}
          />
        ))}
      </div>
    </div>
  )
}

function PackageCard({ pkg }: { pkg: typeof packages[number] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 400,
        height: 500,
        flexShrink: 0,
        scrollSnapAlign: 'start',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: 12,
        background: '#000000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {/* Hover reveal overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.88)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2.5rem',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.25s ease',
        pointerEvents: hovered ? 'auto' : 'none',
      }}>
        <p style={{ fontFamily: B, fontWeight: 600, fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 1.25rem' }}>
          What&apos;s included
        </p>
        <ul style={{ listStyle: 'none', margin: '0 0 2rem', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {pkg.items.map(item => (
            <li key={item} style={{ fontFamily: B, fontSize: '1rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#ffffff', flexShrink: 0 }} />
              {item}
            </li>
          ))}
        </ul>
        <Link href={pkg.href} className="btn-primary" style={{ alignSelf: 'flex-start', height: 42, minHeight: 42, fontSize: '0.75rem' }}>
          Get a Quote
        </Link>
      </div>

      {/* Default content */}
      <div style={{ opacity: hovered ? 0 : 1, transition: 'opacity 0.25s ease' }}>
        <p style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#ffffff', margin: '0 0 1rem', letterSpacing: '0.04em', lineHeight: 1.05 }}>
          {pkg.name}
        </p>
        <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: 0 }}>
          {pkg.desc}
        </p>
      </div>
    </div>
  )
}

export default function HomePage() {
  const fireAI = (msg: string) => {
    window.dispatchEvent(new CustomEvent('openTintaAI', { detail: { message: msg } }))
  }

  return (
    <>
      <Nav />
      <main style={{ paddingTop: 64 }}>

        {/* ── Hero ── */}
        <section style={{ minHeight: 'calc(100vh - 64px)', background: '#000000', display: 'flex', alignItems: 'stretch' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%' }}>

            {/* Left: logo + tagline + CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(2rem, 5vw, 6rem)' }}>
              <Image
                src="/images/logo-green-whiteoutline.svg"
                alt="Tinta Print"
                width={220}
                height={310}
                priority
                style={{ width: 'clamp(140px, 18vw, 220px)', height: 'auto', marginBottom: '2.5rem' }}
              />
              <p style={{ fontFamily: B, fontWeight: 400, fontSize: 'clamp(0.9375rem, 1.4vw, 1.125rem)', color: 'rgba(255,255,255,0.7)', margin: '0 0 2.5rem', lineHeight: 1.6, maxWidth: 360 }}>
                Premium print. Fast turnaround. UK-wide delivery.
              </p>
              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Get a Quote</Link>
                <Link href="/products" className="btn-outline">View Products</Link>
              </div>
            </div>

            {/* Right: slideshow */}
            <div style={{ minHeight: 'calc(100vh - 64px)' }}>
              <HeroSlideshow />
            </div>
          </div>
        </section>
        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-grid > div:last-child { min-height: 60vw !important; }
          }
        `}</style>

        {/* ── AI Section ── */}
        <section style={{ background: '#000000', padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-site">
            <div className="ai-section-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', alignItems: 'center' }}>
              <div className="ai-left" style={{ paddingRight: '4rem' }}>
                <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', margin: '0 0 1.25rem', lineHeight: 1.1 }}>
                  Ask Tinta Ai
                </h2>
                <p style={{ fontFamily: B, fontWeight: 400, fontSize: '1rem', color: '#ffffff', lineHeight: 1.75, margin: 0, opacity: 0.8 }}>
                  Have a question about specifications, turnaround times, pricing or materials?
                  Ask our AI assistant anything about your print project — available 24/7.
                </p>
              </div>
              <div className="ai-divider" style={{ background: 'rgba(255,255,255,0.15)', alignSelf: 'stretch', minHeight: 120 }} />
              <div className="ai-right" style={{ paddingLeft: '4rem' }}>
                <div className="rainbow-glow-wrapper" style={{ borderRadius: 9999 }}>
                  <div className="rainbow-glow-ring" />
                  <RadiantPromptInput
                    placeholder="Ask anything about print..."
                    onSubmit={fireAI}
                  />
                </div>
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

        {/* ── Products Grid ── */}
        <section style={{ background: '#ffffff', padding: '6rem 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          <div className="max-w-site">
            <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#000000', margin: '0 0 3rem', lineHeight: 1.1 }}>
              Our Products
            </h2>
            <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {productGrid.map(p => (
                <Link key={p.name} href={p.href} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#ffffff', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.2s ease' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(0,0,0,0.18)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.10)' }}
                  >
                    <div style={{ background: '#f3f3f3', aspectRatio: '16/9', width: '100%' }} />
                    <div style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontFamily: D, fontWeight: 700, fontSize: '0.9375rem', color: '#000000', margin: 0 }}>{p.name}</p>
                        <p style={{ fontFamily: B, fontWeight: 400, fontSize: '0.8125rem', color: 'rgba(0,0,0,0.55)', margin: '0.3rem 0 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.desc}</p>
                      </div>
                      <span style={{ color: '#000000', flexShrink: 0 }}><Arrow /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link href="/products" style={{ fontFamily: B, fontSize: '0.9375rem', fontWeight: 600, color: '#000000', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                View All Products →
              </Link>
            </div>
          </div>
          <style>{`
            @media (max-width: 1024px) { .products-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 640px)  { .products-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ── Packages ── */}
        <section style={{ background: '#000000', padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
          <div className="max-w-site" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', margin: 0, lineHeight: 1.1 }}>
              Print Packages
            </h2>
          </div>
          <div style={{ paddingLeft: 'clamp(1.5rem, 3rem, calc((100vw - 1280px) / 2 + 3rem))', paddingRight: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1.25rem', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: '1rem', WebkitOverflowScrolling: 'touch' }}>
              {packages.map(pkg => <PackageCard key={pkg.name} pkg={pkg} />)}
            </div>
          </div>
        </section>

        {/* ── Social ── */}
        <section style={{ background: '#000000', padding: '5rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', margin: '0 0 2.5rem', lineHeight: 1.1 }}>
            Follow Us
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Placeholder rect left */}
            <div style={{ width: 180, height: 280, background: '#1a1a1a', borderRadius: 8, flexShrink: 0 }} />

            {/* Icons column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
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

            {/* Placeholder rect right */}
            <div style={{ width: 180, height: 280, background: '#1a1a1a', borderRadius: 8, flexShrink: 0 }} />
          </div>
        </section>

        {/* ── Feature Boxes ── */}
        <section style={{ background: '#000000', padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-site">
            <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {featureBoxes.map(box => (
                <div key={box.title} style={{ border: '1px solid rgba(255,255,255,0.15)', background: '#000000', overflow: 'hidden', borderRadius: 12 }}>
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

        {/* ── Contact CTA ── */}
        <section style={{ background: '#000000', padding: '5rem 1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <Link href="/contact" className="btn-outline" style={{ fontSize: '1rem', height: 56, minHeight: 56, padding: '0 3rem' }}>
            Contact Us
          </Link>
        </section>

        {/* ── Footer ── */}
        <footer style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '60px 0 40px' }}>
          <div className="max-w-site">
            <div className="footer-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem', marginBottom: 48 }}>

              <div>
                <p style={{ fontFamily: D, fontWeight: 700, fontSize: '0.8125rem', color: '#ffffff', margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Products</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {footerProducts.map(l => (
                    <li key={l.label}><Link href={l.href} className="footer-link">{l.label}</Link></li>
                  ))}
                </ul>
              </div>

              <div>
                <p style={{ fontFamily: D, fontWeight: 700, fontSize: '0.8125rem', color: '#ffffff', margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Services</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {[
                    { label: 'Packages',         href: '/packages' },
                    { label: 'Build Your Own',   href: '/packages/builder' },
                    { label: 'Quick Buy',        href: '/quick-buy' },
                    { label: 'Design & Artwork', href: '/services' },
                  ].map(l => (
                    <li key={l.label}><Link href={l.href} className="footer-link">{l.label}</Link></li>
                  ))}
                </ul>
              </div>

              <div>
                <p style={{ fontFamily: D, fontWeight: 700, fontSize: '0.8125rem', color: '#ffffff', margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Company</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {[
                    { label: 'About Us',    href: '/about' },
                    { label: 'How It Works', href: '/how-it-works' },
                    { label: 'FAQ',         href: '/faq' },
                    { label: 'Eco Printing', href: '/eco' },
                    { label: 'Swatch Book', href: '/swatch-book' },
                  ].map(l => (
                    <li key={l.label}><Link href={l.href} className="footer-link">{l.label}</Link></li>
                  ))}
                </ul>
              </div>

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
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
              <div>
                <p style={{ fontFamily: B, fontWeight: 400, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', margin: '0 0 2px' }}>
                  © 2026 Tinta Print.
                </p>
                <p style={{ fontFamily: B, fontWeight: 400, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', margin: '0 0 2px' }}>
                  All rights reserved.
                </p>
                <p style={{ fontFamily: B, fontWeight: 400, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
                  Payments by Stripe.
                </p>
              </div>
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
