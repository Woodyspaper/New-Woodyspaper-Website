import { useState } from 'react'
import { Logo } from './Logo'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="bg-[#142f17] text-[12px] font-semibold tracking-[0.02em] text-white">
        <div className="mx-auto flex h-9 max-w-[1280px] items-center justify-between px-6">
          <div className="flex gap-7">
            <a className="text-[11px] no-underline" href="tel:7547011797">● &nbsp;(754) 701-1797</a>
            <a className="text-[11px] no-underline" href="mailto:info@woodyspaper.com">✉ &nbsp;info@woodyspaper.com</a>
          </div>
          <span className="text-[11px] uppercase tracking-[0.13em] text-white/80">
            Wholesale to Retail&nbsp; | &nbsp;South Florida
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-20 border-b border-slate-200/90 bg-white/95 backdrop-blur-[12px]">
        <div className="mx-auto flex h-[89px] max-w-[1280px] items-center justify-between px-6">
          <Logo />
          <nav
            className={`${menuOpen ? 'flex' : 'hidden'} flex-col gap-5 bg-white/95 p-4 shadow-lg md:flex md:flex-row md:items-center md:gap-[42px] md:bg-transparent md:p-0 md:shadow-none`}
            aria-label="Primary navigation"
          >
            <a className="text-base font-bold text-slate-600 no-underline transition-colors hover:text-[#40813e]" href="#products" onClick={closeMenu}>
              Products
            </a>
            <a className="flex items-center text-base font-bold text-slate-600 no-underline transition-colors hover:text-[#40813e]" href="#ai-advisor" onClick={closeMenu}>
              <span className="mr-[5px] text-[21px] text-[#438642]">⌁</span> Ask Woody
            </a>
            <a
              className="inline-flex items-center rounded-full bg-[#3f803d] px-[29px] py-[13px] text-base font-bold text-white shadow-[0_4px_8px_rgba(30,70,30,0.2)] no-underline"
              href="#contact"
              onClick={closeMenu}
            >
              Supply Inquiry
            </a>
          </nav>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white p-0 md:hidden"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="mb-1 block h-0.5 w-5 bg-slate-800" />
            <span className="mb-1 block h-0.5 w-5 bg-slate-800" />
            <span className="block h-0.5 w-5 bg-slate-800" />
          </button>
        </div>
      </header>
    </>
  )
}
