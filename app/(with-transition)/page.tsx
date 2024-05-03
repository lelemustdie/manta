import { Carousel } from "@/components/ui/carousel/Carousel"
import Video from "@/components/ui/video/video"

export default function Home() {
    return (
        <>
            <section>
                <Video src={"/main_video.mp4"} />
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
