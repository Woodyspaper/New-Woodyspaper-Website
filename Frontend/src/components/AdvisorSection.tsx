import { useState } from 'react'
import type { FormEvent } from 'react'
import { askWoody } from '../services/advisor'
import type { AdvisorResult } from '../services/advisor'
import { GlassCard } from './GlassCard'
import { Reveal } from './Reveal'
import { WoodyMark } from './WoodyMark'

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

export function AdvisorSection() {
  const [question, setQuestion] = useState('')
  const [result, setResult] = useState<AdvisorResult | null>(null)
  const [thinking, setThinking] = useState(false)
  const [error, setError] = useState('')

  const consult = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!question.trim() || thinking) return

    setThinking(true)
    setError('')
    try {
      setResult(await askWoody(question))
    } catch {
      setError('Consultation service is operating in manual mode. Please submit an inquiry below.')
    } finally {
      setThinking(false)
    }
  }

  return (
    <Reveal as="section" id="ai-advisor" className="scroll-mt-chrome px-4 py-12 sm:py-20 lg:scroll-mt-chrome-lg">
      <GlassCard className="mx-auto max-w-6xl rounded-panel border-brand-green/15 p-6 shadow-ai-glow sm:rounded-slab-lg sm:p-16">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-8 flex animate-bob flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
              <div className="flex size-28 shrink-0 items-center justify-center rounded-card bg-brand-green/10 text-brand-green">
                <WoodyMark animated className="size-25" />
              </div>
              <div>
                <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  &ldquo;Woody&rdquo; <br className="hidden sm:block" />
                  <span className="text-brand-green">the Advisor</span>
                </h2>
                <p className="mt-2 text-xs font-black uppercase tracking-ultra text-slate-400">
                  Inventory Expert
                </p>
              </div>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Describe your specific needs. Woody will cross-reference wholesale SKUs in our
              warehouse to suggest the perfect match.
            </p>
            <p className="mb-8 border-l-2 border-slate-100 pl-4 text-3xs italic leading-tight text-slate-400">
              Professional Disclosure: Catalog reference provided for estimation. Confirm live stock
              availability and final wholesale pricing via inquiry.
            </p>

            <form onSubmit={consult} className="space-y-4">
              <textarea
                id="advisor-question"
                aria-label="Ask Woody about inventory"
                rows={3}
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Consult Woody on technical stock requirements..."
                className="w-full resize-none rounded-card border border-slate-200 px-5 py-4 text-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-brand-green"
              />
              <button
                type="submit"
                disabled={thinking || !question.trim()}
                className={`flex w-full items-center justify-center gap-2 rounded-card bg-slate-900 py-5 font-bold text-white shadow-lg transition-all hover:bg-black disabled:opacity-50 active:scale-98 ${
                  thinking ? 'animate-thinking' : ''
                }`}
              >
                {thinking ? 'Consulting the catalog…' : 'Talk to Woody'}
              </button>
            </form>
          </div>

          <div className="lg:col-span-3">
            {result ? (
              <div className="flex h-full flex-col gap-6" aria-live="polite">
                <div className="rounded-panel border border-green-100/50 bg-green-50/50 p-6 sm:p-8">
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xs font-bold uppercase tracking-ultra text-brand-green">
                      Inventory Match Index
                    </h3>
                    <span className="rounded-full border border-slate-100 bg-white/80 px-3 py-1.5 text-3xs font-black uppercase tracking-tighter text-slate-400">
                      Estimated Market Quote
                    </span>
                  </div>

                  <p className="mb-6 text-sm italic leading-relaxed text-slate-800 sm:text-base">
                    {result.summary}
                  </p>

                  {result.matches.length > 0 ? (
                    <ul className="scrollbar-brand grid max-h-100 gap-4 overflow-y-auto pr-3">
                      {result.matches.map((match) => (
                        <li
                          key={match.id}
                          className="flex items-center justify-between gap-6 rounded-card border border-green-100 bg-white p-4 text-2xs shadow-sm transition-all hover:border-brand-green sm:text-xs"
                        >
                          <div>
                            <span className="mb-0.5 block font-black uppercase text-brand-green/40">
                              {match.id}
                            </span>
                            <span className="font-bold text-slate-800">{match.description}</span>
                          </div>
                          <div className="shrink-0 text-right">
                            <span className="block font-bold text-brand-green">
                              {currency.format(match.price)}
                            </span>
                            <span className="text-4xs font-bold uppercase text-slate-400">
                              {match.unit}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="p-6 text-center text-xs italic text-slate-400">
                      No direct SKU match found. Please submit a professional inquiry for custom sourcing.
                    </p>
                  )}
                </div>

                <div className="rounded-panel border border-blue-100/50 bg-blue-50/50 p-6 sm:p-8">
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-ultra text-blue-600">
                    Woody&rsquo;s Logistics Insight
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-800 sm:text-base">{result.logistics}</p>
                </div>
              </div>
            ) : (
              <div className="flex h-full min-h-75 flex-col items-center justify-center rounded-panel border-2 border-dashed border-slate-200 p-8 text-center text-sm italic text-slate-400">
                {error || "Woody's matches will appear here."}
              </div>
            )}
          </div>
        </div>
      </GlassCard>
    </Reveal>
  )
}
