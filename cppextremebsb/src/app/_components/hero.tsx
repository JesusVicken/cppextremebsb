import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
export function Hero() {
    return (
        <section className="bg-[#060505] text-white relative overflow-hidden">
            <div>
                <article className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='space-y-6'>
                        <h1 className="text-3xl md:text-4xl font-bold leading-10">
                            CPP Extreme BSB: Mais que Remo, é Estilo de Vida.
                        </h1>
                        <p className="lg:text-lg">
                            Aulas de Canoa Havaiana para todos os níveis e passeios guiados pelo Lago Paranoá, conectando você à tradição polinésia e à natureza.
                        </p>
                        <div>
                            <a
                                href="#"
                                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                            >
                                <WhatsappLogo className='w-5 h-5' />
                                Contato via WhatsApp
                            </a>
                        </div>
                        <div className="mt-8">
                            <p className="text-sm mb-4">Venha fazer sua aula experimental <b className="bg-white text-black px-2 py-1 rounded-md">gratuita</b></p>
                        </div>
                    </div>

                    <div>
                       <h1>foto da CPP</h1> 
                    </div>
                
                </article>
            </div>

        </section>

    )
}