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
      <main style={{ background: '#000000', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 1.5rem' }}>
        <svg style={{ width: 64, height: 64, color: 'rgba(255,255,255,0.2)', marginBottom: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-1.421 2.032-2.982 2.032-4.5 0-.797-.224-1.545-.618-2.183M7.5 14.25L5.106 5.272M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <h1 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(1.75rem, 5vw, 3rem)', color: '#ffffff', margin: '0 0 0.75rem', letterSpacing: '0.04em', lineHeight: 1 }}>
          Your basket is empty.
        </h1>
        <p style={{ fontFamily: B, fontSize: '1rem', color: 'rgba(255,255,255,0.45)', margin: '0 0 2rem', maxWidth: 360, lineHeight: 1.65 }}>
          Browse our products to get started.
        </p>
        <Link href="/products" style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          height: 48, padding: '0 1.75rem', borderRadius: 9999,
          border: '1.5px solid rgba(255,255,255,0.5)', color: '#ffffff',
          background: 'transparent', textDecoration: 'none',
          fontFamily: B, fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>Browse Products</Link>
      </main>
      <Footer />
    </>
  )
}
