"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/logo";
import { CONTACT, NAV_ITEMS, PRIMARY_CTA } from "@/lib/content";
import { cn } from "@/lib/utils";

const EASE_DRAWER = [0.32, 0.72, 0, 1] as const;

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(current > 24);
    if (current > 480 && current > previous + 4) setHidden(true);
    else if (current < previous - 4) setHidden(false);
  });

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-500 ease-(--ease-drawer) md:px-5 md:pt-4",
          hidden && !open && "-translate-y-[120%]",
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 rounded-full border pr-2 pl-4 transition-[background-color,border-color,box-shadow,color] duration-500 ease-(--ease-out) md:pl-5",
            open
              ? "border-transparent bg-transparent text-forest-foreground"
              : scrolled
                ? "border-foreground/8 bg-card/70 shadow-[0_10px_40px_-12px_oklch(0.3_0.05_160/0.25)] backdrop-blur-xl backdrop-saturate-150"
                : "border-transparent bg-transparent",
          )}
        >
          <a
            href="#hero"
            className="group flex items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4"
            onClick={() => setOpen(false)}
          >
            <span
              className={cn(
                "grid size-9 place-items-center rounded-full transition-colors duration-300",
                open ? "bg-forest-foreground/10 text-accent" : "bg-primary text-primary-foreground",
              )}
            >
              <Logo size={15} className="transition-transform duration-500 ease-(--ease-out) group-hover:-rotate-12" />
            </span>
            <span className="font-serif text-[1.35rem] leading-none font-medium tracking-tight">Carla Freitas</span>
          </a>

          <nav aria-label="Principal" className="hidden md:block" onMouseLeave={() => setHovered(null)}>
            <ul className="flex items-center">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="relative">
                  {hovered === item.href && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-full bg-primary/8"
                      transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                    />
                  )}
                  <a
                    href={item.href}
                    onMouseEnter={() => setHovered(item.href)}
                    onFocus={() => setHovered(item.href)}
                    className="relative block rounded-full px-4 py-2 text-sm text-foreground/80 transition-colors duration-200 hover:text-foreground focus-visible:outline-2"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden h-12 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-[translate,scale,rotate,background-color] duration-200 ease-(--ease-out) hover:bg-foreground active:scale-[0.97] md:inline-flex"
            >
              {PRIMARY_CTA}
            </a>

            <button
              ref={toggleRef}
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
              className={cn(
                "relative grid size-12 place-items-center rounded-full transition-[translate,scale,rotate,background-color] duration-200 ease-(--ease-out) active:scale-[0.94] md:hidden",
                open ? "bg-forest-foreground/10" : "bg-foreground/6",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute h-[1.5px] w-5 rounded-full bg-current transition-transform duration-300 ease-(--ease-out)",
                  open ? "rotate-45" : "-translate-y-[4px]",
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  "absolute h-[1.5px] w-5 rounded-full bg-current transition-transform duration-300 ease-(--ease-out)",
                  open ? "-rotate-45" : "translate-y-[4px]",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-40 flex flex-col bg-forest px-6 pt-28 pb-10 text-forest-foreground md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0 round 0 0 2rem 2rem)" }}
            animate={{ clipPath: "inset(0 0 0% 0 round 0 0 0rem 0rem)", transition: { duration: 0.6, ease: EASE_DRAWER } }}
            exit={{ clipPath: "inset(0 0 100% 0 round 0 0 2rem 2rem)", transition: { duration: 0.35, ease: EASE_DRAWER } }}
          >
            <nav aria-label="Menu móvel">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item, index) => (
                  <li key={item.href} className="overflow-clip">
                    <motion.a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-2 font-serif text-6xl leading-[1.05]"
                      initial={{ transform: "translateY(110%)" }}
                      animate={{ transform: "translateY(0%)" }}
                      exit={{ opacity: 0, transition: { duration: 0.15 } }}
                      transition={{ duration: 0.7, delay: 0.18 + index * 0.06, ease: [0.23, 1, 0.32, 1] }}
                    >
                      {item.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>

            <motion.div
              className="mt-auto space-y-6"
              initial={{ opacity: 0, transform: "translateY(12px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex h-14 items-center justify-center rounded-full bg-accent text-base font-medium text-accent-foreground transition-transform duration-150 active:scale-[0.97]"
              >
                {PRIMARY_CTA}
              </a>
              <div className="flex flex-col gap-1 text-sm text-forest-foreground/70">
                <a href={`mailto:${CONTACT.email}`} className="py-1">
                  {CONTACT.email}
                </a>
                <a href={CONTACT.phoneHref} className="py-1">
                  {CONTACT.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
