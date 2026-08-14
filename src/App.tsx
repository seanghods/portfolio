import { Background } from './components/Background.tsx'
import { Hero } from './components/Hero.tsx'
import { Projects } from './components/Projects.tsx'
import { Experience } from './components/Experience.tsx'
import { Footer } from './components/Footer.tsx'

function App() {
  return (
    <main className='mx-auto flex max-w-2xl flex-col gap-16 px-6 py-16 lg:py-24'>
      <Background />
      <Hero />
      <Projects />
      <Experience />
      <Footer />
    </main>
  )
}

export default App
