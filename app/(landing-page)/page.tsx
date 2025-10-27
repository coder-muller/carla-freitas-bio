import { Hero } from "@/components/landing-page/hero"
import { About } from "@/components/landing-page/about"
import { Services } from "@/components/landing-page/services"
import { Contact } from "@/components/landing-page/contact"
import { Footer } from "@/components/landing-page/footer"
import { Header } from "@/components/landing-page/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
