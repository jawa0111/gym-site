import { useState } from 'react'
import Reveal from './Reveal'
import Counter from './Counter'

/* ---------------- ABOUT ---------------- */
export function About() {
  const feats = [
    ['💪', 'Full-Body Strength', 'Structured strength programs that build power, balance and endurance.'],
    ['⚙', 'Learn the Machines', 'Hands-on guidance so you train safely and get the most from every rep.'],
    ['🥊', 'Train Boxing', 'High-intensity boxing classes to torch calories and sharpen your mind.'],
  ]
  return (
    <section className="section-pad" id="about">
      <div className="container about-grid">
        <Reveal className="about-visual" y={60}>
          <img src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80" alt="Athlete training in the gym" />
          <div className="about-badge">
            <div className="num">25+</div>
            <div className="txt">Years of<br />Training</div>
          </div>
        </Reveal>

        <div className="about-copy">
          <Reveal><span className="eyebrow">Who We Are</span></Reveal>
          <Reveal delay={0.1} as="h2" className="display">
            Give <span className="accent">Shape</span> to Your Body
          </Reveal>
          <Reveal delay={0.2}>
            <p className="lead">
              For over two decades FitKit has helped thousands transform their bodies and
              their lives. Our certified coaches design every program around you — your goals,
              your pace, your comeback.
            </p>
          </Reveal>

          <div className="about-features">
            {feats.map(([ic, h, p], i) => (
              <Reveal key={h} delay={0.15 + i * 0.1} className="about-feature">
                <span className="ic">{ic}</span>
                <div>
                  <h4>{h}</h4>
                  <p>{p}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <a href="#join" className="btn btn-primary">Free Consultation</a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------------- STATS ---------------- */
export function Stats() {
  const stats = [
    [40, '+', 'Training Programs'],
    [30, '', 'Expert Trainers'],
    [12, '', 'Total Branches'],
    [18, 'k', 'Happy Clients'],
  ]
  return (
    <section className="section-pad stats">
      <div className="container">
        <div className="stats-head">
          <Reveal><span className="eyebrow center">Why Choose Us</span></Reveal>
          <Reveal delay={0.1} as="h2" className="display">
            Best Fitness Service for <span className="accent">25 Years</span>
          </Reveal>
        </div>
        <div className="stats-grid">
          {stats.map(([n, s, label], i) => (
            <Reveal key={label} delay={i * 0.1} className="stat">
              <div className="val"><Counter to={n} suffix={s} /></div>
              <div className="label">{label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- CLASSES (numbered workout cards) ---------------- */
export function Classes() {
  const cards = [
    ['01', 'Cardio Training', 'Burn fat and boost stamina with heart-pumping, high-energy cardio sessions.', 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=80'],
    ['02', 'Body Building', 'Build serious muscle and strength under the eye of expert strength coaches.', 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=80'],
    ['03', 'Boxing Course', 'Learn technique, footwork and power in our explosive boxing classes.', 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=80'],
  ]
  return (
    <section className="section-pad" id="classes">
      <div className="container">
        <div className="menu-head">
          <div>
            <Reveal><span className="eyebrow">Our Programs</span></Reveal>
            <Reveal delay={0.1} as="h2" className="display">New Exclusive <span className="accent">Workout</span></Reveal>
          </div>
          <Reveal delay={0.2}><a href="#join" className="btn btn-ghost">All Classes →</a></Reveal>
        </div>
        <div className="menu-grid">
          {cards.map(([num, h, p, img], i) => (
            <Reveal key={num} delay={i * 0.12} className="mcard">
              <div className="mcard-img">
                <span className="mcard-num">{num}</span>
                <img src={img} alt={h} loading="lazy" />
              </div>
              <div className="mcard-body">
                <h3>{h}</h3>
                <p>{p}</p>
                <a href="#join" className="mcard-link">Learn More →</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- TRAINERS ---------------- */
export function Trainers() {
  const team = [
    ['Patric Cole', 'Strength Coach', 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=700&q=80'],
    ['Monica Reyes', 'Cardio Trainer', 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=700&q=80'],
    ['John Carter', 'Boxing Coach', 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80'],
    ['Jennifer Lane', 'Yoga & Mobility', 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=700&q=80'],
  ]
  return (
    <section className="section-pad chefs" id="trainers">
      <div className="container">
        <div className="chefs-head">
          <Reveal><span className="eyebrow center">Our Team</span></Reveal>
          <Reveal delay={0.1} as="h2" className="display">Team of Expert <span className="accent">Coaches</span></Reveal>
        </div>
        <div className="chefs-grid">
          {team.map(([name, role, img], i) => (
            <Reveal key={name} delay={i * 0.1} className="chef">
              <img src={img} alt={name} loading="lazy" />
              <div className="chef-info">
                <h4>{name}</h4>
                <span>{role}</span>
                <div className="chef-social">
                  <a href="#" aria-label="Facebook">f</a>
                  <a href="#" aria-label="Twitter">✕</a>
                  <a href="#" aria-label="YouTube">▶</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- PRICING ---------------- */
export function Pricing() {
  const tiers = [
    ['Basic', '49', '3 months', ['Access to gym floor', '2 group classes / week', 'Locker & shower access', 'Fitness assessment', 'Mobile app tracking'], false],
    ['Pro', '69', '4 months', ['Unlimited group classes', 'Personal trainer (2x/wk)', 'Nutrition program', 'Sauna & recovery zone', 'Priority booking'], true],
    ['Elite', '89', '5 months', ['Everything in Pro', 'Daily 1-on-1 coaching', 'Custom meal plans', 'Body composition scans', '24/7 gym access'], false],
  ]
  return (
    <section className="section-pad" id="pricing" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="pricing-head">
          <Reveal><span className="eyebrow center">Membership</span></Reveal>
          <Reveal delay={0.1} as="h2" className="display">Pricing <span className="accent">Package</span></Reveal>
        </div>
        <div className="pricing-grid">
          {tiers.map(([name, price, per, feats, featured], i) => (
            <Reveal key={name} delay={i * 0.12} className={`price ${featured ? 'featured' : ''}`}>
              {featured && <span className="price-tag">Most Popular</span>}
              <h3>{name}</h3>
              <div className="amount">${price}<small> / {per}</small></div>
              <ul>{feats.map((f) => <li key={f}>{f}</li>)}</ul>
              <a href="#join" className={`btn ${featured ? 'btn-primary' : 'btn-ghost'}`}>Join Now</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- TESTIMONIALS ---------------- */
export function Testimonials() {
  const items = [
    ['FitKit completely changed how I train. I lost 14kg in six months and gained confidence I never knew I had.', 'Rose Bennett', 'Member · Paris'],
    ['The coaches actually care. Every session is planned, tracked and pushed just far enough. Best gym I have joined.', 'David Kim', 'Member · London'],
    ['From my first free consultation to my first marathon — the FitKit team was with me every step.', 'Amara Singh', 'Member · Berlin'],
  ]
  const [i, setI] = useState(0)
  const [name, role] = [items[i][1], items[i][2]]
  return (
    <section className="section-pad testi">
      <div className="container">
        <Reveal className="testi-wrap">
          <div className="testi-quote">❝</div>
          <p className="testi-text">{items[i][0]}</p>
          <div className="testi-author">
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
          <div className="testi-dots">
            {items.map((_, idx) => (
              <button key={idx} className={idx === i ? 'active' : ''} onClick={() => setI(idx)} aria-label={`Testimonial ${idx + 1}`} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- GALLERY ---------------- */
export function Gallery() {
  const imgs = [
    ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80', 'tall'],
    ['https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80', 'wide'],
    ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80', ''],
    ['https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=800&q=80', ''],
    ['https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80', 'tall'],
    ['https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80', ''],
    ['https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80', 'wide'],
    ['https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=800&q=80', ''],
  ]
  return (
    <section className="section-pad" id="gallery">
      <div className="container">
        <div className="gallery-head">
          <Reveal><span className="eyebrow center">Gallery</span></Reveal>
          <Reveal delay={0.1} as="h2" className="display">Our <span className="accent">Gallery</span></Reveal>
        </div>
        <div className="gallery-grid">
          {imgs.map(([src, cls], i) => (
            <Reveal key={i} delay={(i % 4) * 0.08} className={`gitem ${cls}`}>
              <img src={src} alt="FitKit gym" loading="lazy" />
            </Reveal>
          ))}
        </div>
        <div className="gallery-cta">
          <a href="#join" className="btn btn-ghost">See More</a>
        </div>
      </div>
    </section>
  )
}

/* ---------------- JOIN CTA ---------------- */
export function Join() {
  return (
    <section className="section-pad reserve" id="join">
      <div className="container">
        <Reveal><span className="eyebrow center" style={{ color: '#1f2a05' }}>Start Today</span></Reveal>
        <Reveal delay={0.1} as="h2">Ready to Transform Your Body?</Reveal>
        <Reveal delay={0.2}><p>Claim your free 3-day pass and a no-pressure consultation with one of our expert coaches. Your strongest self starts now.</p></Reveal>
        <Reveal delay={0.3}><a href="tel:+10000000000" className="btn">Call +1 (555) 018-2200</a></Reveal>
      </div>
    </section>
  )
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#home" className="logo">Fit<span>Kit</span></a>
            <p>A modern sport &amp; fitness gym where expert coaching, real equipment and a driven community help you reach your goals.</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">✕</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>
          <div>
            <h5>Explore</h5>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#classes">Classes</a></li>
              <li><a href="#trainers">Trainers</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#join">Membership</a></li>
            </ul>
          </div>
          <div>
            <h5>Opening Hours</h5>
            <ul className="footer-hours">
              <li>Mon – Fri <span>06:00 – 22:00</span></li>
              <li>Saturday <span>07:00 – 21:00</span></li>
              <li>Sunday <span>08:00 – 20:00</span></li>
            </ul>
          </div>
          <div>
            <h5>Get in Touch</h5>
            <p>24 Ironside Avenue, Jakarta<br />hello@fitkit.com · +1 (555) 018-2200</p>
            <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" aria-label="Email" />
              <button type="submit">→</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} <span>FitKit</span> — Sport &amp; Fitness Gym. Train hard, stay strong.
        </div>
      </div>
    </footer>
  )
}
