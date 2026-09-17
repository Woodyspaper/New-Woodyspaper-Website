import { useCallback } from 'react'
import type { MouseEvent } from 'react'

/**
 * Feeds cursor position into the --mouse-x / --mouse-y custom properties that
 * the `glass-glow` utility paints its radial highlight with.
 */
export function useGlassGlow<T extends HTMLElement = HTMLDivElement>() {
  return useCallback((event: MouseEvent<T>) => {
    const target = event.currentTarget
    const rect = target.getBoundingClientRect()
    target.style.setProperty('--mouse-x', `${((event.clientX - rect.left) / rect.width) * 100}%`)
    target.style.setProperty('--mouse-y', `${((event.clientY - rect.top) / rect.height) * 100}%`)
  }, [])
}
