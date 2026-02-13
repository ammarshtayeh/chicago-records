"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
}

export default function Card({ children, className, glass = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-2xl backdrop-blur-xl transition-all duration-300",
        glass && "glass",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
