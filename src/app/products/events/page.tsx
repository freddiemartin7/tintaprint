import ProductTabsTemplate from '@/components/products/ProductTabsTemplate'
import type { ProductTabData } from '@/components/products/ProductTabsTemplate'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Event Print | Tinta Print',
  description: 'Print for events — small format stationery and large format signage. Everything you need for your event.',
}

const data: ProductTabData = {
  name: 'Event Print',
  tagline: 'Everything your event needs — from invitations to on-the-day signage.',
  backgroundType: 'crystal-shards',
  tabs: [
    {
      label: 'Small Format',
      description: 'The printed pieces guests hold, read, and keep. From invitations that set the tone before the event, to menus and place cards on the day — all produced on quality stocks.',
      specs: [
        'Invitations & save the date cards',
        'Menus',
        'Table numbers, table names & place names',
        'Orders of service / order of the day',
        'Range of paper stocks available',
        'Sizes vary by product — ask us for details',
      ],
    },
    {
      label: 'Large Format',
      description: 'The signage that makes your venue feel complete. Welcome signs, seating plans, and directional signage printed on premium boards or vinyl — custom sizes, ready to display.',
      specs: [
        'Welcome signs',
        'Seating plans',
        'Directional signage (bar, toilets, food stalls etc.)',
        'Custom sizes available',
      ],
    },
  ],
}

export default function EventPrintPage() {
  return (
    <>
      <Nav />
      <ProductTabsTemplate data={data} />
      <Footer />
    </>
  )
}
