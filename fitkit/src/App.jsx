import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Pillars, About, Stats, Classes, Trainers, Pricing, Testimonials, Gallery, Join, Footer } from './components/Sections'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pillars />
      <About />
      <Stats />
      <Classes />
      <Trainers />
      <Pricing />
      <Testimonials />
      <Gallery />
      <Join />
      <Footer />
    </>
  )
}
