"use client"
import { Variants, motion } from "framer-motion"
import Image from "next/image"

type CardProps = {
    src: string
    title: string
    description: string[]
}

const item: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
    },
}

export default function Card({ src, title, description }: CardProps) {
    return (
        <motion.article
            className="min-w-80 flex-1 p-4 text-manta-black-grey"
            variants={item}
        >
            <Image
                src={src}
                alt={title}
                width={498}
                height={340}
                priority={true}
            />
            <h3 className="text-2xl">{title}</h3>
            <ul className="mx-[15px] list-disc">
                {description.map((item, index) => (
                    <li key={index} className="mb-2 ps-2">
                        {item}
                    </li>
                ))}
            </ul>
        </motion.article>
    )
}
