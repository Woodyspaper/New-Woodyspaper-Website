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
    <section className="advisor relative overflow-hidden bg-[#142f17] py-[76px] text-white" id="ai-advisor">
      <div className="mx-auto grid max-w-[1280px] gap-[100px] px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <div className="flex items-center gap-4">
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white/10" aria-hidden="true">
              <svg className="h-14 w-14" viewBox="0 0 100 100">
                <path d="M12 55 L38 62 L18 85 L28 65 L35 85 L42 66 L12 55 Z" fill="#fff" stroke="#e5e7eb" />
                <path d="M12 55 C25 45 45 45 52 48 L72 54 C68 62 55 75 42 72 L12 55 Z" fill="#437a3d" />
                <path d="M45 46 L92 18 L75 42 L88 52 L70 54 Z" fill="#437a3d" />
                <path d="M45 46 L82 88 L65 72 L55 86 L68 54 Z" fill="#2d5229" />
                <path d="M62 50 C65 40 80 40 85 50 L75 58 L65 54 Z" fill="#fff" />
                <path d="M85 50 L96 54 L88 58 Z" fill="#facc15" />
                <circle cx="75" cy="51" r="1.3" fill="#1a2e19" />
              </svg>
            </div>
            <div>
              <h2 className="m-0 text-[clamp(2.3rem,5vw,4.2rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white">
                “Woody”
                <br />
                <em className="italic text-[#86bd83]">the Advisor</em>
              </h2>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#a8d3a6]">Inventory Expert</span>
            </div>
          </div>

          <p className="mt-[25px] max-w-[440px] text-[17px] leading-[1.6] text-[#d9e5da]">
            Describe your specific needs. Woody will cross-reference wholesale SKUs in our warehouse to suggest the perfect match.
          </p>
          <small className="mt-[30px] block max-w-[420px] text-[10px] leading-[1.55] text-[#88a38a]">
            Professional Disclosure: Catalog reference provided for estimation. Confirm live stock availability and final wholesale pricing via inquiry.
          </small>

          <form className="mt-[24px]" onSubmit={askWoody}>
            <textarea
              id="question"
              aria-label="Ask Woody about inventory"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Consult Woody on technical stock requirements..."
              className="min-h-[92px] w-full rounded-[10px] border border-slate-200 bg-[#fafbfa] p-4 text-[#172235] outline-none transition focus:border-[#74a873] focus:shadow-[0_0_0_3px_rgba(64,129,62,0.1)]"
            />
            <button
              className="mt-[14px] inline-flex min-w-[170px] items-center justify-center rounded-[13px] bg-[#40813e] px-5 py-[13px] text-[14px] font-bold text-white transition hover:-translate-y-0.5"
              type="submit"
            >
              Talk to Woody
            </button>
          </form>
        </div>

        <div className="relative z-10">
          <div
            className={answer ? 'border-l-4 border-[#40813e] bg-[rgba(240,253,244,0.55)] p-8 text-left text-[#536175] shadow-[0_12px_20px_rgba(0,0,0,0.12)]' : 'rounded-[12px] bg-[#f1f6f1] p-[18px] text-[13px] text-[#66748a]'}
          >
            {answer ? (
              <>
                <b className="text-[#3f803d]">Woody's Logistics Insight</b>
                <p className="mt-[6px] leading-[1.5]">{answer}</p>
              </>
            ) : (
              <p>Woody's matches will appear here.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
