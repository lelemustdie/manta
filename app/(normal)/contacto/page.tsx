import ContactForm from "@/components/contact_form/ContactForm"
import Image from "next/image"

export default function Contact() {
    return (
        <>
            <section className="relative grid !h-fit !min-h-screen w-full grid-cols-2 overflow-hidden sm:grid-cols-1">
                <Image
                    src="/viejobicicletero.webp"
                    alt="Contacto para comprar sl3"
                    className="left-50 fixed top-0 z-[-2] h-full w-full object-cover"
                    width={1920}
                    height={1080}
                    sizes="100vw"
                />
                <div className="col-start-2 h-fit max-w-[600px] rounded-lg bg-cyan-950/40 p-10 backdrop-blur-md *:mb-4 sm:col-start-1">
                    <h2 className="mb-5 text-center text-4xl font-bold text-manta-signal-white">
                        Contacto
                    </h2>
                    <ContactForm />
                </div>
            </section>
        </>
    )
}
