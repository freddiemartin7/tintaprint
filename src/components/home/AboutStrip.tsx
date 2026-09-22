import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const stats = [
  { value: '100%', label: 'Online' },
  { value: '48hr', label: 'Turnaround' },
  { value: 'UKwide', label: 'Delivery' },
]

export default function AboutStrip() {
  return (
    <section className="grain-overlay" style={{ background: '#080808', borderTop: '1px solid rgba(240,240,236,0.06)', borderBottom: '1px solid rgba(240,240,236,0.06)', padding: '5rem 0' }}>
      <div className="max-w-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">Our Story</p>
            <h2 style={{ fontFamily: D, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, color: '#f0f0ec', letterSpacing: '0.04em', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              {/* Empty — content to be added */}
            </h2>
            <Link href="/about" className="btn-outline mt-6" style={{ display: 'inline-flex' }}>Our Story</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid rgba(240,240,236,0.08)' }}>
            {stats.map((stat, i) => (
              <div key={stat.label} style={{ padding: '2rem 1.5rem', borderRight: i < stats.length - 1 ? '1px solid rgba(240,240,236,0.08)' : 'none', textAlign: 'center' }}>
                <div style={{ fontFamily: D, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 1, marginBottom: '0.5rem',   }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: B, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,240,236,0.4)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
