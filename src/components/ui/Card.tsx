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
        "rounded-2xl transition-all duration-300",
        glass &&
          "backdrop-blur-xl bg-white/60 dark:bg-black/40 border border-slate-200 dark:border-white/10",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
