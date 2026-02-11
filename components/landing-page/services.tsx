import {
  Building2,
  ClipboardCheck,
  FileCheck,
  FileSearch,
  FileText,
  Recycle,
  Scissors,
  ShieldAlert,
  Sprout,
  Trees,
} from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Licenciamento Ambiental",
    description:
      "Assessoria completa para obtenção de licenças, com orientação técnica e alinhamento às exigências legais.",
  },
  {
    icon: FileText,
    title: "Laudo de Cobertura Vegetal",
    description:
      "Laudos técnicos sobre composição e estado da vegetação para processos de licenciamento e intervenções.",
  },
  {
    icon: Scissors,
    title: "Projetos de Poda, Transplante, Extração de Árvores e Plantio Compensatório",
    description:
      "Planejamento e acompanhamento técnico de manejo arbóreo conforme normas ambientais e municipais.",
  },
  {
    icon: Sprout,
    title: "Recuperação de Áreas Degradadas (PRAD)",
    description:
      "Desenvolvimento de projetos para restauração ecológica e recuperação de áreas impactadas.",
  },
  {
    icon: FileSearch,
    title: "Estudo de Impacto Ambiental (EIA/RIMA)",
    description:
      "Estudos técnicos com avaliação de impactos, medidas mitigadoras e estratégias compensatórias.",
  },
  {
    icon: Building2,
    title: "Licenciamento e Regularização de Loteamentos",
    description:
      "Suporte técnico para regularização ambiental de áreas urbanas e rurais conforme legislação vigente.",
  },
  {
    icon: Recycle,
    title: "Plano de Gerenciamento de Resíduos (PGRS)",
    description:
      "Planos personalizados para gerenciamento correto de resíduos com foco em sustentabilidade e conformidade.",
  },
  {
    icon: FileCheck,
    title: "Cadastro Ambiental Rural (CAR)",
    description:
      "Cadastro e atualização de propriedades rurais com análise técnica alinhada ao Código Florestal.",
  },
  {
    icon: ShieldAlert,
    title: "Defesa de Multas e Notificações Ambientais",
    description:
      "Defesas técnicas e recursos administrativos para autos de infração, multas e notificações.",
  },
  {
    icon: Trees,
    title: "Inventário Florestal e Arbóreo",
    description:
      "Levantamento quantitativo e qualitativo da vegetação com identificação de espécies e estado fitossanitário.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-4 py-18 md:py-24">
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm tracking-[0.2em] text-primary uppercase">Serviços</p>
            <h2 className="mt-3 max-w-[20ch] text-3xl leading-tight text-balance md:text-5xl">Consultoria ambiental para decisões complexas.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="reveal-fade group rounded-[1.45rem] border border-border/70 bg-card/80 p-6 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${Math.min(index * 70, 400)}ms` }}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/12 transition-colors duration-300 group-hover:bg-primary/18">
                  <service.icon className="size-6 text-primary" />
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg leading-snug text-foreground md:text-xl">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
