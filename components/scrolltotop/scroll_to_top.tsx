"use client"

import ArrowUp from "@/assets/icons/arrow_up"
import { useEffect, useState } from "react"

const ScrollToTop = () => {
    const [isInView, setIsInView] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsInView(true)
        } else {
            setIsInView(false)
        }
    }

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <button
            className="fixed bottom-0 right-0 m-10 rounded-2xl bg-manta-ms-black p-5"
            style={{
                display: isInView ? "block" : "none",
            }}
            onClick={handleClick}
        >
            <ArrowUp />
        </button>
    )
}

export default ScrollToTop
