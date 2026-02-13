"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, TrendingUp, Award, Camera } from "lucide-react";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated Waveform Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex items-end justify-center h-full gap-1 px-4">
          {Array.from({ length: 80 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 sm:w-1.5 rounded-t-full"
              style={{
                background: `linear-gradient(to top, ${
                  i % 3 === 0 ? "#FFD700" : i % 3 === 1 ? "#00F5FF" : "#B026FF"
                }, transparent)`,
              }}
              animate={{
                height: [
                  `${Math.random() * 20 + 10}%`,
                  `${Math.random() * 80 + 20}%`,
                  `${Math.random() * 20 + 10}%`,
                ],
              }}
              transition={{
                duration: 1.2 + Math.random() * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.02,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-yellow-500/20 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/15 blur-3xl"
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-7xl mx-auto">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full mb-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/50 backdrop-blur-xl shadow-2xl shadow-yellow-500/30"
          >
            <Camera className="w-7 h-7 text-yellow-400" />
            <span className="text-yellow-400 font-black text-2xl">
              استوديو تصوير احترافي معتمد
            </span>
            <Sparkles className="w-7 h-7 text-yellow-400" />
          </motion.div>

          {/* Epic Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black mb-6 leading-tight">
              <span
                className="block mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(255,215,0,0.8)]"
                style={{ WebkitTextStroke: "2px rgba(255,215,0,0.3)" }}
              >
                استوديو شيكاغو
              </span>
              <span className="text-white block text-6xl sm:text-7xl md:text-8xl">
                للتصوير الفوتوغرافي
              </span>
            </h1>
          </motion.div>

          {/* Main Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10"
          >
            <div className="inline-block px-12 py-6 rounded-3xl bg-gradient-to-r from-orange-500 to-yellow-500 shadow-2xl shadow-orange-500/50 mb-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black">
                تصوير جميع مناسباتك
              </h2>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl text-white mb-8 max-w-6xl mx-auto leading-relaxed font-bold"
          >
            تصوير فوتوغرافي عالي المستوى
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto"
          >
            نلتقط أجمل اللحظات بأحدث المعدات والتقنيات العالمية
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-28"
          >
            <Button
              size="lg"
              variant="primary"
              className="text-2xl px-14 py-8 shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-500/70 font-black"
            >
              <Camera className="w-8 h-8 ml-3" />
              احجز جلسة تصوير
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-2xl px-14 py-8 font-black group border-4"
            >
              <Sparkles className="w-8 h-8 ml-3 group-hover:rotate-12 transition-transform" />
              معرض الأعمال
            </Button>
          </motion.div>

          {/* Epic Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto"
          >
            {[
              {
                number: "+1000",
                label: "جلسة تصوير",
                icon: Camera,
                gradient: "from-yellow-400 to-orange-500",
              },
              {
                number: "+10",
                label: "سنوات خبرة",
                icon: TrendingUp,
                gradient: "from-cyan-400 to-blue-500",
              },
              {
                number: "+500",
                label: "عميل سعيد",
                icon: Sparkles,
                gradient: "from-purple-400 to-purple-600",
              },
              {
                number: "24/7",
                label: "خدمة متواصلة",
                icon: Zap,
                gradient: "from-pink-400 to-pink-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -15 }}
                className="relative rounded-3xl p-10 bg-gradient-to-br from-gray-900/95 to-black/98 backdrop-blur-xl border-2 border-yellow-500/30 shadow-2xl hover:shadow-yellow-500/40 hover:border-yellow-500/60 transition-all duration-300 group overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.gradient} p-4 shadow-2xl`}
                >
                  <stat.icon
                    className="w-full h-full text-white"
                    strokeWidth={2.5}
                  />
                </motion.div>

                {/* Number */}
                <div
                  className={`text-6xl sm:text-7xl font-black mb-4 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                >
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-gray-200 text-xl sm:text-2xl font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
