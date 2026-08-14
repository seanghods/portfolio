type Role = {
  company: string
  url?: string
  title: string
  description: string
}

const ROLES: Role[] = [
  {
    company: 'XBuild',
    url: 'https://x.build',
    title: 'Software Engineer',
    description:
      'AI-native software platform for construction contractors — estimating, proposals, and CRM. Backed by a16z.',
  },
  {
    company: 'Lightstrike Labs',
    title: 'Founder / Engineer',
    description:
      'Agency building web and native mobile apps for clients, from design through app store launch.',
  },
]

export function Experience() {
  return (
    <section className='flex flex-col gap-5'>
      <h2 className='text-sm font-semibold uppercase tracking-widest text-zinc-500'>
        Experience
      </h2>
      <div className='flex flex-col gap-6'>
        {ROLES.map(role => (
          <div key={role.company} className='flex flex-col gap-1'>
            <div className='flex items-baseline gap-2'>
              {role.url ? (
                <a
                  href={role.url}
                  target='_blank'
                  rel='noreferrer'
                  className='font-semibold text-zinc-100 underline decoration-zinc-800 underline-offset-4 transition-colors duration-150 hover:decoration-emerald-400'
                >
                  {role.company}
                </a>
              ) : (
                <span className='font-semibold text-zinc-100'>
                  {role.company}
                </span>
              )}
              <span className='text-sm text-zinc-500'>{role.title}</span>
            </div>
            <p className='text-sm leading-relaxed text-zinc-400'>
              {role.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
