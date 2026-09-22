import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const sections = [
  {
    title: 'Standard Delivery',
    icon: '📦',
    items: [
      '3–5 working days from artwork approval',
      'Tracked delivery on all orders',
      'You\'ll receive tracking information once your order has been dispatched',
    ],
  },
  {
    title: 'Express Delivery',
    icon: '⚡',
    items: [
      '1–2 working days on selected products',
      'Available at additional cost — POA',
      'Contact us to discuss express options before placing your order',
    ],
  },
  {
    title: 'Same Day',
    icon: '🕐',
    items: [
      'Available on selected products',
      'Artwork must be approved before midday',
      'Contact us directly for same-day enquiries — we\'ll advise on availability',
      'POA',
    ],
  },
  {
    title: 'Damaged Orders',
    icon: '⚠️',
    items: [
      'Contact us within 48 hours of receiving your order',
      'Send photos of the damage via our contact form',
      'We\'ll arrange a reprint or refund as quickly as possible',
    ],
  },
  {
    title: 'Delivery Area',
    icon: '🗺️',
    items: [
      'UK mainland addresses only',
      'Contact us for international or Scottish Highlands / Islands enquiries',
      'Delivery to client addresses available — just let us know at point of order',
    ],
  },
  {
    title: 'Large or Oversized Items',
    icon: '📐',
    items: [
      'Large or oversized orders may have different delivery arrangements',
      'We\'ll advise at point of order if your job requires special delivery',
      'Installation services available on selected products — ask us for details',
    ],
  },
]

export const metadata = {
  title: 'Delivery Information | Tinta Print',
  description: 'Delivery timescales, express options, damaged orders, and delivery area information for Tinta Print.',
}

export default function DeliveryPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        <section style={{ padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, var(--accent-dim) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-site" style={{ position: 'relative', zIndex: 2 }}>
            <p className="section-label mb-5">Shipping</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              Delivery Information
            </h1>
            <p style={{ fontFamily: B, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '520px', lineHeight: 1.65 }}>
              Everything you need to know about how and when your order arrives.
            </p>
          </div>
        </section>

        <section style={{ padding: '3rem 0 6rem' }}>
          <div className="max-w-site">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {sections.map(s => (
                <div key={s.title} className="product-card" style={{ padding: '2rem' }}>
                  <h2 style={{ fontFamily: D, fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '1.25rem', lineHeight: 1.1 }}>
                    {s.title}
                  </h2>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {s.items.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontFamily: B, fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.3rem', fontSize: '0.5rem' }}>●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--accent-dim)', border: '1px solid var(--accent-mid)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
              <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, margin: 0 }}>
                Have a question about your delivery? Get in touch and we&apos;ll sort it.
              </p>
              <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>Contact Us</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
