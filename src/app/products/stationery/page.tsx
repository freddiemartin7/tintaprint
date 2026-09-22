import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ProductPageTemplate, { type ProductData } from '@/components/products/ProductPageTemplate'

const data: ProductData = {
  name: 'Stationery',
  tagline: 'Professional business stationery that keeps your brand sharp across every touchpoint.',
  intro: "Business stationery is the quiet backbone of brand consistency. Letterheads, compliment slips, NCR pads and presentation folders — each one is a brand touchpoint that communicates professionalism and attention to detail to every recipient. At Tinta Print, we produce stationery that reflects the quality of the businesses it represents.",
  quickSpecs: [
    { label: 'Letterhead stock', value: '100–120gsm uncoated' },
    { label: 'Folder stock', value: '300–350gsm silk / uncoated' },
    { label: 'NCR pads', value: 'Duplicate & triplicate' },
    { label: 'Recycled stock', value: 'Available on request' },
    { label: 'Turnaround', value: '3–5 working days' },
  ],
  columns: [
    {
      heading: 'Products',
      items: ['Letterheads (A4)', 'Compliment slips (DL)', 'With compliments cards', 'NCR duplicate / triplicate pads', 'Presentation folders (A4)', 'Folded business cards', 'Notepads & pads'],
    },
    {
      heading: 'Paper Stocks',
      items: ['100gsm uncoated (letterheads)', '120gsm uncoated (premium)', '300gsm silk (folders / cards)', '350gsm uncoated (premium covers)', 'NCR carbonless paper (pads)', 'Recycled stock options available'],
    },
    {
      heading: 'Finishes',
      items: ['Uncoated (standard)', 'Matt laminate (covers)', 'Gloss laminate (covers)', 'Soft-touch (presentation folders)', 'Spot UV (logos / elements)', 'Foil (POA)'],
    },
  ],
}

export const metadata = { title: 'Stationery | Tinta Print', description: data.tagline }

export default function StationeryPage() {
  return <><Nav /><ProductPageTemplate data={data} /><Footer /></>
}
