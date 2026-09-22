'use client'
import { useState, useRef } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const tabs = ['Business Cards', 'Flyers', 'Posters', 'Stickers'] as const
type Tab = typeof tabs[number]

const sizeOptions: Record<Tab, string[]> = {
  'Business Cards': ['Standard (85×55mm)', 'Square (55×55mm)', 'Mini (70×28mm)'],
  'Flyers':         ['A6', 'A5', 'A4', 'A3'],
  'Posters':        ['A4', 'A3', 'A2', 'A1', 'A0'],
  'Stickers':       ['A6 Sheet', 'A5 Sheet', 'A4 Sheet', 'Custom'],
}

const quantities = ['25', '50', '100', '250', '500', '1000']

export default function QuickBuyPage() {
  const [activeTab, setActiveTab] = useState<Tab>('Business Cards')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [size, setSize] = useState('')
  const [qty, setQty] = useState('')
  const [notes, setNotes] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const fileRef = useRef<HTMLInputElement>(null)

  const resetForm = () => {
    setName(''); setEmail(''); setSize(''); setQty(''); setNotes(''); setFile(null)
    if (fileRef.current) fileRef.current.value = ''
  }

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab)
    setSize('')
    setStatus('idle')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const fd = new FormData()
      fd.append('name', name)
      fd.append('email', email)
      fd.append('product', activeTab)
      fd.append('size', size)
      fd.append('quantity', qty)
      fd.append('notes', notes)
      fd.append('_subject', `Quick Buy — ${activeTab}`)
      if (file) fd.append('artwork', file)

      const res = await fetch('https://formspree.io/f/mnjevgqq', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      })
      if (res.ok) {
        setStatus('success')
        resetForm()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const selectStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#ffffff',
    fontFamily: B,
    fontSize: '0.9375rem',
    padding: '0.875rem 1rem',
    outline: 'none',
    WebkitAppearance: 'none',
    borderRadius: 8,
  }

  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 0 3rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-site">
            <p className="section-label" style={{ marginBottom: '1.25rem' }}>Fast Ordering</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              Quick Buy.
            </h1>
            <p style={{ fontFamily: B, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '520px', lineHeight: 1.65 }}>
              Order our most popular products in just a few clicks. Upload your artwork, choose your spec, and we&apos;ll handle the rest.
            </p>
          </div>
        </section>

        {/* Tab bar */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: '#000000', position: 'sticky', top: 64, zIndex: 50 }}>
          <div className="max-w-site" style={{ display: 'flex', gap: 0, overflowX: 'auto' }}>
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: activeTab === tab ? '2px solid #ffffff' : '2px solid transparent',
                  cursor: 'pointer',
                  fontFamily: B,
                  fontWeight: activeTab === tab ? 600 : 400,
                  fontSize: '0.9375rem',
                  color: activeTab === tab ? '#ffffff' : 'rgba(255,255,255,0.45)',
                  padding: '1rem 1.5rem',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.15s',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <section style={{ padding: '4rem 0 6rem' }}>
          <div className="max-w-site">
            {status === 'success' ? (
              <div style={{ maxWidth: 560, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '3rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>✓</div>
                <h3 style={{ fontFamily: D, fontWeight: 700, fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.75rem' }}>Order received!</h3>
                <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '2rem' }}>
                  We&apos;ve got your order and we&apos;ll be in touch shortly to confirm your artwork and turnaround.
                </p>
                <button className="btn-outline" style={{ height: 44, minHeight: 44, fontSize: '0.8125rem' }} onClick={() => setStatus('idle')}>
                  Place Another Order
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', maxWidth: 900 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: '1.375rem', color: '#ffffff', letterSpacing: '0.04em', margin: 0 }}>
                    {activeTab}
                  </h2>

                  <div>
                    <label style={{ display: 'block', fontFamily: B, fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>
                      Size *
                    </label>
                    <select required value={size} onChange={e => setSize(e.target.value)} style={selectStyle}>
                      <option value="" style={{ background: '#000' }}>Select a size</option>
                      {sizeOptions[activeTab].map(s => (
                        <option key={s} value={s} style={{ background: '#000' }}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: B, fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>
                      Quantity *
                    </label>
                    <select required value={qty} onChange={e => setQty(e.target.value)} style={selectStyle}>
                      <option value="" style={{ background: '#000' }}>Select a quantity</option>
                      {quantities.map(q => (
                        <option key={q} value={q} style={{ background: '#000' }}>{q}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: B, fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>
                      Artwork File
                    </label>
                    <div style={{ border: '1px dashed rgba(255,255,255,0.2)', borderRadius: 8, padding: '1.25rem', textAlign: 'center', cursor: 'pointer' }}
                      onClick={() => fileRef.current?.click()}>
                      <p style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                        {file ? file.name : 'Click to upload PDF or image'}
                      </p>
                      <p style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', margin: '0.375rem 0 0' }}>
                        PDF preferred · 300dpi · 3mm bleed
                      </p>
                    </div>
                    <input
                      ref={fileRef}
                      type="file"
                      accept="application/pdf,image/*"
                      onChange={e => setFile(e.target.files?.[0] ?? null)}
                      style={{ display: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: '1.375rem', color: '#ffffff', letterSpacing: '0.04em', margin: 0 }}>
                    Your Details
                  </h2>

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
                      Notes
                    </label>
                    <textarea
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      className="form-field"
                      rows={4}
                      style={{ borderRadius: 8, resize: 'vertical' }}
                      placeholder="Any special requirements, finishes, or delivery instructions..."
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
                    {status === 'loading' ? 'Submitting…' : 'Place Order'}
                  </button>
                </div>
              </form>
            )}
          </div>
          <style>{`
            @media (max-width: 768px) { form.quick-form { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

      </main>
      <Footer />
    </>
  )
}
