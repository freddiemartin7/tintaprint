'use client'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RadiantPromptInput from '@/components/RadiantPromptInput'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const packages5 = [
  { name: 'Business',       color: '#0D47A1', tiers: ['Launch', 'Grow', 'Tinta'],              href: '/packages#business' },
  { name: 'Salon & Beauty', color: '#AD1457', tiers: ['Starter', 'Studio', 'Deluxe'],           href: '/packages#salon' },
  { name: 'Wedding',        color: '#4A148C', tiers: ['Classic', 'Elegant', 'Luxury'],          href: '/packages#wedding' },
  { name: 'Party',          color: '#E65100', tiers: ['Essential', 'Celebration', 'Grand'],     href: '/packages#party' },
  { name: 'Events',         color: '#00695C', tiers: ['Essentials', 'Complete', 'Signature'],   href: '/packages#events' },
]

export default function HomePage() {
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
                    <span style={{ fontFamily: '"komu-new-d", sans-serif', fontWeight: 700, fontSize: '2.5rem', letterSpacing: '0.15em', textTransform: 'uppercase', background: '#ffffff', color: '#000000', padding: '8px 28px', borderRadius: 9999, flexShrink: 0, lineHeight: 1 }}>
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
        <section id="ai-section" style={{ position: 'relative', overflow: 'hidden', background: '#16a34a', padding: '6rem 0' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 65%)' }} />
          <div style={{ position: 'relative', zIndex: 10 }}>
            <div className="max-w-site">
              <div className="ai-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'stretch' }}>

                {/* LEFT: large white card */}
                <div style={{ background: '#ffffff', borderRadius: 16, minHeight: 480, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 40px rgba(0,0,0,0.18)' }}>
                  <span style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(0,0,0,0.2)' }}>Image</span>
                </div>

                {/* RIGHT: heading + input + stars */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', gap: '1.5rem' }}>
                  <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#ffffff', margin: 0, letterSpacing: '0.04em', lineHeight: 1 }}>
                    Ask Tinta Ai
                  </h2>
                  <div className="rainbow-glow-wrapper">
                    <div className="rainbow-glow-ring" aria-hidden="true" />
                    <RadiantPromptInput
                      placeholder="What size should my business cards be?"
                      onSubmit={v => {
                        window.dispatchEvent(new CustomEvent('openTintaAI', { detail: { message: v } }))
                      }}
                    />
                  </div>
                  <p style={{ fontFamily: B, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>
                    Get instant answers on pricing, turnarounds, file specs and more. Our AI assistant knows print inside out.
                  </p>
                </div>

              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .ai-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ── Section 3: Our Products ── */}
        <section style={{ padding: '6rem 0', background: '#ffffff' }}>
          <div className="max-w-site">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#000000', margin: 0, letterSpacing: '0.04em', lineHeight: 1.05 }}>
                  Our Products.
                </h2>
              </div>
              <Link href="/products" style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(0,0,0,0.5)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                View All Products →
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="products-grid">
              {[
                { name: 'Business Cards', href: '/products/business-cards' },
                { name: 'Flyers', href: '/products/flyers-leaflets' },
                { name: 'Posters', href: '/products/posters' },
                { name: 'Stickers', href: '/products/stickers' },
                { name: 'Banners', href: '/products/banners' },
                { name: 'Brochures', href: '/products/brochures-books' },
              ].map(product => (
                <Link key={product.name} href={product.href} style={{
                  background: '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.1)',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.06)',
                  transition: 'box-shadow 0.2s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.06)' }}>
                  <div style={{ aspectRatio: '4/3', background: 'rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '2.5rem', color: 'rgba(0,0,0,0.12)', lineHeight: 1, fontWeight: 300 }}>+</span>
                  </div>
                  <div style={{ padding: '1.25rem 1.5rem' }}>
                    <h3 style={{ fontFamily: D, fontWeight: 700, fontSize: '1.0625rem', color: '#000000', margin: 0, letterSpacing: '0.04em' }}>
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
        <section style={{ padding: '6rem 0', background: '#ffffff' }}>
          <div className="max-w-site">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={{ fontFamily: '"urca", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#000000', margin: 0, letterSpacing: '0.04em', lineHeight: 1.05 }}>
                  Packages.
                </h2>
              </div>
            </div>
            <p style={{ fontFamily: '"urca", sans-serif', fontWeight: 400, fontSize: '1rem', color: 'rgba(0,0,0,0.55)', lineHeight: 1.7, margin: '0 0 3rem', maxWidth: 560 }}>
              Everything you need, bundled together. Our packages are designed for specific industries — saving you time, money and the hassle of ordering piece by piece.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="packages-home-grid">
              {[
                { name: 'Business', href: '/packages/business', tiers: ['Launch', 'Grow', 'Tinta'], color: '#0D47A1' },
                { name: 'Salon & Beauty', href: '/packages/salon', tiers: ['Starter', 'Studio', 'Deluxe'], color: '#AD1457' },
                { name: 'Wedding', href: '/packages/weddings', tiers: ['Classic', 'Elegant', 'Luxury'], color: '#4A148C' },
              ].map(pkg => (
                <Link key={pkg.name} href={pkg.href} style={{
                  background: '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.1)',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.06)',
                  transition: 'box-shadow 0.2s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.06)' }}>
                  <div style={{ aspectRatio: '4/3', background: 'rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '2.5rem', color: 'rgba(0,0,0,0.12)', lineHeight: 1, fontWeight: 300 }}>+</span>
                  </div>
                  <div style={{ padding: '1.25rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontFamily: '"urca", sans-serif', fontWeight: 600, fontSize: '1.0625rem', color: '#000000', margin: '0 0 0.5rem', letterSpacing: '0.04em' }}>
                      {pkg.name}
                    </h3>
                    <p style={{ fontFamily: '"urca", sans-serif', fontWeight: 300, fontSize: '0.8125rem', color: 'rgba(0,0,0,0.45)', margin: '0 0 1rem' }}>
                      {pkg.tiers.join(' · ')}
                    </p>
                    <span style={{ fontFamily: '"urca", sans-serif', fontWeight: 400, fontSize: '0.6875rem', color: pkg.color, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 'auto' }}>
                      Find Out More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link href="/packages" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                height: 48, fontSize: '0.8125rem', fontFamily: B, fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0 2rem',
                borderRadius: 9999, textDecoration: 'none',
                border: '1.5px solid #000000', color: '#000000', background: 'transparent',
              }}>View All Packages</Link>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .packages-home-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ── Section 5: Follow Us + Feature Boxes ── */}
        <section style={{ padding: '6rem 0', background: '#facc15' }}>
          <div className="max-w-site">

            <div style={{ marginBottom: '5rem' }}>
              <div className="follow-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '3rem', alignItems: 'center' }}>
                <a href="https://instagram.com/tintaprint" target="_blank" rel="noreferrer" style={{ height: 260, background: 'rgba(0,0,0,0.08)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                  <span style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(0,0,0,0.3)' }}>Instagram posts</span>
                </a>

                <div style={{ textAlign: 'center', minWidth: 200 }}>
                  <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#000000', margin: '0 0 1.5rem', letterSpacing: '0.04em' }}>
                    Follow Us.
                  </h2>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <a href="https://instagram.com/tintaprint" target="_blank" rel="noreferrer" style={{ width: 52, height: 52, borderRadius: '50%', background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
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

                <a href="https://instagram.com/tintaprint" target="_blank" rel="noreferrer" style={{ height: 260, background: 'rgba(0,0,0,0.08)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                  <span style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(0,0,0,0.3)' }}>Video</span>
                </a>
              </div>
            </div>

            <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                { title: 'Delivery', btn: 'Learn More', href: '/shipping', deliveryCard: true },
                { title: 'Eco', btn: 'Find Out More', href: '/eco', deliveryCard: false },
                { title: 'About Us', btn: 'Meet Us', href: '/about', deliveryCard: false },
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
                    <h3 style={{ fontFamily: D, fontWeight: 700, fontSize: '1.375rem', color: '#000000', margin: '0 0 1rem', letterSpacing: '0.04em' }}>
                      {card.title}
                    </h3>
                    {card.title === 'Delivery' && (
                      <p style={{ fontFamily: B, fontSize: '0.8125rem', color: 'rgba(0,0,0,0.55)', margin: '0 0 1.25rem', lineHeight: 1.6 }}>
                        Standard · Priority · Fastt
                      </p>
                    )}
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


      </main>
      <Footer />
    </>
  )
}
