import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    ClipboardCheck,
    FileText,
    Scissors,
    Sprout,
    FileSearch,
    Building2,
    Recycle,
    Leaf,
    FileCheck,
    ShieldAlert,
    Trees,
} from "lucide-react"

export function Services() {
    const services = [
        {
            icon: ClipboardCheck,
            title: "Licenciamento Ambiental",
            description: "Assessoria completa para obtenção de licenças ambientais junto aos órgãos competentes, garantindo que seu empreendimento atenda às exigências legais e minimize impactos ambientais.",
        },
        {
            icon: FileText,
            title: "Laudo de Cobertura Vegetal",
            description: "Elaboração de laudos técnicos detalhados sobre a composição e o estado da vegetação existente, indispensáveis para processos de licenciamento e intervenções em áreas com vegetação nativa.",
        },
        {
            icon: Scissors,
            title: "Projetos de Poda, Transplante, Extração de Árvores e Plantio Compensatório",
            description: "Planejamento e execução de projetos voltados à poda, transplante ou remoção de árvores — incluindo espécies nativas e protegidas como figueiras, butiazeiros e corticeiras do banhado — conforme normas ambientais e municipais.",
        },
        {
            icon: Sprout,
            title: "Recuperação de Áreas Degradadas (PRAD)",
            description: "Desenvolvimento e acompanhamento de Projetos de Recuperação de Áreas Degradadas, promovendo a restauração ecológica e o equilíbrio ambiental em áreas impactadas por atividades humanas.",
        },
        {
            icon: FileSearch,
            title: "Estudo de Impacto Ambiental (EIA/RIMA)",
            description: "Realização de estudos técnicos que avaliam os impactos potenciais de empreendimentos no meio ambiente, com recomendações de medidas mitigadoras e compensatórias.",
        },
        {
            icon: Building2,
            title: "Licenciamento e Regularização de Loteamentos",
            description: "Apoio técnico para a regularização ambiental de áreas urbanas e rurais, assegurando que os loteamentos estejam em conformidade com a legislação vigente.",
        },
        {
            icon: Recycle,
            title: "Plano de Gerenciamento de Resíduos (PGRS)",
            description: "Elaboração de planos personalizados para o gerenciamento correto dos resíduos sólidos, visando reduzir impactos ambientais e atender às normas de sustentabilidade.",
        },
        {
            icon: FileCheck,
            title: "Cadastro Ambiental Rural (CAR)",
            description: "Realização e atualização do Cadastro Ambiental Rural, com análises técnicas para adequação de propriedades rurais às normas do Código Florestal.",
        },
        {
            icon: ShieldAlert,
            title: "Defesa de Multas e Notificações Ambientais",
            description: "Elaboração de defesas técnicas e recursos administrativos contra autos de infração, multas ou notificações ambientais, assegurando o direito de defesa e buscando soluções eficazes junto aos órgãos competentes.",
        },
        {
            icon: Trees,
            title: "Inventário Florestal e Arbóreo",
            description: "Levantamento quantitativo e qualitativo da vegetação, identificando espécies, diâmetro, altura e estado fitossanitário.",
        },
    ]

    return (
        <section id="services" className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-balance">Serviços Oferecidos</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                        Soluções personalizadas para atender às necessidades específicas de cada projeto
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
