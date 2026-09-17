import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { WoodyMark } from './WoodyMark'

const links = [
  { href: '#products', label: 'Products' },
  { href: '#ai-advisor', label: 'Ask Woody', mark: true },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', menuOpen)
    return () => document.body.classList.remove('overflow-hidden')
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header className="fixed inset-x-0 top-utility z-50 h-header border-b border-slate-200 bg-white/95 backdrop-blur-lg lg:h-header-lg">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-10 font-semibold text-slate-600 lg:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="group flex items-center gap-2 transition-colors hover:text-brand-green">
                {link.mark ? <WoodyMark className="size-6 text-brand-green transition-transform group-hover:rotate-6" /> : null}
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-brand-green px-7 py-2.5 text-white shadow-md transition-all hover:bg-brand-green-dark active:scale-95"
            >
              Supply Inquiry
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="p-2 text-brand-green lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="size-8" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16m-7 6h7" />}
            </svg>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="fixed inset-x-0 top-chrome z-40 flex flex-col gap-8 border-b border-slate-200 bg-white/98 px-6 py-10 text-center text-xl font-bold text-slate-700 shadow-2xl backdrop-blur-xl lg:hidden"
      >
        <a href="#products" onClick={close}>Inventory Catalog</a>
        <a href="#ai-advisor" onClick={close} className="flex items-center justify-center gap-2">
          <WoodyMark className="size-7 text-brand-green" />
          Talk to Woody
        </a>
        <a href="#contact" onClick={close} className="text-brand-green">Direct Inquiry</a>
      </div>
    </>
  )
}
