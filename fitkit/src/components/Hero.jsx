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
            Est. 1998 · Sport &amp; Fitness
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Perfect <em>Workout</em> For Your Body
          </motion.h1>

          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Train harder, recover smarter, and reach your goals with expert coaches,
            state-of-the-art equipment, and programs built around real results.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <a href="#join" className="btn btn-primary">Let's Train →</a>
            <a href="#classes" className="btn btn-ghost">View Classes</a>
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
