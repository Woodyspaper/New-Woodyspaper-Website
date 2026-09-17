import { useState } from 'react'
import type { FormEvent } from 'react'

export function InquirySection() {
  const [sent, setSent] = useState(false)

  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="bg-[#f5f8f3] py-[76px]" id="contact">
      <div className="mx-auto grid max-w-[1280px] gap-[84px] rounded-[70px] bg-[#437a3d] px-6 py-[72px] text-white shadow-[0_24px_45px_rgba(41,82,38,0.2)] lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="mb-[27px] text-[clamp(2.5rem,4vw,3.6rem)] font-bold italic tracking-[-0.04em] text-white">
            Supply Inquiry.
          </h2>
          <p className="max-w-[360px] text-[19px] text-white/90">
            Get verified wholesale pricing and local delivery schedules from our team.
          </p>
          <a className="mt-[30px] block text-[34px] font-bold text-white no-underline tracking-[-0.04em]" href="tel:7547011797">
            (754) 701-1797
          </a>
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#dcfce7]/70">
            South Florida Warehouse Hub
          </span>
        </div>

        <div className="rounded-[48px] bg-white/5 p-[43px] shadow-[0_22px_40px_rgba(20,47,23,0.25)]">
          {sent ? (
            <div className="rounded-[32px] bg-white p-8 text-[#172235] shadow-[0_12px_25px_rgba(0,0,0,0.08)]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf7eb] text-xl font-bold text-[#3f803d]">✓</span>
              <h3 className="mt-4 text-2xl font-bold text-[#172235]">Inquiry Received.</h3>
              <p className="mt-2 text-base text-slate-600">
                Our warehouse team will follow up with current pricing and availability.
              </p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={submitInquiry}>
              <input
                required
                aria-label="Business name"
                placeholder="Business Name"
                className="w-full rounded-[16px] border-0 bg-[#f7f9fa] px-[20px] py-[18px] text-[#172235] outline-none"
              />
              <input
                required
                aria-label="Contact email"
                type="email"
                placeholder="Contact Email"
                className="w-full rounded-[16px] border-0 bg-[#f7f9fa] px-[20px] py-[18px] text-[#172235] outline-none"
              />
              <div className="relative">
                <textarea
                  required
                  aria-label="Product list"
                  placeholder="Type or paste your product list here..."
                  className="min-h-[150px] w-full resize-none rounded-[16px] border-0 bg-[#f7f9fa] px-[20px] py-[18px] text-[#172235] outline-none"
                />
                <button
                  type="button"
                  className="absolute bottom-[31px] right-[14px] rounded-[10px] border border-slate-200 bg-white px-3 py-2 text-[11px] font-bold text-slate-500"
                >
                  ✨ AI Refine
                </button>
              </div>
              <button className="inline-flex w-full items-center justify-center rounded-[13px] bg-[#40813e] px-[26px] py-[18px] text-[17px] font-bold text-white shadow-[0_12px_20px_rgba(39,83,37,0.18)] transition hover:-translate-y-0.5" type="submit">
                Connecting Warehouse...
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
