import { Leaf } from "lucide-react"
import { Badge } from "../ui/badge"

export function Footer() {
    return (
        <footer id="footer" className="py-12 px-4 bg-foreground text-background">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex items-center gap-2">
                        <Leaf className="w-6 h-6 text-primary" />
                        <span className="text-lg font-medium">Carla Freitas</span>
                    </div>

                    <Badge variant="default">
                        CRBio 45378-03D
                    </Badge>

                    <p className="text-sm text-background/70">Bióloga • Consultoria Ambiental • Sustentabilidade</p>

                    <div className="pt-4 border-t border-background/20 w-full">
                        <p className="text-xs text-background/60">
                            © {new Date().getFullYear()} Carla Freitas. Todos os direitos reservados.
                        </p>
                        <p className="text-xs text-background/60 mt-2">
                            Desenvolvido por <a href="https://www.instagram.com/coder.muller/" className="text-background/60 hover:text-background/80 transition-colors">Guilherme Müller</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
