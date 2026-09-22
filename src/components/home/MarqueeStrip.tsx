const items = [
  'Business Cards', 'Large Format', 'Vinyl Banners', 'Brochures & Books',
  'Stickers & Labels', 'Posters', 'Signs & Boards', 'Fast Turnaround',
  'Roller Banners', 'Events & Weddings',
]

export default function MarqueeStrip() {
  const repeated = [...items, ...items]
  return (
    <div style={{ background: 'var(--accent)', overflow: 'hidden' }}>
      <div className="marquee-track" aria-hidden="true">
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: '"Switzer", sans-serif',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#080808',
              padding: '0.75rem 2.5rem',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2.5rem',
            }}
          >
            {item}
            <span aria-hidden="true" style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(8,8,8,0.3)', display: 'inline-block' }} />
          </span>
        ))}
      </div>
    </div>
  )
}
