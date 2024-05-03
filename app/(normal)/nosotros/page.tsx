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
            <section className="flex !h-fit items-center justify-between gap-10 bg-manta-light-grey text-manta-ms-black md:flex-col md:!p-10">
                <h3 className="flex-1 items-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris in libero sed justo pulvinar faucibus. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; Nulla facilisi. Cras lacinia metus id
                    ipsum convallis, in fermentum magna dictum. Sed sed enim vel
                    arcu fermentum vehicula. Integer lacinia, odio sed
                    vestibulum pharetra, dolor purus placerat nisl, sed
                    consectetur enim ante vel ligula. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Sed eu sapien aliquam, rutrum mauris vel,
                    cursus lacus. Sed euismod convallis metus vel tincidunt.
                    Nullam viverra, nulla non convallis tristique, nisl odio
                    finibus leo, vel aliquet risus nisi non nisi. Maecenas
                    sollicitudin, mi nec tristique efficitur, risus libero
                    tristique quam, et sollicitudin metus neque eget justo.
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
