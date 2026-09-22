import ProductTabsTemplate from '@/components/products/ProductTabsTemplate'
import type { ProductTabData } from '@/components/products/ProductTabsTemplate'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Flyers & Leaflets | Tinta Print',
  description: 'High-impact flyers and leaflets for campaigns, events, and promotions — standard, folded, and premium options.',
}

const data: ProductTabData = {
  name: 'Flyers & Leaflets',
  tagline: 'High-impact prints for campaigns, events and promotions — in every size, stock and fold.',
  backgroundType: 'grid-warp',
  tabs: [
    {
      label: 'Standard',
      description: 'Our standard flyers and leaflets cover the full range of everyday marketing needs. Available across all common sizes from A6 to A3, printed on quality silk stock.',
      specs: [
        'Sizes: A6, A5, A4, A3, DL',
        '150gsm or 170gsm Silk',
        'Full colour single or double-sided',
      ],
    },
    {
      label: 'Folded',
      description: 'Folded leaflets pack more information into a compact format — ideal for brochures, menus, event programmes, and any piece that needs to work harder. We offer a full range of fold options to suit your layout.',
      specs: [
        'Half fold (A4 to A5, A5 to A6)',
        'Tri-fold / letter fold (A4 to DL)',
        'Z-fold (accordion fold)',
        'DL fold (open-out from DL)',
        '150–300gsm silk or uncoated stock',
        'All folds available double-sided',
      ],
    },
    {
      label: 'Premium',
      description: 'When a standard flyer isn\'t enough. Our premium leaflets use heavier stocks and superior laminate options to produce pieces that stand apart from the competition.',
      specs: [
        '200gsm–350gsm Silk and Uncoated options available',
        'Matt, Gloss or Soft Touch Lamination available',
      ],
    },
  ],
}

export default function FlyersLeafletsPage() {
  return (
    <>
      <Nav />
      <ProductTabsTemplate data={data} />
      <Footer />
    </>
  )
}
