import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'

export const metadata = {
  title: 'File Submission & AI Image Policies | Tinta Print',
  description: 'How to submit print-ready files, bleed requirements, and our AI image policy.',
}

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{ fontFamily: D, fontWeight: 700, fontSize: '1.375rem', color: '#ffffff', letterSpacing: '0.04em', margin: '2.5rem 0 1rem' }}>{children}</h3>
)
const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: B, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: '0 0 1rem' }}>{children}</p>
)

export default function FileSubmissionPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '4rem', background: '#000000', minHeight: '100vh' }}>

        <div style={{ padding: '5rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'right' }}>
          <div className="max-w-site">
            <p className="section-label" style={{ marginBottom: '1rem' }}>Services</p>
            <h1 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: '#ffffff', letterSpacing: '0.04em', lineHeight: 0.95, margin: 0 }}>
              File Submission<br />& AI Policies.
            </h1>
          </div>
        </div>

        <section style={{ padding: '5rem 0' }}>
          <div className="max-w-site" style={{ maxWidth: 820, margin: '0 auto', padding: '0 2rem' }}>

            <H3>File Requirements</H3>
            <P>All artwork must be supplied as a print-ready PDF with 3mm bleed on all sides and crop marks where possible. Colour mode should be CMYK at 300dpi minimum. RGB files will be converted before printing — some colour shift may occur.</P>

            <H3>Accepted File Types</H3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.625rem' }}>
              {['PDF (preferred)', 'AI (Adobe Illustrator)', 'INDD (InDesign)', 'PSD (Photoshop)', 'EPS', 'TIFF (300dpi+)'].map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: B, fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00c060', flexShrink: 0 }} />{f}
                </li>
              ))}
            </ul>

            <H3>Bleed &amp; Safe Zone</H3>
            <P>Extend your background artwork 3mm beyond the trim line on all sides. Keep all text and important elements at least 3mm inside the trim line. Anything outside this safe zone risks being cut off during trimming.</P>
            <P>For large format print (banners, signs), please contact us for specific bleed requirements — these vary by product and finishing method.</P>

            <div id="wetransfer" style={{ margin: '3rem 0', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, background: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontFamily: D, fontWeight: 700, fontSize: '1.375rem', color: '#ffffff', letterSpacing: '0.04em', margin: '0 0 1rem' }}>Submitting Files via WeTransfer</h3>
              <P>For files over 10MB, please use WeTransfer to send your artwork directly to us. Click the button below and send your files to <strong style={{ color: '#ffffff' }}>hello@tintaprint.uk</strong>. Include your order number or name in the message field.</P>
              <a href="https://wetransfer.com" target="_blank" rel="noreferrer" className="btn-outline" style={{ height: 44, minHeight: 44, fontSize: '0.8125rem', display: 'inline-flex' }}>
                Open WeTransfer →
              </a>
            </div>

            <div id="ai" style={{ margin: '3rem 0', padding: '2rem', border: '1px solid rgba(0,192,96,0.25)', borderRadius: 12, background: 'rgba(0,192,96,0.03)' }}>
              <h2 style={{ fontFamily: D, fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#ffffff', letterSpacing: '0.04em', margin: '0 0 1.25rem' }}>
                AI Image Policy
              </h2>
              <P>We are proud to support creative work in all its forms — including AI-generated imagery. However, to ensure print quality meets our standards, we apply the following policies to all AI-generated content submitted for print.</P>

              <H3>Resolution &amp; Quality</H3>
              <P>AI-generated images must be a minimum of 300dpi at the intended print size. Many AI image generators produce images at 72dpi by default — these will not print clearly at large sizes and will appear blurry or pixellated.</P>
              <P>We offer a Low Resolution AI Render Fix service for images that fall below this threshold. Our team can upscale and enhance AI artwork to make it print-ready, subject to an additional charge.</P>

              <H3>Copyright &amp; Ownership</H3>
              <P>By submitting AI-generated artwork for print, you confirm that you hold all necessary rights to reproduce the image and that the content does not infringe any third-party intellectual property rights. Tinta Print accepts no liability for copyright infringement arising from customer-supplied AI imagery.</P>

              <H3>Content Standards</H3>
              <P>All artwork — AI-generated or otherwise — must comply with our standard content policy. We reserve the right to refuse any print job containing imagery that is offensive, defamatory, unlawful, or otherwise contrary to our terms and conditions.</P>

              <H3>Liability</H3>
              <P>Tinta Print prints to specification. We are not responsible for the quality of AI-generated imagery beyond its reproduction. If you are unsure whether your image meets our requirements, <Link href="/contact" style={{ color: '#00c060', textDecoration: 'none' }}>send it to us for a free pre-press check</Link> before placing your order.</P>

              <div style={{ marginTop: '1.75rem' }}>
                <Link href="/contact" className="btn-primary" style={{ height: 44, minHeight: 44, fontSize: '0.8125rem' }}>Request AI Fix Service</Link>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
