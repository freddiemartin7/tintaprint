import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ProductPageTemplate, { type ProductData } from '@/components/products/ProductPageTemplate'

const data: ProductData = {
  name: 'Stickers & Labels',
  tagline: 'Custom cut stickers, labels and decals to any shape, size or finish — indoor and outdoor.',
  intro: 'Stickers and labels are one of the most versatile products in print — used for packaging, product branding, event giveaways, laptop decals, vehicle graphics and everything in between. We produce stickers and labels across a wide range of substrates and cut styles, with no minimum quantities on most options. All vinyl substrates are available with waterproof laminate for outdoor use.',
  quickSpecs: [
    { label: 'Cut types', value: 'Die-cut, kiss-cut, roll' },
    { label: 'Min order', value: 'No minimum on most' },
    { label: 'Substrates', value: 'Gloss, clear, matt, kraft vinyl' },
    { label: 'Outdoor rated', value: 'Yes (with laminate)' },
    { label: 'Turnaround', value: '2–4 working days' },
  ],
  columns: [
    {
      heading: 'Cut Types',
      items: ['Die-cut to custom shape', 'Square / rectangle', 'Circle / oval', 'Kiss-cut on backing sheet', 'Roll labels (continuous)', 'Sheet labels (multiple per sheet)'],
    },
    {
      heading: 'Substrates',
      items: ['White gloss vinyl', 'Clear (transparent) vinyl', 'White matt vinyl', 'Kraft / brown paper', 'Holographic vinyl POA', 'Metallic vinyl POA'],
    },
    {
      heading: 'Finishes',
      items: ['Gloss laminate', 'Matt laminate', 'Waterproof coating', 'UV-resistant (outdoor)', 'Removable adhesive option', 'Permanent adhesive (standard)'],
    },
  ],
}

export const metadata = { title: 'Stickers & Labels | Tinta Print', description: data.tagline }

export default function StickersLabelsPage() {
  return <><Nav /><ProductPageTemplate data={data} /><Footer /></>
}
