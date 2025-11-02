"use client"

import { Mail, Phone, Instagram } from "lucide-react"

export function Contact() {
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
    ]

    return (
        <section id="contact" className="py-24 px-6 bg-card">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                    Vamos Conversar?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
                    Entre em contato para discutir seu projeto ou tirar dúvidas sobre os serviços.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {contacts.map(({ icon: Icon, title, info, href }) => (
                        <a
                            key={title}
                            href={href}
                            className="group flex flex-col items-center justify-center rounded-2xl border border-border bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 p-8"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-medium text-foreground mb-1">{title}</h3>
                            <p className="text-muted-foreground text-sm">{info}</p>
                        </a>
                    ))}
                </div>

                <div className="pt-10 mt-16 border-t border-border max-w-2xl mx-auto">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Respondo todas as mensagens em até <span className="text-primary font-medium">24 horas úteis</span>.
                        Estou à disposição para esclarecer dúvidas e apresentar propostas personalizadas.
                    </p>
                </div>
            </div>
        </section>
    )
}
