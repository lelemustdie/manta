import { Carousel } from "@/components/ui/carousel/Carousel"
import Quote from "@/components/ui/quote/Quote"
import Video from "@/components/ui/video/video"

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
            <section className="grid !h-fit grid-cols-[1fr_2fr] gap-3 items-center sm:grid-cols-1">
                <div className='gap-8 flex flex-col p-4'>
                    <h1 className='text-4xl flex text-center'>Un nuevo tiempo de aventuras</h1>
                    <h2>Atrás quedaron los carriles para bicicletas, el tráfico y los senderos para peatones. La libertad del agua te espera.</h2>

                    <h2>Entretenimiento o deporte, la elección es tuya</h2>
                    <h2>Hay un mundo esperándote afuera.</h2>

                </div>
                <Carousel />
            </section>
        </>
    )
}
