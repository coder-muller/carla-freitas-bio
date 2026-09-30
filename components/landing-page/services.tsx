"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/motion/reveal";
import { PRIMARY_CTA, SERVICES } from "@/lib/content";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function Services() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);

  // The row crossing the middle of the viewport becomes the active one.
  useEffect(() => {
    const rows = listRef.current?.querySelectorAll<HTMLLIElement>("[data-index]");
    if (!rows) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-48% 0px -48% 0px" },
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  const service = SERVICES[active];
  const Icon = service.icon;

  return (
    <section id="services" aria-labelledby="services-title" className="py-24 md:py-36">
      <div className="section-shell">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[0.72rem] tracking-[0.18em] text-muted-foreground uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            Serviços
          </p>
          <h2
            id="services-title"
            className="mt-6 max-w-[16ch] pb-1 text-5xl leading-[1.08] tracking-[-0.015em] md:text-7xl"
          >
            Do diagnóstico à <em className="text-primary">licença aprovada.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-12 lg:gap-12">
          <div aria-hidden="true" className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 flex h-[min(38rem,calc(100dvh-9rem))] flex-col overflow-hidden rounded-[2rem] bg-forest p-10 text-forest-foreground">
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  backgroundImage:
                    "repeating-radial-gradient(circle at 110% 110%, transparent 0 26px, oklch(1 0 0 / 0.045) 26px 27px)",
                }}
              />

              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={active}
                  className="relative flex h-full flex-col"
                  initial={{ opacity: 0, filter: "blur(8px)", transform: "translateY(16px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)", transform: "translateY(0px)" }}
                  exit={{ opacity: 0, filter: "blur(8px)", transform: "translateY(-10px)" }}
                  transition={{ duration: 0.45, ease: EASE_OUT }}
                >
                  <p className="font-mono text-[0.7rem] tracking-[0.18em] text-forest-foreground/60 uppercase">
                    {service.category}
                  </p>

                  <span className="mt-auto grid size-20 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Icon className="size-8" strokeWidth={1.4} />
                  </span>

                  <h3 className="mt-8 text-[2.6rem] leading-[1.05] text-balance">{service.title}</h3>
                  <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-forest-foreground/75">
                    {service.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <ol ref={listRef} className="lg:col-span-7">
            {SERVICES.map((item, index) => {
              const isActive = index === active;
              const ItemIcon = item.icon;

              return (
                <li
                  key={item.title}
                  data-index={index}
                  data-active={isActive}
                  onMouseEnter={() => setActive(index)}
                  className="group relative border-t border-foreground/10 py-7 last:border-b md:py-9"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-700 ease-(--ease-out) group-data-[active=true]:scale-x-100"
                  />
                  <div className="flex items-start gap-5 md:gap-8">
                    <span className="mt-2 w-7 shrink-0 font-mono text-xs text-muted-foreground tabular-nums md:mt-4">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="flex items-start gap-3 text-[1.9rem] leading-[1.1] text-foreground/55 lg:text-foreground/30 transition-[color,translate,scale,rotate] duration-500 ease-(--ease-out) group-data-[active=true]:translate-x-1 group-data-[active=true]:text-foreground lg:group-data-[active=true]:text-foreground md:text-[2.6rem]">
                        <span className="flex-1">{item.title}</span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="mt-1.5 size-6 shrink-0 -translate-x-2 text-primary opacity-0 transition-[opacity,translate,scale,rotate] duration-500 ease-(--ease-out) group-data-[active=true]:translate-x-0 group-data-[active=true]:opacity-100 max-lg:hidden md:mt-3"
                          strokeWidth={1.5}
                        />
                      </h3>

                      <div className="mt-4 flex items-start gap-4 lg:sr-only">
                        <span
                          aria-hidden="true"
                          className={cn(
                            "grid size-10 shrink-0 place-items-center rounded-full border transition-colors duration-500",
                            isActive
                              ? "border-transparent bg-accent text-accent-foreground"
                              : "border-foreground/12 text-muted-foreground",
                          )}
                        >
                          <ItemIcon className="size-4" strokeWidth={1.5} />
                        </span>
                        <p className="text-base leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal className="mt-14 flex flex-col items-start gap-5 md:mt-20 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
            Não encontrou exatamente o que precisa? Cada caso é avaliado individualmente.
          </p>
          <a
            href="#contact"
            className="group inline-flex h-14 items-center gap-3 rounded-full border border-foreground/15 px-7 text-base font-medium transition-[background-color,color,border-color,translate,scale,rotate] duration-300 ease-(--ease-out) hover:border-transparent hover:bg-foreground hover:text-background active:scale-[0.96]"
          >
            {PRIMARY_CTA}
            <ArrowUpRight
              className="size-4 transition-transform duration-300 ease-(--ease-out) group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.75}
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
