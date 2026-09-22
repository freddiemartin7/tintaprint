import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Hero from '@/components/hero/Hero'
import ProductsGrid from '@/components/ProductsGrid'
import ClosingCTA from '@/components/ClosingCTA'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProductsGrid />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
