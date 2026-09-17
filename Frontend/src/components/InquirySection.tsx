import { useState } from 'react'
import type { FormEvent } from 'react'

export function InquirySection() {
  const [sent, setSent] = useState(false)

  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
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
  )
}
