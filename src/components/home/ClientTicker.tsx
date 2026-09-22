const sectors = [
  'Agencies', 'Retailers', 'Event Planners', 'Architects',
  'Construction Firms', 'Hospitality', 'Charities', 'SMEs',
  'Startups', 'Property Developers',
]

export default function ClientTicker() {
  const repeated = [...sectors, ...sectors]
  return (
    <section style={{ background: '#080808', padding: '5rem 0', overflow: 'hidden' }}>
      <div className="max-w-site mb-10">
        <p className="section-label mb-4">Trusted By</p>
        <h2 style={{ fontFamily: '"Aeonik Pro", sans-serif', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, color: '#f0f0ec', letterSpacing: '0.04em', lineHeight: 1 }}>
          The businesses behind the print.
        </h2>
      </div>
      <div className="ticker-track" aria-hidden="true">
        {repeated.map((sector, i) => (
          <span
            key={i}
            style={{
              fontFamily: '"Aeonik Pro", sans-serif',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: (i % sectors.length === 0 && i > 0) ? 'var(--accent)' : 'rgba(240,240,236,0.12)',
              padding: '0 2.5rem',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2.5rem',
            }}
          >
            {sector}
            <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-dim)', display: 'inline-block', flexShrink: 0 }} />
          </span>
        ))}
      </div>
    </section>
  )
}
