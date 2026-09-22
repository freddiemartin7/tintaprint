import ProductTabsTemplate from '@/components/products/ProductTabsTemplate'
import type { ProductTabData } from '@/components/products/ProductTabsTemplate'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Banners | Tinta Print',
  description: 'Roller banners, vinyl PVC banners, and alternative display solutions for events, retail, and outdoor use.',
}

const data: ProductTabData = {
  name: 'Banners',
  tagline: 'Display solutions for events, retail and outdoor environments — built to perform in the field.',
  backgroundType: 'liquid-blobs',
  tabs: [
    {
      label: 'Roller Banners',
      description: 'The essential exhibition and event display. Roller banners are portable, quick to set up, and make an immediate visual impact. Available in a range of formats with premium carry case included.',
      specs: [
        '850 × 2000mm (standard)',
        'Range of other sizes also available',
        'Premium roller banner material',
        'Carry case and aluminium base hardware included',
        'Printed and ready to roll — no assembly required',
      ],
    },
    {
      label: 'Vinyl PVC Banners',
      description: 'Heavy-duty vinyl banners for outdoor and large-scale use. Built to withstand wind, rain, and UV exposure — with hemmed edges and eyelets as standard. Used for building frontages, events, retail, and construction hoardings.',
      specs: [
        '440gsm PVC vinyl (outdoor rated)',
        'Hemmed edges and eyelets as standard',
        'Pole pockets available (top and bottom)',
        'UV and weather resistant',
        'Suitable for indoor and outdoor use',
      ],
    },
    {
      label: 'Alternative Banners',
      description: 'Beyond the standard roller and vinyl — feather flags, tear-drop flags, X-frame banners, and mesh banners for wind-exposed outdoor environments. All produced with the quality and durability your application demands.',
      specs: [
        'Feather flags and tear-drop flags (various sizes)',
        'X-frame banner displays',
        'Frame not included',
        '110gsm mesh banner (30% open — wind resistant)',
        'Ground spike, cross base, and water base options for flags',
        'Full colour print on all formats',
        'Replacement prints available for all hardware',
      ],
    },
  ],
}

export default function BannersPage() {
  return (
    <>
      <Nav />
      <ProductTabsTemplate data={data} />
      <Footer />
    </>
  )
}
