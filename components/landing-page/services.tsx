import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TreePine, ClipboardCheck, BookOpen, Users } from "lucide-react"

export function Services() {
    const services = [
        {
            icon: TreePine,
            title: "Estudos Ambientais",
            description:
                "Levantamentos de fauna e flora, estudos de impacto ambiental (EIA/RIMA) e relatórios técnicos especializados.",
            items: ["EIA/RIMA", "Inventário de Biodiversidade", "Monitoramento Ambiental"],
        },
        {
            icon: ClipboardCheck,
            title: "Licenciamento Ambiental",
            description: "Assessoria completa em processos de licenciamento junto aos órgãos ambientais competentes.",
            items: ["Licença Prévia", "Licença de Instalação", "Licença de Operação"],
        },
        {
            icon: BookOpen,
            title: "Consultoria Técnica",
            description: "Orientação especializada para empresas e projetos que necessitam de adequação ambiental.",
            items: ["Planos de Manejo", "Gestão Ambiental", "Adequação Legal"],
        },
        {
            icon: Users,
            title: "Educação Ambiental",
            description: "Programas e treinamentos voltados para conscientização e capacitação ambiental.",
            items: ["Palestras", "Workshops", "Treinamentos Corporativos"],
        },
    ]

    return (
        <section id="servicos" className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-balance">Serviços Oferecidos</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                        Soluções personalizadas para atender às necessidades específicas de cada projeto
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <service.icon className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-foreground">{service.title}</CardTitle>
                                <CardDescription className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
