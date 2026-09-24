'use client'
import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RadiantPromptInput from '@/components/RadiantPromptInput'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const PACKAGES = [
  {
    id: 'wedding',
    label: 'Weddings',
    animDuration: '3.2s',
    color: '#ffffff',
    href: '/packages#wedding',
    tiers: ['Classic', 'Elegant', 'Luxury'],
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <circle cx="18" cy="10" r="6" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none"/>
        <path d="M8 36 C8 24 28 24 28 36 L28 44 L8 44 Z" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none"/>
        <circle cx="36" cy="10" r="5" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none"/>
        <path d="M28 36 C28 26 44 26 44 36 L44 44 L28 44 Z" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none"/>
      </svg>
    ),
  },
  {
    id: 'salon',
    label: 'Salon & Beauty',
    animDuration: '2.8s',
    color: '#00bcd4',
    href: '/packages#salon',
    tiers: ['Starter', 'Studio', 'Deluxe'],
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="12" cy="36" r="5" stroke="#00bcd4" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none"/>
        <circle cx="12" cy="12" r="5" stroke="#00bcd4" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none"/>
        <line x1="16" y1="15" x2="36" y2="36" stroke="#00bcd4" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
        <line x1="16" y1="33" x2="36" y2="12" stroke="#00bcd4" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
      </svg>
    ),
  },
  {
    id: 'events',
    label: 'Events',
    animDuration: '4s',
    color: '#ffffff',
    href: '/packages#events',
    tiers: ['Essentials', 'Complete', 'Signature'],
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M20 8 L20 32 M20 32 C20 35.3 17.3 38 14 38 C10.7 38 8 35.3 8 32 C8 28.7 10.7 26 14 26 C17.3 26 20 28.7 20 32 Z" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none"/>
        <path d="M20 8 L34 4 L34 20 M34 28 C34 31.3 31.3 34 28 34 C24.7 34 22 31.3 22 28" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none"/>
        <rect x="38" y="10" width="6" height="14" rx="3" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none"/>
        <line x1="41" y1="24" x2="41" y2="30" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
        <line x1="38" y1="30" x2="44" y2="30" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
      </svg>
    ),
  },
  {
    id: 'business',
    label: 'Business',
    animDuration: '3.6s',
    color: '#ffffff',
    href: '/packages#business',
    tiers: ['Launch', 'Grow', 'Tinta'],
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="4" y="10" width="24" height="16" rx="2" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none"/>
        <line x1="4" y1="30" x2="28" y2="30" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
        <line x1="16" y1="30" x2="16" y2="36" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
        <line x1="10" y1="36" x2="22" y2="36" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
        <rect x="32" y="6" width="12" height="38" rx="1" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none"/>
        <line x1="34" y1="12" x2="42" y2="12" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
        <line x1="34" y1="17" x2="42" y2="17" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
        <line x1="34" y1="22" x2="42" y2="22" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
        <rect x="35" y="34" width="6" height="8" stroke="#ffffff" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none"/>
      </svg>
    ),
  },
]

