import { FileText, Leaf, Microscope } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "Atuação personalizada",
    description: "Atendimento próximo, focado no objetivo técnico de cada cliente.",
  },
  {
    icon: Microscope,
    title: "Compromisso com resultado",
    description: "Decisões baseadas em ciência, ética e padrão de qualidade.",
  },
  {
    icon: FileText,
    title: "Consultoria especializada",
    description: "Assessoria completa em licenciamento e gestão ambiental.",
  },
];

export function About() {
  return (
    <section id="about" className="px-4 py-18 md:py-24">
      <div className="section-shell">
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <article className="reveal-fade rounded-4xl border border-border/80 bg-card/80 p-7 shadow-lg shadow-black/5 md:p-9">
            <p className="text-sm tracking-[0.2em] text-primary uppercase">Sobre o trabalho</p>
            <h2 className="mt-3 max-w-[17ch] text-3xl leading-tight text-balance md:text-5xl">
              Experiência prática para acelerar aprovações ambientais.
            </h2>
            <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-muted-foreground md:text-lg">
              Com formação em Biologia e atuação em projetos ambientais desde 2004, o trabalho combina
              conhecimento técnico, estratégia documental e acompanhamento próximo para reduzir risco e prazo.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-secondary/65 p-4">
                <p className="text-3xl font-semibold text-primary">20+</p>
                <p className="mt-1 text-sm text-muted-foreground">anos de experiência</p>
              </div>
              <div className="rounded-2xl bg-secondary/65 p-4">
                <p className="text-3xl font-semibold text-primary">100%</p>
                <p className="mt-1 text-sm text-muted-foreground">foco em conformidade</p>
              </div>
            </div>
          </article>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 h-full">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="reveal-fade rounded-3xl border border-border/70 bg-card/80 p-6 shadow-lg shadow-black/5 transition-transform duration-300 hover:-translate-y-1 [animation-delay:0.12s]"
              >
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-primary/12">
                  <item.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-xl text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
