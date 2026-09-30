"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useRef } from "react";

import { Logo } from "@/components/logo";
import { CONTACT, NAV_ITEMS } from "@/lib/content";
import { mapRange } from "@/lib/utils";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, (value) => `${mapRange(value, [0, 1], [45, 0])}%`);
  const leafRotate = useTransform(scrollYProgress, (value) => mapRange(value, [0, 1], [-40, 0]));

  return (
    <footer ref={ref} id="footer" className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="relative overflow-hidden rounded-[2rem] bg-forest text-forest-foreground md:rounded-[2.5rem]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 85% -10%, transparent 0 30px, oklch(1 0 0 / 0.035) 30px 31px)",
          }}
        />

        <div className="section-shell relative pt-16 md:pt-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <motion.span
                className="grid size-14 place-items-center rounded-full bg-accent text-accent-foreground"
                style={reduce ? undefined : { rotate: leafRotate }}
              >
                <Logo size={22} />
              </motion.span>
              <p className="mt-6 max-w-[26ch] font-serif text-3xl leading-tight text-forest-foreground md:text-4xl">
                Ciência aplicada a cada etapa do seu projeto ambiental.
              </p>
            </div>

            <nav aria-label="Rodapé" className="md:col-span-3 md:col-start-7">
              <p className="font-mono text-[0.7rem] tracking-[0.18em] text-forest-foreground/55 uppercase">Navegação</p>
              <ul className="mt-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="inline-block py-2.5 text-base text-forest-foreground/85 transition-colors duration-200 hover:text-accent"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="md:col-span-3">
              <p className="font-mono text-[0.7rem] tracking-[0.18em] text-forest-foreground/55 uppercase">Contato</p>
              <ul className="mt-3">
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="inline-block py-2.5 break-all text-forest-foreground/85 transition-colors duration-200 hover:text-accent">
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a href={CONTACT.phoneHref} className="inline-block py-2.5 text-forest-foreground/85 transition-colors duration-200 hover:text-accent">
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.instagramHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block py-2.5 text-forest-foreground/85 transition-colors duration-200 hover:text-accent"
                  >
                    {CONTACT.instagram}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-forest-foreground/12 pt-6 text-sm text-forest-foreground/60 md:mt-24 md:flex-row md:items-center md:justify-between">
            <p suppressHydrationWarning>
              © {new Date().getFullYear()} Carla Freitas. {CONTACT.crbio}.
            </p>
            <div className="flex items-center justify-between gap-6 md:justify-end">
              <a
                href="https://www.instagram.com/coder.muller/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-forest-foreground"
              >
                Desenvolvido por Guilherme Müller
              </a>
              <a
                href="#hero"
                aria-label="Voltar ao topo"
                className="group grid size-11 place-items-center rounded-full border border-forest-foreground/15 text-forest-foreground transition-[background-color,color,scale] duration-200 ease-(--ease-out) hover:bg-forest-foreground hover:text-forest active:scale-[0.96]"
              >
                <ArrowUp
                  className="size-4 transition-transform duration-300 ease-(--ease-out) group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
              </a>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="relative mt-6 overflow-hidden md:mt-10">
          <motion.p
            className="text-center font-serif text-[17.5vw] leading-[0.8] font-medium tracking-[-0.035em] whitespace-nowrap text-forest-foreground/[0.1]"
            style={reduce ? undefined : { y }}
          >
            Carla Freitas
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
