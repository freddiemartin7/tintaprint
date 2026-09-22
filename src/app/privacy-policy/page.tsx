import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

export const metadata = {
  title: 'Privacy Policy | Tinta Print',
  description: 'Privacy policy for Tinta Print — how we collect, use, and protect your personal data.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '2.5rem', marginBottom: '2.5rem' }}>
      <h2 style={{ fontFamily: D, fontSize: '1.375rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '1rem' }}>{title}</h2>
      <div style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>{children}</div>
    </div>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem' }}>

        <section style={{ padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, var(--accent-dim) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="max-w-site" style={{ position: 'relative', zIndex: 2 }}>
            <p className="section-label mb-5">Legal</p>
            <h1 style={{ fontFamily: D, fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '1rem' }}>
              Privacy Policy
            </h1>
            <p style={{ fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.35)' }}>Last updated: July 2026</p>
          </div>
        </section>

        <section style={{ padding: '2rem 0 6rem' }}>
          <div className="max-w-site" style={{ maxWidth: 760, margin: '0 auto' }}>

            <Section title="Who We Are">
              <p>Tinta Print is a UK-based print service. We take your privacy seriously and are committed to protecting your personal data in accordance with UK GDPR and the Data Protection Act 2018.</p>
              <p>For any data-related enquiries, please contact us via the contact form on our website.</p>
            </Section>

            <Section title="What Data We Collect">
              <p>We collect the following personal data when you use our contact form or place an order:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Full name', 'Email address', 'Phone number (optional)', 'Company name (optional)', 'Details of your enquiry or order'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '0.5rem' }}>●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="How We Use Your Data">
              <p>Your personal data is used solely for the following purposes:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Responding to your enquiry', 'Processing and fulfilling your order', 'Communicating with you about your order or enquiry'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '0.5rem' }}>●</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p>We do not use your data for marketing purposes without your explicit consent.</p>
            </Section>

            <Section title="Data Sharing">
              <p>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
              <p>We may share limited data with trusted service providers who assist in operating our business (for example, our contact form provider). These providers are contractually obligated to keep your data secure and use it only to provide the service.</p>
            </Section>

            <Section title="Data Retention">
              <p>We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Enquiry data is typically retained for up to 2 years.</p>
            </Section>

            <Section title="Cookies">
              <p>Our website uses basic analytics cookies to understand how visitors interact with our site. These cookies do not collect personally identifiable information.</p>
              <p>You can disable cookies in your browser settings at any time. This will not affect your ability to use the site.</p>
            </Section>

            <Section title="Your Rights">
              <p>Under UK GDPR, you have the following rights:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'The right to access your personal data',
                  'The right to have inaccurate data corrected',
                  'The right to have your data deleted',
                  'The right to restrict or object to processing',
                  'The right to data portability',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '0.5rem' }}>●</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p>To exercise any of these rights, please contact us via the contact form on our website.</p>
            </Section>

            <Section title="Changes to This Policy">
              <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this page periodically.</p>
            </Section>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
