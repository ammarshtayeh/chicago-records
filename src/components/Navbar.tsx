"use client";

import { ThemeToggle } from "./ui/ThemeToggle";
import { useTheme } from "next-themes";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./ui/Button";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "الخدمات", href: "/#services" },
  { name: "الأعمال", href: "/portfolio" },
  { name: "لماذا نحن", href: "/#why-us" },
  { name: "الأسعار", href: "/pricing" },
  { name: "الفريق", href: "/team" },
  { name: "تواصل", href: "/contact" },
];

export default function Navbar() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    [
      "rgba(0, 0, 0, 0)",
      theme === "dark" ? "rgba(0, 0, 0, 0.95)" : "rgba(255, 255, 255, 0.95)",
    ],
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"],
  );

  return (
    <>
      <motion.nav
        style={{ backgroundColor, backdropFilter: backdropBlur }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-transparent dark:border-white/0 hover:border-gray-200 dark:hover:border-white/10 transition-all duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24 relative">
            {/* Logo - Right Side (RTL) */}
            <Link
              href="/"
              className="flex items-center group gap-3 relative z-20"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-yellow-500/50 shadow-lg shadow-yellow-500/20 group-hover:border-yellow-500 group-hover:shadow-yellow-500/40 transition-all duration-300"
              >
                <Image
                  src="/logo.jpg"
                  alt="Chicago Studio"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-slate-900 dark:text-white leading-tight group-hover:text-yellow-500 transition-colors">
                  استوديو شيكاغو
                </div>
                <div className="text-[10px] text-slate-500 dark:text-gray-400 font-light tracking-wider">
                  PHOTOGRAPHY
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Centered Absolute */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-base font-medium text-slate-600 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 rounded-full group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Action Buttons - Left Side (RTL) */}
            <div className="flex items-center gap-4 relative z-20">
              <ThemeToggle />
              <Link href="/booking" className="hidden sm:block">
                <Button
                  size="sm"
                  variant="primary"
                  className="shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 text-sm font-bold px-6 py-2.5 h-auto rounded-xl"
                >
                  <Camera className="w-4 h-4 ml-2" />
                  احجز موعدك
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-slate-900 dark:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white/95 dark:bg-black/95 backdrop-blur-xl z-40 lg:hidden border-l border-gray-200 dark:border-white/10 shadow-2xl h-full flex flex-col"
      >
        <div className="flex flex-col h-full p-6 pt-28">
          <div className="flex-1 space-y-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-xl font-bold text-slate-800 dark:text-gray-200 hover:text-yellow-500 transition-colors py-3 border-b border-gray-100 dark:border-white/5"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <Link href="/booking" onClick={() => setIsOpen(false)}>
            <Button
              size="lg"
              variant="primary"
              className="w-full shadow-xl shadow-yellow-500/20 text-lg font-bold py-5 mt-6 rounded-xl"
            >
              <Camera className="w-5 h-5 ml-2" />
              احجز الآن
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
        />
      )}
    </>
  );
}
