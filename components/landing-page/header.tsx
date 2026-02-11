"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Sobre", link: "#about" },
  { name: "Serviços", link: "#services" },
  { name: "Contato", link: "#contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="section-shell">
        <div className="grain-mask overflow-hidden rounded-[1.75rem] border border-primary/15 bg-card/90 shadow-lg shadow-black/5 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4 px-5 py-3 md:px-7 md:py-4">
            <a
              href="#hero"
              className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="grid size-10 place-items-center rounded-full bg-primary/12 text-primary">
                <Logo size={18} />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold tracking-[0.18em] text-primary/80 uppercase">
                  Carla Freitas
                </span>
                <span className="block text-xs text-muted-foreground">Consultoria Ambiental</span>
              </span>
            </a>

            <nav className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="rounded-full px-4 py-2 text-sm text-foreground/85 transition-colors duration-200 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button asChild size="lg" className="rounded-full px-6 text-sm">
                <Link href="#contact">Agendar conversa</Link>
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((current) => !current)}
            >
              {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          <div
            className={cn(
              "overflow-hidden border-t border-primary/10 px-5 transition-all duration-300 md:hidden",
              isMobileMenuOpen ? "max-h-80 py-4 opacity-100" : "max-h-0 py-0 opacity-0",
            )}
          >
            <nav className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="block rounded-xl px-4 py-3 text-sm text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button asChild className="mt-2 h-11 w-full rounded-xl">
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Falar por contato direto
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
