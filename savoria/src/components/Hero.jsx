import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]) // parallax on the bg
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section className="hero" id="home" ref={ref}>
      <motion.div className="hero-bg" style={{ y }} />
      <div className="hero-grain" />
      <div className="container">
        <motion.div className="hero-inner" style={{ opacity: fade }}>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Est. 1998 · Fine Dining
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            A Culinary <em>Experience</em> Beyond Taste
          </motion.h1>

          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where seasonal ingredients meet timeless craft. Savour hand-plated dishes
            created by award-winning chefs in an atmosphere designed to linger.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <a href="#reserve" className="btn btn-primary">Book a Table →</a>
            <a href="#menu" className="btn btn-ghost">Explore Menu</a>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </section>
  )
}
