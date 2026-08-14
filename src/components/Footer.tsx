import { inlineLink } from '@/styles.ts'

export function Footer() {
  return (
    <footer className='flex flex-col gap-2 border-t border-zinc-900 pt-8'>
      <p className='text-sm text-zinc-500'>
        Reach me at{' '}
        <a
          href='mailto:seanxghods@gmail.com'
          className={`${inlineLink} text-sm`}
        >
          seanxghods@gmail.com
        </a>{' '}
        for anything — work, projects, or just to talk shop.
      </p>
    </footer>
  )
}
