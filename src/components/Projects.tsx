import { ArrowUpRight } from 'lucide-react'

type Project = {
  name: string
  url: string
  description: string
  highlight?: string
  stack: string[]
}

const PROJECTS: Project[] = [
  {
    name: 'Stat Pick AI',
    url: 'https://www.statpick.ai',
    description:
      'AI-powered player prop research for NBA, NFL, WNBA, and MLB. Daily AI-generated picks, per-prop analysis and chat, live odds, and a fully graded public track record — on web and iOS.',
    highlight: '8,500+ users · 30,000+ AI analyses generated',
    stack: [
      'Next.js',
      'React Native (Expo)',
      'Express',
      'MongoDB',
      'Claude API',
    ],
  },
  {
    name: 'LiftRight AI',
    url: 'https://liftright-front.vercel.app',
    description:
      'Upload a video of your lift and get AI form analysis with personalized coaching cues. In-browser video processing keeps uploads fast and private.',
    stack: ['React', 'Node.js', 'FFmpeg (WASM)', 'Stripe'],
  },
]

export function Projects() {
  return (
    <section className='flex flex-col gap-5'>
      <h2 className='text-sm font-semibold uppercase tracking-widest text-zinc-500'>
        Projects
      </h2>
      <div className='flex flex-col gap-4'>
        {PROJECTS.map(project => (
          <a
            key={project.name}
            href={project.url}
            target='_blank'
            rel='noreferrer'
            className='group flex flex-col gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 transition-colors duration-150 hover:border-zinc-700 hover:bg-zinc-900/70'
          >
            <div className='flex items-center justify-between'>
              <span className='text-lg font-semibold text-zinc-100'>
                {project.name}
              </span>
              <ArrowUpRight
                size={18}
                className='text-zinc-600 transition-colors duration-150 group-hover:text-emerald-400'
              />
            </div>
            {project.highlight && (
              <span className='text-sm font-medium text-emerald-400'>
                {project.highlight}
              </span>
            )}
            <p className='text-sm leading-relaxed text-zinc-400'>
              {project.description}
            </p>
            <div className='flex flex-wrap gap-2'>
              {project.stack.map(tech => (
                <span
                  key={tech}
                  className='rounded-md border border-zinc-800 px-2 py-0.5 text-xs text-zinc-500'
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
