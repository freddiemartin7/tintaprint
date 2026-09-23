'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const products = ['Business Cards','Flyers','Posters','Banners','Brochures','Stickers','Signage','Digital Products','Installation','Design & Artwork','Other']
const enquiryTypes = ['General Enquiry','Quote Request','Order Update','Design Query','Partnership','Complaint','Other']

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [form, setForm] = useState({ name:'', ref:'', email:'', phone:'', product:'', enquiry:'', requirements:'' })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/mnjevgqq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Contact — ${form.enquiry || 'New Enquiry'}` }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm({ name:'', ref:'', email:'', phone:'', product:'', enquiry:'', requirements:'' })
    } catch { setStatus('error') }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)',
    color: '#ffffff', fontFamily: B, fontSize: '0.9375rem', padding: '0.875rem 1rem',
    outline: 'none', borderRadius: 8,
  }
  const selectStyle: React.CSSProperties = { ...inputStyle, WebkitAppearance: 'none' as const }
  const lbl = (text: string) => (
    <label style={{ display: 'block', fontFamily: B, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.45)', marginBottom: '0.5rem' }}>{text}</label>
  )

  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem', background: '#000000', minHeight: '100vh' }}>

        <div style={{ padding: '5rem 0 3rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-site" style={{ textAlign: 'right' }}>
            <p className="section-label" style={{ marginBottom: '1rem' }}>Get in Touch</p>
            <h1 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(3rem, 8vw, 7rem)', color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, margin: 0 }}>
              Contact Us.
            </h1>
          </div>
        </div>

        <div style={{ padding: '3rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)', background: '#0a0a0a' }}>
          <div className="max-w-site">
            <p style={{ fontFamily: B, fontWeight: 600, fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.5rem' }}>Our Details</p>
            <div className="details-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
              {[
                { label: 'Hours', val: '9am – 5pm' },
                { label: 'Days', val: 'Monday – Friday' },
                { label: 'Email', val: 'hello@tintaprint.uk' },
                { label: 'Phone', val: 'Placeholder' },
              ].map(d => (
                <div key={d.label}>
                  <p style={{ fontFamily: B, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', margin: '0 0 0.375rem' }}>{d.label}</p>
                  <p style={{ fontFamily: D, fontWeight: 700, fontSize: '1.0625rem', color: '#ffffff', margin: 0, letterSpacing: '0.04em' }}>{d.val}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media (max-width: 640px) { .details-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
        </div>

        <div style={{ padding: '4rem 0 6rem' }}>
          <div className="max-w-site">
            <p style={{ fontFamily: B, fontWeight: 600, fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '2.5rem' }}>Your Contact Information &amp; Request</p>

            {status === 'success' ? (
              <div style={{ maxWidth: 560, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '3rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                <h3 style={{ fontFamily: D, fontWeight: 700, fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.75rem' }}>Message sent!</h3>
                <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '2rem' }}>
                  We&apos;ll be in touch within one working day.
                </p>
                <button className="btn-outline" style={{ height: 44, minHeight: 44, fontSize: '0.8125rem' }} onClick={() => setStatus('idle')}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ maxWidth: 780 }}>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>{lbl('Name *')}<input required type="text" value={form.name} onChange={set('name')} style={inputStyle} placeholder="Your full name" /></div>
                  <div>{lbl('Reference')}<input type="text" value={form.ref} onChange={set('ref')} style={inputStyle} placeholder="Order or quote ref (optional)" /></div>
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>{lbl('Email *')}<input required type="email" value={form.email} onChange={set('email')} style={inputStyle} placeholder="you@example.com" /></div>
                  <div>{lbl('Phone')}<input type="tel" value={form.phone} onChange={set('phone')} style={inputStyle} placeholder="+44..." /></div>
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>{lbl('Product / Service')}<select value={form.product} onChange={set('product')} style={selectStyle}><option value="">Select…</option>{products.map(p=><option key={p} value={p} style={{background:'#000'}}>{p}</option>)}</select></div>
                  <div>{lbl('Enquiry Type')}<select value={form.enquiry} onChange={set('enquiry')} style={selectStyle}><option value="">Select…</option>{enquiryTypes.map(p=><option key={p} value={p} style={{background:'#000'}}>{p}</option>)}</select></div>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  {lbl('Requirements')}
                  <textarea value={form.requirements} onChange={set('requirements')} rows={6} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Tell us about your print requirements, quantities, and any special finishes…" />
                </div>
                {status === 'error' && <p style={{ fontFamily: B, fontSize: '0.875rem', color: '#ff6b6b', marginBottom: '1rem' }}>Something went wrong. Please try again or email hello@tintaprint.uk.</p>}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="submit" disabled={status === 'loading'} className="btn-primary" style={{ opacity: status === 'loading' ? 0.6 : 1 }}>
                    {status === 'loading' ? 'Sending…' : 'Send Message'}
                  </button>
                </div>
                <p style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '1.5rem', lineHeight: 1.6 }}>
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.4)' }}>Privacy Policy</a>{' '}
                  and{' '}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.4)' }}>Terms of Service</a>{' '}
                  apply.
                </p>
              </form>
            )}
          </div>
          <style>{`@media (max-width: 640px) { .form-row { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </main>
      <Footer />
    </>
  )
}
