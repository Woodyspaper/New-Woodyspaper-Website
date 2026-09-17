import { useState } from 'react'
import type { FormEvent } from 'react'

export function AdvisorSection() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const askWoody = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!question.trim()) return
    setAnswer('For current stock, case quantities, and a warehouse-direct quote, send this request to our supply team below.')
  }

  return (
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
  )
}
