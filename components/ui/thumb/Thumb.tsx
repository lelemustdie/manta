import { motion } from "framer-motion"
import { Slide } from "../carousel/Carousel"

type ThumbProps = {
    selected: boolean
    slide: Slide
    onClick: () => void
}

export const Thumb = ({ selected, slide, onClick }: ThumbProps) => {
    return (
        <motion.div
            transition={{ duration: 0.2 }}
            initial={{ width: "1rem" }}
            animate={{ width: selected ? "3rem" : "1rem" }}
            className={`flex h-[1rem] shrink-0 items-center justify-center rounded-full
                ${selected ? "bg-manta-signal-white/75" : "bg-manta-black-grey"} `}
            onClick={onClick}
        ></motion.div>
    )
}
