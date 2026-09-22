import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

export const metadata = {
  title: 'Terms & Conditions | Tinta Print',
  description: 'Terms and conditions for Tinta Print print services.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '2.5rem', marginBottom: '2.5rem' }}>
      <h2 style={{ fontFamily: D, fontSize: '1.375rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '1rem' }}>{title}</h2>
      <div style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>{children}</div>
    </div>
  )
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        <section style={{ padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-site" style={{ position: 'relative', zIndex: 2 }}>
            <p className="section-label mb-5">Legal</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1rem' }}>
              Terms & Conditions
            </h1>
            <p style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.35)' }}>Last updated: July 2026</p>
          </div>
        </section>

        <section style={{ padding: '2rem 0 6rem' }}>
          <div className="max-w-site" style={{ maxWidth: 760, margin: '0 auto' }}>

            <Section title="Artwork & File Submission">
              <p>The customer is responsible for supplying print-ready artwork. Files must be supplied in the correct format, at the correct size, with 3mm bleed on all sides, in CMYK colour mode, and at a minimum resolution of 300dpi.</p>
              <p>Tinta Print will carry out a basic preflight check on all submitted files, but this does not guarantee that all errors will be identified. Customers are encouraged to check their files carefully before submission.</p>
            </Section>

            <Section title="Proofing & Approval">
              <p>Tinta Print is not liable for errors in artwork that has been approved by the customer. This includes spelling mistakes, incorrect colours, missing elements, or any other errors present in the approved artwork.</p>
              <p>Digital proofs are available on request. Physical proofs are available on larger orders at additional cost. Production will not commence until approval has been received.</p>
            </Section>

            <Section title="Delivery & Timescales">
              <p>Delivery timescales are estimated and not guaranteed. Tinta Print will make every reasonable effort to meet agreed timescales but is not liable for delays caused by circumstances outside our control, including courier delays, supply issues, or force majeure events.</p>
              <p>Standard turnaround is 3–5 working days from artwork approval. Express and same-day options are available on selected products — see our Delivery page for details.</p>
            </Section>

            <Section title="Damaged or Faulty Goods">
              <p>Any damage or fault must be reported to Tinta Print within 48 hours of receiving your order. Claims made after this period may not be accepted.</p>
              <p>To report a damaged order, please contact us via the contact form with photos of the damage and your order reference. We will assess the claim and arrange a reprint or refund at our discretion.</p>
            </Section>

            <Section title="Refunds & Reprints">
              <p>Refunds and reprints are considered on a case-by-case basis. We will offer a reprint or refund where a fault is clearly attributable to Tinta Print.</p>
              <p>Refunds or reprints will not be offered for errors in customer-approved artwork, incorrect quantities or specifications supplied by the customer, or damage caused after delivery.</p>
            </Section>

            <Section title="Pricing">
              <p>Many of our products are priced on application (POA). All POA prices will be confirmed in writing before production begins. No job will proceed to print without written price confirmation and customer approval.</p>
              <p>Prices are quoted exclusive of VAT unless otherwise stated. VAT will be applied at the prevailing rate.</p>
            </Section>

            <Section title="Intellectual Property">
              <p>By submitting artwork to Tinta Print, the customer confirms that they own or have the necessary rights and permissions to use all elements of the supplied artwork, including fonts, images, logos, and any other intellectual property.</p>
              <p>Tinta Print accepts no liability for any intellectual property infringement arising from customer-supplied artwork.</p>
            </Section>

            <Section title="Governing Law">
              <p>These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </Section>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
