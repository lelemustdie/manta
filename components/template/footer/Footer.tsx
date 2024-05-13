import Logo from "@/components/ui/logo/Logo"
import Image from "next/image"
import Link from "next/link"

const FOOTER_ITEMS = [
    {
        title: "Nuestros Productos",
        links: [
            { title: "SL3", href: "/sl3" },
            { title: "Lista de precios", href: "/listaprecios" },
            {title: "Galería", href: '/galeria'}
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
        <footer className="grid h-[200px] grid-cols-[1fr_2fr] items-center justify-items-center bg-black p-10 px-24 font-light text-white sm:h-full sm:auto-rows-min sm:grid-cols-1 sm:gap-5 sm:p-10">
            <div className="flex flex-col justify-center items-center gap-y-1.5 w-80 text-center">
                <Logo />
                Distribuidores oficiales de<a href={"https://manta5.com"} className='text-manta-red'>Manta5</a>en Argentina(🇦🇷) y Uruguay(🇺🇾)
            </div>
            <div className="flex flex-row gap-10 sm:flex-col sm:gap-5">
                {FOOTER_ITEMS.map(({ title, links }, containerIdx) => {
                    return (
                        <div
                            className="flex flex-col gap-y-1.5 sm:w-full sm:justify-center sm:text-center"
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
            </div>
        </footer>
    )
}
