import { FileText, Leaf, Microscope } from "lucide-react";

import { CountUp } from "@/components/motion/count-up";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ScrollText } from "@/components/motion/scroll-text";
import { CONTACT, SERVICES } from "@/lib/content";

const PRINCIPLES = [
  {
    icon: Leaf,
    title: "Atuação personalizada",
    description: "Atendimento próximo e direto, com uma estratégia desenhada para o objetivo de cada projeto.",
  },
  {
    icon: Microscope,
    title: "Compromisso com resultado",
    description: "Decisões baseadas em ciência, ética e padrão técnico, para reduzir risco e prazo.",
  },
  {
    icon: FileText,
    title: "Consultoria especializada",
    description: "Assessoria completa em licenciamento e gestão ambiental, da vistoria à aprovação.",
  },
];

const YEARS = new Date().getFullYear() - CONTACT.since;

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-28 md:py-40">
      <div className="section-shell">
        <h2 id="about-title" className="sr-only">
          Sobre Carla Freitas
        </h2>

        <ScrollText
          className="max-w-[24ch] font-serif text-[2.35rem] leading-[1.12] tracking-[-0.01em] text-foreground md:text-6xl lg:text-7xl"
          text={`Desde ${CONTACT.since}, transformo exigências ambientais em *processos claros.* Cada projeto começa no campo, passa pela ciência e termina em *documentos que se sustentam.*`}
        />

        <div className="mt-20 grid gap-16 md:mt-28 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <p className="flex items-start font-serif leading-[0.8] text-primary">
                <CountUp to={YEARS} from={0} duration={2.4} className="text-[8.5rem] md:text-[11rem]" />
                <span className="mt-4 text-5xl italic md:mt-6 md:text-6xl">anos</span>
              </p>
              <p className="mt-4 max-w-[28ch] text-base leading-relaxed text-muted-foreground">
                de experiência em projetos ambientais, com formação em Biologia e registro {CONTACT.crbio}.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 flex items-baseline gap-4 border-t border-foreground/10 pt-6">
              <CountUp to={SERVICES.length} duration={1.6} className="font-serif text-6xl leading-none text-foreground" />
              <span className="text-base text-muted-foreground">frentes de atuação técnica</span>
            </Reveal>
          </div>

          <RevealGroup as="ul" className="md:col-span-6 md:col-start-7" stagger={0.1}>
            {PRINCIPLES.map(({ icon: Icon, title, description }) => (
              <RevealItem
                as="li"
                key={title}
                className="group grid grid-cols-[auto_1fr] gap-5 border-t border-foreground/10 py-8 first:border-t-0 first:pt-0 md:gap-7"
              >
                <span className="grid size-14 place-items-center rounded-full border border-primary/20 text-primary transition-[background-color,color,translate,scale,rotate] duration-500 ease-(--ease-out) group-hover:-rotate-12 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-3xl leading-tight text-foreground md:text-[2.1rem]">{title}</h3>
                  <p className="mt-2 max-w-[42ch] text-base leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
