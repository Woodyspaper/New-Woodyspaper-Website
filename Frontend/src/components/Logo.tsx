type LogoProps = {
  className?: string
  /** Inverted lockup for use on dark backgrounds. */
  tone?: 'light' | 'dark'
}

export function Logo({ className = '', tone = 'light' }: LogoProps) {
  const wordmark = tone === 'light' ? 'text-ink' : 'text-white'
  const tagline = tone === 'light' ? 'text-slate-400' : 'text-white/60'

  return (
    <a href="#top" aria-label="Woody's Paper — home" className={`group flex items-center gap-3 ${className}`}>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-green text-white shadow-cta transition-transform duration-200 group-active:scale-95">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-6" aria-hidden="true">
          <path d="M21 8l-9-4-9 4 9 4 9-4zM3 8v8l9 4 9-4V8M12 12v8" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-bold tracking-tight ${wordmark}`}>Woody&rsquo;s Paper</span>
        <span className={`mt-1 text-5xs font-bold uppercase tracking-ultra ${tagline}`}>
          Renewably Sourced Products
        </span>
      </span>
    </a>
  )
}
