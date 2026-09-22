'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const faqs = [
  {
    q: 'How long does delivery take?',
    a: 'Standard turnaround is 3–5 working days from artwork approval. Express next-day options are available on selected products — get in touch and we\'ll do our best to accommodate urgent requests.',
  },
  {
    q: 'Do you offer same day printing?',
    a: 'For urgent jobs please contact us directly and we\'ll advise what\'s possible. Same day is available on selected products subject to artwork being approved before midday.',
  },
  {
    q: 'What file format should I send?',
    a: 'PDF is our preferred format. Files should be set up in CMYK, 300dpi minimum, with 3mm bleed on all sides. We\'ll check your files before anything goes to print.',
  },
  {
    q: 'Can you design my artwork?',
    a: 'Yes — we offer a design and artwork service. Get in touch with your brief and we\'ll provide a quote.',
  },
  {
    q: 'My order arrived damaged — what do I do?',
    a: 'Contact us within 48 hours of receiving your order with photos of the damage. We\'ll arrange a reprint or refund as quickly as possible.',
  },
  {
    q: 'Do I get a proof before printing?',
    a: 'Digital proofs are available on request. Physical proofs can be arranged on larger orders — ask us when you get in touch.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'This varies by product. Business cards start from 100, flyers from 100. Some products have higher minimums — check the relevant product page or ask us.',
  },
  {
    q: 'Do you deliver outside the UK?',
    a: 'We currently deliver to UK mainland addresses only. Contact us for international enquiries.',
  },
  {
    q: 'What does POA mean?',
    a: 'POA stands for Price On Application. For these products, the price depends on your specific requirements — quantity, size, finish etc. Get in touch and we\'ll come back to you with a quote, usually the same day.',
  },
  {
    q: 'Can I collect my order?',
    a: 'We are a fully digital operation and do not have a customer-facing premises. All orders are delivered directly to you.',
  },
]

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <button
        onClick={onToggle}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1.5rem' }}
      >
        <span style={{ fontFamily: D, fontSize: '1.0625rem', fontWeight: 600, color: '#ffffff', letterSpacing: '0.02em', lineHeight: 1.3 }}>{q}</span>
        <span style={{ color: 'var(--accent)', fontWeight: 300, flexShrink: 0, lineHeight: 1, width: 28, height: 28, border: '1.5px solid var(--accent-mid)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="accordion-body" style={{ paddingBottom: '1.5rem', fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '700px' }}>
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 0 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, var(--accent-dim) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-site" style={{ position: 'relative', zIndex: 2 }}>
            <p className="section-label mb-5">Help</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              FAQs
            </h1>
            <p style={{ fontFamily: B, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.65 }}>
              Common questions about ordering, delivery, artwork, and more.
            </p>
          </div>
        </section>

        {/* FAQ list */}
        <section style={{ padding: '2rem 0 6rem' }}>
          <div className="max-w-site" style={{ maxWidth: 840, margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 0 6rem', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--accent-dim)', textAlign: 'center' }}>
          <div className="max-w-site">
            <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>
              Still have a question?
            </p>
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
