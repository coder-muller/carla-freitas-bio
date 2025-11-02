"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-6xl mx-auto w-full">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                        <Image
                            src="/leaf.png"
                            alt="Carla Freitas Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-light text-foreground tracking-tight text-balance">
                            Carla Freitas
                        </h1>
                        <p className="text-xl md:text-2xl text-primary font-medium tracking-wide">BIÓLOGA</p>
                    </div>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
                        Consultoria ambiental completa, com soluções técnicas e atendimento personalizado para garantir o sucesso e a regularidade do seu projeto.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Entre em Contato
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                            onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Conheça os Serviços
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
