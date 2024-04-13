"use client";
import { Variants, motion } from "framer-motion";
import Card from "../ui/card/card";

type CardListProps = {
  list: {
    src: string;
    title: string;
    description: string[];
  }[];
};

const container: Variants = {
  hidden: { 
    x: "-100%", 
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      x:{ type: "spring", bounce: 0 },
      delayChildren: 0.5,
      staggerChildren: 0.4,
    },
  }
};

export default function CardList({ list }: CardListProps) {
  return (
    <motion.div
      className="container flex flex-row flex-wrap justify-around items-stretch gap-5"
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      {list.map((item, index) => (
        <Card
          key={index}
          src={item.src}
          title={item.title}
          description={item.description}
        />
      ))}
    </motion.div>
  );
}
