"use client"

import useEmblaCarousel from "embla-carousel-react"
import {
    ChevronLeft,
    ChevronRight,
    Clock,
    Dumbbell,
    Waves,
    Sunrise,
    Moon,
    Route,
    Trophy,
    Handshake,
    HeartPulse,
    Users
} from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react"
import canoa3Img from '../../../public/canoa3.jpg'
import kidsImg from '../../../public/kids.png'
import compImg from '../../../public/competicao.jpg'
import noiteImg from '../../../public/noite.jpg'
import expImg from '../../../public/experimental.jpg'
import remadaImg from '../../../public/remadalinda.jpg'
import avancadoImg from '../../../public/avancado.jpg'
import Image from "next/image"

const services = [
    {
        title: "Aula Experimental Grátis",
        description: "Participação em uma aula introdutória com orientações básicas sobre remada, segurança e ambientação na canoa havaiana.",
        duration: "Todos os dias da semana - 6:20, 7:40, 12:15 e 17:45",
        icon: <Waves className="w-6 h-6 text-white" />,
        linkText: "Olá, vi no site sobre a Aula Experimental e gostaria de mais informações.",
        image: remadaImg
    },
    {
        title: "Treinamento Regular",
        description: "Sessões de treino em grupo com foco em condicionamento físico, técnica de remada e resistência, voltado para iniciantes e intermediários.",
        duration: "Todos os dias da Semana - 6:20, 7:40 e 17:45",
        icon: <Dumbbell className="w-6 h-6 text-white" />,
        linkText: "Olá, vi no site sobre Treinamento Regular e gostaria de mais informações.",
        image: canoa3Img
    },
    {
        title: "Treinamento Avançado",
        description: "Treinos de alta performance voltados para atletas com experiência, com foco em provas de longa distância, velocidade e técnica refinada.",
        duration: "Qui - 6:20 | Sáb - 7:30",
        icon: <Trophy className="w-6 h-6 text-white" />,
        linkText: "Olá, vi no site sobre Treinamento Avançado e gostaria de mais informações.",
        image: avancadoImg
    },
    {
        title: "Remada ao Nascer do Sol",
        description: "Remada especial ao amanhecer, com paisagem incrível e conexão com a natureza, ideal para iniciantes ou quem busca uma experiência única.",
        duration: "Seg a Sex - 6:20",
        icon: <Sunrise className="w-6 h-6 text-white" />,
        linkText: "Olá, vi no site sobre a Remada ao Nascer do Sol e gostaria de mais informações.",
        image: canoa3Img
    },
    {
        title: "Expedições",
        description: "Passeios programados em grupo por rotas especiais com paradas em pontos turísticos, ideal para aventura e contato com a natureza.",
        duration: "Consultar disponibilidade",
        icon: <Route className="w-6 h-6 text-white" />,
        linkText: "Olá, vi no site sobre Expedições e gostaria de mais informações.",
        image: expImg
    },
    {
        title: "Eventos Corporativos",
        description: "Atividades de integração para empresas com foco em trabalho em equipe, cooperação e superação em meio à natureza.",
        duration: "Sob consulta",
        icon: <Handshake className="w-6 h-6 text-white" />,
        linkText: "Olá, vi no site sobre Eventos Corporativos e gostaria de mais informações.",
        image: canoa3Img
    },
    {
        title: "Remada Noturna",
        description: "Experiência única de remar sob as estrelas, com todo o suporte e segurança. Ideal para quem busca algo fora do comum.",
        duration: "Qui - 17:45",
        icon: <Moon className="w-6 h-6 text-white" />,
        linkText: "Olá, vi no site sobre a Remada Noturna e gostaria de mais informações.",
        image: noiteImg
    },
    {
        title: "Treino para Competições",
        description: "Programa de preparação física e técnica voltado especificamente para atletas que competem em provas nacionais ou internacionais.",
        duration: "Qui - 6:20 | Sáb - 7:30",
        icon: <Trophy className="w-6 h-6 text-white" />,
        linkText: "Olá, vi no site sobre Treino para Competições e gostaria de mais informações.",
        image: compImg
    },
    {
        title: "Condicionamento Funcional",
        description: "Sessões focadas no fortalecimento muscular, equilíbrio e preparo físico complementar à remada.",
        duration: "Seg a Sex - horários variados",
        icon: <HeartPulse className="w-6 h-6 text-white" />,
        linkText: "Olá, vi no site sobre Condicionamento Funcional e gostaria de mais informações.",
        image: canoa3Img
    },
    {
        title: "Turma Kids",
        description: "Remadas voltadas para o público infantil, com foco em segurança, diversão e iniciação ao esporte.",
        duration: "Sábado - 11:30",
        icon: <Users className="w-6 h-6 text-white" />,
        linkText: "Olá, vi no site sobre a Turma Kids e gostaria de mais informações.",
        image: kidsImg
    }
]

