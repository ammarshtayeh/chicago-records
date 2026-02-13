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
      { name: "معرض الأعمال", href: "/portfolio" },
      { name: "الأسعار", href: "/pricing" },
    ],
  },
  {
    title: "المزيد",
    links: [
      { name: "الفريق", href: "/team" },
      { name: "احجز الآن", href: "/booking" },
      { name: "تواصل معنا", href: "/contact" },
      { name: "لماذا نحن", href: "/#why-us" },
    ],
  },
];

const contactInfo = [
  { icon: Phone, text: "+1 (555) 123-4567" },
  { icon: Mail, text: "info@chicagostudio.com" },
  { icon: MapPin, text: "شارع الفنون، مبنى الإبداع، شيكاغو" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t-2 border-yellow-500/30">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl shadow-yellow-500/50">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">
                  استوديو شيكاغو
                </h3>
                <p className="text-sm text-gray-400">للتصوير الفوتوغرافي</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              نلتقط أجمل اللحظات بأحدث المعدات والتقنيات العالمية
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg hover:shadow-yellow-500/50 transition-shadow"
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-xl font-black text-white mb-6">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-500 transition-colors text-lg"
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
            <h4 className="text-xl font-black text-white mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <item.icon className="w-4 h-4 text-yellow-500" />
                  </div>
                  <span className="text-gray-400 leading-relaxed">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-center md:text-right">
              © 2024 استوديو شيكاغو. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-gray-500 hover:text-yellow-500 transition-colors"
              >
                سياسة الخصوصية
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-yellow-500 transition-colors"
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
