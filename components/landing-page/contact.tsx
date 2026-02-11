import { Instagram, Mail, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    info: "carla.bio_sls@yahoo.com",
    href: "mailto:carla.bio_sls@yahoo.com",
  },
  {
    icon: Phone,
    title: "Telefone",
    info: "(53) 99929-7361",
    href: "tel:+5553999297361",
  },
  {
    icon: Instagram,
    title: "Instagram",
    info: "@carla.sfreitas_26",
    href: "https://www.instagram.com/carla.sfreitas_26/",
  },
];

const steps = [
  "Você envia as informações do seu projeto.",
  "Recebe orientação técnica inicial e próximos passos.",
  "Formalizamos proposta personalizada para execução.",
];

export function Contact() {
  return (
    <section id="contact" className="px-4 py-18 md:py-24">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="reveal-fade rounded-4xl border border-primary/20 bg-primary p-7 text-primary-foreground shadow-xl shadow-primary/20 md:p-10">
            <p className="text-sm tracking-[0.2em] text-primary-foreground/70 uppercase">Contato direto</p>
            <h2 className="mt-3 max-w-[16ch] text-3xl leading-tight text-balance md:text-5xl">Pronta para conduzir seu projeto com segurança técnica.</h2>
            <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              Entre em contato para alinhar escopo, riscos e documentação necessária. O retorno acontece em até 24 horas úteis.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full bg-white text-primary hover:bg-white/90">
                <a href="mailto:carla.bio_sls@yahoo.com">
                  <Send className="size-4" />
                  Enviar email
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/35 bg-transparent text-white hover:bg-white/12"
              >
                <a href="tel:+5553999297361">Ligar agora</a>
              </Button>
            </div>

            <div className="mt-7 space-y-3 text-sm text-primary-foreground/85">
              {steps.map((step, index) => (
                <p key={step} className="flex items-start gap-3 rounded-2xl border border-white/18 bg-white/10 px-4 py-3">
                  <span className="font-semibold text-white">{index + 1}.</span>
                  <span>{step}</span>
                </p>
              ))}
            </div>
          </article>

          <div className="space-y-4">
            {contacts.map(({ icon: Icon, title, info, href }) => (
              <a
                key={title}
                href={href}
                target={title === "Instagram" ? "_blank" : undefined}
                rel={title === "Instagram" ? "noreferrer" : undefined}
                className="reveal-fade group flex items-center gap-4 rounded-[1.4rem] border border-border/70 bg-card/85 p-5 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10 md:p-6"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/12">
                  <Icon className="size-6 text-primary" />
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-[0.15em] text-primary/75 uppercase">{title}</p>
                  <p className="mt-1 text-base text-foreground group-hover:text-primary">{info}</p>
                </div>
              </a>
            ))}

            <article className="reveal-fade rounded-[1.4rem] border border-border/70 bg-card/85 p-6 text-sm leading-relaxed text-muted-foreground shadow-lg shadow-black/5">
              Atendimento para empresas, produtores rurais e empreendimentos urbanos que precisam de regularização e estratégia ambiental.
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
