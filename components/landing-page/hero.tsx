import { ArrowRight } from "lucide-react";

import { Magnetic } from "@/components/motion/magnetic";
import { TreeRings } from "@/components/landing-page/tree-rings";
import { PRIMARY_CTA } from "@/lib/content";
import { cn } from "@/lib/utils";

const HEADLINE = [
  { text: "Regularização" },
  { text: "ambiental" },
  { text: "com" },
  { text: "olhar", italic: true },
  { text: "de", italic: true },
  { text: "bióloga.", italic: true },
];

export function Hero() {
  return (
    <section id="hero" className="relative isolate flex min-h-[100dvh] items-end overflow-clip pt-28 pb-14 md:items-center md:pb-20">
      <TreeRings className="absolute -top-[4.5rem] -right-[39vw] -z-10 aspect-square w-[118vw] opacity-70 sm:-top-16 sm:-right-[22vw] sm:w-[88vw] md:top-1/2 md:-right-[12vw] md:w-[70vw] md:-translate-y-1/2 md:opacity-100 lg:right-[-6vw] lg:w-[min(56vw,50rem)]" />

      <div className="section-shell">
        <p
          className="fade-up flex items-center gap-3 font-mono text-[0.72rem] tracking-[0.18em] text-muted-foreground uppercase"
          style={{ "--d": "80ms" } as React.CSSProperties}
        >
          <span aria-hidden="true" className="h-px w-8 bg-current" />
          Bióloga e consultora ambiental
        </p>

        <h1 className="mt-6 max-w-[14ch] text-[3.25rem] leading-[1.02] tracking-[-0.02em] text-foreground sm:text-7xl md:max-w-[15ch] lg:text-[6.5rem] lg:leading-[0.98]">
          {HEADLINE.map((word, index) => (
            <span key={word.text}>
              <span className="mask-line">
                <span
                  className={cn("mask-word", word.italic && "pr-[0.06em] text-primary italic")}
                  style={{ "--i": index } as React.CSSProperties}
                >
                  {word.text}
                </span>
              </span>{" "}
            </span>
          ))}
        </h1>

        <p
          className="fade-up mt-7 max-w-[42ch] text-lg leading-relaxed text-muted-foreground md:text-xl"
          style={{ "--d": "650ms" } as React.CSSProperties}
        >
          Licenciamento, laudos e projetos ambientais conduzidos com rigor técnico e acompanhamento próximo, do campo
          ao protocolo.
        </p>

        <div
          className="fade-up mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
          style={{ "--d": "800ms" } as React.CSSProperties}
        >
          <Magnetic className="w-full sm:w-auto">
            <a
              href="#contact"
              className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-primary pr-2 pl-7 text-base font-medium text-primary-foreground shadow-[0_18px_40px_-18px_oklch(0.43_0.075_160/0.7)] transition-[transform,background-color] duration-200 ease-(--ease-out) hover:bg-foreground active:scale-[0.97] sm:w-auto"
            >
              {PRIMARY_CTA}
              <span className="grid size-10 place-items-center overflow-hidden rounded-full bg-primary-foreground/12">
                <ArrowRight
                  className="size-4 transition-transform duration-300 ease-(--ease-out) group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </span>
            </a>
          </Magnetic>

          <a
            href="#services"
            className="group relative inline-flex h-14 items-center justify-center self-center px-2 text-base font-medium text-foreground sm:self-auto"
          >
            Ver serviços
            <span
              aria-hidden="true"
              className="absolute inset-x-2 bottom-3.5 h-px origin-left scale-x-100 bg-current transition-transform duration-500 ease-(--ease-out) group-hover:origin-right group-hover:scale-x-0"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