function PackageIcon({ pkg }: { pkg: typeof PACKAGES[number] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{ textAlign: 'center', cursor: 'pointer', position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={pkg.href} style={{ textDecoration: 'none' }}>
        <div style={{ animationName: pkg.id === 'wedding' ? 'float-a' : pkg.id === 'salon' ? 'float-b' : pkg.id === 'events' ? 'float-c' : 'float-d', animationDuration: pkg.animDuration, animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite', display: 'inline-block' }}>
          <p style={{ fontFamily: D, fontWeight: 700, fontSize: '0.875rem', color: '#000000', margin: '0 0 0.625rem', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{pkg.label}</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 80, height: 80, borderRadius: '50%', border: `1.5px solid ${pkg.color}`, background: '#000000', opacity: hovered ? 0.4 : 1, transition: 'opacity 0.25s ease' }}>
            {pkg.icon}
          </div>
        </div>
      </Link>
      {hovered && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0,0,0,0.88)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: '1.25rem 1.5rem', zIndex: 10, minWidth: 160, backdropFilter: 'blur(8px)' }}>
          <p style={{ fontFamily: B, fontWeight: 600, fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', margin: '0 0 0.75rem' }}>Tiers</p>
          {pkg.tiers.map(t => (
            <p key={t} style={{ fontFamily: D, fontWeight: 700, fontSize: '1rem', color: '#ffffff', margin: '0 0 0.375rem', letterSpacing: '0.04em' }}>{t}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default function HomePage() {
  const [, setAiInput] = useState('')

  return (
    <>
      <Nav />
      <main>

        {/* ── Section 1: Product Showcase Strip ── */}
        <section style={{ paddingTop: 120, background: '#000000' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', minHeight: '70vh' }} className="showcase-grid">
            {[
              { name: 'Business Cards', isNew: false },
              { name: 'Banners', isNew: false },
              { name: 'Flyers', isNew: false },
              { name: 'Digital Products', isNew: true },
            ].map((product, i) => (
              <div key={product.name} style={{
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem 1.5rem',
                gap: '1.25rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(1.125rem, 1.8vw, 1.5rem)', color: '#ffffff', margin: 0, letterSpacing: '0.03em', lineHeight: 1.2 }}>
                    {product.name}
                  </h2>
                  {product.isNew && (
                    <span style={{ fontFamily: B, fontWeight: 700, fontSize: '0.625rem', letterSpacing: '0.15em', textTransform: 'uppercase', background: '#ffffff', color: '#000000', padding: '2px 7px', borderRadius: 9999, flexShrink: 0, marginTop: 2 }}>
                      NEW!
                    </span>
                  )}
                </div>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.04)', borderRadius: 8, minHeight: 280, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(255,255,255,0.08)' }}>
                  <span style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(255,255,255,0.15)' }}>Ad image</span>
                </div>
                <Link href={product.name === 'Digital Products' ? '/digital-products' : `/products/${product.name.toLowerCase().replace(/ /g, '-')}`} className="btn-outline" style={{ height: 40, minHeight: 40, fontSize: '0.75rem', alignSelf: 'flex-start', padding: '0 1.25rem' }}>
                  Shop
                </Link>
              </div>
            ))}
          </div>
          <style>{`@media (max-width: 768px) { .showcase-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
        </section>

        {/* ── Section 2: AI Assistant ── */}
        <section id="ai-section" style={{ background: 'linear-gradient(to bottom, #00c060 0%, #ffffff 100%)', padding: '6rem 0' }}>
          <div className="max-w-site">
            <div className="ai-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start', borderBottom: '1px solid rgba(0,0,0,0.12)', paddingBottom: '4rem', marginBottom: '4rem' }}>
              <div>
                <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#ffffff', margin: '0 0 1.25rem', letterSpacing: '0.04em', lineHeight: 1 }}>
                  Ask Tinta Ai
                </h2>
                <p style={{ fontFamily: B, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: '0 0 2.5rem', maxWidth: 420 }}>
                  Get instant answers on pricing, turnarounds, file specs and more. Our AI assistant knows print inside out.
                </p>
                <div>
                  <p style={{ fontFamily: B, fontWeight: 600, fontSize: '0.875rem', color: '#ffffff', margin: '0 0 0.625rem', letterSpacing: '0.06em' }}>5 Star Service</p>
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#FFD700" aria-hidden="true">
                        <path d="M10 1l2.5 5 5.5.8-4 3.9.9 5.3L10 13.4l-4.9 2.6.9-5.3L2 7.8l5.5-.8z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="ai-right" style={{ borderLeft: '1px solid rgba(0,0,0,0.12)', paddingLeft: '4rem' }}>
                <div className="rainbow-glow-wrapper" style={{ marginBottom: '1.25rem' }}>
                  <div className="rainbow-glow-ring" aria-hidden="true" />
                  <RadiantPromptInput
                    placeholder="What size should my business cards be?"
                    onSubmit={v => setAiInput(v)}
                  />
                </div>
                <p style={{ fontFamily: B, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.6 }}>
                  Ask about pricing, file formats, turnaround times, or anything print-related.
                </p>
              </div>
            </div>
            <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
              <h3 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#000000', margin: '0 0 1rem', letterSpacing: '0.04em' }}>
                About Tinta
              </h3>
              <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(0,0,0,0.65)', lineHeight: 1.75, margin: 0 }}>
                Tinta Print is a modern, AI-powered print brokerage based in Kent. We make professional print accessible to everyone — fast turnarounds, premium quality, delivered to your door. Powered by technology, driven by people.
              </p>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              #ai-section .ai-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
              #ai-section .ai-right { border-left: none !important; padding-left: 0 !important; }
            }
          `}</style>
        </section>

        {/* ── Section 3: Our Products ── */}
        <section style={{ padding: '6rem 0', background: '#000000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-site">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <p className="section-label" style={{ marginBottom: '0.75rem' }}>What We Print</p>
                <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#ffffff', margin: 0, letterSpacing: '0.04em', lineHeight: 1.05 }}>
                  Our Products.
                </h2>
              </div>
              <Link href="/products" style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                View All Products →
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.08)' }} className="products-grid">
              {[
                { name: 'Business Cards', href: '/products/business-cards' },
                { name: 'Flyers', href: '/products/flyers-leaflets' },
                { name: 'Posters', href: '/products/posters' },
                { name: 'Stickers', href: '/products/stickers' },
                { name: 'Banners', href: '/products/banners' },
                { name: 'Brochures', href: '/products/brochures-books' },
              ].map(product => (
                <Link key={product.name} href={product.href} style={{
                  background: '#000000',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'filter 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.4)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'none')}>
                  <div style={{ aspectRatio: '4/3', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(255,255,255,0.15)' }}>Image</span>
                  </div>
                  <div style={{ padding: '1.25rem 1.5rem' }}>
                    <h3 style={{ fontFamily: D, fontWeight: 700, fontSize: '1.0625rem', color: '#ffffff', margin: 0, letterSpacing: '0.04em' }}>
                      {product.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <style>{`@media (max-width: 768px) { .products-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
        </section>

        {/* ── Section 4: Packages ── */}
        <section style={{ padding: '7rem 0', background: 'linear-gradient(to bottom, #00BCD4 0%, #FFD700 100%)', borderTop: 'none', overflow: 'hidden' }}>
          <div className="max-w-site">
            <p className="section-label" style={{ marginBottom: '1rem', color: '#000000' }}>Print Bundles</p>
            <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#000000', margin: '0 0 5rem', letterSpacing: '0.04em', lineHeight: 1 }}>
              Packages.
            </h2>

            <div style={{ position: 'relative', height: 480, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4rem' }}>
              <div className="box-3d-scene">
                <div className="box-3d">
                  {(['box-front','box-back','box-left','box-right','box-top','box-bottom'] as const).map(face => (
                    <div key={face} className={`box-3d-face ${face}`}>
                      {face === 'box-front' && (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src="/images/logo-magenta-whiteoutline.svg" alt="" style={{ width: 90, height: 90, objectFit: 'contain' }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)' }}>
                <PackageIcon pkg={PACKAGES[0]} />
              </div>
              <div style={{ position: 'absolute', top: '50%', right: '8%', transform: 'translateY(-50%)' }}>
                <PackageIcon pkg={PACKAGES[1]} />
              </div>
              <div style={{ position: 'absolute', bottom: '8%', left: '12%' }}>
                <PackageIcon pkg={PACKAGES[2]} />
              </div>
              <div style={{ position: 'absolute', bottom: '8%', right: '12%' }}>
                <PackageIcon pkg={PACKAGES[3]} />
              </div>
            </div>

            <div style={{ textAlign: 'right', marginBottom: '4rem' }}>
              <Link href="/build-your-own" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                height: 44, minHeight: 44, fontSize: '0.8125rem',
                fontFamily: B, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '0 2rem', borderRadius: 9999, textDecoration: 'none',
                border: '1.5px solid #000000', color: '#000000', background: 'transparent',
              }}>
                Build Your Own Package →
              </Link>
            </div>

            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
              <h3 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#000000', margin: '0 0 1.25rem', letterSpacing: '0.04em' }}>
                Packages.
              </h3>
              <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(0,0,0,0.65)', lineHeight: 1.8, margin: 0 }}>
                Ordering individual products is fine. But when you bundle them together, the real value appears — consistent branding across every touchpoint, better pricing, and a single point of contact for your entire print run. Our packages are designed around how real businesses actually operate, not how print suppliers prefer to sell.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 5: Follow Us + Feature Boxes ── */}
        <section className="section-gradient-yellow-white" style={{ padding: '6rem 0' }}>
          <div className="max-w-site">

            <div style={{ marginBottom: '5rem' }}>
              <div className="follow-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '3rem', alignItems: 'center' }}>
                <div style={{ height: 260, background: 'rgba(0,0,0,0.08)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(0,0,0,0.3)' }}>Instagram posts</span>
                </div>

                <div style={{ textAlign: 'center', minWidth: 200 }}>
                  <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#000000', margin: '0 0 1.5rem', letterSpacing: '0.04em' }}>
                    Follow Us.
                  </h2>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ width: 52, height: 52, borderRadius: '50%', background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#ffffff" stroke="none"/>
                      </svg>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ width: 52, height: 52, borderRadius: '50%', background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noreferrer" style={{ width: 52, height: 52, borderRadius: '50%', background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                      </svg>
                    </a>
                  </div>
                  <p style={{ fontFamily: B, fontSize: '0.8125rem', color: 'rgba(0,0,0,0.5)', margin: 0 }}>
                    Click <Link href="/contact" style={{ color: '#000000', fontWeight: 600 }}>here</Link> to contact us about social media partnerships
                  </p>
                </div>

                <div style={{ height: 260, background: 'rgba(0,0,0,0.08)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(0,0,0,0.3)' }}>Video</span>
                </div>
              </div>
            </div>

            <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                { title: 'Swatch Book', btn: 'Order Now', href: '/swatch-book' },
                { title: 'Eco', btn: 'Find Out More', href: '/eco' },
                { title: 'About Us', btn: 'Meet Us', href: '/about' },
              ].map(card => (
                <div key={card.title} style={{
                  background: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: 12,
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div style={{ height: 200, background: 'rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(0,0,0,0.25)' }}>Image</span>
                  </div>
                  <div style={{ padding: '1.75rem' }}>
                    <h3 style={{ fontFamily: D, fontWeight: 700, fontSize: '1.375rem', color: '#000000', margin: '0 0 1.25rem', letterSpacing: '0.04em' }}>
                      {card.title}
                    </h3>
                    <Link href={card.href} style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      background: '#000000', color: '#ffffff', fontFamily: B, fontWeight: 700,
                      fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                      padding: '0 1.25rem', height: 40, borderRadius: 9999, textDecoration: 'none',
                    }}>
                      {card.btn}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .follow-grid { grid-template-columns: 1fr !important; } }
            @media (max-width: 768px) { .feature-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ── Section 6: Contact CTA ── */}
        <section style={{ padding: '6rem 0', background: '#000000', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-site">
            <p className="section-label" style={{ marginBottom: '1rem' }}>Get In Touch</p>
            <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#ffffff', margin: '0 0 1.25rem', letterSpacing: '0.04em', lineHeight: 1.05 }}>
              Ready to print?
            </h2>
            <p style={{ fontFamily: B, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.45)', margin: '0 0 2.5rem', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
              Get a fast quote, no jargon, no phone calls required.
            </p>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
