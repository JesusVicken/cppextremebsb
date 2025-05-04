import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import ImageCpp from '../../../public/cpp.jpeg'
import Image from "next/image"

export function Hero() {
    // Mensagem pré-definida para o WhatsApp
    const whatsappMessage = encodeURIComponent(
        "Olá, visitei o site da CPP Extreme Brasília e gostaria de mais informações sobre as aulas de canoa havaiana!"
    )

    return (
        <section className="bg-[#060505] text-white relative overflow-hidden">
            <div>
                <Image
                    src={ImageCpp}
                    alt='Foto da CPP'
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-20 md:hidden'></div>
            </div>

            <div className='container mx-auto pt-16 pb-16 md:pb-16 px-4 relative'>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='space-y-6'>
                        <h1 className="text-3xl md:text-4xl font-bold leading-10">
                            CPP Extreme Brasília: Mais que Remo, é Estilo de Vida.
                        </h1>
                        <p className="lg:text-lg">
                            Aulas de Canoa Havaiana para todos os níveis e passeios guiados pelo Lago Paranoá, conectando você à tradição polinésia e à natureza.
                        </p>
                        <div>
                            <a
                                href={`https://wa.me/5561998219177?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:bg-green-700 transition"
                            >
                                <WhatsappLogo className='w-5 h-5' />
                                Contato via WhatsApp
                            </a>
                        </div>
                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                Venha fazer sua aula experimental <b className="bg-white text-black px-2 py-1 rounded-md">gratuita</b>
                            </p>
                        </div>
                    </div>

                    <div className='hidden md:block h-full relative'>
                        <Image
                            src={ImageCpp}
                            alt='Logo CPP'
                            className='object-contain'
                            fill
                            sizes='(max-width: 760px) 0px, 50vw'
                            quality={100}
                            priority
                        />
                    </div>
                </article>
            </div>
        </section>
    )
}