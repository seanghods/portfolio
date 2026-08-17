import { ArrowUpRight } from 'lucide-react'
import claudecraftLogo from '@/assets/projects/claudecraft-logo.png'

const MERGED_PRS =
  'https://github.com/levy-street/world-of-claudecraft/pulls?q=is%3Apr+author%3Aseanghods+is%3Amerged'

const STACK = ['TypeScript', 'Three.js', 'WebSockets', 'PostgreSQL']

export function OpenSource() {
  return (
    <section className='flex flex-col gap-5'>
      <h2 className='text-sm font-semibold uppercase tracking-widest text-zinc-500'>
        Open Source
      </h2>
      <a
        href={MERGED_PRS}
        target='_blank'
        rel='noreferrer'
        className='group flex flex-col gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 transition-colors duration-150 hover:border-emerald-400/70 hover:bg-zinc-900/70 hover:animate-border-glow motion-reduce:hover:animate-none'
      >
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            {/* wide wordmark, so it gets a tile rather than the round avatar */}
            <img
              src={claudecraftLogo}
              alt='World of Claudecraft logo'
              className='h-10 w-16 rounded-lg border border-zinc-800 bg-zinc-950/60 object-contain p-1'
            />
            <span className='text-lg font-semibold text-zinc-100'>
              World of Claudecraft
            </span>
          </div>
          <ArrowUpRight
            size={18}
            className='text-zinc-600 transition-colors duration-150 group-hover:text-emerald-400'
          />
        </div>
        <span className='text-sm font-medium text-emerald-400'>
          108 merged PRs · 5th of 54 contributors
        </span>
        <p className='text-sm leading-relaxed text-zinc-400'>
          The first vibe-coded MMORPG — 2,100+ stars. Worked primarily on PvP:
          new battlegrounds, smart queueing, honor tiers, and diminishing-return
          ladders. Also contributed to class balance, bug fixes, and combat
          performance.
        </p>
        <div className='flex flex-wrap gap-2'>
          {STACK.map(tech => (
            <span
              key={tech}
              className='rounded-md border border-zinc-800 px-2 py-0.5 text-xs text-zinc-500'
            >
              {tech}
            </span>
          ))}
        </div>
      </a>
    </section>
  )
}
