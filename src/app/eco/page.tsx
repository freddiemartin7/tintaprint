import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const pillars = [
  {
    title: 'Materials',
    icon: '🌿',
    body: 'We use FSC-certified and recycled paper stocks wherever possible, and our premium range includes options made from 100% post-consumer waste. From uncoated recycled boards to certified silk papers, every choice is made with the environment in mind.',
  },
  {
    title: 'Process',
    icon: '⚙️',
    body: 'Our production partners use water-based inks and energy-efficient presses, reducing waste and chemical usage at every stage of production. Plates are made with low-chemistry processes, and offcuts are recycled rather than sent to landfill.',
  },
  {
    title: 'Delivery',
    icon: '📦',
    body: 'We consolidate shipments wherever possible and partner with carbon-neutral delivery services to reduce the environmental impact of getting your print to your door. Packaging is plastic-free and fully recyclable.',
  },
]

export const metadata = {
  title: 'Eco Printing | Tinta Print',
  description: 'Our commitment to sustainable, eco-friendly print production — from materials to delivery.',
}

export default function EcoPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-site">
            <p className="section-label" style={{ marginBottom: '1.25rem' }}>Sustainability</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              Eco Printing.
            </h1>
            <p style={{ fontFamily: B, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '540px', lineHeight: 1.65 }}>
              Our commitment to sustainable print production — from the paper we choose to the van that delivers your order.
            </p>
          </div>
        </section>

        {/* Pillars */}
        <section style={{ padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-site">
            <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {pillars.map(p => (
                <div key={p.title} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '2.5rem', background: '#0a0a0a' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>{p.icon}</div>
                  <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: '1.5rem', color: '#ffffff', letterSpacing: '0.04em', marginBottom: '1rem', lineHeight: 1.1 }}>
                    {p.title}
                  </h2>
                  <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: 0 }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .pillars-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Commitment statement */}
        <section style={{ padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-site" style={{ maxWidth: 720 }}>
            <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#ffffff', letterSpacing: '0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Print doesn&apos;t have to cost the earth.
            </h2>
            <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: '0 0 1.25rem' }}>
              We believe that great print and environmental responsibility are not mutually exclusive. That&apos;s why we&apos;ve built sustainability into every part of how we work — from the suppliers we choose to the materials we stock.
            </p>
            <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>
              If you&apos;d like to discuss eco-friendly options for your next print order, just ask — our team can advise on the best sustainable substrates for your project.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 0', textAlign: 'center' }}>
          <div className="max-w-site">
            <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#ffffff', letterSpacing: '0.04em', marginBottom: '1rem', lineHeight: 1.05 }}>
              Order sustainably today.
            </h2>
            <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.5)', marginBottom: '2.5rem', fontSize: '1rem', lineHeight: 1.65 }}>
              Tell us about your project and we&apos;ll recommend the most sustainable options.
            </p>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
