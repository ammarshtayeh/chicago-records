"use client";

import { motion } from "framer-motion";
import { Camera, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "روابط سريعة",
    links: [
      { name: "الرئيسية", href: "/" },
      { name: "الخدمات", href: "/#services" },
      { name: "الأعمال", href: "/portfolio" },
      { name: "الأسعار", href: "/pricing" },
    ],
  },
  {
    title: "المزيد",
    links: [
      { name: "الفريق", href: "/team" },
      { name: "احجز", href: "/booking" },
      { name: "تواصل", href: "/contact" },
      { name: "لماذا نحن", href: "/#why-us" },
    ],
  },
];

const contactInfo = [
  { icon: Phone, text: "+1 (555) 123-4567" },
  { icon: Mail, text: "info@chicagostudio.com" },
  { icon: MapPin, text: "طولكرم، شارع باريس" },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black border-t border-slate-200 dark:border-white/10">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-yellow-500/05 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/05 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  استوديو شيكاغو
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 font-medium">
                  للتصوير الفوتوغرافي
                </p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-6 text-sm">
              نلتقط أجمل اللحظات بأحدث المعدات والتقنيات العالمية
            </p>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg hover:shadow-yellow-500/40 transition-shadow"
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-5">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-slate-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-5">
              تواصل معنا
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-gray-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-yellow-600 dark:text-yellow-500" />
                  </div>
                  <span className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 dark:text-gray-500 text-sm text-center md:text-right">
              © 2024 استوديو شيكاغو. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-slate-500 dark:text-gray-500 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors text-sm"
              >
                سياسة الخصوصية
              </Link>
              <Link
                href="#"
                className="text-slate-500 dark:text-gray-500 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors text-sm"
              >
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
