import { useState } from 'react'
import Reveal from './Reveal'
import Counter from './Counter'

/* ---------------- PILLARS ---------------- */
export function Pillars() {
  const items = [
    ['❦', 'Farm Fresh', 'Ingredients sourced daily from local growers and coastal markets.'],
    ['✦', 'Master Chefs', 'A brigade of award-winning chefs plating every dish by hand.'],
    ['❈', 'Warm Ambiance', 'Candlelit interiors and curated music for an unforgettable evening.'],
  ]
  return (
    <section className="pillars">
      <div className="pillars-grid">
        {items.map(([ic, h, p], i) => (
          <Reveal key={h} delay={i * 0.12} className="pillar">
            <span className="pillar-icon">{ic}</span>
            <div>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- ABOUT ---------------- */
export function About() {
  const feats = [
    ['✷', 'Seasonal Tasting Menus', 'Menus that evolve with the harvest, seven courses of discovery.'],
    ['❉', 'Sommelier Pairings', 'A cellar of 400+ labels, matched to every plate by our sommelier.'],
    ['❋', 'Private Chef Table', 'Dine beside the pass and watch the theatre of the kitchen.'],
  ]
  return (
    <section className="section-pad" id="about">
      <div className="container about-grid">
        <Reveal className="about-visual" y={60}>
          <img src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1000&q=80" alt="Chef plating a dish" />
          <div className="about-badge">
            <div className="num">25+</div>
            <div className="txt">Years of<br />Craft</div>
          </div>
        </Reveal>

        <div className="about-copy">
          <Reveal><span className="eyebrow">Who We Are</span></Reveal>
          <Reveal delay={0.1} as="h2" className="display">
            Crafted With <span className="accent">Passion</span> &amp; Flavour
          </Reveal>
          <Reveal delay={0.2}>
            <p className="lead">
              For over two decades Savoria has redefined fine dining — blending classic
              technique with bold, modern imagination. Every plate tells a story of place,
              season, and the people who grow our food.
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
            <a href="#reserve" className="btn btn-primary">Reserve an Evening</a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------------- STATS ---------------- */
export function Stats() {
  const stats = [
    [120, '+', 'Signature Dishes'],
    [14, '', 'Master Chefs'],
    [6, '', 'Locations'],
    [38, 'k', 'Happy Guests'],
  ]
  return (
    <section className="section-pad stats">
      <div className="container">
        <div className="stats-head">
          <Reveal><span className="eyebrow center">Why Savoria</span></Reveal>
          <Reveal delay={0.1} as="h2" className="display">
            Serving Authentic Cuisine for <span className="accent">25 Years</span>
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

/* ---------------- MENU ---------------- */
export function Menu() {
  const cards = [
    ['01', 'Artisan Starters', 'Delicate small plates to awaken the palate — from seared scallops to burrata.', 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=900&q=80'],
    ['02', 'Signature Mains', 'Slow-cooked, fire-kissed centrepieces built around the finest seasonal produce.', 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80'],
    ['03', 'Decadent Desserts', 'House-made pastries and chocolate creations to close the evening in style.', 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80'],
  ]
  return (
    <section className="section-pad" id="menu">
      <div className="container">
        <div className="menu-head">
          <div>
            <Reveal><span className="eyebrow">Our Kitchen</span></Reveal>
            <Reveal delay={0.1} as="h2" className="display">Explore the <span className="accent">Menu</span></Reveal>
          </div>
          <Reveal delay={0.2}><a href="#reserve" className="btn btn-ghost">Full Menu →</a></Reveal>
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
                <a href="#reserve" className="mcard-link">Discover →</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- CHEFS ---------------- */
export function Chefs() {
  const team = [
    ['Marco Rossi', 'Executive Chef', 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=80'],
    ['Amélie Dubois', 'Pastry Chef', 'https://images.unsplash.com/photo-1595257841889-eca2678454e2?auto=format&fit=crop&w=700&q=80'],
    ['Kenji Tanaka', 'Head Chef', 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=700&q=80'],
    ['Sofia Moreno', 'Sous Chef', 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=700&q=80'],
  ]
  return (
    <section className="section-pad chefs" id="chefs">
      <div className="container">
        <div className="chefs-head">
          <Reveal><span className="eyebrow center">The Brigade</span></Reveal>
          <Reveal delay={0.1} as="h2" className="display">Meet Our <span className="accent">Master Chefs</span></Reveal>
        </div>
        <div className="chefs-grid">
          {team.map(([name, role, img], i) => (
            <Reveal key={name} delay={i * 0.1} className="chef">
              <img src={img} alt={name} loading="lazy" />
              <div className="chef-info">
                <h4>{name}</h4>
                <span>{role}</span>
                <div className="chef-social">
                  <a href="#" aria-label="Instagram">◎</a>
                  <a href="#" aria-label="Facebook">f</a>
                  <a href="#" aria-label="Twitter">✕</a>
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
    ['Le Déjeuner', '49', 'per guest', ['Three-course lunch', 'Seasonal starter & main', 'House dessert', 'Fresh baked bread', 'Coffee & petit fours'], false],
    ['Le Menu Signature', '89', 'per guest', ['Five-course tasting', 'Sommelier wine pairing', 'Chef amuse-bouche', 'Cheese trolley selection', 'Priority reservation'], true],
    ['Le Grand', '139', 'per guest', ['Seven-course journey', 'Premium wine pairing', 'Champagne welcome', "Chef's table seating", '24/7 concierge booking'], false],
  ]
  return (
    <section className="section-pad" id="pricing" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="pricing-head">
          <Reveal><span className="eyebrow center">Dining Experiences</span></Reveal>
          <Reveal delay={0.1} as="h2" className="display">Choose Your <span className="accent">Table</span></Reveal>
        </div>
        <div className="pricing-grid">
          {tiers.map(([name, price, per, feats, featured], i) => (
            <Reveal key={name} delay={i * 0.12} className={`price ${featured ? 'featured' : ''}`}>
              {featured && <span className="price-tag">Most Loved</span>}
              <h3>{name}</h3>
              <div className="amount">${price}<small> / {per}</small></div>
              <ul>{feats.map((f) => <li key={f}>{f}</li>)}</ul>
              <a href="#reserve" className={`btn ${featured ? 'btn-primary' : 'btn-ghost'}`}>Reserve Now</a>
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
    ['An orchestra of flavour from the first bite to the last. Savoria is, without question, the finest table in the city.', 'Isabelle Laurent', 'Food Critic · Paris'],
    ['Every course was theatre. The chef’s table experience left our anniversary guests speechless.', 'James Whitfield', 'Guest · London'],
    ['Impeccable service and daring, beautiful plates. We travelled two hours and would do it again tomorrow.', 'Nina Alvarez', 'Guest · Barcelona'],
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
    ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80', 'tall'],
    ['https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80', 'wide'],
    ['https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80', ''],
    ['https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80', ''],
    ['https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=800&q=80', 'tall'],
    ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80', 'wide'],
    ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', ''],
  ]
  return (
    <section className="section-pad" id="gallery">
      <div className="container">
        <div className="gallery-head">
          <Reveal><span className="eyebrow center">Moments</span></Reveal>
          <Reveal delay={0.1} as="h2" className="display">Our <span className="accent">Gallery</span></Reveal>
        </div>
        <div className="gallery-grid">
          {imgs.map(([src, cls], i) => (
            <Reveal key={i} delay={(i % 4) * 0.08} className={`gitem ${cls}`}>
              <img src={src} alt="Savoria dining" loading="lazy" />
            </Reveal>
          ))}
        </div>
        <div className="gallery-cta">
          <a href="#reserve" className="btn btn-ghost">See More</a>
        </div>
      </div>
    </section>
  )
}

/* ---------------- RESERVE CTA ---------------- */
export function Reserve() {
  return (
    <section className="section-pad reserve" id="reserve">
      <div className="container">
        <Reveal><span className="eyebrow center" style={{ color: '#3a2f14' }}>Reservations</span></Reveal>
        <Reveal delay={0.1} as="h2">Reserve Your Table Tonight</Reveal>
        <Reveal delay={0.2}><p>Seats are limited and fill quickly. Secure your evening of exceptional food, wine, and atmosphere.</p></Reveal>
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
            <a href="#home" className="logo">Savo<span>ria</span></a>
            <p>A modern fine-dining destination where seasonal ingredients and timeless craft meet under candlelight.</p>
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
              <li><a href="#menu">Our Menu</a></li>
              <li><a href="#chefs">The Chefs</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#reserve">Reservations</a></li>
            </ul>
          </div>
          <div>
            <h5>Opening Hours</h5>
            <ul className="footer-hours">
              <li>Mon – Thu <span>12:00 – 22:00</span></li>
              <li>Fri – Sat <span>12:00 – 23:30</span></li>
              <li>Sunday <span>13:00 – 21:00</span></li>
            </ul>
          </div>
          <div>
            <h5>Stay in Touch</h5>
            <p>18 Rue des Saveurs, Downtown District<br />hello@savoria.com · +1 (555) 018-2200</p>
            <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" aria-label="Email" />
              <button type="submit">→</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} <span>Savoria</span> — Fine Dining Restaurant. Crafted with care.
        </div>
      </div>
    </footer>
  )
}
