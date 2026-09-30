"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CONTACT } from "@/lib/content";

const CHANNELS = [
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, copy: CONTACT.email },
  { label: "Telefone", value: CONTACT.phone, href: CONTACT.phoneHref, copy: CONTACT.phone },
  { label: "Instagram", value: CONTACT.instagram, href: CONTACT.instagramHref, external: true },
];

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `${label} copiado` : `Copiar ${label.toLowerCase()}`}
      className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-foreground/12 bg-background text-foreground transition-[scale,background-color,color] duration-150 ease-(--ease-out) hover:bg-foreground hover:text-background active:scale-[0.96]"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={copied ? "check" : "copy"}
          initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
        >
          {copied ? <Check className="size-4" strokeWidth={2} /> : <Copy className="size-4" strokeWidth={1.5} />}
        </motion.span>
      </AnimatePresence>
      <span aria-live="polite" className="sr-only">
        {copied ? "Copiado" : ""}
      </span>
    </button>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 md:py-36">
      <div className="section-shell grid gap-14 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <h2 id="contact-title" className="pb-2 text-[3.4rem] leading-[1.02] tracking-[-0.02em] md:text-7xl lg:text-[5.2rem]">
            Vamos falar do seu <em className="text-primary">projeto?</em>
          </h2>
          <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-muted-foreground">
            Atendo empresas, produtores rurais e empreendimentos urbanos. O retorno acontece em até 24 horas úteis.
          </p>
        </Reveal>

        <RevealGroup as="ul" className="lg:col-span-7 lg:self-end" stagger={0.08}>
          {CHANNELS.map((channel) => (
            <RevealItem as="li" key={channel.label} className="border-t border-foreground/10 last:border-b">
              <div className="group relative flex items-center gap-4 py-6 md:py-8">
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noreferrer" : undefined}
                  className="flex min-w-0 flex-1 items-center gap-4 after:absolute after:inset-0 focus-visible:outline-none after:focus-visible:rounded-xl after:focus-visible:outline-2 after:focus-visible:outline-ring"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
                      {channel.label}
                    </span>
                    <span className="mt-2 block truncate font-serif text-[1.6rem] leading-tight text-foreground transition-[translate,color] duration-500 ease-(--ease-out) group-hover:translate-x-2 group-hover:text-primary sm:text-4xl md:text-[2.75rem]">
                      {channel.value}
                    </span>
                  </span>
                </a>

                {channel.copy && <CopyButton value={channel.copy} label={channel.label} />}

                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-full bg-primary max-sm:hidden text-primary-foreground transition-[rotate,scale] duration-500 ease-(--ease-out) group-hover:rotate-45"
                >
                  <ArrowUpRight className="size-5" strokeWidth={1.5} />
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
