// app/_components/ImageTransition.tsx
"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const vaaQuotes = [
    "CPP EXTREME BSB",
]

export function ImageTransition() {
    const sectionRef = useRef(null)
    const image1Ref = useRef(null)
    const image2Ref = useRef(null)
    const textContainerRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=1200",
                scrub: true,
                pin: true,
                markers: false,
            },
        })

        gsap.set(image2Ref.current, { opacity: 0, scale: 1.1 })
        tl.to(image1Ref.current, { opacity: 0, scale: 0.95, ease: "power2.inOut" })

        // AQUI ESTÁ A LINHA CORRIGIDA
        tl.to(image2Ref.current, { opacity: 1, scale: 1, ease: "power2.inOut" }, "<")

        const quotes = gsap.utils.toArray(".quote")

        quotes.forEach((quote: any) => {
            tl.fromTo(quote,
                { x: "100vw", opacity: 0 },
                { x: "0%", opacity: 1, duration: 1, ease: "power2.out" }
            )
            tl.to(quote,
                { x: "-100vw", opacity: 0, duration: 1, ease: "power2.in" },
                "+=0.25"
            )
        })
    }, [])

    return (
        <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
            <div ref={image1Ref} className="absolute inset-0 h-full w-full">
                <Image src="/canoa2.jpg" alt="Primeira imagem" fill quality={100} className="object-cover" />
            </div>
            <div ref={image2Ref} className="absolute inset-0 h-full w-full">
                <Image src="/canoa3.jpg" alt="Segunda imagem" fill quality={100} className="object-cover" />
            </div>

            <div
                ref={textContainerRef}
                className="absolute inset-0 z-10 flex items-center justify-center"
            >
                {vaaQuotes.map((text, index) => (
                    <h2
                        key={index}
                        className="quote absolute text-3xl md:text-5xl font-bold text-white text-center p-4"
                        style={{
                            opacity: 0,
                            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)'
                        }}
                    >
                        {text}
                    </h2>
                ))}
            </div>
        </section>
    )
}