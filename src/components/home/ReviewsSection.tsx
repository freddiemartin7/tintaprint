const D = '"Aeonik Pro", sans-serif'

export default function ReviewsSection() {
  return (
    <section style={{ background: '#080808', padding: '5rem 0' }}>
      <div className="max-w-site">
        <p className="section-label mb-4">Reviews</p>
        <h2 style={{ fontFamily: D, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, color: '#f0f0ec', letterSpacing: '0.04em', lineHeight: 1, marginBottom: '3rem' }}>
          What our clients say.
        </h2>
        {/* Reviews grid — empty, content to be added */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem', minHeight: '120px' }} />
      </div>
    </section>
  )
}
