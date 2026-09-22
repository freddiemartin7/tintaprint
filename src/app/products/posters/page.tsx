import ProductTabsTemplate from '@/components/products/ProductTabsTemplate'
import type { ProductTabData } from '@/components/products/ProductTabsTemplate'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Posters | Tinta Print',
  description: 'Vibrant posters in every size — small format for retail and POS through to A0 exhibition pieces.',
}

const data: ProductTabData = {
  name: 'Posters',
  tagline: 'Vibrant large-format posters that demand attention — for retail, events and everything in between.',
  backgroundType: 'floating-rings',
  tabs: [
    {
      label: 'Small Format',
      description: 'A4 and A3 posters for retail, hospitality, point-of-sale, and indoor use. Crisp colour reproduction on quality stock — ideal for menus, notices, promotional displays, and framed wall pieces.',
      specs: [
        'A4 (210 × 297mm) and A3 (297 × 420mm)',
        'Range of paper stocks available',
        'Full colour single or double-sided',
      ],
    },
    {
      label: 'Large Format',
      description: 'A2 through to A0 for exhibitions, events, retail environments, and anywhere that needs maximum visual impact. Consistent colour accuracy at every size.',
      specs: [
        'A2 (420 × 594mm), A1 (594 × 841mm), A0 (841 × 1189mm)',
        'Satin, Gloss and Matte papers available',
        'Full colour print',
        'Lamination available on all sizes',
        'Custom sizes available',
      ],
    },
    {
      label: 'Premium',
      description: 'Premium posters for property marketing, luxury retail, gallery prints, and anywhere the poster is as much a statement as the content it carries. A wide range of specialist media available.',
      specs: [
        'All sizes from A4 to A0',
        'Matt or gloss laminate options',
        'Backlit material available for LED light frames',
        'Magnetic Posters available',
        'Blueback available',
        'PVC Posters available',
      ],
    },
  ],
}

export default function PostersPage() {
  return (
    <>
      <Nav />
      <ProductTabsTemplate data={data} />
      <Footer />
    </>
  )
}
