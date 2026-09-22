'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const products = [
  { title: 'Business Cards',     desc: 'Premium stocks, luxury finishes — matt, gloss, soft-touch, foil and embossing options.', href: '/products/business-cards' },
  { title: 'Flyers & Leaflets',  desc: 'High-impact prints across A6–A3 and DL. Half fold, tri-fold, z-fold options available.', href: '/products/flyers-leaflets' },
  { title: 'Brochures & Books',  desc: 'Saddle-stitched and perfect-bound catalogues, booklets and sales documents.', href: '/products/brochures-books' },
  { title: 'Posters',            desc: 'Vibrant large-format posters from A4 to A0 on premium coated stocks.', href: '/products/posters' },
  { title: 'Banners',            desc: 'Vinyl banners, roller banners, mesh and feather flags for events and outdoor use.', href: '/products/banners' },
  { title: 'Signs & Boards',     desc: 'Foamex, Dibond, Correx and acrylic boards in any size with custom finishing.', href: '/products/signs-boards' },
  { title: 'Stickers & Labels',  desc: 'Die-cut custom shapes, kiss-cut sheets, roll labels on gloss, clear or matt vinyl.', href: '/products/stickers-labels' },
  { title: 'Canvas Prints',      desc: 'Giclée canvas on solid timber frames, gallery or standard depth, ready to hang.', href: '/products/canvas-prints' },
  { title: 'Events & Weddings',  desc: 'Invitations, menus, place cards and on-the-day signage with foiling and letterpress.', href: '/products/events-weddings' },
]

export default function ProductsGrid() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([null, null, null])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const rows = rowRefs.current.filter(Boolean) as HTMLDivElement[]
    const observers: IntersectionObserver[] = []

    rows.forEach((row, rowIndex) => {
      const observer = new IntersectionObserver(
        entries => {
          if (!entries.some(e => e.isIntersecting)) return
          observer.disconnect()
          const cards = row.querySelectorAll<HTMLElement>('.product-card')
          cards.forEach((card, i) => {
            card.style.animationDelay = `${i * 150}ms`
            card.classList.add('card-animate')
          })
        },
        { threshold: 0.15 }
      )
      observer.observe(row)
      observers.push(observer)
      // Prevent flash — hide cards until observer fires
      const cards = row.querySelectorAll<HTMLElement>('.product-card')
      cards.forEach(c => { c.style.opacity = '0' })
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const rows = [products.slice(0, 3), products.slice(3, 6), products.slice(6, 9)]

  return (
    <section id="products" className="grain-overlay" style={{ background: 'transparent', padding: '5rem 0 6rem' }}>
      <div className="max-w-site">
        <p className="section-label mb-4">What We Print</p>
        <h2 style={{ fontFamily: D, fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '3rem', lineHeight: 1 }}>
          Products & Services
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {rows.map((row, ri) => (
            <div
              key={ri}
              ref={el => { rowRefs.current[ri] = el }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', alignItems: 'stretch' }}
            >
              {row.map(p => (
                <Link
                  key={p.title}
                  href={p.href}
                  className="product-card"
                  style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem', textDecoration: 'none' }}
                >
                  <h3 style={{ fontFamily: D, fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '0.875rem', lineHeight: 1.15 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, flexGrow: 1 }}>
                    {p.desc}
                  </p>
                  <div className="flex items-center gap-2 mt-5" style={{ color: '#ffffff', fontFamily: B, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Learn more
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
