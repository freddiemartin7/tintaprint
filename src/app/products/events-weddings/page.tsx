import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ProductPageTemplate, { type ProductData } from '@/components/products/ProductPageTemplate'

const data: ProductData = {
  name: 'Events & Weddings',
  tagline: 'Beautifully produced stationery and signage for weddings, events and occasions that deserve the best.',
  intro: 'When an event matters, the stationery and signage that surrounds it matters too. Tinta Print specialises in producing event and wedding print that feels considered, personal and beautifully made — from the first invitation through to on-the-day signage. We work with event planners, wedding coordinators, venues and couples directly, with premium stocks and artisan finishes including foiling and letterpress.',
  quickSpecs: [
    { label: 'Products', value: 'Invites, menus, signage & more' },
    { label: 'Min stock', value: '300gsm silk / uncoated' },
    { label: 'Foil options', value: 'Gold, silver, rose gold' },
    { label: 'Bespoke sizing', value: 'Available on all items' },
    { label: 'Turnaround', value: '5–10 working days' },
  ],
  columns: [
    {
      heading: 'Products',
      items: ['Invitations & envelopes', 'Save the dates', 'Menus (folded or flat)', 'Order of service booklets', 'Table names & numbers', 'Place cards', 'Seating plans (large format)', 'On-the-day signage & boards'],
    },
    {
      heading: 'Paper Stocks',
      items: ['300gsm silk (standard)', '350gsm uncoated (premium)', '400gsm ultra-thick', 'Vellum / translucent paper', 'Textured cotton stock', 'Luxury board POA'],
    },
    {
      heading: 'Finishes',
      items: ['Matt laminate', 'Gloss laminate', 'Soft-touch velvet', 'Gold / silver / rose gold foil', 'Letterpress (POA)', 'Blind embossing', 'Wax seal sets (POA)'],
    },
  ],
}

export const metadata = { title: 'Events & Weddings | Tinta Print', description: data.tagline }

export default function EventsWeddingsPage() {
  return <><Nav /><ProductPageTemplate data={data} /><Footer /></>
}
