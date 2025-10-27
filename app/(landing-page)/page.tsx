import { Hero } from "@/components/landing-page/hero"
import { About } from "@/components/landing-page/about"
import { Services } from "@/components/landing-page/services"
import { Contact } from "@/components/landing-page/contact"
import { Footer } from "@/components/landing-page/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
