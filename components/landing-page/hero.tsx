import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative px-4 pb-18 pt-16 md:pb-24 md:pt-20">
      <div className="section-shell">
        <div className="reveal-fade relative overflow-hidden rounded-4xl border border-primary/20 bg-card/80 p-8 shadow-xl shadow-black/5 md:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(47,107,82,0.22),transparent_64%)]"
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              <Logo size={13} />
              Consultoria Ambiental
            </span>

            <h1 className="mt-8 max-w-[13ch] text-5xl leading-[0.98] tracking-[-0.03em] text-foreground text-balance md:text-7xl lg:text-[5.4rem]">
              Carla Freitas
            </h1>
            <p className="mt-5 max-w-[45ch] text-lg leading-relaxed text-muted-foreground md:text-xl">
              Decisões ambientais com rigor técnico, clareza estratégica e execução confiável para empresas e
              proprietários.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-8 text-sm font-semibold tracking-wide">
                <Link href="#contact">
                  Solicitar avaliação
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-primary/30 bg-transparent px-8 text-sm font-semibold text-primary hover:bg-primary/10"
              >
                <Link href="#services">Ver serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
