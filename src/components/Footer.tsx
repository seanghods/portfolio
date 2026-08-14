export function Footer() {
  return (
    <footer className='flex flex-col gap-2 border-t border-zinc-900 pt-8'>
      <p className='text-sm text-zinc-500'>
        Reach me at{' '}
        <a
          href='mailto:seanxghods@gmail.com'
          className='text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors duration-150 hover:decoration-emerald-400'
        >
          seanxghods@gmail.com
        </a>{' '}
        for anything — work, projects, or just to talk shop.
      </p>
    </footer>
  )
}
