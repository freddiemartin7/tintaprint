import ProductTabsTemplate from '@/components/products/ProductTabsTemplate'
import type { ProductTabData } from '@/components/products/ProductTabsTemplate'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Letterheads & Compliment Slips | Tinta Print',
  description: 'Professional letterheads and compliment slips on premium paper. Essential business stationery.',
}

const data: ProductTabData = {
  name: 'Letterheads & Compliment Slips',
  tagline: 'Professional stationery that makes the right impression on every piece of correspondence.',
  backgroundType: 'particles-drift',
  tabs: [
    {
      label: 'Letterheads',
      description: 'Make every letter count. Our letterheads are printed on premium stocks with crisp, accurate colour reproduction — giving your correspondence the quality and authority it deserves.',
      specs: [
        'A4 size (210 × 297mm)',
        '80gsm or 120gsm paper',
        'Full colour single or double-sided printing',
        'Ideal for business letters, invoices, and official correspondence',
      ],
    },
    {
      label: 'Compliment Slips',
      description: 'The finishing touch for any correspondence. Compliment slips are the perfect way to add a personal note when sending samples, gifts, or follow-ups — and reinforce your brand every time.',
      specs: [
        'DL size (99 × 210mm) — one-third of A4',
        '80gsm or 120gsm paper',
        'Full colour single or double-sided printing',
        'Matches perfectly with our letterheads for a consistent look',
      ],
    },
  ],
}

export default function LetterheadsPage() {
  return (
    <>
      <Nav />
      <ProductTabsTemplate data={data} />
      <Footer />
    </>
  )
}
