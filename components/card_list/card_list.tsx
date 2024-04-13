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
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-50%",
    opacity: 0,
    transition: {
      staggerChildren: 0.4,
      staggerDirection: -1,
      duration: 0.5,
    },
  },
};

export default function CardList({ list }: CardListProps) {
  return (
    <motion.div
      className="container flex flex-row justify-around items-center gap-5"
      variants={container}
      viewport={{ once: true }}
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
