import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ProductPageTemplate, { type ProductData } from '@/components/products/ProductPageTemplate'

const data: ProductData = {
  name: 'Canvas Prints',
  tagline: 'Gallery-quality giclée canvas prints, hand-stretched and ready to hang.',
  intro: 'Canvas prints bring a warmth and presence to spaces that flat prints simply cannot match. Tinta Print produces canvas prints using archival pigment inks on premium canvas material for colour accuracy and longevity. All canvases are hand-stretched onto solid timber frames and finished with mirrored or colour-wrapped edges — delivered ready to hang, no additional framing required.',
  quickSpecs: [
    { label: 'Frame depth', value: '19mm standard / 38mm gallery' },
    { label: 'Frame material', value: 'Solid pine stretcher bars' },
    { label: 'Ink type', value: 'Archival pigment inks' },
    { label: 'Edge options', value: 'Mirrored / colour wrap' },
    { label: 'Turnaround', value: '4–7 working days' },
  ],
  columns: [
    {
      heading: 'Sizes Available',
      items: ['A4 (210×297mm)', 'A3 (297×420mm)', 'A2 (420×594mm)', 'A1 (594×841mm)', '30×30cm square', '60×60cm square', 'Custom sizes available'],
    },
    {
      heading: 'Frame Options',
      items: ['19mm standard depth frame', '38mm deep gallery frame', 'Solid pine stretcher bars', 'Mirrored edge wrap', 'Colour edge wrap (white / black)', 'Hanging hardware included'],
    },
    {
      heading: 'Canvas Finishes',
      items: ['Gloss canvas (vibrant colours)', 'Satin canvas (balanced finish)', 'Matt canvas (minimal sheen)', 'UV-protective coating', 'Ready to hang — all sizes'],
    },
  ],
}

export const metadata = { title: 'Canvas Prints | Tinta Print', description: data.tagline }

export default function CanvasPrintsPage() {
  return <><Nav /><ProductPageTemplate data={data} /><Footer /></>
}
