import CardList from "@/components/card_list/card_list"
import ContactForm from "@/components/contact_form/ContactForm"
import Video from "@/components/ui/video/video"
import Image from "next/image"
import Button from "@/components/ui/button/Button"
import Link from "next/link"
import { Carousel, Slide } from "@/components/ui/carousel/Carousel"

const cards = [
    {
        src: "/SL3.webp",
        title: "SL3",
        description: [
            "Cuerpo de orca blanco",
            "Batería Hydropack 600 ligera",
            "Aleta trasera fija 2.0 (FC2) para principiantes ('Learner')",
            "Todos los pilotos",
            "Batería ligera",
        ],
    },
    {
        src: "/SL3.webp",
        title: "SL3 +",
        description: [
            "Cuerpo de orca blanco",
            "Batería Hydropack 1000 de largo alcance",
            "Aleta trasera fija 2.0 (FC2) para principiantes ('Learner')",
            "Largo alcance",
        ],
    },
    {
        src: "/SL3_PRO.webp",
        title: "SL3 PRO",
        description: [
            "Chasis de piel de tiburón",
            "Batería Hydropack 1000 de largo alcance",
            "Aleta trasera fija 2.0 (FC2) y aleta de 'superligera' alta eficiencia (HE2)",
            "Desde pilotos inexpertos seguros hasta expertos (conductores intermedios y profesionales)",
            "Alcance más largo",
        ],
    },
]

const slides: Slide[] = [
    {
        src: "/riderxp/xp1.png",
        alt: "rider xp",
    },
    {
        src: "/riderxp/xp2.JPG",
        alt: "rider xp",
    },
    {
        src: "/riderxp/xp3.jpg",
        alt: "rider xp",
    },
    {
        src: "/riderxp/xp4.jpg",
        alt: "rider xp",
    },
    {
        src: "/riderxp/xp5.jpg",
        alt: "rider xp",
    },
]

export default function Sl3() {
    return (
        <>
            <section className="relative flex items-end overflow-hidden">
                <Video src={"/bg-video.mp4"} />
                <h1 className="text-6xl font-bold sm:mb-10">Nueva SL3</h1>
            </section>
            <section className="grid !h-fit min-h-screen place-content-center bg-manta-light-grey">
                <CardList list={cards} />
                <div className="flex justify-center">
                    <Link href={"/listaprecios"}>
                        <Button className="flex w-72 flex-col border-transparent bg-red-500 text-manta-signal-white hover:opacity-80">
                            Características
                        </Button>
                    </Link>
                </div>
            </section>
            <section className="relative grid !h-fit !min-h-screen w-full grid-cols-2 overflow-hidden sm:block">
                <Image
                    src="/manta5-sl3-bw.webp"
                    alt="Contacto"
                    className="left-50 fixed top-0 z-[-2] h-full w-full object-cover sm:left-0"
                    width={1920}
                    height={1080}
                    sizes="100vw"
                />
                <div className="h-fit max-w-[600px] rounded-lg bg-manta-ms-black/50 p-10 backdrop-blur-md *:mb-4">
                    <h2 className="mb-5 text-center text-4xl font-bold text-manta-signal-white">
                        Contacto
                    </h2>
                    <ContactForm />
                </div>
            </section>
            <section className="!h-fit min-h-screen bg-manta-ms-black sm:min-h-fit">
                <h1 className="text-center text-5xl">Experiencia de montar</h1>
                <h2 className="mt-4 text-center font-semibold text-manta-red">
                    Si puedes andar en bicicleta y nadar, puedes andar en el
                    Hydrofoiler SL3
                </h2>
                <div className="grid !h-fit grid-cols-[1fr_2fr] items-center gap-3 sm:grid-cols-1">
                    <div className="flex flex-col gap-8 p-4 sm:!text-center">
                        <h3>
                            El propósito de Manta5 ha sido replicar una
                            experiencia de ciclismo intuitiva en el agua.
                        </h3>
                        <h3>
                            Ser ágil, rápido, capaz de girar y deslizarse
                            significaba no conformarse con flotadores
                            voluminosos o cascos. Es un compromiso bienvenido
                            que fomenta el aprendizaje y la mejora, y, en última
                            instancia, a disfrutar de cada sesión.
                        </h3>

                        <h3>
                            Caerse y mojarse es parte de la diversión. En menos
                            de una hora, puedes pasar de ser un principiante a
                            sentirte seguro. A partir de ahí, agrega agua dulce
                            y salada a tu nuevo terreno de ciclismo.
                        </h3>
                    </div>

                    <div className="col-2 relative  w-full max-w-[1100px] p-12 lg:p-0">
                        <Carousel slides={slides} />
                    </div>
                </div>
            </section>
        </>
    )
}
