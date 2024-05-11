import Image from "next/image"


export default function Nosotros() {
    return (
        <>
            <section className="relative flex !h-[55vh] items-center justify-center bg-manta-ms-black/50">
                <h1 className="bg-transparent text-6xl text-white sm:text-4xl">
                    Sobre nosotros
                </h1>

                <Image
                    className="fixed top-0 z-[-2] h-full w-full object-cover "
                    src={"/Father and Son riding the SL3.webp"}
                    width={8640}
                    height={4860}
                    alt={"bike"}
                />
            </section>
            <section
                className="flex !h-fit items-center justify-between gap-10 bg-manta-light-grey text-manta-ms-black md:flex-col md:!p-10">
                <h3 className="flex-1 items-center">
                    HMSA es una empresa de ingenieros apasionados por soluciones tecnológicas relacionadas con el agua,
                    y con un fuerte compromiso con la conservación del medio ambiente. Nos dedicamos principalmente al
                    riego agrícola, riego deportivo y sistemas de cosecha de lluvia. Nuestro presidente, un apasionado
                    kayakista desde hace décadas, quedó fascinado desde el principio con la innovadora idea de pedalear
                    sobre el agua y el diseño de última generación de las Manta5. Decidimos incorporar estas innovadoras
                    bicicletas acuáticas a nuestra gama de productos, creando un departamento especializado para
                    ofrecerlas a nuestros clientes.
                </h3>
                <div className="grid flex-1 place-content-center">
                    <Image
                        src={"/bici.webp"}
                        alt={"bici"}
                        width={600}
                        height={423}
                    />
                </div>
            </section>
        </>
    )
}
