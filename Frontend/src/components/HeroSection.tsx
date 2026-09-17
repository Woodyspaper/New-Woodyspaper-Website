export function HeroSection() {
  return (
    <section className="relative min-h-[665px] overflow-hidden bg-[radial-gradient(circle_at_7%_28%,#e9f8eb_0,rgba(233,248,235,0.72)_16%,transparent_39%),#fdfcf9]">
      <div className="pointer-events-none absolute left-[5%] top-[-10px] rotate-[30deg] text-[82px] text-[#acd2ae]/20">◇</div>
      <div className="pointer-events-none absolute bottom-[20px] right-[7%] rotate-[-20deg] text-[82px] text-[#acd2ae]/20">◇</div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-[92px] px-6 py-[100px] md:grid-cols-2 md:items-center">
        <div className="pl-[2px] animate-[enter_0.7s_ease_both]">
          <h1 className="mb-[23px] text-[clamp(3rem,4.4vw,4rem)] font-bold leading-[0.92] tracking-[-0.045em] text-[#172235]">
            Sustainably Sourced,
            <br />
            <em className="font-[inherit] italic text-[#40813e]">Responsibly</em>
            <br />
            Delivered.
          </h1>
          <p className="mb-[35px] max-w-[570px] text-[20px] leading-[1.45] tracking-[0.015em] text-[#46566d]">
            Wholesale packaging and paper solutions dispatched daily across South Florida.
          </p>

          <div className="flex flex-wrap gap-4">
            <a className="inline-flex min-w-[210px] items-center justify-center rounded-[13px] bg-[#40813e] px-[26px] py-[18px] text-[17px] font-bold text-white shadow-[0_12px_20px_rgba(39,83,37,0.18)] transition duration-200 hover:-translate-y-0.5" href="#contact">
              Check Inventory
            </a>
            <a className="inline-flex min-w-[210px] items-center justify-center rounded-[13px] border-2 border-[#e1e6ec] bg-white px-[26px] py-[18px] text-[17px] font-bold text-[#3e7b3c] transition duration-200 hover:-translate-y-0.5" href="tel:7547011797">
              Call Warehouse
            </a>
          </div>
        </div>

        <div className="relative h-[445px] overflow-hidden rounded-[45px] border-[6px] border-white shadow-[0_24px_35px_rgba(20,31,37,0.2)] animate-[enter_0.7s_0.15s_ease_both]">
          <img className="h-full w-full object-cover" src="https://woodyspaper.com/image_ba5a41.jpg" alt="Woody's Paper distribution center warehouse" />
          <div className="absolute bottom-[23px] left-[24px] flex flex-col rounded-[10px] bg-white/90 px-[18px] py-[12px] text-[#172235] shadow-[0_4px_10px_rgba(0,0,0,0.12)]">
            <b className="text-[13px]">Warehouse Direct</b>
            <span className="mt-[3px] text-[10px] text-slate-500">Optimized Fulfillment</span>
          </div>
        </div>
      </div>
    </section>
  )
}
