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
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.4,
    },
  },
};

export default function CardList({ list }: CardListProps) {
  return (
    <motion.div
      className="container flex flex-row justify-around items-center gap-5"
      variants={container}
      initial="hidden"
      animate="visible"
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
