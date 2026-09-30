"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

import { Reveal } from "@/components/motion/reveal";

const STEPS = [
  {
    title: "Conte o projeto",
    description: "Envie as informações básicas do empreendimento ou da propriedade.",
  },
  {
    title: "Receba a orientação",
    description: "Você recebe uma leitura técnica inicial, com riscos e próximos passos.",
  },
  {
    title: "Siga com a proposta",
    description: "Formalizamos uma proposta sob medida para a execução do trabalho.",
  },
];

function Node({ progress, at }: { progress: MotionValue<number>; at: number }) {
  const scale = useTransform(progress, [at - 0.08, at], [0.4, 1]);
  const opacity = useTransform(progress, [at - 0.08, at], [0, 1]);

  return (
    <span className="relative grid size-4 place-items-center rounded-full border border-foreground/20 bg-background">
      <motion.span className="size-2.5 rounded-full bg-accent" style={{ scale, opacity }} />
    </span>
  );
}

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const line = reduce ? scrollYProgress : progress;

  return (
    <section aria-labelledby="process-title" className="py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <h2 id="process-title" className="max-w-[18ch] pb-1 text-5xl leading-[1.08] tracking-[-0.015em] md:text-6xl">
            Começar é simples. <em className="text-primary">Três passos.</em>
          </h2>
        </Reveal>

        <ol ref={ref} className="relative mt-14 grid gap-12 pl-10 md:mt-20 md:grid-cols-3 md:gap-10 md:pt-12 md:pl-0">
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-foreground/10 md:top-[7px] md:right-0 md:bottom-auto md:left-0 md:h-px md:w-auto" />
          <motion.span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-primary md:hidden"
            style={{ scaleY: line }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute top-[7px] right-0 left-0 hidden h-px origin-left bg-primary md:block"
            style={{ scaleX: line }}
          />

          {STEPS.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="absolute top-1.5 -left-10 md:-top-12 md:left-0">
                <Node progress={line} at={(index + 0.35) / STEPS.length} />
              </span>
              <Reveal delay={index * 0.08}>
                <h3 className="text-3xl leading-tight md:text-4xl">{step.title}</h3>
                <p className="mt-3 max-w-[32ch] text-base leading-relaxed text-muted-foreground">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
