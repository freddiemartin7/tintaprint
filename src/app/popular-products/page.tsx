import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

const popularProducts = [
  {
    title: 'Business Cards',
    desc: 'Your first impression, perfected. Premium stocks from standard silk through to 700gsm luxury cards with foil and soft-touch finishes.',
    href: '/products/business-cards',
  },
  {
    title: 'Flyers & Leaflets',
    desc: 'High-impact prints across A6–A3 and DL. Standard, folded, and premium options for every campaign and budget.',
    href: '/products/flyers-leaflets',
  },
  {
    title: 'Roller Banners',
    desc: 'The essential event and exhibition display. Available in standard and wide formats, with carry case and hardware included.',
    href: '/products/banners',
  },
  {
    title: 'Posters',
    desc: 'Vibrant large-format posters from A4 to A0. Premium silk stocks with matt, gloss, and satin finish options.',
    href: '/products/posters',
  },
  {
    title: 'Signs & Boards',
    desc: 'Foamex, Dibond, Correx, and magnetic signs in any size — for indoor and outdoor use.',
    href: '/products/signs-boards',
  },
  {
    title: 'Stickers',
    desc: 'Custom stickers supplied on a roll. Waterproof, outdoor-grade, gloss or uncoated polypropylene. From 100.',
    href: '/products/stickers',
  },
  {
    title: 'Brochures',
    desc: 'Professionally bound booklets and catalogues — saddle stitch for 8–48 pages, perfect bound for premium publications.',
    href: '/products/brochures-books',
  },
  {
    title: 'Orders of Service',
    desc: 'Beautifully printed programmes for weddings, funerals, and special occasions. Produced with care on premium stocks.',
    href: '/products/orders-of-service',
  },
]

export const metadata = {
  title: 'Popular Products | Tinta Print',
  description: 'Our most popular print products — business cards, flyers, roller banners, posters, signs, stickers, brochures, and more.',
}

export default function PopularProductsPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        <section style={{ padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-site" style={{ position: 'relative', zIndex: 2 }}>
            <p className="section-label mb-5">Most Ordered</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              Popular Products
            </h1>
            <p style={{ fontFamily: B, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '520px', lineHeight: 1.65 }}>
              Our most commonly ordered products — all available now, all produced to the highest standard.
            </p>
          </div>
        </section>

        <section style={{ padding: '3rem 0 6rem' }}>
          <div className="max-w-site">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {popularProducts.map(p => (
                <div key={p.title} className="product-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h2 style={{ fontFamily: D, fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 1.1 }}>{p.title}</h2>
                  <p style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, flexGrow: 1 }}>{p.desc}</p>
                  <Link href={p.href} className="btn-outline" style={{ fontSize: '0.75rem', alignSelf: 'flex-start' }}>View Product</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
