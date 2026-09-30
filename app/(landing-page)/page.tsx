import { About } from "@/components/landing-page/about";
import { Contact } from "@/components/landing-page/contact";
import { Footer } from "@/components/landing-page/footer";
import { Header } from "@/components/landing-page/header";
import { Hero } from "@/components/landing-page/hero";
import { Marquee } from "@/components/landing-page/marquee";
import { Services } from "@/components/landing-page/services";
import { MotionProvider } from "@/components/motion/motion-provider";

export default function Home() {
  return (
    <MotionProvider>
      <Header />
      <main className="relative overflow-x-clip">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
