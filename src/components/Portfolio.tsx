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
    <section
      id="portfolio"
      className="py-32 sm:py-40 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 backdrop-blur-xl shadow-2xl shadow-purple-500/30 mb-10">
            <ImageIcon className="w-7 h-7 text-purple-400" />
            <span className="text-purple-400 font-black text-2xl">
              معرض الأعمال
            </span>
            <Sparkles className="w-7 h-7 text-purple-400" />
          </div>

          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black mb-10">
            <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(168,85,247,0.7)]">
              أعمالنا المميزة
            </span>
            <br />
            <span className="text-white text-5xl sm:text-6xl md:text-7xl">
              لحظات لا تُنسى
            </span>
          </h2>

          <p className="text-2xl sm:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-semibold mb-12">
            استعرض مجموعة من أفضل أعمالنا في التصوير الفوتوغرافي
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/50"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden bg-gray-800/50 border-2 border-gray-700 hover:border-purple-500/50 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-20 h-20 text-gray-600" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div>
                    <div className="inline-block px-4 py-2 rounded-full bg-purple-500/80 text-white text-sm font-bold mb-3">
                      {item.category}
                    </div>
                    <h3 className="text-2xl font-black text-white">
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
          className="text-center mt-16"
        >
          <div className="inline-block px-8 py-4 rounded-2xl bg-purple-500/10 border border-purple-500/30">
            <p className="text-gray-400 text-lg">
              💡 <span className="font-bold text-purple-400">ملاحظة:</span> سيتم
              إضافة الصور الفعلية قريباً
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
