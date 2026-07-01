import { useEffect, useState } from 'react'

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Menu', '#menu'],
  ['Chefs', '#chefs'],
  ['Pricing', '#pricing'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#home" className="logo">Savo<span>ria</span></a>
          <ul className="nav-links">
            {links.map(([label, href]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
          <div className="nav-cta">
            <a href="#reserve" className="btn btn-primary" style={{ padding: '12px 26px' }}>Reserve Table</a>
            <button className="burger" onClick={() => setOpen(true)} aria-label="Open menu">☰</button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu" onClick={() => setOpen(false)}>
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
      )}
    </>
  )
}
