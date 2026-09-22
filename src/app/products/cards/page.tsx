import ProductTabsTemplate from '@/components/products/ProductTabsTemplate'
import type { ProductTabData } from '@/components/products/ProductTabsTemplate'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Cards | Tinta Print',
  description: 'Greeting cards, thank you cards, and loyalty cards — printed to the highest standard.',
}

const data: ProductTabData = {
  name: 'Cards',
  tagline: 'From greeting cards to loyalty cards — printed on quality stocks with sharp, vibrant colour.',
  tabs: [
    {
      label: 'Greeting Cards',
      description: 'High-quality greeting cards for any occasion. Whether you\'re sending Christmas cards to clients or thank-you cards to customers, our greeting cards are printed on premium board and folded to a perfect finish.',
      specs: [
        'A6 folded (105 × 148mm) or A5 folded (148 × 210mm)',
        '300–400gsm silk or uncoated card',
        'Full colour outside and inside',
      ],
    },
    {
      label: 'Thank You Cards',
      description: 'Thank your customers in style. Our thank you cards are a simple but powerful way to build loyalty and leave a lasting impression. Ideal for e-commerce inserts, event follow-ups, or any customer touchpoint.',
      specs: [
        'A6 (105 × 148mm) single or double-sided',
        'Standard or premium card stock',
        'Gloss, matte, or soft-touch lamination options',
      ],
    },
    {
      label: 'Loyalty Cards',
      description: 'Keep customers coming back. Loyalty cards are a proven way to increase repeat business. We print them on durable card with sharp, full-colour artwork that reflects the quality of your brand.',
      specs: [
        'Standard credit card size (85.5 × 54mm)',
        '350gsm silk or uncoated board',
        'Full colour double-sided',
      ],
    },
  ],
}

export default function CardsPage() {
  return (
    <>
      <Nav />
      <ProductTabsTemplate data={data} />
      <Footer />
    </>
  )
}
