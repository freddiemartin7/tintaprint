import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const allProducts = [
  { title: 'Business Cards',              desc: 'Premium stocks, luxury finishes, from 250 cards. Matt, gloss, soft-touch, foil and embossing options.',          tags: ['Standard', 'Laminated', 'Premium'],          href: '/products/business-cards' },
  { title: 'Flyers & Leaflets',           desc: 'Single and double-sided prints across A6–A3 and DL. Folding options: half fold, tri-fold, z-fold.',              tags: ['A6 – A3 + DL', 'Folded options'],             href: '/products/flyers-leaflets' },
  { title: 'Brochures & Books',           desc: 'Saddle-stitched and perfect-bound catalogues, booklets and sales documents.',                                    tags: ['Saddle stitch', 'Perfect bound'],              href: '/products/brochures-books' },
  { title: 'Posters',                     desc: 'Vibrant large-format posters from A4 to A0 on premium coated stocks with matt, gloss or satin finish.',          tags: ['A4 – A0', 'Matt · Gloss · Satin'],            href: '/products/posters' },
  { title: 'Banners',                     desc: 'Roller banners, vinyl PVC banners, and alternative displays for events and outdoor environments.',               tags: ['Roller', 'Vinyl PVC', 'Flags'],               href: '/products/banners' },
  { title: 'Signs & Boards',              desc: 'Foamex, Dibond, Correx, and magnetic signs in any size — for indoor and outdoor use.',                          tags: ['Foamex · Dibond · Correx', 'Custom cut'],     href: '/products/signs-boards' },
  { title: 'Stickers',                    desc: 'Die-cut custom shapes, kiss-cut sheets, and roll stickers on gloss, clear or matte vinyl.',                     tags: ['Any shape', 'Waterproof available'],           href: '/products/stickers' },
  { title: 'Cards',                       desc: 'Greeting cards, thank you cards, and loyalty cards on premium board stocks.',                                    tags: ['Greeting', 'Thank You', 'Loyalty'],           href: '/products/cards' },
  { title: 'Letterheads & Comp Slips',   desc: 'Professional letterheads and compliment slips on premium paper. Essential business stationery.',                 tags: ['Letterheads', 'Compliment Slips'],            href: '/products/letterheads-compliment-slips' },
  { title: 'Orders of Service',           desc: 'Beautifully printed programmes for weddings, funerals, and special occasions.',                                  tags: ['Weddings', 'Funerals', 'Special Occasions'],  href: '/products/orders-of-service' },
  { title: 'Event Print',                 desc: 'Invitations, menus, place cards, table plans, and on-the-day signage — the full event suite.',                  tags: ['Invitations', 'Menus', 'Signage'],            href: '/products/events' },
  { title: 'Canvas Prints',               desc: 'Giclée canvas on solid timber frames, gallery or standard depth, ready to hang.',                               tags: ['Hand-stretched', 'Ready to hang'],            href: '/products/canvas-prints' },
]

export const metadata = {
  title: 'Products | Tinta Print',
  description: 'Browse all Tinta Print products — business cards, flyers, banners, signs, stickers, and more.',
}

export default function ProductsPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        <section style={{ padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, var(--accent-dim) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-site" style={{ position: 'relative', zIndex: 2 }}>
            <p className="section-label mb-4">What We Print</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              Products &{' '}
              <span style={{ color: 'var(--accent)', textShadow: '0 0 30px var(--accent-mid)' }}>Services.</span>
            </h1>
            <p style={{ fontFamily: B, fontWeight: 300, fontSize: '1.125rem', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', lineHeight: 1.65 }}>
              From a single business card to a full exhibition fit-out — we handle it all.
            </p>
          </div>
        </section>

        <section style={{ padding: '3rem 0 5rem' }}>
          <div className="max-w-site">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {allProducts.map(p => (
                <Link key={p.title} href={p.href} className="product-card" style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem', textDecoration: 'none' }}>
                  <h3 style={{ fontFamily: D, fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>{p.title}</h3>
                  <p style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, flexGrow: 1, marginBottom: '1.25rem' }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span key={tag} style={{ fontFamily: B, fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', border: '1px solid var(--accent-dim)', borderRadius: 4, padding: '0.25rem 0.625rem' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'rgba(0,0,0,0.3)', borderTop: '1px solid var(--accent-dim)', padding: '5rem 0', textAlign: 'center' }}>
          <div className="max-w-site">
            <h2 style={{ fontFamily: D, fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '2rem' }}>
              Ready to <span style={{ color: 'var(--accent)', textShadow: '0 0 30px var(--accent-mid)' }}>get started?</span>
            </h2>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
