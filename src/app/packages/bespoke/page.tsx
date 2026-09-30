import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

export const metadata = {
  title: 'Bespoke Print Packages | Tinta Print',
  description: 'Custom print packages tailored to your brief, industry and timeline. Any quantity, any product mix, your timeline.',
}

export default function BespokePage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        {/* Hero */}
        <section style={{ padding: '4rem 0 3rem', borderBottom: '1px solid rgba(0,0,0,0.08)', background: '#ffffff', textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <div className="max-w-site" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, color: '#16a34a', letterSpacing: '0.04em', lineHeight: 0.95, margin: 0 }}>
              Bespoke.
            </h1>
          </div>
        </section>

        {/* Tell us what you need */}
        <section style={{ padding: '5rem 0', background: '#ffffff' }}>
          <div className="max-w-site">
            <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#000000', letterSpacing: '0.04em', margin: '0 0 1.5rem', lineHeight: 1.05 }}>
              Tell us what you need.
            </h2>
            <p style={{ fontFamily: B, fontSize: '1.0625rem', color: 'rgba(0,0,0,0.6)', lineHeight: 1.75, maxWidth: 600, margin: 0 }}>
              Not every project fits a standard package. Tinta Print builds fully custom print bundles tailored to any brief — whether you&apos;re launching a brand, planning an event, or running a campaign. Any industry, any product mix, any quantity. Just tell us what you need and we&apos;ll take care of the rest.
            </p>
          </div>
        </section>

        {/* Three feature cards */}
        <section style={{ padding: '5rem 0', background: '#111111' }}>
          <div className="max-w-site">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="bespoke-grid">
              {[
                {
                  title: 'Any Quantity',
                  body: 'No minimum or maximum order sizes. Whether you need 10 or 10,000, we’ll match the right supplier and price point for your run.',
                },
                {
                  title: 'Any Product Mix',
                  body: 'Combine any products from across our full range into a single bespoke bundle. Business cards with banners, leaflets with signage — whatever the job calls for.',
                },
                {
                  title: 'Your Timeline',
                  body: 'We work to deadlines that suit you. Standard, priority or same-day turnarounds are all available depending on your requirements.',
                },
              ].map(card => (
                <div key={card.title} style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3 style={{ fontFamily: D, fontWeight: 700, fontSize: '1.375rem', color: '#ffffff', margin: 0, letterSpacing: '0.04em' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media (max-width: 768px) { .bespoke-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* Ready to talk */}
        <section style={{ padding: '6rem 0', background: '#111111', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-site">
            <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#ffffff', letterSpacing: '0.04em', margin: '0 0 1.25rem', lineHeight: 1.05 }}>
              Ready to talk?
            </h2>
            <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.5)', margin: '0 auto 2.5rem', maxWidth: 480, lineHeight: 1.7 }}>
              Drop us a message and we&apos;ll come back to you with a tailored quote within 24 hours.
            </p>
            <Link href="/contact" className="btn-primary" style={{ height: 52, minHeight: 52, fontSize: '0.875rem', padding: '0 2.5rem' }}>
              Get in Touch
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
