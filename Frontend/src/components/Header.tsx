import { useState } from 'react'
import { Logo } from './Logo'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <div className="contact-links">
            <a href="tel:7547011797">● &nbsp;(754) 701-1797</a>
            <a href="mailto:info@woodyspaper.com">✉ &nbsp;info@woodyspaper.com</a>
          </div>
          <span>Wholesale to Retail&nbsp; | &nbsp;South Florida</span>
        </div>
      </div>
      <header className="header">
        <div className="wrap nav-inner">
          <Logo />
          <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
            <a href="#products" onClick={closeMenu}>Products</a>
            <a href="#ai-advisor" onClick={closeMenu}><span className="leaf">⌁</span> Ask Woody</a>
            <a className="pill" href="#contact" onClick={closeMenu}>Supply Inquiry</a>
          </nav>
          <button className="menu" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </header>
    </>
  )
}
