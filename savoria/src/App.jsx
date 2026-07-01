import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Pillars, About, Stats, Menu, Chefs, Pricing, Testimonials, Gallery, Reserve, Footer } from './components/Sections'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pillars />
      <About />
      <Stats />
      <Menu />
      <Chefs />
      <Pricing />
      <Testimonials />
      <Gallery />
      <Reserve />
      <Footer />
    </>
  )
}
