import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

export const metadata = {
  title: 'Shipping & Delivery | Tinta Print',
  description: 'UK shipping, turnaround times, tracking, and damaged goods policy for Tinta Print orders.',
}

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: '1.25rem', color: '#ffffff', letterSpacing: '0.04em', margin: '3rem 0 0.875rem' }}>{children}</h2>
)
const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: '0 0 1rem' }}>{children}</p>
)

export default function ShippingPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem', background: '#000000', minHeight: '100vh' }}>

        <div style={{ padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'right' }}>
          <div className="max-w-site">
            <p className="section-label" style={{ marginBottom: '1rem' }}>Legal</p>
            <h1 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, margin: 0 }}>
              Shipping &amp; Delivery.
            </h1>
          </div>
        </div>

        <section style={{ padding: '4rem 0 6rem' }}>
          <div className="max-w-site" style={{ maxWidth: 800, margin: '0 auto', padding: '0 2rem' }}>
            <P>Last updated: 23 September 2026</P>
            <P>This policy outlines how Tinta Print handles delivery of your printed orders within the United Kingdom. By placing an order with us, you agree to the terms set out below.</P>

            <H2>1. Production Turnarounds</H2>
            <P>Turnaround times begin from the point at which your print-ready artwork has been approved, not from the point of order placement. Standard turnarounds are as follows:</P>
            <div style={{ margin: '1rem 0 1.5rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, overflow: 'hidden' }}>
              {[
                ['Business Cards', '3–5 working days'],
                ['Flyers & Leaflets', '3–5 working days'],
                ['Posters', '3–5 working days'],
                ['Banners & Large Format', '5–7 working days'],
                ['Brochures & Books', '5–7 working days'],
                ['Stickers & Labels', '3–5 working days'],
              ].map(([product, time], i) => (
                <div key={product} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '0.875rem 1.25rem', borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.07)' : 'none', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                  <span style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)' }}>{product}</span>
                  <span style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)' }}>{time}</span>
                </div>
              ))}
            </div>
            <P>Express and next-day turnaround options may be available for certain products at an additional charge. Please contact us before ordering to confirm availability.</P>

            <H2>2. Delivery Options</H2>
            <P>We deliver to addresses within the United Kingdom only. Delivery options and estimated transit times:</P>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                'Standard Tracked — 2–3 working days after despatch',
                'Express Tracked — 1–2 working days after despatch',
                'Next Day — order must be placed and artwork approved before 11am',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.3)', flexShrink: 0, marginTop: '0.45rem' }} />{item}
                </li>
              ))}
            </ul>

            <H2>3. Order Tracking</H2>
            <P>Once your order has been despatched, you will receive an email containing your tracking number and a link to track your parcel. If you have not received a despatch email within your expected turnaround window, please check your spam folder or contact us at <a href="mailto:hello@tintaprint.uk" style={{ color: '#00c060' }}>hello@tintaprint.uk</a>.</P>

            <H2>4. Failed Deliveries</H2>
            <P>If a delivery attempt is unsuccessful, the carrier will leave a card and make further attempts or hold your parcel at a local depot for collection. Tinta Print is not responsible for parcels that are returned to sender as a result of an incorrect address being supplied at checkout, or failure to collect from a depot within the carrier&apos;s holding period. Redelivery charges may apply.</P>

            <H2>5. Damaged or Faulty Goods</H2>
            <P>We take great care in packaging your order. In the unlikely event that your goods arrive damaged or with a print defect, please notify us within 48 hours of receipt by emailing <a href="mailto:hello@tintaprint.uk" style={{ color: '#00c060' }}>hello@tintaprint.uk</a> with your order number and clear photographs of the damage.</P>
            <P>Claims received after 48 hours or without photographic evidence may not be accepted. Where a valid claim is made, we will reprint and despatch a replacement order at no charge, or issue a refund at our discretion.</P>
            <P>Tinta Print is not liable for damage caused by the customer or misuse of the product after delivery.</P>

            <H2>6. Missing Orders</H2>
            <P>If your order has not arrived within 10 working days of the expected delivery date, please contact us. We will investigate with the carrier and, where the order is confirmed lost, we will reprint or refund your order.</P>

            <H2>7. Changes to This Policy</H2>
            <P>We reserve the right to amend this Shipping & Delivery Policy at any time. Changes will be reflected on this page with an updated &quot;last updated&quot; date.</P>

            <H2>8. Contact</H2>
            <P>For all delivery-related queries, please contact us at <a href="mailto:hello@tintaprint.uk" style={{ color: '#00c060' }}>hello@tintaprint.uk</a>.</P>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
