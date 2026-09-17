import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

const inventory = [
  { title: 'Food services', subtitle: 'Containers & Wraps' },
  { title: 'Tissue Paper', subtitle: 'Industrial Rolls' },
  { title: 'Facility Care', subtitle: 'Hygiene Supplies' },
  { title: 'Packaging', subtitle: 'Corrugated & Wraps' },
]

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Woody's Paper home">
      <span className="logo-mark">WP</span>
      <span><b>WOODY'S PAPER</b><small>Renewably Sourced Products</small></span>
      <i />
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [sent, setSent] = useState(false)

  const askWoody = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!question.trim()) return
    setAnswer('For current stock, case quantities, and a warehouse-direct quote, send this request to our supply team below.')
  }

  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main id="top">
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
            <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
            <a href="#ai-advisor" onClick={() => setMenuOpen(false)}><span className="leaf">⌁</span> Ask Woody</a>
            <a className="pill" href="#contact" onClick={() => setMenuOpen(false)}>Supply Inquiry</a>
          </nav>
          <button className="menu" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="cube cube-one">◇</div>
        <div className="cube cube-two">◇</div>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>Sustainably Sourced,<br /><em>Responsibly</em><br />Delivered.</h1>
            <p>Wholesale packaging and paper solutions dispatched daily across South Florida.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#contact">Check Inventory</a>
              <a className="btn secondary" href="tel:7547011797">Call Warehouse</a>
            </div>
          </div>
          <div className="warehouse-card">
            <img src="https://woodyspaper.com/image_ba5a41.jpg" alt="Woody's Paper distribution center warehouse" />
            <div className="warehouse-badge"><b>Warehouse Direct</b><span>Optimized Fulfillment</span></div>
          </div>
        </div>
      </section>

      <section className="inventory section" id="products">
        <div className="wrap">
          <div className="section-title"><h2>Inventory Hub</h2><i /></div>
          <div className="inventory-grid">
            {inventory.map((item) => (
              <article className="inventory-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="advisor section" id="ai-advisor">
        <div className="wrap advisor-grid">
          <div className="advisor-intro">
            <div className="advisor-heading">
              <div className="eagle" aria-hidden="true">
                <svg viewBox="0 0 100 100">
                  <path d="M12 55 L38 62 L18 85 L28 65 L35 85 L42 66 L12 55 Z" fill="#fff" stroke="#e5e7eb" />
                  <path d="M12 55 C25 45 45 45 52 48 L72 54 C68 62 55 75 42 72 L12 55 Z" fill="#437a3d" />
                  <path className="wing" d="M45 46 L92 18 L75 42 L88 52 L70 54 Z" fill="#437a3d" />
                  <path className="wing wing-two" d="M45 46 L82 88 L65 72 L55 86 L68 54 Z" fill="#2d5229" />
                  <path d="M62 50 C65 40 80 40 85 50 L75 58 L65 54 Z" fill="#fff" />
                  <path d="M85 50 L96 54 L88 58 Z" fill="#facc15" />
                  <circle cx="75" cy="51" r="1.3" fill="#1a2e19" />
                </svg>
              </div>
              <div><h2>“Woody”<br /><em>the Advisor</em></h2><span className="advisor-tag">Inventory Expert</span></div>
            </div>
            <p>Describe your specific needs. Woody will cross-reference wholesale SKUs in our warehouse to suggest the perfect match.</p>
            <small>Professional Disclosure: Catalog reference provided for estimation. Confirm live stock availability and final wholesale pricing via inquiry.</small>
            <form onSubmit={askWoody}>
              <textarea id="question" aria-label="Ask Woody about inventory" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Consult Woody on technical stock requirements..." />
              <button className="btn advisor-button" type="submit">Talk to Woody</button>
            </form>
          </div>
          <div className="advisor-results">
            <div className={answer ? 'match-result visible' : 'match-result'}>
              {answer ? <><b>Woody's Logistics Insight</b><p>{answer}</p></> : <p>Woody's matches will appear here.</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="inquiry section" id="contact">
        <div className="wrap inquiry-grid">
          <div className="inquiry-copy">
            <h2>Supply Inquiry.</h2>
            <p>Get verified wholesale pricing and local delivery schedules from our team.</p>
            <a href="tel:7547011797">(754) 701-1797</a>
            <span>South Florida Warehouse Hub</span>
          </div>
          <div className="inquiry-form-wrap">
            {sent ? (
              <div className="success"><span>✓</span><h3>Inquiry Received.</h3><p>Our warehouse team will follow up with current pricing and availability.</p></div>
            ) : (
              <form className="inquiry-form" onSubmit={submitInquiry}>
                <input required aria-label="Business name" placeholder="Business Name" />
                <input required aria-label="Contact email" type="email" placeholder="Contact Email" />
                <div className="refine-wrap"><textarea required aria-label="Product list" placeholder="Type or paste your product list here..." /><button type="button">✨ AI Refine</button></div>
                <button className="btn primary" type="submit">Connecting Warehouse...</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div className="footer-brand"><div className="footer-logo"><Logo /></div><p>South Florida's trusted wholesale supply partner for high-volume packaging and tissue products.</p></div>
          <div><h4>Area Serviced</h4><p>Serving South Florida</p></div>
          <div><h4>Contact</h4><a href="tel:7547011797">(754) 701-1797</a><a href="mailto:info@woodyspaper.com">info@woodyspaper.com</a></div>
        </div>
        <div className="wrap footer-bottom"><span>© 2026 Woody's Paper</span><span>Supply Chain Optimization v49</span></div>
      </footer>
    </main>
  )
}

export default App