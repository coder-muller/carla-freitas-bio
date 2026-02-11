import { About } from "@/components/landing-page/about";
import { Contact } from "@/components/landing-page/contact";
import { Footer } from "@/components/landing-page/footer";
import { Header } from "@/components/landing-page/header";
import { Hero } from "@/components/landing-page/hero";
import { Services } from "@/components/landing-page/services";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip pb-2">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[780px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(circle_at_top,rgba(47,107,82,0.18),transparent_60%)]"
      />
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
