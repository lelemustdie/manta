import Image from "next/image";


export default function Nosotros() {
    return <>
        <section className="relative !h-[55vh] flex items-center justify-center">
            <h1 className="bg-transparent text-6xl sm:text-4xl text-white">
                Sobre nosotros
            </h1>

            <Image
                className="fixed top-0 z-[-2] h-full w-full object-cover "
                src={"/Father and Son riding the SL3.jpg"}
                width={8640}
                height={4860}
                alt={"bike"}
            />

        </section>
        <section className="bg-manta-light-grey text-manta-ms-black flex flex-col gap-9 !h-[60vh] ">
            <div className="flex-wrap flex">

                <h3 className="flex-1 items-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
                    libero sed justo pulvinar faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; Nulla facilisi. Cras lacinia metus id ipsum convallis, in fermentum magna
                    dictum. Sed sed enim vel arcu fermentum vehicula. Integer lacinia, odio sed vestibulum pharetra,
                    dolor purus placerat nisl, sed consectetur enim ante vel ligula. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu sapien aliquam, rutrum
                    mauris vel, cursus lacus. Sed euismod convallis metus vel tincidunt. Nullam viverra, nulla non
                    convallis tristique, nisl odio finibus leo, vel aliquet risus nisi non nisi. Maecenas sollicitudin,
                    mi nec tristique efficitur, risus libero tristique quam, et sollicitudin metus neque eget
                    justo.</h3>
                <div className="flex-1">
                    <Image src={"/bici.png"} alt={"bici"} width={600} height={423} />
                </div>

            </div>

        </section>
    </>
}
