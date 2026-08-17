import { Background } from './components/Background.tsx'
import { Reveal } from './components/Reveal.tsx'
import { Hero } from './components/Hero.tsx'
import { Projects } from './components/Projects.tsx'
import { OpenSource } from './components/OpenSource.tsx'
import { Experience } from './components/Experience.tsx'
import { Footer } from './components/Footer.tsx'

function App() {
  return (
    <main className='page-in mx-auto flex max-w-2xl flex-col gap-12 px-6 pb-10 pt-10 lg:pb-14 lg:pt-14'>
      <Background />
      <Hero />
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <OpenSource />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </main>
  )
}

export default App
