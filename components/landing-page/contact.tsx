"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aqui você pode adicionar a lógica de envio do formulário
        console.log("Form submitted:", formData)
        alert("Mensagem enviada! Entrarei em contato em breve.")
        setFormData({ name: "", email: "", phone: "", message: "" })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <section id="contact" className="py-20 px-4 bg-card">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-balance">Vamos Conversar?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                        Entre em contato para discutir seu projeto ou tirar dúvidas sobre os serviços
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-light text-foreground mb-6">Informações de Contato</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Email</p>
                                        <p className="text-muted-foreground">contato@carlafreitas.bio</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Telefone</p>
                                        <p className="text-muted-foreground">(00) 00000-0000</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Localização</p>
                                        <p className="text-muted-foreground">Atendimento em todo Brasil</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-border">
                            <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                                Respondo todas as mensagens em até 24 horas úteis. Estou à disposição para esclarecer dúvidas e
                                apresentar propostas personalizadas.
                            </p>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-foreground">
                                    Nome completo
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="border-border focus:border-primary"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-foreground">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="border-border focus:border-primary"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-foreground">
                                    Telefone
                                </Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="border-border focus:border-primary"
                                    placeholder="(00) 00000-0000"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-foreground">
                                    Mensagem
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="border-border focus:border-primary resize-none"
                                    placeholder="Conte-me sobre seu projeto ou dúvida..."
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                Enviar Mensagem
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
