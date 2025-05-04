"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

import mamaImg from "../../../public/mama2.webp"
import filhosImg from "../../../public/filhosnacao.jpg"

export default function Projects() {
    const projetos = [
        {
            title: "Cano Mama",
            description: "Com ânimo e bom humor, a Canomama reúne mais de 20 mulheres com diagnóstico de câncer de mama. Elas encontraram paz e motivação na canoagem.",
            image: mamaImg,
            imagePosition: "object-[center_10%]"
        },
        {
            title: "Filhos da Nação",
            description: "Com a RemoTerapia, transformamos a vida de crianças e adolescentes acolhidos que aguardam adoção ou reintegração familiar 🌊 Amor e inclusão.",
            image: filhosImg,
            imagePosition: "object-cover"
        }
    ]

    return (
        <section className="bg-black py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                    Projetos Sociais da CPP
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projetos.map((proj, index) => (
                        <Card key={index} className="bg-zinc-900 border border-zinc-700 shadow-md hover:shadow-xl hover:shadow-white/10 transition-all duration-300">
                            <div className="relative w-full h-60 rounded-t-xl overflow-hidden">
                                <Image
                                    src={proj.image}
                                    alt={proj.title}
                                    fill
                                    className={`object-cover ${proj.imagePosition}`}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <CardContent className="p-6 text-left">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {proj.title}
                                </h3>
                                <p className="text-zinc-300 text-sm">
                                    {proj.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
