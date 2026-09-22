'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import GeometricBackground from '@/components/ui/GeometricBackground'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const FORMSPREE = 'https://formspree.io/f/mnjevgqq'

const packageTypes = [
  {
    id: 'business',
    title: 'Business Package',
    description: 'Everything a business needs to get noticed — from launch essentials to full brand collateral.',
    items: ['Business Cards', 'Letterheads', 'Flyers & Leaflets', 'Banners', 'Posters', 'Brochures'],
    icon: '◈',
  },
  {
    id: 'events',
    title: 'Event Package',
    description: 'All your event print in one place — from intimate gatherings to large-scale celebrations.',
    items: ['Invitations', 'Menus', 'Place Cards', 'Signage', 'Order of Service', 'Table Plans'],
    icon: '◇',
  },
  {
    id: 'salon',
    title: 'Salon Package',
    description: 'Professional print for salons, spas and beauty businesses that want to stand out.',
    items: ['Business Cards', 'Loyalty Cards', 'Flyers', 'Posters', 'Banners', 'Price Lists'],
    icon: '○',
  },
  {
    id: 'wedding',
    title: 'Wedding Package',
    description: 'Beautiful print for your perfect day — from save the dates to on-the-day signage.',
    items: ['Save the Dates', 'Invitations', 'Order of Service', 'Menus', 'Place Cards', 'Seating Plans', 'Signage'],
    icon: '◎',
  },
]

const extraOptions = [
  { id: 'design', label: 'Design & Artwork service' },
  { id: 'preflight', label: 'File check & preflight' },
  { id: 'urgent', label: 'Urgent / express turnaround' },
  { id: 'multi-delivery', label: 'Delivery to multiple addresses' },
]

const hearAboutOptions = [
  'Google',
  'Social Media',
  'Referral',
  'Returning customer',
  'Other',
]

interface FormData {
  packageType: string
  quantities: Record<string, string>
  extras: string[]
  otherRequirements: string
  name: string
  company: string
  email: string
  phone: string
  hearAbout: string
}

const defaultForm: FormData = {
  packageType: '',
  quantities: {},
  extras: [],
  otherRequirements: '',
  name: '',
  company: '',
  email: '',
  phone: '',
  hearAbout: '',
}

