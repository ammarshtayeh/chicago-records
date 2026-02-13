"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-orange-500 hover:to-yellow-400 shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/50",
    secondary:
      "bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-white/10 hover:border-white/30 hover:bg-gray-800",
    outline:
      "bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black",
    ghost: "bg-transparent text-white hover:bg-white/10",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {/* Shimmer Effect */}
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      )}

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
