import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'

/**
 * hidden  — below the fold, waiting
 * instant — on screen at load, so it just shows; the page fade covers it
 * scroll  — scrolled into view, eases up
 */
type Phase = 'hidden' | 'instant' | 'scroll'

export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<Phase>('hidden')

  // layout effect, not effect: the in-view decision has to land before paint
  // or on-screen sections flash hidden for a frame
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setPhase('instant')
      return
    }

    if (el.getBoundingClientRect().top < window.innerHeight) {
      setPhase('instant')
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setPhase('scroll')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={phase === 'instant' ? undefined : 'reveal'}
      data-shown={phase === 'scroll'}
    >
      {children}
    </div>
  )
}
