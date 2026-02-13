"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Sparkles, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./ui/Button";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "الخدمات", href: "/#services" },
  { name: "معرض الأعمال", href: "/portfolio" },
  { name: "لماذا نحن", href: "/#why-us" },
  { name: "الأسعار", href: "/pricing" },
  { name: "الفريق", href: "/team" },
  { name: "احجز الآن", href: "/booking" },
  { name: "تواصل معنا", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.98)"],
  );

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b border-yellow-500/0 hover:border-yellow-500/30 transition-all duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28">
            {/* Logo - Circular */}
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-yellow-500/50 shadow-2xl shadow-yellow-500/50 group-hover:border-yellow-500 group-hover:shadow-yellow-500/80 transition-all duration-300"
              >
                <Image
                  src="/logo.jpg"
                  alt="Chicago Studio"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              <div className="mr-4 hidden sm:block">
                <div className="text-2xl font-black text-white group-hover:text-yellow-500 transition-colors">
                  استوديو شيكاغو
                </div>
                <div className="text-sm text-gray-400">للتصوير الفوتوغرافي</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-lg font-bold text-white/95 hover:text-yellow-500 transition-all duration-300 group"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-full group-hover:w-full transition-all duration-300 shadow-lg shadow-yellow-500/50" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-3 rounded-xl hover:bg-yellow-500/10 transition-colors border border-yellow-500/30"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-black/99 backdrop-blur-3xl z-40 lg:hidden border-l-2 border-yellow-500/30 shadow-2xl shadow-yellow-500/20 overflow-y-auto"
      >
        <div className="flex flex-col h-full p-8 pt-36">
          <div className="flex-1 space-y-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 50 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-black text-white hover:text-yellow-500 transition-colors py-3 border-b-2 border-white/10 hover:border-yellow-500/50"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <Link href="/booking">
            <Button
              size="lg"
              variant="primary"
              className="w-full shadow-2xl shadow-yellow-500/40 text-xl font-bold py-6 mt-6"
              onClick={() => setIsOpen(false)}
            >
              <Camera className="w-6 h-6 ml-2" />
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