export default function BuilderPackagePage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>(defaultForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const totalSteps = 5
  const selectedPackage = packageTypes.find(p => p.id === form.packageType)

  const toggleExtra = (id: string) => {
    setForm(prev => ({
      ...prev,
      extras: prev.extras.includes(id)
        ? prev.extras.filter(e => e !== id)
        : [...prev.extras, id],
    }))
  }

  const canProceed = () => {
    if (step === 1) return form.packageType !== ''
    if (step === 4) return form.name.trim() !== '' && form.email.trim() !== ''
    return true
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    const pkg = packageTypes.find(p => p.id === form.packageType)
    const packageLabel = pkg?.title ?? form.packageType
    const quantitySummary = (pkg?.items ?? [])
      .map(item => form.quantities[item] ? `${item}: ${form.quantities[item]}` : null)
      .filter(Boolean)
      .join('\n')
    const extraLabels = form.extras
      .map(id => extraOptions.find(e => e.id === id)?.label ?? id)
      .join(', ')

    const body = new URLSearchParams({
      name: form.name,
      email: form.email,
      company: form.company,
      phone: form.phone,
      'how-did-you-hear': form.hearAbout,
      'package-type': packageLabel,
      quantities: quantitySummary || 'Not specified',
      extras: extraLabels || 'None',
      'other-requirements': form.otherRequirements || 'None',
      _subject: `Build Your Own Package Request — ${form.name}`,
    })

    try {
      await fetch(FORMSPREE, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <>
        <Nav />
        <main style={{ paddingTop: '4rem', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <div className="max-w-site" style={{ textAlign: 'center', padding: '6rem 0' }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--accent-dim)', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 16l8 8 12-14" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Thanks, {form.name.split(' ')[0]}!
            </h1>
            <p style={{ fontFamily: B, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              We&apos;ve received your package request and will come back to you with a tailored quote within 1 working day.
            </p>
            <Link href="/" className="btn-outline">Back to Home</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem', position: 'relative', overflow: 'hidden' }}>
        <GeometricBackground />

        <section style={{ padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden', zIndex: 1 }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, var(--accent-dim) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-site" style={{ position: 'relative', zIndex: 2 }}>
            <nav className="breadcrumb">
              <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
              <Link href="/packages">Packages</Link><span className="breadcrumb-sep">›</span>
              <span style={{ color: 'rgba(255,255,255,0.55)' }}>Build Your Own</span>
            </nav>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.25rem' }}>
              Build Your Own Package
            </h1>
            <p style={{ fontFamily: B, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', lineHeight: 1.65 }}>
              Not every business fits a pre-built package. Build yours in 5 steps and we&apos;ll come back with a tailored quote.
            </p>
          </div>
        </section>

        <section style={{ padding: '1rem 0 6rem', position: 'relative', zIndex: 1 }}>
          <div className="max-w-site" style={{ maxWidth: 860, marginLeft: 'auto', marginRight: 'auto', padding: '0 1.5rem' }}>

            {/* Progress bar */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.625rem' }}>
                <span style={{ fontFamily: B, fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Step {step} of {totalSteps}
                </span>
                <span style={{ fontFamily: B, fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
                  {Math.round((step / totalSteps) * 100)}% complete
                </span>
              </div>
              <div style={{ height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }}>
                <div style={{ height: '100%', width: `${(step / totalSteps) * 100}%`, background: 'var(--accent)', borderRadius: 2, transition: 'width 0.4s ease' }} />
              </div>
            </div>

            <div className="wizard-step">

              {/* Step 1 — Package type selection */}
              {step === 1 && (
                <div>
                  <style>{`
                    @media (max-width: 640px) { .pkg-type-grid { grid-template-columns: 1fr !important; } }
                  `}</style>
                  <h2 style={{ fontFamily: D, fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                    What type of package are you looking for?
                  </h2>
                  <p style={{ fontFamily: B, fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', marginBottom: '2rem' }}>
                    Choose the category that best fits — we&apos;ll build a tailored quote around it.
                  </p>
                  <div className="pkg-type-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
                    {packageTypes.map(pkg => {
                      const selected = form.packageType === pkg.id
                      return (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() => setForm(prev => ({ ...prev, packageType: pkg.id, quantities: {} }))}
                          style={{
                            textAlign: 'left',
                            padding: 36,
                            background: selected ? 'var(--accent-dim)' : 'rgba(255,255,255,0.02)',
                            border: `1px solid ${selected ? 'var(--accent)' : 'rgba(255,255,255,0.07)'}`,
                            borderRadius: 16,
                            cursor: 'pointer',
                            transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                            boxShadow: selected ? '0 0 32px var(--accent-mid)' : 'none',
                          }}
                          onMouseEnter={e => {
                            if (form.packageType !== pkg.id) {
                              const el = e.currentTarget as HTMLButtonElement
                              el.style.background = 'rgba(255,255,255,0.04)'
                              el.style.borderColor = 'rgba(255,255,255,0.14)'
                              el.style.transform = 'translateY(-2px)'
                            }
                          }}
                          onMouseLeave={e => {
                            if (form.packageType !== pkg.id) {
                              const el = e.currentTarget as HTMLButtonElement
                              el.style.background = 'rgba(255,255,255,0.02)'
                              el.style.borderColor = 'rgba(255,255,255,0.07)'
                              el.style.transform = 'none'
                            }
                          }}
                        >
                          <div style={{ fontSize: 28, color: 'var(--accent)', opacity: 0.7, marginBottom: 20 }}>{pkg.icon}</div>
                          <div style={{ fontFamily: D, fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 10 }}>{pkg.title}</div>
                          <p style={{ fontFamily: B, fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: 20 }}>{pkg.description}</p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                            {pkg.items.map(item => (
                              <span key={item} style={{
                                fontFamily: B, fontSize: 11, fontWeight: 500,
                                color: 'var(--accent)',
                                border: '1px solid var(--accent-mid)',
                                borderRadius: 9999,
                                padding: '4px 12px',
                                background: 'var(--accent-dim)',
                              }}>{item}</span>
                            ))}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Step 2 — Quantities (items from selected package) */}
              {step === 2 && selectedPackage && (
                <div>
                  <h2 style={{ fontFamily: D, fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                    Tell us your quantities
                  </h2>
                  <p style={{ fontFamily: B, fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', marginBottom: '2rem' }}>
                    Enter approximate quantities for each item — leave blank if you don&apos;t need it.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {selectedPackage.items.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '1rem 1.25rem' }}>
                        <span style={{ fontFamily: B, fontSize: '0.875rem', fontWeight: 500, color: '#ffffff', flex: 1 }}>{item}</span>
                        <input
                          type="number"
                          min="0"
                          placeholder="Qty"
                          value={form.quantities[item] || ''}
                          onChange={e => setForm(prev => ({ ...prev, quantities: { ...prev.quantities, [item]: e.target.value } }))}
                          style={{
                            width: 100,
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: 8,
                            color: '#fff',
                            fontFamily: B,
                            fontSize: '0.9rem',
                            padding: '0.5rem 0.75rem',
                            outline: 'none',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3 — Any extras? */}
              {step === 3 && (
                <div>
                  <h2 style={{ fontFamily: D, fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                    Any extras?
                  </h2>
                  <p style={{ fontFamily: B, fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', marginBottom: '2rem' }}>
                    Optional — select anything that applies.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    {extraOptions.map(extra => {
                      const checked = form.extras.includes(extra.id)
                      return (
                        <button
                          key={extra.id}
                          type="button"
                          onClick={() => toggleExtra(extra.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '1rem 1.25rem',
                            background: checked ? 'var(--accent-dim)' : 'rgba(0,0,0,0.3)',
                            border: `1.5px solid ${checked ? 'var(--accent)' : 'rgba(255,255,255,0.08)'}`,
                            borderRadius: 10,
                            cursor: 'pointer',
                            transition: 'border-color 0.2s, background 0.2s',
                            textAlign: 'left',
                          }}
                        >
                          <div style={{
                            width: 20, height: 20,
                            borderRadius: 5,
                            border: `1.5px solid ${checked ? 'var(--accent)' : 'rgba(255,255,255,0.25)'}`,
                            background: checked ? 'var(--accent)' : 'transparent',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexShrink: 0,
                          }}>
                            {checked && (
                              <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                                <path d="M1 4l3 3 6-6" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                          <span style={{ fontFamily: B, fontSize: '0.9rem', color: checked ? '#ffffff' : 'rgba(255,255,255,0.6)' }}>{extra.label}</span>
                        </button>
                      )
                    })}
                  </div>
                  <div>
                    <label style={{ fontFamily: B, fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                      Any other requirements
                    </label>
                    <textarea
                      value={form.otherRequirements}
                      onChange={e => setForm(prev => ({ ...prev, otherRequirements: e.target.value }))}
                      placeholder="Tell us anything else we should know..."
                      rows={4}
                      className="form-field"
                      style={{ resize: 'vertical', minHeight: 100 }}
                    />
                  </div>
                </div>
              )}

              {/* Step 4 — Your details */}
              {step === 4 && (
                <div>
                  <h2 style={{ fontFamily: D, fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                    Your details
                  </h2>
                  <p style={{ fontFamily: B, fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', marginBottom: '2rem' }}>
                    We&apos;ll use these to get your quote back to you.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { key: 'name', label: 'Name *', placeholder: 'Your full name' },
                      { key: 'company', label: 'Company (optional)', placeholder: 'Your company name' },
                      { key: 'email', label: 'Email *', placeholder: 'your@email.com' },
                      { key: 'phone', label: 'Phone (optional)', placeholder: 'Your phone number' },
                    ].map(field => (
                      <div key={field.key}>
                        <label style={{ fontFamily: B, fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                          {field.label}
                        </label>
                        <input
                          type={field.key === 'email' ? 'email' : field.key === 'phone' ? 'tel' : 'text'}
                          placeholder={field.placeholder}
                          value={form[field.key as keyof FormData] as string}
                          onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                          className="form-field"
                        />
                      </div>
                    ))}
                    <div>
                      <label style={{ fontFamily: B, fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                        How did you hear about us
                      </label>
                      <select
                        value={form.hearAbout}
                        onChange={e => setForm(prev => ({ ...prev, hearAbout: e.target.value }))}
                        className="form-field"
                      >
                        <option value="">Select an option</option>
                        {hearAboutOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5 — Review & Send */}
              {step === 5 && (
                <div>
                  <h2 style={{ fontFamily: D, fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                    Review & Send
                  </h2>
                  <p style={{ fontFamily: B, fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', marginBottom: '2rem' }}>
                    Your bespoke package request will be reviewed by our team and we&apos;ll come back to you with a tailored quote within 1 working day.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                    {[
                      {
                        label: 'Package Type',
                        value: packageTypes.find(p => p.id === form.packageType)?.title ?? '—',
                      },
                      {
                        label: 'Quantities',
                        value: selectedPackage
                          ? selectedPackage.items
                              .map(item => form.quantities[item] ? `${item}: ${form.quantities[item]}` : null)
                              .filter(Boolean)
                              .join(', ') || 'Not specified'
                          : 'Not specified',
                      },
                      {
                        label: 'Extras',
                        value: form.extras.map(id => extraOptions.find(e => e.id === id)?.label).join(', ') || 'None',
                      },
                      { label: 'Name', value: form.name },
                      { label: 'Email', value: form.email },
                      { label: 'Company', value: form.company || '—' },
                    ].map(row => (
                      <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '1rem', padding: '0.875rem 1.25rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10 }}>
                        <span style={{ fontFamily: B, fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{row.label}</span>
                        <span style={{ fontFamily: B, fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>{row.value}</span>
                      </div>
                    ))}
                    {form.otherRequirements && (
                      <div style={{ padding: '0.875rem 1.25rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10 }}>
                        <span style={{ fontFamily: B, fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.375rem' }}>Other requirements</span>
                        <span style={{ fontFamily: B, fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>{form.otherRequirements}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>

            {/* Navigation buttons */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', marginTop: '2.5rem' }}>
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(s => s - 1)}
                  className="btn-outline"
                  style={{ flex: 1 }}
                >
                  ← Back
                </button>
              ) : (
                <div style={{ flex: 1 }} />
              )}

              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={() => setStep(s => s + 1)}
                  disabled={!canProceed()}
                  className="btn-primary"
                  style={{ flex: 1, opacity: canProceed() ? 1 : 0.4, cursor: canProceed() ? 'pointer' : 'not-allowed' }}
                >
                  Next →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="btn-primary"
                  style={{ flex: 1, opacity: submitting ? 0.7 : 1 }}
                >
                  {submitting ? 'Sending...' : 'Send My Request →'}
                </button>
              )}
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
