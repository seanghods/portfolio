import { Background } from './components/Background.tsx'
import { Hero } from './components/Hero.tsx'
import { Projects } from './components/Projects.tsx'
import { OpenSource } from './components/OpenSource.tsx'
import { Experience } from './components/Experience.tsx'

function App() {
  return (
    <main className='mx-auto flex max-w-2xl flex-col gap-12 px-6 pb-16 pt-10 lg:pb-24 lg:pt-14'>
      <Background />
      <Hero />
      <Projects />
      <OpenSource />
      <Experience />
    </main>
  )
}

export default App
