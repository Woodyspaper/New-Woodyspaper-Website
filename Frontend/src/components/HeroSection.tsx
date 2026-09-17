import { useTilt } from '../hooks/useTilt'

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000'

export function HeroSection() {
  const tiltRef = useTilt<HTMLDivElement>()

  return (
    <section className="px-4 py-10 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 text-center sm:gap-20 lg:grid-cols-2 lg:text-left">
        <div>
          <h1 className="mb-6 text-4xl font-bold leading-hero tracking-tight sm:text-5xl lg:text-6xl">
            Sustainably Sourced,
            <br />
            <span className="font-light italic text-brand-green">Responsibly</span> Delivered.
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0 lg:text-xl">
            Wholesale packaging and paper solutions dispatched daily across South Florida.
          </p>
          <div className="flex flex-col justify-center gap-4 px-6 sm:flex-row sm:px-0 lg:justify-start">
            <a
              href="#contact"
              className="rounded-card bg-brand-green px-10 py-4 text-lg font-bold text-white shadow-cta transition-all hover:bg-brand-green-dark active:scale-95"
            >
              Check Inventory
            </a>
            <a
              href="tel:7547011797"
              className="rounded-card border-2 border-brand-green px-10 py-4 text-lg font-bold text-brand-green transition-all hover:bg-brand-mist active:scale-95"
            >
              Call Warehouse
            </a>
          </div>
        </div>

        <div className="tilt-stage mt-8 lg:mt-0">
          <div ref={tiltRef} className="tilt-target relative mx-auto max-w-lg lg:max-w-none">
            <img
              src="https://woodyspaper.com/image_ba5a41.jpg"
              alt="Woody's Paper distribution centre in South Florida"
              loading="eager"
              onError={(event) => {
                event.currentTarget.src = FALLBACK_IMAGE
              }}
              className="aspect-4/3 w-full rounded-slab border-6 border-white object-cover shadow-2xl sm:rounded-slab-lg"
            />
            <div className="absolute -bottom-4 -right-4 hidden rounded-slab border border-slate-50 bg-white p-4 shadow-2xl xs:block sm:-bottom-8 sm:-right-8 sm:p-7">
              <p className="text-3xs font-black uppercase tracking-tighter text-brand-green sm:text-xs">
                Warehouse Direct
              </p>
              <p className="mt-1 text-lg font-bold leading-none text-slate-900 sm:text-2xl">
                Optimized Fulfillment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
