import { useState } from 'react'
import type { FormEvent } from 'react'
import { refineInquiry } from '../services/advisor'
import { INQUIRY_ADDRESS, submitInquiry } from '../services/inquiries'
import { Reveal } from './Reveal'

const fieldClasses =
  'w-full rounded-card border-0 bg-slate-50 px-6 py-5 text-ink outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-brand-green'

export function InquirySection() {
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')
  const [status, setStatus] = useState<'idle' | 'opening' | 'handed-off' | 'error'>('idle')
  const [mailtoHref, setMailtoHref] = useState('')
  const [refining, setRefining] = useState(false)

  const send = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('opening')
    try {
      setMailtoHref(await submitInquiry({ company, email, details }))
      setStatus('handed-off')
    } catch {
      setStatus('error')
    }
  }

  const refine = async () => {
    if (!details.trim() || refining) return
    setRefining(true)
    try {
      setDetails(await refineInquiry(details))
    } finally {
      setRefining(false)
    }
  }

  return (
    <Reveal as="section" id="contact" className="scroll-mt-chrome px-4 py-12 sm:py-24 lg:scroll-mt-chrome-lg">
      <div className="relative mx-auto grid max-w-6xl gap-12 overflow-hidden rounded-slab bg-brand-green p-8 text-white shadow-panel sm:gap-24 sm:rounded-slab-lg sm:p-20 lg:grid-cols-2">
        <div className="absolute right-0 top-0 size-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />

        <div className="z-10 text-center lg:text-left">
          <h2 className="mb-8 text-4xl font-bold italic leading-tight sm:text-6xl">Supply Inquiry.</h2>
          <p className="mx-auto mb-12 max-w-md text-lg leading-relaxed text-green-50/90 sm:text-xl lg:mx-0">
            Get verified wholesale pricing and local delivery schedules from our team.
          </p>
          <a
            href="tel:7547011797"
            className="mb-4 block text-3xl font-bold tracking-tight transition-colors hover:text-brand-leaf sm:text-4xl"
          >
            (754) 701-1797
          </a>
          <p className="text-sm font-black uppercase tracking-ultra text-green-100/60">
            South Florida Warehouse Hub
          </p>
        </div>

        <div className="z-10 rounded-panel bg-white p-6 text-ink shadow-2xl sm:rounded-slab sm:p-12">
          {status === 'handed-off' ? (
            <div className="py-12 text-center" aria-live="polite">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-mist text-xl font-bold text-brand-green">
                ✓
              </span>
              <h3 className="mt-4 text-2xl font-bold">Your email is ready to send.</h3>
              <p className="mt-2 text-base text-slate-600">
                We&rsquo;ve opened your email app with this inquiry filled in. Press send and our
                warehouse team will follow up with current pricing and availability.
              </p>
              <p className="mt-6 text-sm text-slate-500">
                Nothing opened? Email{' '}
                <a href={mailtoHref} className="font-bold text-brand-green underline">
                  {INQUIRY_ADDRESS}
                </a>{' '}
                or call{' '}
                <a href="tel:7547011797" className="font-bold text-brand-green underline">
                  (754) 701-1797
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={send} className="space-y-5">
              <input
                required
                aria-label="Business name"
                placeholder="Business Name"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className={fieldClasses}
              />
              <input
                required
                type="email"
                aria-label="Contact email"
                placeholder="Contact Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={fieldClasses}
              />
              <div className="relative">
                <textarea
                  required
                  aria-label="Product list"
                  placeholder="Type or paste your product list here..."
                  value={details}
                  onChange={(event) => setDetails(event.target.value)}
                  className={`${fieldClasses} h-40 resize-none pb-16`}
                />
                <button
                  type="button"
                  onClick={refine}
                  disabled={refining || !details.trim()}
                  className="absolute bottom-4 right-4 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-600 shadow-sm transition-all hover:border-brand-green hover:text-brand-green disabled:opacity-50 active:scale-95"
                >
                  {refining ? '✨ Refining…' : '✨ AI Refine'}
                </button>
              </div>

              {status === 'error' ? (
                <p role="alert" className="text-sm font-semibold text-red-600">
                  We couldn&rsquo;t open your email app. Email {INQUIRY_ADDRESS} or call
                  (754) 701-1797 and we&rsquo;ll take the order directly.
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === 'opening'}
                className="w-full rounded-card bg-brand-green py-5 text-lg font-bold text-white shadow-cta transition-all hover:bg-brand-green-dark disabled:opacity-50 active:scale-98"
              >
                {status === 'opening' ? 'Opening your email app…' : 'Send Inquiry by Email'}
              </button>

              <p className="text-center text-xs leading-relaxed text-slate-400">
                This opens your own email app with the inquiry filled in — you press send.
                Prefer to talk? Call (754) 701-1797.
              </p>
            </form>
          )}
        </div>
      </div>
    </Reveal>
  )
}
