'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

export default function SwatchBookPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [address, setAddress] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/mnjevgqq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, company, address, _subject: 'Swatch Book Request' }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-site">
            <p className="section-label" style={{ marginBottom: '1.25rem' }}>Free Sample</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              Swatch Book.
            </h1>
            <p style={{ fontFamily: B, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', lineHeight: 1.65 }}>
              Order a free physical swatch book and feel the quality of our paper stocks and finishes before you commit to a print run.
            </p>
          </div>
        </section>

        {/* Description + Form */}
        <section style={{ padding: '5rem 0 6rem' }}>
          <div className="max-w-site">
            <div className="swatch-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

              <div>
                <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#ffffff', letterSpacing: '0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                  What&apos;s inside.
                </h2>
                <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                  Our swatch book includes samples of our most popular paper weights and finishes — from 130gsm silk through to 450gsm soft-touch laminated board — as well as examples of foiling, embossing and spot UV.
                </p>
                <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                  It&apos;s the best way to understand how your print will look and feel before you place your order.
                </p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {['Uncoated stocks', 'Silk and gloss coated', 'Soft-touch laminated board', 'Foiling examples', 'Emboss samples', 'Spot UV samples'].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#ffffff', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {status === 'success' ? (
                  <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '3rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>✓</div>
                    <h3 style={{ fontFamily: D, fontWeight: 700, fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.75rem' }}>On its way!</h3>
                    <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
                      Your swatch book is on its way! We&apos;ll dispatch it within 2 working days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: B, fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="form-field"
                        style={{ borderRadius: 8 }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: B, fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="form-field"
                        style={{ borderRadius: 8 }}
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: B, fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>
                        Company <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                        className="form-field"
                        style={{ borderRadius: 8 }}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: B, fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>
                        Delivery Address *
                      </label>
                      <textarea
                        required
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        className="form-field"
                        rows={4}
                        style={{ borderRadius: 8, resize: 'vertical' }}
                        placeholder={'Line 1\nLine 2\nCity\nPostcode'}
                      />
                    </div>
                    {status === 'error' && (
                      <p style={{ fontFamily: B, fontSize: '0.875rem', color: '#ff6b6b', margin: 0 }}>
                        Something went wrong. Please try again or email hello@tintaprint.uk.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary"
                      style={{ alignSelf: 'flex-start', opacity: status === 'loading' ? 0.6 : 1 }}
                    >
                      {status === 'loading' ? 'Sending…' : 'Send me a Swatch Book'}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .swatch-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
          `}</style>
        </section>

      </main>
      <Footer />
    </>
  )
}
