'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const packageData = [
  {
    name: 'Business',
    tagline: 'Launch and grow with confidence.',
    desc: 'Everything a business needs to look professional, consistent, and memorable — from first impressions to everyday stationery.',
    items: ['Business cards', 'Flyers', 'Letterheads', 'Compliment slips'],
    price: 'From £49',
    href: '/contact',
  },
  {
    name: 'Events',
    tagline: 'Print that makes the moment.',
    desc: 'Complete print solutions for events of every size, from intimate gatherings to large-scale productions.',
    items: ['Posters', 'Banners', 'Flyers', 'Programmes'],
    price: 'From £79',
    href: '/contact',
  },
  {
    name: 'Salon & Beauty',
    tagline: 'Look the part, every day.',
    desc: 'Designed for salons, spas and beauty businesses who want to make a lasting impression on every client.',
    items: ['Loyalty cards', 'Appointment cards', 'Flyers', 'Gift vouchers'],
    price: 'From £59',
    href: '/contact',
  },
  {
    name: 'Wedding',
    tagline: 'Every detail, perfectly printed.',
    desc: "From save the dates to on-the-day stationery — your wedding print, beautifully produced and all in one place.",
    items: ['Invitations', 'Order of service', 'Place cards', 'Menus'],
    price: 'From £99',
    href: '/contact',
  },
]

function PackageRow({ pkg }: { pkg: typeof packageData[number] }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <button
        onClick={() => setExpanded(e => !e)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2.5rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '2rem',
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: '#ffffff', margin: 0, letterSpacing: '0.04em', lineHeight: 1.05 }}>
              {pkg.name}
            </h2>
            <span style={{ fontFamily: D, fontSize: '1.375rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em' }}>
              {pkg.price}
            </span>
          </div>
          <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.6 }}>
            {pkg.tagline}
          </p>
        </div>
        <span style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: '#ffffff',
          fontSize: '1.25rem',
          lineHeight: 1,
          fontWeight: 300,
          transition: 'transform 0.25s ease',
          transform: expanded ? 'rotate(45deg)' : 'none',
        }}>
          +
        </span>
      </button>

      <div style={{
        maxHeight: expanded ? 600 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.35s ease, opacity 0.3s ease',
        opacity: expanded ? 1 : 0,
      }}>
        <div style={{ paddingBottom: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          <div>
            <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
              {pkg.desc}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href={pkg.href} className="btn-primary" style={{ height: 44, minHeight: 44, fontSize: '0.8125rem' }}>
                Get a Quote
              </Link>
              <Link href={pkg.href} style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                height: 44, minHeight: 44, fontSize: '0.8125rem', fontFamily: '"Switzer", sans-serif',
                fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '0 1.75rem', borderRadius: 9999, textDecoration: 'none',
                border: '1.5px solid rgba(255,255,255,0.3)', color: '#ffffff', background: 'transparent',
              }}>
                Find Out More
              </Link>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: B, fontWeight: 600, fontSize: '0.6875rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 1.25rem' }}>
              What&apos;s included
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {pkg.items.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: B, fontSize: '1.125rem', fontWeight: 700, color: '#ffffff' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <path d="M5 8l2 2 4-4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PackagesPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        <section style={{ padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-site" style={{ textAlign: 'right' }}>
            <p className="section-label" style={{ marginBottom: '1.25rem' }}>Bundles</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              Print Packages.
            </h1>
            <p style={{ fontFamily: B, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', lineHeight: 1.65 }}>
              Everything you need, bundled together. Designed to save you time and give you consistency across every touchpoint.
            </p>
          </div>
        </section>

        <section style={{ padding: '0 0 6rem' }}>
          <div className="max-w-site">
            {packageData.map(pkg => (
              <PackageRow key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </section>

        <section style={{ padding: '5rem 0', background: '#111111', textAlign: 'center' }}>
          <div className="max-w-site">
            <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#ffffff', letterSpacing: '0.04em', margin: '0 0 1rem', lineHeight: 1.05 }}>
              Need something bespoke?
            </h2>
            <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.5)', margin: '0 0 2.5rem', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.65 }}>
              Can&apos;t find exactly what you need? Get in touch and we&apos;ll put together a custom package just for you.
            </p>
            <Link href="/contact" className="btn-primary">Build Your Own</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
