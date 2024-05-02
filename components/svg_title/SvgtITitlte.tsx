'use client'

import React from "react";
import { Variants, motion } from "framer-motion"

type SvgTitleProps = {
    list: {
        src: React.ReactNode
        title: string
    }[]
}

const container: Variants = {
    hidden: {
        x: "-100%",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            x: { type: "spring", bounce: 0 },
            delayChildren: 0.1,
            staggerChildren: 0.2,
        },
    },
}
const item: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
    },
}
export default function SvgDisplay({list}: SvgTitleProps) {

    return (<motion.div className='flex flex-row gap-10 justify-center sm:grid grid-cols-2'
                        variants={container}
                        initial="hidden"
                        whileInView="visible"


        >{list.map((icon,index) => <motion.div
            className='text-manta-ms-black flex flex-col items-center text-[20px] text-center mt-9 gap-4 sm:text-[17px]'
            key={index}
            variants={item}
        >

            {icon.src}{icon.title}</motion.div>)}

    </motion.div>
    )

}