import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer id="footer" className="px-4 pb-10 pt-6 md:pb-12">
      <div className="section-shell">
        <div className="grain-mask overflow-hidden rounded-[1.9rem] border border-primary/15 bg-foreground px-6 py-8 text-background shadow-xl shadow-black/20 md:px-10 md:py-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-primary/20 text-primary">
                <Logo size={18} />
              </span>
              <div>
                <p className="text-lg">Carla Freitas</p>
                <p className="text-sm text-background/70">Bióloga • Consultoria Ambiental</p>
              </div>
            </div>

            <div className="rounded-full border border-background/25 px-4 py-2 text-sm text-background/90">CRBio 45378-03D</div>

            <a
              href="https://www.instagram.com/coder.muller/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-background/20 px-4 py-2 text-sm text-background/75 transition-colors hover:text-background"
            >
              Desenvolvido por Guilherme Müller
            </a>
          </div>

          <div className="mt-7 border-t border-background/20 pt-5 text-center text-xs text-background/60 md:text-left">
            © {new Date().getFullYear()} Carla Freitas. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
