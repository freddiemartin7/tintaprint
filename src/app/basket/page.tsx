'use client'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

export default function BasketPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem', background: '#000000', minHeight: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 4rem)', padding: '4rem 1.5rem', textAlign: 'center' }}>
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginBottom: '2rem' }}>
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <h1 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#ffffff', margin: '0 0 1rem', letterSpacing: '0.04em', lineHeight: 1 }}>
            Your basket is empty.
          </h1>
          <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.45)', margin: '0 0 2.5rem', maxWidth: 380, lineHeight: 1.65 }}>
            You haven&apos;t added anything yet. Browse our range of products to get started.
          </p>
          <Link href="/products" className="btn-primary">
            Browse Products
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
