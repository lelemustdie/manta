import { Carousel, Slide } from "@/components/ui/carousel/Carousel"
import Quote from "@/components/ui/quote/Quote"
import Video from "@/components/ui/video/video"

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

export default function Home() {
    return (
        <>
            <section>
                <Video src={"/main_video.mp4"} />
            </section>

            <section className="!h-fit bg-manta-signal-white">
                <Quote
                    quote="Quiero que estas bicicletas vayan mucho más allá de ser simplemente un producto de ocio. Si se puede competir con ellas, entonces son competitivas, y si son competitivas, algún día podrían convertirse en un deporte olímpico."
                    author="Guy Howard-Willis"
                    role="Fundador"
                />
            </section>
            <section className="grid !h-fit grid-cols-[1fr_2fr] items-center gap-3 sm:grid-cols-1">
                <div className="flex flex-col gap-8 p-4 text-center">
                    <h1 className="flex text-center text-5xl">
                        Un nuevo tiempo de aventuras
                    </h1>
                    <h3 className='text-3xl text-manta-red text-center'>El disfrute de deslizarse sobre el agua en una bicicleta con Hydrofoil</h3>
                    <p className="text-xl">
                        Atrás quedaron los carriles para bicicletas, el tráfico
                        y los senderos para peatones. La libertad del agua te
                        espera.
                    </p>
                    <p className="text-xl">
                        Entretenimiento o deporte, la elección es tuya.
                    </p>
                    <p className="text-xl">Hay un mundo esperándote afuera.</p>
                </div>
                <Carousel slides={slides} />
            </section>
        </>
    )
}
