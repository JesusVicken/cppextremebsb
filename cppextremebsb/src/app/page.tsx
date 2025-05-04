import { About } from "./_components/about"
import { Hero } from "./_components/hero"
import Projects from "./_components/projects"
import { Services } from "./_components/services"
import { Tours } from "./_components/tours"
import { Footer } from "./_components/footer"




export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Tours />
      <Projects />
      <Footer />
    </main>

  )
}