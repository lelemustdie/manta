import CardList from "@/components/card_list/card_list"
import ContactForm from "@/components/contact_form/ContactForm"
import Video from "@/components/ui/video/video"
import Image from "next/image"
import Button from "@/components/ui/button/Button"
import Link from "next/link"
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
                        <Button className="flex w-72 flex-col border-transparent bg-red-500 text-manta-signal-white opacity-90 hover:opacity-100">
                            Características
                        </Button>
                    </Link>
                </div>
            </section>
            <section className="relative grid !h-fit !min-h-screen w-full grid-cols-2 overflow-hidden sm:grid-cols-1">
                <Image
                    src="/manta5-sl3-bw.webp"
                    alt="Contacto"
                    className="left-50 fixed top-0 z-[-2] h-full w-full object-cover"
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
        </>
    )
}
