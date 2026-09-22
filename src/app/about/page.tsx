import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const values = [
  { title: 'Quality First', desc: 'We only work with production partners who meet our exacting standards for colour accuracy, substrate quality and print consistency.' },
  { title: 'Radical Transparency', desc: 'No hidden charges, no vague turnarounds. You know exactly what you\'re getting, when it arrives, and what it costs.' },
  { title: 'Tech-Driven', desc: 'AI-powered quoting and workflow automation means faster responses, fewer errors, and a process that simply works.' },
  { title: 'Partnership Mindset', desc: 'We treat every client like a long-term partner — not a one-off transaction. Your growth is our growth.' },
]

const stats = [
  { value: '100%', label: 'Online Process' },
  { value: '48hr', label: 'Standard Turnaround' },
  { value: 'UK', label: 'Nationwide Delivery' },
  { value: 'AI', label: 'Powered Workflow' },
]

export const metadata = {
  title: 'About | Tinta Print',
  description: 'The story behind Tinta Print — built by someone who knows the print industry inside out.',
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        {/* Hero */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '5rem 0 4rem' }}>
          <div className="max-w-site">
            <p className="section-label" style={{ marginBottom: '1rem' }}>Our Story</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              About Tinta Print.
            </h1>
            <p style={{ fontFamily: B, fontWeight: 300, fontSize: '1.125rem', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', lineHeight: 1.65 }}>
              A new kind of print business, built by someone who knows the industry inside out.
            </p>
          </div>
        </div>

        {/* Story */}
        <div style={{ padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-site">
            <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
              <div>
                <p className="section-label" style={{ marginBottom: '1rem' }}>The Founder</p>
                <h2 style={{ fontFamily: D, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 1.05, marginBottom: '1.75rem' }}>
                  Built from experience.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <p style={{ fontFamily: B, fontWeight: 400, fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: 0 }}>
                    Freddie Martin founded Tinta Print at 23, after five years working in the print industry. Frustrated by outdated ordering processes, inconsistent quality, and a lack of transparency, he set out to build something better — a digital-first print platform that puts the customer in control.
                  </p>
                  <p style={{ fontFamily: B, fontWeight: 400, fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: 0 }}>
                    Based in Kent, Tinta Print serves businesses, creatives, and individuals across the UK. Every order is managed entirely online — from instant quoting to tracked delivery — with no phone calls required and no surprises at checkout.
                  </p>
                  <p style={{ fontFamily: B, fontWeight: 400, fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: 0 }}>
                    Freddie&apos;s vision is to use AI and intelligent automation to make high-quality print as fast and frictionless as ordering anything else online — building what he calls the Printelligence platform, where smart technology handles the complexity so you don&apos;t have to.
                  </p>
                </div>
              </div>
              <div style={{ paddingTop: '3rem' }}>
                <div style={{ height: 380, background: '#111111', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                  <p style={{ fontFamily: B, color: 'rgba(255,255,255,0.15)', fontSize: '0.875rem' }}>Photo placeholder</p>
                </div>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
          `}</style>
        </div>

        {/* Stats */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-site">
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
              {stats.map((stat, i) => (
                <div key={stat.label} style={{ padding: '3rem 2rem', borderRight: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                  <div style={{ fontFamily: D, fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 1, marginBottom: '0.5rem' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: B, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 640px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          `}</style>
        </div>

        {/* Values */}
        <div style={{ padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-site">
            <p className="section-label" style={{ marginBottom: '1rem' }}>What We Stand For</p>
            <h2 style={{ fontFamily: D, fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 1, marginBottom: '3rem' }}>
              Our values.
            </h2>
            <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
              {values.map(v => (
                <div key={v.title} className="product-card" style={{ background: '#0c0c0c', border: '1px solid rgba(255,255,255,0.06)', borderTop: '2px solid rgba(255,255,255,0.18)', padding: '2.5rem', borderRadius: 12 }}>
                  <h3 style={{ fontFamily: D, fontSize: '1.375rem', fontWeight: 600, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>{v.title}</h3>
                  <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 640px) { .values-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>

        {/* CTA */}
        <div style={{ padding: '5rem 0', textAlign: 'center' }}>
          <div className="max-w-site">
            <h2 style={{ fontFamily: D, fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '1rem', lineHeight: 1.05 }}>
              Ready to work together?
            </h2>
            <p style={{ fontFamily: B, fontWeight: 300, color: 'rgba(255,255,255,0.5)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              Get a fast, no-jargon quote today.
            </p>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
