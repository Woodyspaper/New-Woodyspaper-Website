import { inventory } from '../data/inventory'
import { GlassCard } from './GlassCard'
import { Reveal } from './Reveal'

export function InventorySection() {
  return (
    <Reveal as="section" id="products" className="scroll-mt-chrome px-4 py-12 sm:py-20 lg:scroll-mt-chrome-lg">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">Inventory Hub</h2>
          <div className="mx-auto h-1.5 w-12 rounded-full bg-brand-green sm:w-20" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
          {inventory.map((item) => (
            <GlassCard
              key={item.title}
              className="rounded-panel p-6 text-center transition-transform duration-200 hover:-translate-y-1.5 sm:p-10"
            >
              <div className="mx-auto mb-5 grid size-14 place-items-center rounded-card bg-brand-mist text-brand-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-7" aria-hidden="true">
                  <path d="M21 8l-9-4-9 4 9 4 9-4zM3 8v8l9 4 9-4V8M12 12v8" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-brand-green">{item.title}</h3>
              <p className="text-xs text-slate-500 sm:text-sm">{item.subtitle}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
