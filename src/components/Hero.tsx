import { Github, Linkedin } from 'lucide-react'
import face from '@/assets/landing/me-pic.png'
import { inlineLink, pillButton } from '@/styles.ts'
import { CopyEmailButton } from './CopyEmailButton.tsx'

export function Hero() {
  return (
    <header className='flex flex-col gap-6'>
      <img
        src={face}
        alt='Sean Ghods'
        className='h-20 w-20 rounded-full border border-zinc-800 object-cover'
      />
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold tracking-tight text-zinc-100'>
          Sean Ghods
        </h1>
        <p className='text-lg text-zinc-400'>
          Full-stack engineer — TypeScript, React, React Native, Node.js.
        </p>
      </div>
      <p className='leading-relaxed text-zinc-400'>
        I build web and mobile products end to end. Currently a senior software
        engineer at{' '}
        <a
          href='https://x.build'
          target='_blank'
          rel='noreferrer'
          className={inlineLink}
        >
          XBuild
        </a>
        , a platform bringing AI to construction estimating. On the side I ship
        my own products — most notably{' '}
        <a
          href='https://www.statpick.ai'
          target='_blank'
          rel='noreferrer'
          className={inlineLink}
        >
          Stat Pick AI
        </a>
        , used by 8,500+ sports bettors.
      </p>
      <div className='flex items-center gap-3'>
        <a
          href='https://github.com/seanghods'
          target='_blank'
          rel='noreferrer'
          className={pillButton}
        >
          <Github size={16} />
          GitHub
        </a>
        <a
          href='https://www.linkedin.com/in/sean-ghods-577b3045/'
          target='_blank'
          rel='noreferrer'
          className={pillButton}
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
        <CopyEmailButton />
      </div>
    </header>
  )
}
