import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

export const metadata = {
  title: 'Cookie Policy | Tinta Print',
  description: 'Cookie policy for tintaprint.uk — how we use cookies and your choices.',
}

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: '1.25rem', color: '#ffffff', letterSpacing: '0.04em', margin: '3rem 0 0.875rem' }}>{children}</h2>
)
const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: '0 0 1rem' }}>{children}</p>
)

export default function CookiePolicyPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem', background: '#000000', minHeight: '100vh' }}>

        <div style={{ padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'right' }}>
          <div className="max-w-site">
            <p className="section-label" style={{ marginBottom: '1rem' }}>Legal</p>
            <h1 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, margin: 0 }}>
              Cookie Policy.
            </h1>
          </div>
        </div>

        <section style={{ padding: '4rem 0 6rem' }}>
          <div className="max-w-site" style={{ maxWidth: 800, margin: '0 auto', padding: '0 2rem' }}>
            <P>Last updated: 23 September 2026</P>
            <P>This Cookie Policy explains how Tinta Print (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) uses cookies and similar tracking technologies on tintaprint.uk. It should be read alongside our Privacy Policy.</P>

            <H2>1. What Are Cookies?</H2>
            <P>Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work efficiently and to provide information to site owners.</P>

            <H2>2. Cookies We Use</H2>
            <P><strong style={{ color: '#ffffff' }}>Essential Cookies</strong> — These are necessary for the website to function and cannot be switched off. They are usually set in response to actions you take, such as setting your privacy preferences, logging in, or filling in forms. You can set your browser to block these cookies, but some parts of the site will not then work.</P>
            <P><strong style={{ color: '#ffffff' }}>Analytics Cookies</strong> — These allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us understand which pages are most and least popular. All information these cookies collect is aggregated and therefore anonymous.</P>
            <P><strong style={{ color: '#ffffff' }}>Functionality Cookies</strong> — These enable enhanced functionality, such as remembering your preferences. If you do not allow these cookies, some services may not function properly.</P>
            <P><strong style={{ color: '#ffffff' }}>Targeting Cookies</strong> — These may be set through our site by our advertising partners to build a profile of your interests and show you relevant ads on other sites. They do not store personal information directly, but are based on uniquely identifying your browser and internet device.</P>

            <H2>3. Third-Party Cookies</H2>
            <P>We use the following third-party services that may set cookies on your device:</P>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                'Google Analytics — for website usage analysis',
                'Google reCAPTCHA — for form spam protection',
                'Formspree — for form submissions',
                'Stripe — for payment processing (checkout pages only)',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.3)', flexShrink: 0, marginTop: '0.45rem' }} />{item}
                </li>
              ))}
            </ul>

            <H2>4. Managing Cookies</H2>
            <P>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</P>
            <P>For more information about managing cookies in your browser, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noreferrer" style={{ color: '#00c060' }}>aboutcookies.org</a> or the help documentation for your specific browser.</P>

            <H2>5. Your Rights Under UK GDPR</H2>
            <P>Under the UK General Data Protection Regulation (UK GDPR) and the Privacy and Electronic Communications Regulations (PECR), you have the right to:</P>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                'Be informed about how we use cookies',
                'Give or withdraw consent for non-essential cookies',
                'Access any personal data we hold about you',
                'Request deletion of your data',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.3)', flexShrink: 0, marginTop: '0.45rem' }} />{item}
                </li>
              ))}
            </ul>

            <H2>6. Changes to This Policy</H2>
            <P>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We will update the &quot;last updated&quot; date at the top of this page when we do so.</P>

            <H2>7. Contact Us</H2>
            <P>If you have any questions about our use of cookies, please contact us at <a href="mailto:hello@tintaprint.uk" style={{ color: '#00c060' }}>hello@tintaprint.uk</a>.</P>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
