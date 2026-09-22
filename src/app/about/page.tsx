import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const values = [
  { title: 'Quality First', desc: 'We only work with premium production partners who meet our exacting standards for colour accuracy, substrate quality and consistency.' },
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

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>
        <div className="grain-overlay" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '5rem 0 4rem' }}>
          <div className="max-w-site">
            <p className="section-label mb-4">Our Story</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              About <span style={{ color: 'var(--accent)', textShadow: '0 0 30px var(--accent-mid)' }}>Tinta Print.</span>
            </h1>
            <p style={{ fontFamily: B, fontWeight: 300, fontSize: '1.125rem', color: 'rgba(240,240,236,0.5)', maxWidth: '560px', lineHeight: 1.65 }}>
              A new kind of print brokerage — built on technology, obsessed with quality, and unapologetically simple.
            </p>
          </div>
        </div>

        {/* History placeholder */}
        <div className="grain-overlay" style={{ padding: '6rem 0', borderBottom: '1px solid rgba(240,240,236,0.06)' }}>
          <div className="max-w-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="section-label mb-4">History</p>
                <div style={{ height: '160px', border: '1px dashed rgba(240,240,236,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p style={{ fontFamily: B, color: 'rgba(240,240,236,0.2)', fontSize: '0.875rem' }}>Content coming soon</p>
                </div>
              </div>
              <div style={{ paddingTop: '2rem' }}>
                <div style={{ height: '280px', border: '1px dashed rgba(240,240,236,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p style={{ fontFamily: B, color: 'rgba(240,240,236,0.2)', fontSize: '0.875rem' }}>Image placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ borderBottom: '1px solid rgba(240,240,236,0.06)' }}>
          <div className="max-w-site">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', borderLeft: '1px solid rgba(240,240,236,0.06)' }}
              className="grid-cols-2 lg:grid-cols-4"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} style={{ padding: '3rem 2rem', borderRight: '1px solid rgba(240,240,236,0.06)', borderBottom: i < 2 ? '1px solid rgba(240,240,236,0.06)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontFamily: D, fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.04em', lineHeight: 1, marginBottom: '0.5rem', textShadow: '0 0 24px var(--accent-dim)' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: B, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,240,236,0.35)', fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grain-overlay" style={{ padding: '6rem 0', borderBottom: '1px solid rgba(240,240,236,0.06)' }}>
          <div className="max-w-site">
            <p className="section-label mb-4">What We Stand For</p>
            <h2 style={{ fontFamily: D, fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, color: '#f0f0ec', letterSpacing: '0.04em', lineHeight: 1, marginBottom: '3rem' }}>
              Our values.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}
              className="grid-cols-1 sm:grid-cols-2"
            >
              {values.map(v => (
                <div key={v.title} className="product-card" style={{ background: '#0c0c0c', border: '1px solid rgba(240,240,236,0.06)', borderTop: '2px solid var(--accent-mid)', padding: '2.5rem' }}>
                  <h3 style={{ fontFamily: D, fontSize: '1.375rem', fontWeight: 600, color: '#f0f0ec', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>{v.title}</h3>
                  <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(240,240,236,0.5)', lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: '5rem 0', textAlign: 'center' }}>
          <div className="max-w-site">
            <h2 style={{ fontFamily: D, fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#f0f0ec', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Ready to work <span style={{ color: 'var(--accent)', textShadow: '0 0 30px var(--accent-mid)' }}>together?</span>
            </h2>
            <p style={{ fontFamily: B, fontWeight: 300, color: 'rgba(240,240,236,0.5)', marginBottom: '2rem', fontSize: '1.125rem' }}>
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
