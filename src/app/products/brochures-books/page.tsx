import ProductTabsTemplate from '@/components/products/ProductTabsTemplate'
import type { ProductTabData } from '@/components/products/ProductTabsTemplate'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Brochures & Books | Tinta Print',
  description: 'Professionally bound brochures, booklets, and catalogues — saddle stitch and perfect bound options.',
}

const data: ProductTabData = {
  name: 'Brochures & Books',
  tagline: 'Professionally bound catalogues, booklets and sales documents that command attention.',
  backgroundType: 'grid-warp',
  tabs: [
    {
      label: 'Saddle Stitch',
      description: 'Saddle-stitched booklets are the industry standard for anything from 8 to 48 pages. Flat spine, clean finish, and a professional result at an accessible price point. Ideal for product brochures, event programmes, menus, and catalogues.',
      specs: [
        'A4, A4 Landscape, A5, Square formats & more available',
        '8 to 48 pages (must be a multiple of 4)',
        'Range of paper specifications available',
        'Full colour or Black and White printing',
        'Matt or Gloss Laminate on cover available',
      ],
      noteBox: {
        title: 'File Requirements',
        items: [
          'Supply as a single multi-page PDF',
          'Pages must be supplied in reading order (not printer spreads)',
          '3mm bleed on all sides if possible',
          'CMYK at 300dpi minimum if possible',
          'Cover pages: outside front, inside front, inside back, outside back',
          'Feel free to contact us with any questions regarding your files',
        ],
      },
    },
    {
      label: 'Perfect Bound',
      description: 'Perfect binding is the mark of a serious publication. A flat, glued spine that sits clean on a shelf — the format of choice for brand books, product catalogues, lookbooks, and anything that needs to make an impression before it\'s even opened. Thicker stocks, premium cover finishes, and a result that lasts.',
      specs: [
        'A4, A4 Landscape, A5, Square formats & more available',
        'Range of paper specifications available',
        'Full colour or Black and White printing',
        'Matt or Gloss Laminate on cover available',
      ],
    },
  ],
}

export default function BrochuresBooksPage() {
  return (
    <>
      <Nav />
      <ProductTabsTemplate data={data} />
      <Footer />
    </>
  )
}
