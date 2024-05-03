"use client"
import ArrowRight from "@/assets/icons/arrow_right"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { Thumb } from "../thumb/Thumb"

export type Slide = {
    src: string
    alt: string
}

const slides: Slide[] = [
    {
        src: "/slides/SL3_1.webp",
        alt: "SL3 front foil",
    },
    {
        src: "/slides/SL3_2.webp",
        alt: "sl3 rear foil",
    },
    {
        src: "/slides/SL3_3.webp",
        alt: "sl3 rear foil",
    },
    {
        src: "/slides/SL3_4.webp",
        alt: "sl3 rear foil",
    },
    {
        src: "/slides/SL3_5.webp",
        alt: "sl3 rear foil",
    },
    {
        src: "/slides/SL3_6.webp",
        alt: "sl3 pro remote",
    },
    {
        src: "/slides/SL3_7.webp",
        alt: "sl3 pro remote",
    },
]
export function Carousel() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel()
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: true,
    })

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) return
            emblaMainApi.scrollTo(index)
            setSelectedIndex(index)
        },
        [emblaMainApi, emblaThumbsApi],
    )

    const scrollPrev = useCallback(() => {
        if (!emblaMainApi) return
        emblaMainApi.scrollPrev()
        if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1)
    }, [emblaMainApi, selectedIndex])

    const scrollNext = useCallback(() => {
        if (!emblaMainApi) return
        emblaMainApi.scrollNext()
        if (selectedIndex < slides.length - 1)
            setSelectedIndex(selectedIndex + 1)
    }, [emblaMainApi, selectedIndex])
    return (
        <div className="relative w-full max-w-[1100px]">
            <div className="overflow-hidden" ref={emblaMainRef}>
                <div className="flex touch-pan-y">
                    {slides.map((slide, index) => (
                        <div
                            className="relative aspect-video w-full shrink-0"
                            key={index}
                        >
                            <Image
                                key={index}
                                src={slide.src}
                                fill
                                sizes="100%"
                                className="object-cover"
                                alt={slide.alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <ArrowRight
                onClick={scrollPrev}
                className="absolute left-10 top-1/2 size-12 -translate-y-1/2 rotate-180 transform stroke-manta-red sm:left-5 sm:size-8 "
            />
            <ArrowRight
                onClick={scrollNext}
                className="absolute right-10 top-1/2 size-12 -translate-y-1/2 transform stroke-manta-red sm:right-5 sm:size-8"
            />
            <div className="absolute bottom-5 mt-4 w-full">
                <div className="no-scrollbar" ref={emblaThumbsRef}>
                    <div className="flex flex-row justify-center gap-6">
                        {slides.map((slide, index) => (
                            <Thumb
                                key={index}
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                slide={slide}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
