import Image from "next/image"
import "./styles.css"

const images = [
    {
        src: "/gallery/1.webp",
        alt: "sl3",
    },
    {
        src: "/gallery/2.webp",
        alt: "sl3",
    },
    {
        src: "/gallery/3.webp",
        alt: "sl3",
    },
    {
        src: "/gallery/4.webp",
        alt: "sl3",
    },
    {
        src: "/gallery/5.webp",
        alt: "sl3",
    },
    {
        src: "/gallery/6.webp",
        alt: "sl3",
    },
    {
        src: "/gallery/7.webp",
        alt: "sl3",
    },
    {
        src: "/Father and Son riding the SL3.webp",
        alt: "Father and son riding the SL3",
    },
    {
        src: "/gallery/9.webp",
        alt: "sl3",
    },
    {
        src: "/gallery/10.webp",
        alt: "sl3",
    },
    {
        src: "/gallery/11.webp",
        alt: "sl3",
    },
    {
        src: "/gallery/14.webp",
        alt: "sl3",
    },
    {
        src: "/gallery/13.webp",
        alt: "sl3",
    },
    {
        src: "/gallery/15.webp",
        alt: "sl3",
    },
    {
        src: "/gallery/16.webp",
        alt: "sl3",
    },
]

export default function Gallery() {
    return (
        <section className="gallery">
            {images.map(({ src, alt }, index) => {
                return (
                    <div
                        className="image-container"
                        key={`gallery-image-${index}`}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="100%"
                            priority
                        />
                    </div>
                )
            })}
        </section>
    )
}
