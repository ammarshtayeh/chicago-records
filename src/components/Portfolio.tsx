"use client";

import { motion } from "framer-motion";
import { Camera, Image as ImageIcon, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const categories = ["الكل", "أعراس", "مناسبات", "بورتريه", "تجاري", "عائلي"];

const portfolioItems = [
  {
    id: 1,
    category: "أعراس",
    title: "حفل زفاف أحمد وفاطمة",
    image: "/placeholder-wedding.jpg",
  },
  {
    id: 2,
    category: "مناسبات",
    title: "حفل تخرج",
    image: "/placeholder-event.jpg",
  },
  {
    id: 3,
    category: "بورتريه",
    title: "جلسة تصوير شخصية",
    image: "/placeholder-portrait.jpg",
  },
  {
    id: 4,
    category: "تجاري",
    title: "تصوير منتجات",
    image: "/placeholder-commercial.jpg",
  },
  {
    id: 5,
    category: "عائلي",
    title: "جلسة عائلية",
    image: "/placeholder-family.jpg",
  },
  {
    id: 6,
    category: "أعراس",
    title: "حفل خطوبة",
    image: "/placeholder-engagement.jpg",
  },
  {
    id: 7,
    category: "بورتريه",
    title: "تصوير احترافي",
    image: "/placeholder-portrait2.jpg",
  },
  {
    id: 8,
    category: "مناسبات",
    title: "عيد ميلاد",
    image: "/placeholder-birthday.jpg",
  },
  {
    id: 9,
    category: "تجاري",
    title: "تصوير شركات",
    image: "/placeholder-corporate.jpg",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const filteredItems =
    selectedCategory === "الكل"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-black dark:via-gray-900 dark:to-black">
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-purple-500/05 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 left-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-pink-500/05 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 backdrop-blur-md shadow-lg shadow-purple-500/20 mb-8">
            <ImageIcon className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-bold text-sm sm:text-base">
              معرض الأعمال
            </span>
            <Sparkles className="w-5 h-5 text-purple-400" />
          </div>

          <h2 className="font-black mb-6">
            <span className="block text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-300 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] mb-2">
              أعمالنا المميزة
            </span>
            <span className="block text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl">
              لحظات لا تُنسى
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-10">
            استعرض مجموعة من أفضل أعمالنا في التصوير الفوتوغرافي
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/40"
                    : "bg-white dark:bg-gray-800/50 text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-gray-700/50 border border-slate-200 dark:border-gray-700 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800/40 border border-slate-200 dark:border-gray-700/50 hover:border-purple-500/40 shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-900 group-hover:scale-105 transition-transform duration-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-slate-300 dark:text-gray-700 group-hover:text-purple-500/50 transition-colors duration-500" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-3 py-1 rounded-full bg-purple-500/90 text-white text-xs font-bold mb-2 shadow-lg">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-block px-6 py-3 rounded-xl bg-purple-500/5 border border-purple-500/20">
            <p className="text-gray-400 text-sm sm:text-base">
              💡 <span className="font-bold text-purple-400">ملاحظة:</span> سيتم
              إضافة الصور الفعلية قريباً
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
