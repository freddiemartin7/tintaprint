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
    tiers: ['Launch', 'Grow', 'Tinta'],
    price: 'From £49',
    href: '/packages/business',
  },
  {
    name: 'Events',
    tagline: 'Print that makes the moment.',
    tiers: ['Essential', 'Premium', 'Deluxe'],
    price: 'From £79',
    href: '/packages/events',
  },
  {
    name: 'Salon & Beauty',
    tagline: 'Look the part, every day.',
    tiers: ['Essential', 'Premium', 'Deluxe'],
    price: 'From £59',
    href: '/packages/salon',
  },
  {
    name: 'Wedding',
    tagline: 'Every detail, perfectly printed.',
    tiers: ['Essential', 'Premium', 'Deluxe'],
    price: 'From £99',
    href: '/packages/wedding',
  },
  {
    name: 'Party',
    tagline: 'Make every occasion memorable.',
    tiers: ['Essential', 'Premium', 'Deluxe'],
    price: 'From £49',
    href: '/packages/party',
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
          alignItems: 'flex-start',
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
          <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: '#ffffff', margin: '0 0 0.5rem', letterSpacing: '0.04em', lineHeight: 1.05 }}>
            {pkg.name}
          </h2>
          <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.6, textAlign: 'right' }}>
            {pkg.tagline}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexShrink: 0, paddingTop: '0.25rem' }}>
          <span style={{ fontFamily: D, fontSize: '1.375rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
            {pkg.price}
          </span>
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
        </div>
      </button>

      <div style={{
        maxHeight: expanded ? 400 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.35s ease, opacity 0.3s ease',
        opacity: expanded ? 1 : 0,
      }}>
        <div style={{ paddingBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {pkg.tiers.map(tier => (
              <p key={tier} style={{ fontFamily: B, fontWeight: 700, fontSize: '1.25rem', color: '#ffffff', margin: 0, lineHeight: 1.3 }}>
                {tier}
              </p>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ height: 44, minHeight: 44, fontSize: '0.8125rem' }}>
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
