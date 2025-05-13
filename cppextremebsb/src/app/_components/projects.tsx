'use client'

import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'

export default function Projects() {
    return (
        <div className="relative h-[700px] md:h-[800px] lg:h-[900px] overflow-hidden">
            <Parallax speed={-20} className="absolute inset-0">
                <div className="relative w-full h-full">
                    <Image
                        src="/remadalinda.jpg"
                        alt="Canoa Havaiana"
                        fill
                        className="object-cover"
                        style={{
                            objectPosition: 'center 30%',
                        }}
                        priority
                    />
                </div>
            </Parallax>

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
                    Entre no nosso grupo e fique por dentro da programação de passeios da CPP Extreme BSB
                </h2>
            </div>
        </div>
    )
}