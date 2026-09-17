type WoodyMarkProps = {
  className?: string
  /** Animate the wings and bob the bird. Off for small inline glyphs. */
  animated?: boolean
}

/** Origami bald eagle — the "Ask Woody" mascot. */
export function WoodyMark({ className = '', animated = false }: WoodyMarkProps) {
  const wing = animated ? 'woody-wing' : ''

  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path d="M12 55 L38 62 L18 85 L28 65 L35 85 L42 66 L12 55 Z" fill="#ffffff" fillOpacity="0.95" stroke="#e5e7eb" strokeWidth="0.5" />
      <path d="M12 55 C25 45, 45 45, 52 48 L72 54 C68 62, 55 75, 42 72 L12 55 Z" fill="currentColor" />
      <path d="M45 46 L92 18 L75 42 L88 52 L70 54 Z" fill="currentColor" className={wing} />
      <path d="M45 46 L82 88 L65 72 L55 86 L68 54 Z" fill="#2d5229" fillOpacity="0.75" className={wing} style={animated ? { animationDelay: '0.1s' } : undefined} />
      <path d="M62 50 C65 40, 80 40, 85 50 L75 58 L65 54 L62 50 Z" fill="#ffffff" />
      <path d="M85 50 L96 54 L88 58 L85 50 Z" fill="#facc15" />
      <circle cx="75" cy="51" r="1.3" fill="#1a2e19" />
    </svg>
  )
}
