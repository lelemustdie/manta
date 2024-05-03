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
            <section className="grid !h-fit grid-cols-[1fr_2fr] gap-3 sm:grid-cols-1">
                <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Inventore totam necessitatibus soluta quam architecto a hic
                    saepe praesentium consequatur. Veniam autem rerum dolorem
                    architecto deleniti voluptatum illum fuga earum qui.
                </div>
                <Carousel />
            </section>
        </>
    )
}
