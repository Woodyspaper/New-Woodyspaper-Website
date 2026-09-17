import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="relative z-10 bg-brand-night pb-12 pt-24 text-center text-white sm:text-left">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-20 grid gap-16 md:grid-cols-3">
          <div className="space-y-8">
            <div className="inline-block rounded-card bg-white p-3 shadow-lg">
              <Logo />
            </div>
            <p className="mx-auto max-w-xs text-sm leading-relaxed text-slate-400 sm:mx-0">
              South Florida&rsquo;s trusted wholesale supply partner for high-volume packaging and
              tissue products.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-ultra">Area Serviced</h3>
            <p className="text-sm leading-loose text-slate-400">Serving South Florida</p>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-ultra">Contact</h3>
            <a href="tel:7547011797" className="mb-2 block text-sm font-medium text-slate-400 transition-colors hover:text-white">
              (754) 701-1797
            </a>
            <a href="mailto:info@woodyspaper.com" className="block text-sm font-medium text-slate-400 transition-colors hover:text-white">
              info@woodyspaper.com
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 text-3xs font-bold uppercase tracking-mega text-slate-600 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Woody&rsquo;s Paper</p>
          <p className="italic tracking-tight text-brand-green/40">Supply Chain Optimization</p>
        </div>
      </div>
    </footer>
  )
}
