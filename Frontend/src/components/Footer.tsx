import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-[#0a110a] pt-[78px]">
      <div className="mx-auto grid max-w-[1280px] gap-[80px] px-6 pb-[65px] md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="w-fit rounded-[14px] bg-white p-[7px]">
            <Logo />
          </div>
          <p className="mt-[27px] max-w-[315px] text-[13px] leading-[1.9] text-[#88938c]">
            South Florida's trusted wholesale supply partner for high-volume packaging and tissue products.
          </p>
        </div>

        <div>
          <h4 className="mb-[25px] text-[11px] font-bold uppercase tracking-[0.13em] text-white">Area Serviced</h4>
          <p className="text-[13px] leading-[1.9] text-[#88938c]">Serving South Florida</p>
        </div>

        <div>
          <h4 className="mb-[25px] text-[11px] font-bold uppercase tracking-[0.13em] text-white">Contact</h4>
          <a className="block text-[13px] leading-[1.9] text-[#88938c] no-underline" href="tel:7547011797">(754) 701-1797</a>
          <a className="block text-[13px] leading-[1.9] text-[#88938c] no-underline" href="mailto:info@woodyspaper.com">info@woodyspaper.com</a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 pb-[10px] pt-[28px] text-[11px] uppercase tracking-[0.25em] text-[#465149]">
        <span>© 2026 Woody's Paper</span>
        <span className="italic tracking-0 text-[rgba(67,122,61,0.5)]">Supply Chain Optimization v49</span>
      </div>
    </footer>
  )
}
