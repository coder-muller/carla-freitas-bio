import { About } from "@/components/landing-page/about";
import { Contact } from "@/components/landing-page/contact";
import { Footer } from "@/components/landing-page/footer";
import { Header } from "@/components/landing-page/header";
import { Hero } from "@/components/landing-page/hero";
import { Marquee } from "@/components/landing-page/marquee";
import { Process } from "@/components/landing-page/process";
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
        <Process />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
