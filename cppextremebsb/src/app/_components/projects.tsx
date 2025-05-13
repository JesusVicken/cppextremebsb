"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import AOS from "aos"
import "aos/dist/aos.css"

import mamaImg from "../../../public/mama2.webp"
import filhosImg from "../../../public/filhosnacao.jpg"

export default function Projects() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        })
    }, [])

    const projetos = [
        {
            title: "Cano Mama",
            description:
                "Com ânimo e bom humor, a Canomama reúne mais de 20 mulheres com diagnóstico de câncer de mama. Elas encontraram paz e motivação na canoagem💕",
            image: mamaImg,
            imagePosition: "object-[center_10%]",
        },
        {
            title: "Filhos da Nação",
            description:
                "Com a RemoTerapia, transformamos a vida de crianças e adolescentes acolhidos que aguardam adoção ou reintegração familiar. Amor e inclusão 🌊",
            image: filhosImg,
            imagePosition: "object-cover",
        },
    ]

    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
                    Projetos Sociais Apoiados pela CPP Extreme Brasília
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projetos.map((proj, index) => (
                        <Card
                            key={index}
                            className="bg-zinc-100 border border-zinc-200 shadow-md hover:shadow-xl hover:shadow-zinc-300 transition-all duration-300"
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        >
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
                                <h3 className="text-xl font-semibold text-black mb-2">
                                    {proj.title}
                                </h3>
                                <p className="text-zinc-700 text-sm">{proj.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
