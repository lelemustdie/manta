"use client";
import { Variants, motion } from "framer-motion";
import Image from "next/image";

type CardProps = {
  src: string;
  title: string;
  description: string[];
};

const item: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export default function Card({ src, title, description }: CardProps) {
  return (
    <motion.article className="text-manta-black-grey p-4 flex-1 min-w-80" variants={item}>
      <Image
        src={src}
        alt={title}
        width={700}
        height={700}
        sizes="(max-width: 768px) 100vw, 100%"
        style={{aspectRatio:"16/12"}}
      />
      <h3 className="text-2xl">{title}</h3>
      <ul className="list-disc mx-[15px]">
        {description.map((item, index) => (
          <li key={index} className="ps-2 mb-2">
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
