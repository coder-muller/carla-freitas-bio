import { Leaf, Microscope, FileText } from "lucide-react"

export function About() {
    const highlights = [
        {
            icon: Leaf,
            title: "Atuação Personalizada",
            description: "Atendimento próximo e comprometido com as necessidades de cada cliente e projeto.",
        },
        {
            icon: Microscope,
            title: "Compromisso com o Resultado",
            description: "Dedicação, ética e excelência em todas as etapas do trabalho ambiental.",
        },
        {
            icon: FileText,
            title: "Consultoria Especializada",
            description: "Assessoria completa em licenciamento e gestão ambiental",
        },
    ]

    return (
        <section id="about" className="py-20 px-4 bg-card">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-balance">Sobre o Trabalho</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                        Com formação sólida em Biologia e experiência em projetos ambientais, ofereço serviços especializados que
                        aliam conhecimento científico e prática sustentável.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-secondary/50 transition-colors"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <item.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-medium text-foreground mb-2">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-pretty">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
