'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import GeometricBackground from '@/components/ui/GeometricBackground'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const productOptions = [
  'Business Cards', 'Flyers & Leaflets', 'Brochures & Books', 'Posters',
  'Stickers & Labels', 'Vinyl Banners', 'Roller Banners', 'Canvas Prints',
  'Signs & Boards', 'Window Graphics', 'Exhibition Panels', 'Wedding Invitations',
  'Event Stationery', 'Event Signage', 'Design & Artwork', 'Finishing & Binding', 'Something Else',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('https://formspree.io/f/mnjevgqq', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) setSubmitted(true)
    } catch { /* silently fail */ } finally { setSubmitting(false) }
  }

  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem', position: 'relative', overflow: 'hidden' }}>
        <GeometricBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="grain-overlay" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '5rem 0 4rem' }}>
          <div className="max-w-site">
            <p className="section-label mb-4">Contact Us</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95 }}>
              Get a <span style={{ color: '#ffffff',   }}>Quote.</span>
            </h1>
          </div>
        </div>

        <div className="max-w-site py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left */}
            <div className="lg:col-span-2">
              <h2 style={{ fontFamily: D, fontSize: '2.25rem', fontWeight: 700, color: '#f0f0ec', letterSpacing: '0.04em', marginBottom: '2rem' }}>Get in touch.</h2>

              <div style={{ borderBottom: '1px solid rgba(240,240,236,0.06)', paddingBottom: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginTop: 2, flexShrink: 0, opacity: 0.35 }}>
                  <rect x="1" y="4" width="18" height="13" rx="2" stroke="#f0f0ec" strokeWidth="1.5"/>
                  <path d="M1 7l9 6 9-6" stroke="#f0f0ec" strokeWidth="1.5"/>
                </svg>
                <div>
                  <p style={{ fontFamily: B, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,240,236,0.3)', fontWeight: 500, marginBottom: '0.25rem' }}>Email</p>
                  <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(240,240,236,0.35)' }}>Coming soon</p>
                </div>
              </div>

              <div style={{ borderBottom: '1px solid rgba(240,240,236,0.06)', paddingBottom: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginTop: 2, flexShrink: 0, opacity: 0.35 }}>
                  <path d="M3 2h4l2 5-2.5 1.5a11 11 0 0 0 5 5L13 11l5 2v4a1 1 0 0 1-1 1C6 18 2 7 2 3a1 1 0 0 1 1-1z" stroke="#f0f0ec" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <p style={{ fontFamily: B, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,240,236,0.3)', fontWeight: 500, marginBottom: '0.25rem' }}>Phone</p>
                  <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(240,240,236,0.35)' }}>Coming soon</p>
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)', padding: '1.25rem' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#ffffff', boxShadow: '0 0 8px rgba(255,255,255,0.18)', flexShrink: 0 }} />
                  <p style={{ fontFamily: B, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', fontWeight: 700 }}>Response Times</p>
                </div>
                <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(240,240,236,0.6)', lineHeight: 1.6 }}>
                  We aim to respond the same working day.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div style={{ padding: '4rem 2rem', border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '400px' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 0 20px rgba(255,255,255,0.06)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5 9-9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: D, fontSize: '2rem', fontWeight: 700, color: '#f0f0ec', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>Message Sent!</h3>
                  <p style={{ fontFamily: B, color: 'rgba(240,240,236,0.55)', maxWidth: '360px', lineHeight: 1.6 }}>
                    We&apos;ll be in touch — usually the same day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input type="hidden" name="_subject" value="New Quote Enquiry — Tinta Print" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={{ display: 'block', fontFamily: B, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(240,240,236,0.45)', fontWeight: 600, marginBottom: '0.5rem' }}>Your Name *</label>
                      <input type="text" name="name" required placeholder="Jane Smith" className="form-field" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: B, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(240,240,236,0.45)', fontWeight: 600, marginBottom: '0.5rem' }}>Company</label>
                      <input type="text" name="company" placeholder="Acme Ltd" className="form-field" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={{ display: 'block', fontFamily: B, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(240,240,236,0.45)', fontWeight: 600, marginBottom: '0.5rem' }}>Email Address *</label>
                      <input type="email" name="email" required placeholder="jane@acme.com" className="form-field" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: B, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(240,240,236,0.45)', fontWeight: 600, marginBottom: '0.5rem' }}>Phone Number</label>
                      <input type="tel" name="phone" placeholder="+44 7700 000000" className="form-field" />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: B, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(240,240,236,0.45)', fontWeight: 600, marginBottom: '0.5rem' }}>What Do You Need?</label>
                    <select name="product" className="form-field" style={{ cursor: 'pointer' }}>
                      <option value="">Select a product or service…</option>
                      {productOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: B, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(240,240,236,0.45)', fontWeight: 600, marginBottom: '0.5rem' }}>Tell Us More *</label>
                    <textarea name="message" required rows={5} placeholder="Quantities, sizes, turnaround needed, any special requirements…" className="form-field" style={{ resize: 'vertical', minHeight: '120px' }} />
                  </div>

                  <button type="submit" disabled={submitting} className="btn-primary" style={{ width: '100%', opacity: submitting ? 0.7 : 1 }}>
                    {submitting ? 'Sending…' : 'Send Enquiry →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
