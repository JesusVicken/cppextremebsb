import { About } from "./_components/about"
import { Hero } from "./_components/hero"
import Projects from "./_components/projects"
import { Services } from "./_components/services"
import { Tours } from "./_components/tours"
import { Footer } from "./_components/footer"
import CheckVaa from "./_components/checkVaa"
import { ParallaxWrapper } from "./_components/ParallaxWrapper"

export default function Home() {
  return (
    <main>

      <ParallaxWrapper>
        <Projects />
      </ParallaxWrapper>

      <Hero />
      <About />
      <Tours />
      <Services />
      <CheckVaa />

      <Footer />
    </main>
  )
}