export function Tours() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        dragFree: true,
        containScroll: "trimSnaps"
    })

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    return (
        <section className="bg-gradient-to-b from-zinc-900 to-black py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        HORÁRIOS DE TREINOS E PASSEIOS
                    </h2>
                    <p className="text-zinc-300 max-w-2xl mx-auto">
                        Confira nossos horários disponíveis e venha viver a experiência da canoa havaiana no Lago Paranoá!
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-2">
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_calc(100%-1rem)] sm:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(33%-1rem)] min-w-0 px-1">
                                    <article className="bg-zinc-900/80 text-white rounded-xl p-5 h-full flex flex-col space-y-4 border border-zinc-700 hover:border-zinc-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/10">
                                        <div className="relative w-full h-40 rounded-lg overflow-hidden mb-3">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>

                                        <div className="flex-1 flex items-start gap-3">
                                            <div className="p-2 bg-zinc-800 rounded-lg">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg md:text-xl mb-1 text-white">
                                                    {item.title}
                                                </h3>
                                                <p className="text-zinc-300 text-sm select-none">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="border-t border-zinc-700 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-zinc-400">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>

                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={`https://wa.me/5561998219177?text=${encodeURIComponent(item.linkText)}`}
                                                className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-lg transition-all text-sm font-medium hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/20"
                                            >
                                                <WhatsappLogo className="w-4 h-4" />
                                                Bora Remar!
                                            </a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className="hidden sm:flex items-center justify-center rounded-full shadow-lg w-8 h-8 md:w-10 md:h-10 absolute left-0 md:-left-5 -translate-y-1/2 top-1/2 z-10 bg-white hover:bg-zinc-200 transition-all"
                        aria-label="Slide anterior"
                    >
                        <ChevronLeft className="w-5 h-5 text-black" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="hidden sm:flex items-center justify-center rounded-full shadow-lg w-8 h-8 md:w-10 md:h-10 absolute right-0 md:-right-5 -translate-y-1/2 top-1/2 z-10 bg-white hover:bg-zinc-200 transition-all"
                        aria-label="Próximo slide"
                    >
                        <ChevronRight className="w-5 h-5 text-black" />
                    </button>
                </div>

                <div className="flex justify-center mt-8 gap-2 sm:hidden">
                    <button
                        onClick={scrollPrev}
                        className="flex items-center justify-center rounded-full shadow-lg w-8 h-8 bg-white hover:bg-zinc-200 transition-all"
                        aria-label="Slide anterior"
                    >
                        <ChevronLeft className="w-5 h-5 text-black" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="flex items-center justify-center rounded-full shadow-lg w-8 h-8 bg-white hover:bg-zinc-200 transition-all"
                        aria-label="Próximo slide"
                    >
                        <ChevronRight className="w-5 h-5 text-black" />
                    </button>
                </div>
            </div>
        </section>
    )
}
