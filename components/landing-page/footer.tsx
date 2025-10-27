import { Leaf } from "lucide-react"

export function Footer() {
    return (
        <footer id="footer" className="py-12 px-4 bg-foreground text-background">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex items-center gap-2">
                        <Leaf className="w-6 h-6 text-primary" />
                        <span className="text-lg font-medium">Carla Freitas</span>
                    </div>

                    <p className="text-sm text-background/70">Bióloga • Consultoria Ambiental • Sustentabilidade</p>

                    <div className="pt-4 border-t border-background/20 w-full">
                        <p className="text-xs text-background/60">
                            © {new Date().getFullYear()} Carla Freitas. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
