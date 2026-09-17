import type { ReactNode } from 'react'
import { useGlassGlow } from '../hooks/useGlassGlow'

type GlassCardProps = {
  children: ReactNode
  className?: string
}

/**
 * Frosted panel with a cursor-tracking highlight. The surface is plain Tailwind;
 * only the highlight (`glass-glow`) needs custom CSS, since it paints a
 * pseudo-element from JS-set custom properties.
 */
export function GlassCard({ children, className = '' }: GlassCardProps) {
  const onMouseMove = useGlassGlow<HTMLDivElement>()

  return (
    <div
      onMouseMove={onMouseMove}
      className={`glass-glow relative overflow-hidden border border-white/40 bg-white/70 shadow-glass backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  )
}
