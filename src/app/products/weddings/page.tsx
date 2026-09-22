import ProductTabsTemplate from '@/components/products/ProductTabsTemplate'
import type { ProductTabData } from '@/components/products/ProductTabsTemplate'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Wedding Print | Tinta Print',
  description: 'Every detail, perfectly printed. From save the dates to on-the-day signage — wedding print from Tinta Print.',
}

const data: ProductTabData = {
  name: 'Wedding Print',
  tagline: 'Every detail, perfectly printed. From save the dates to on-the-day signage — we handle it all.',
  backgroundType: 'crystal-shards',
  tabs: [
    {
      label: 'Stationery',
      description: 'The printed pieces that set the tone from the moment guests receive their invitation. All produced on quality stock for a feel that matches the importance of the occasion.',
      specs: [
        'Save the date cards',
        'Invitations',
        'Orders of Service',
        'Menus',
        'Table names & numbers',
        'Place cards',
        'Thank you cards',
        'All 300gsm — sizes POA',
      ],
    },
    {
      label: 'On The Day Signage',
      description: 'The finishing touches that make your venue feel complete. From the welcome sign at the entrance to directional signage throughout — printed on premium boards and vinyl, ready to display.',
      specs: [
        'Welcome sign',
        'Seating Plans',
        'Directional signage',
        'Contact us if you have any questions regarding sizes and materials — we have a wide range of options available.',
      ],
    },
    {
      label: 'Premium Finishes',
      description: 'Elevate your wedding stationery with our premium finishing options. Foil blocking, soft-touch laminate, duplex cards, and bespoke die cutting — for couples who want something truly special.',
      specs: [
        'Soft touch laminate throughout',
        'Foil blocking (gold, silver, rose gold)',
        'Duplex cards',
        'Bespoke die cutting',
        'All POA — get in touch to discuss',
      ],
    },
  ],
}

export default function WeddingPrintPage() {
  return (
    <>
      <Nav />
      <ProductTabsTemplate data={data} />
      <Footer />
    </>
  )
}
