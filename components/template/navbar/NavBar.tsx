"use client"
import Hamburguer from "@/assets/icons/hamburguer"
import Link from "next/link"
import { AnimatePresence, AnimationProps, motion } from "framer-motion"
import { useEffect, useState } from "react"

const NAVBAR_ITEMS = [
    { title: "SL3", href: "/sl3" },
    { title: "Lista de precios / Características", href: "/listaprecios" },
    { title: "Contacto", href: "/contacto" },
    { title: "Galeria", href: "/galeria"}
]

const animations: AnimationProps = {
    initial: { x: "100%" },
    animate: {
        x: 0,
        transition: {
            x: { type: "spring", bounce: 0 },
            duration: 0.4,
        },
    },
    exit: {
        x: "100%",
        transition: {
            x: { type: "spring", bounce: 0 },
            duration: 0.4,
        },
    },
}

export default function NavBar({ withTransition = false }) {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        const isSafari = /^((?!chrome|android).)*safari/i.test(
            navigator.userAgent,
        )
        if (isSafari && withTransition) {
            const handleScroll = () => {
                const navbar = document.querySelector("nav")
                const navbarHeightClass = "!h-[100px]"
                const navbarColorClass = "bg-manta-ms-black"
                const shouldBeToggled = window.scrollY > window.innerHeight / 2

                // Agregar o quitar las clases según corresponda
                if (shouldBeToggled) {
                    navbar?.classList.add(navbarHeightClass, navbarColorClass)
                    navbar?.classList.remove("bg-transparent")
                } else {
                    navbar?.classList.remove(
                        navbarHeightClass,
                        navbarColorClass,
                    )
                    navbar?.classList.add("bg-transparent")
                }
            }

            window.addEventListener("scroll", handleScroll)

            return () => window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <nav
            className={`fixed left-0 top-0 z-10 flex w-full flex-row items-center justify-between border-b-2 border-manta-red px-[15%] font-semibold duration-500  ${
                withTransition
                    ? "navbar bg-transparent "
                    : "h-[100px] bg-manta-ms-black"
            }`}
        >
            <Link href="/">
                <h1 className=" inline-block bg-gradient-to-r from-manta-red via-red-900 to-manta-red bg-clip-text font-medium text-transparent">
                    AQUABIKE
                </h1>
                <h6 className='text-center font-light '>By Manta5</h6>
            </Link>
            <div className="flex flex-row gap-10 text-lg text-white  *:duration-300">
                {NAVBAR_ITEMS.map(({ title, href }, index) => {
                    return (
                        <Link
                            className="duration-100 hover:text-manta-dark-grey sm:hidden"
                            href={href}
                            key={`navbar-item-${index}`}
                        >
                            {title}
                        </Link>
                    )
                })}
                <Hamburguer
                    className="hidden size-8 sm:block"
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={animations.initial}
                        animate={animations.animate}
                        exit={animations.exit}
                        className="absolute left-0 top-full flex h-screen w-full flex-col gap-10 bg-manta-ms-black p-10 *:text-2xl"
                    >
                        {NAVBAR_ITEMS.map(({ title, href }, index) => {
                            return (
                                <Link
                                    className="hover:text-manta-dark-grey"
                                    href={href}
                                    key={`navbar-item-${index}`}
                                >
                                    {title}
                                </Link>
                            )
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
