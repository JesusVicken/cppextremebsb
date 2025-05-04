
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
    HeartPulse
} from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react"

const services = [
    {
        title: "Aula Experimental",
        description: "Participação em uma aula introdutória com orientações básicas sobre remada, segurança e ambientação na canoa havaiana.",
        duration: "1h",
        price: "Gratuito",
        icon: <Waves className="w-7 h-7" />,
        linkText: "Olá, vi no site sobre a Aula Experimental e gostaria de mais informações."
    },
    {
        title: "Treinamento Regular",
        description: "Sessões de treino em grupo com foco em condicionamento físico, técnica de remada e resistência, voltado para iniciantes e intermediários.",
        duration: "1h",
        price: "R$80/mês",
        icon: <Dumbbell className="w-7 h-7" />,
        linkText: "Olá, vi no site sobre Treinamento Regular e gostaria de mais informações."
    },
    {
        title: "Treinamento Avançado",
        description: "Treinos de alta performance voltados para atletas com experiência, com foco em provas de longa distância, velocidade e técnica refinada.",
        duration: "1h30",
        price: "R$120/mês",
        icon: <Trophy className="w-7 h-7" />,
        linkText: "Olá, vi no site sobre Treinamento Avançado e gostaria de mais informações."
    },
    {
        title: "Remada ao Nascer do Sol",
        description: "Remada especial ao amanhecer, com paisagem incrível e conexão com a natureza, ideal para iniciantes ou quem busca uma experiência única.",
        duration: "1h",
        price: "R$50",
        icon: <Sunrise className="w-7 h-7" />,
        linkText: "Olá, vi no site sobre a Remada ao Nascer do Sol e gostaria de mais informações."
    },
    {
        title: "Expedições",
        description: "Passeios programados em grupo por rotas especiais com paradas em pontos turísticos, ideal para aventura e contato com a natureza.",
        duration: "3h",
        price: "R$150",
        icon: <Route className="w-7 h-7" />,
        linkText: "Olá, vi no site sobre Expedições e gostaria de mais informações."
    },
    {
        title: "Eventos Corporativos",
        description: "Atividades de integração para empresas com foco em trabalho em equipe, cooperação e superação em meio à natureza.",
        duration: "2h",
        price: "Sob consulta",
        icon: <Handshake className="w-7 h-7" />,
        linkText: "Olá, vi no site sobre Eventos Corporativos e gostaria de mais informações."
    },
    {
        title: "Remada Noturna",
        description: "Experiência única de remar sob as estrelas, com todo o suporte e segurança. Ideal para quem busca algo fora do comum.",
        duration: "1h",
        price: "R$60",
        icon: <Moon className="w-7 h-7" />,
        linkText: "Olá, vi no site sobre a Remada Noturna e gostaria de mais informações."
    },
    {
        title: "Treino para Competições",
        description: "Programa de preparação física e técnica voltado especificamente para atletas que competem em provas nacionais ou internacionais.",
        duration: "1h30",
        price: "R$150/mês",
        icon: <Trophy className="w-7 h-7" />,
        linkText: "Olá, vi no site sobre Treino para Competições e gostaria de mais informações."
    },
    {
        title: "Condicionamento Funcional",
        description: "Sessões focadas no fortalecimento muscular, equilíbrio e preparo físico complementar à remada.",
        duration: "45min",
        price: "R$70/mês",
        icon: <HeartPulse className="w-7 h-7" />,
        linkText: "Olá, vi no site sobre Condicionamento Funcional e gostaria de mais informações."
    }
]

export function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    })

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-black mb-12 text-center">NOSSOS SERVIÇOS</h2>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 h-full flex flex-col space-y-4">
                                        <div className="flex-1 flex items-start justify-between">
                                            <div className="flex gap-3">
                                                <span>{item.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>

                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={`https://wa.me/5561998219177?text=${encodeURIComponent(item.linkText)}`}
                                                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-md transition-all"
                                            >
                                                <WhatsappLogo className="w-5 h-5" />
                                                Contato
                                            </a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>


                    <button
                        onClick={scrollPrev}
                        className="flex items-center justify-center rounded-full shadow-lg w-8 h-8 md:w-10 md:h-10 absolute left-2 md:left-0 -translate-y-1/2 top-1/2 z-10 bg-white"
                    >
                        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="flex items-center justify-center rounded-full shadow-lg w-8 h-8 md:w-10 md:h-10 absolute right-2 md:right-0 -translate-y-1/2 top-1/2 z-10 bg-white"
                    >
                        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </section>
    )
}
