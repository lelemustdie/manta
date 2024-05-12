import Image from "next/image"
import Link from "next/link"

const FOOTER_ITEMS = [
    {
        title: "Nuestros Productos",
        links: [
            { title: "SL3", href: "/sl3" },
            { title: "Lista de precios", href: "/listaprecios" },
            {title: "Galeria", href: '/galeria'}
        ],
    },
    {
        title: "Sobre Nosotros",
        links: [
            { title: "Nosotros", href: "/nosotros" },
            { title: "Sustentabilidad", href: "/sustentabilidad" },
        ],
    },
    {
        title: "Ayuda",
        links: [
            { title: "FAQS", href: "/faqs" },
            { title: "Contacto", href: "/contacto" },
        ],
    },
]

export default function Footer() {
    return (
        <footer className="grid h-[200px] grid-cols-footer items-stretch justify-items-center bg-black font-light text-white sm:h-full sm:auto-rows-min sm:grid-cols-1 sm:gap-5 sm:py-10">
            <div className="flex flex-col justify-center gap-y-1.5">
                <h1 className=" bg-gradient-to-r from-manta-red via-red-900 to-manta-red inline-block text-transparent bg-clip-text font-medium">AQUABIKE</h1>
                <h6 className='text-center font-light'>By Manta5</h6>
            </div>
            {FOOTER_ITEMS.map(({ title, links }, containerIdx) => {
                return (
                    <div
                        className="flex flex-col justify-center gap-y-1.5 sm:w-full sm:justify-center sm:text-center"
                        key={`footer-col-${containerIdx}`}
                    >
                        <h4 className="font-medium">{title}</h4>
                        {links.map(({ href, title }, index) => {
                            return (
                                <Link
                                    href={href}
                                    className="hover:text-manta-cool-grey"
                                    key={`footer-item-${index}-${containerIdx}`}
                                >
                                    {title}
                                </Link>
                            )
                        })}
                    </div>
                )
            })}
        </footer>
    )
}
