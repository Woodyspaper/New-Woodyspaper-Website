export function Logo() {
  return (
    <a
      className="logo relative flex h-[50px] w-[166px] items-center overflow-hidden text-white"
      href="#top"
      aria-label="Woody's Paper home"
    >
      <span className="mr-[3px] font-[italic] text-[21px] tracking-[-0.17em]">WP</span>
      <span className="flex flex-col">
        <b className="block text-[11px] font-bold uppercase tracking-[0.01em]">WOODY'S PAPER</b>
        <small className="mt-[2px] block text-[5px] uppercase tracking-[0.12em] text-white/80">
          Renewably Sourced Products
        </small>
      </span>
      <i className="pointer-events-none" />
    </a>
  )
}
