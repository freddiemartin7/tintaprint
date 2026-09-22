import ProductTabsTemplate from '@/components/products/ProductTabsTemplate'
import type { ProductTabData } from '@/components/products/ProductTabsTemplate'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Business Cards | Tinta Print',
  description: 'Premium business cards — standard, laminated, premium and metallic finishes.',
}

const data: ProductTabData = {
  name: 'Business Cards',
  tagline: 'Your first impression, perfected. Premium stocks, precision print, luxury finishes.',
  backgroundType: 'particles-drift',
  tabs: [
    {
      label: 'Standard',
      description: 'Our standard business cards deliver crisp, accurate colour on quality board — a professional result at an accessible price point. Available in landscape, portrait, and square formats.',
      specs: [
        '85 × 55mm (standard landscape) or portrait / square',
        '400gsm board',
        'Full colour single or double sided printing',
        'Minimum order: x100',
      ],
    },
    {
      label: 'Laminated',
      description: 'A step up in tactile quality. Laminated business cards use premium coatings over heavier board — giving a confident, weighty feel that communicates quality the moment they\'re handed over.',
      specs: [
        '85 × 55mm or custom size',
        '400gsm board',
        'Matt, Gloss or Soft Touch Lamination available',
        'Minimum order: x100',
      ],
    },
    {
      label: 'Premium',
      description: 'Our most impressive business cards — luxury finishes including foiling, duplex construction, and embossing that make a card genuinely unforgettable.',
      specs: [
        '85 × 55mm standard or custom size',
        'Gold, silver, or rose gold foil available',
        'Blind embossing available',
        'Foiling, Duplex and Embossing & more available',
        'Prices from £120.00, minimum order ×100',
      ],
    },
    {
      label: 'Metallic',
      description: 'Make a statement with our metallic business cards. Available in a range of stunning metallic finishes that catch the light and leave a lasting impression.',
      specs: [
        'Available colours: Pink, Damask Blue, Gold',
        '400gsm metallic board',
        '85 × 55mm standard size',
        'Minimum order: x100',
      ],
    },
  ],
}

export default function BusinessCardsPage() {
  return (
    <>
      <Nav />
      <ProductTabsTemplate data={data} />
      <Footer />
    </>
  )
}
