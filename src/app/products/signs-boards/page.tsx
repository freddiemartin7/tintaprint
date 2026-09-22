import ProductTabsTemplate from '@/components/products/ProductTabsTemplate'
import type { ProductTabData } from '@/components/products/ProductTabsTemplate'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Signs & Boards | Tinta Print',
  description: 'Rigid display boards and signage — Foamboard, Foamex, Correx, Dibond aluminium, and magnetic signs.',
}

const data: ProductTabData = {
  name: 'Signs & Boards',
  tagline: 'Rigid signage and display boards in a full range of materials — cut to any size, for any environment.',
  backgroundType: 'floating-rings',
  tabs: [
    {
      label: 'Foamboard',
      description: 'Lightweight and versatile, ideal for indoor signage, displays and presentations.',
      specs: [
        'Foamex (5mm plastic board)',
        'Holes can be drilled for hanging or mounting',
        'Full colour print',
        'Range of sizes available',
      ],
    },
    {
      label: 'Foamex & Correx',
      description: 'Our most versatile rigid boards. Foamex (5mm plastic board) is ideal for indoor displays, exhibitions, and point-of-sale. Correx (fluted polypropylene) is the go-to for outdoor use — estate agent boards, site signage, and temporary displays.',
      specs: [
        'Foamex (5mm plastic board)',
        'Correx (fluted polypropylene)',
        'Full colour direct UV print',
        'Holes can be drilled for hanging or mounting',
        'Weatherproof — suitable for indoor and outdoor use',
        'Custom cut-to-shape available',
        'Minimum order: 1 board',
      ],
    },
    {
      label: 'Dibond Aluminium',
      description: 'Dibond aluminium composite is the premium choice for long-term outdoor signage, architectural installations, and any application where strength and longevity matter. Rigid, weather-resistant, and professionally finished.',
      specs: [
        '3mm Dibond aluminium composite',
        'Weather, UV, and corrosion resistant',
        'Full colour direct UV print',
        'Custom cut to any size',
        'Drilled holes and mounting options',
        'Anti-scratch laminate available',
        'Minimum order: 1 board',
      ],
    },
    {
      label: 'Magnetic Signs',
      description: 'Magnetic signs for vehicles and temporary applications. Full colour print on flexible magnetic sheet — attach to any metal surface and remove when not needed. Ideal for delivery vehicles and any situation where a permanent sign isn\'t practical.',
      specs: [
        'Flexible magnetic sheet',
        'Full colour print on white gloss surface',
        'Custom cut to any size',
        'Weather and UV resistant print',
        'Suitable for car doors, van sides, and metal surfaces',
      ],
    },
  ],
}

export default function SignsBoardsPage() {
  return (
    <>
      <Nav />
      <ProductTabsTemplate data={data} />
      <Footer />
    </>
  )
}
