import { useEffect, useRef } from 'react'

export function Background() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    let x = 0
    let y = 0

    // paint on the next frame rather than on every mousemove event
    const paint = () => {
      frame = 0
      const el = spotlightRef.current
      if (!el) return
      el.style.background = `radial-gradient(520px circle at ${x}px ${y}px, rgb(52 211 153 / 0.12), transparent 70%)`
    }

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      if (!frame) frame = requestAnimationFrame(paint)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
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
