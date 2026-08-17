import { useEffect, useRef } from 'react'

export function Background() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = spotlightRef.current
      if (!el) return
      el.style.background = `radial-gradient(520px circle at ${e.clientX}px ${e.clientY}px, rgb(52 211 153 / 0.12), transparent 70%)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div aria-hidden className='pointer-events-none fixed inset-0 -z-10'>
      {/* dot grid, fading out toward the bottom */}
      <div
        className='absolute inset-0'
        style={{
          backgroundImage:
            'radial-gradient(rgb(255 255 255 / 0.055) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'linear-gradient(to bottom, black, transparent 85%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black, transparent 85%)',
        }}
      />
      {/* emerald glow behind the hero */}
      <div
        className='absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2'
        style={{
          background:
            'radial-gradient(ellipse at center, rgb(52 211 153 / 0.09), transparent 65%)',
        }}
      />
      {/* cursor spotlight */}
      <div ref={spotlightRef} className='absolute inset-0' />
    </div>
  )
}
