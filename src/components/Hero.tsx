"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, TrendingUp, Award, Camera } from "lucide-react";
import Button from "./ui/Button";
import AnimatedCamera from "./ui/AnimatedCamera";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-black dark:via-gray-900 dark:to-black">
      {/* Animated Waveform Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="flex items-end justify-center h-full gap-1 px-4">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-2 sm:w-2.5 rounded-t-full" // Increased width to compensate for fewer bars
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

      {/* Floating Camera Animation - Main */}
      <div className="absolute top-20 right-5 md:right-20 lg:right-40 opacity-80 pointer-events-none z-0 hidden sm:block">
        <AnimatedCamera className="w-96 h-96" />
      </div>

      {/* Floating Camera Animation - Secondary Left */}
      <div className="absolute bottom-40 left-10 opacity-40 pointer-events-none z-0 hidden lg:block">
        <AnimatedCamera className="w-64 h-64 rotate-12 blur-[1px]" />
      </div>

      {/* Floating Camera Animation - Small Top Left */}
      <div className="absolute top-40 left-40 opacity-30 pointer-events-none z-0 hidden xl:block">
        <AnimatedCamera className="w-40 h-40 -rotate-12 blur-[2px]" />
      </div>

      {/* Floating Camera Animation - Small Bottom Right */}
      <div className="absolute bottom-20 right-1/4 opacity-20 pointer-events-none z-0 hidden md:block">
        <AnimatedCamera className="w-48 h-48 rotate-45 blur-[3px]" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-yellow-500/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/40 backdrop-blur-md shadow-lg shadow-yellow-500/10"
          >
            <Camera className="w-5 h-5 text-yellow-500" />
            <span className="text-yellow-500 font-bold text-base sm:text-lg">
              استوديو تصوير احترافي
            </span>
            <Sparkles className="w-5 h-5 text-yellow-500" />
          </motion.div>

          {/* Epic Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="font-black mb-4 leading-tight tracking-tight">
              <span className="block mb-2 text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]">
                استوديو شيكاغو
              </span>
              <span className="text-slate-900 dark:text-white block text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide">
                للتصوير الفوتوغرافي
              </span>
            </h1>
          </motion.div>

          {/* Main Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 shadow-xl shadow-orange-500/30">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-black tracking-wide">
                تصوير جميع مناسباتك
              </h2>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-gray-200 mb-4 font-bold"
          >
            تصوير فوتوغرافي عالي المستوى
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-light"
          >
            نلتقط أجمل اللحظات بأحدث المعدات والتقنيات العالمية
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
          >
            <Button
              size="lg"
              variant="primary"
              className="text-lg px-10 py-4 shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 font-bold tracking-wide"
            >
              <Camera className="w-6 h-6 ml-2" />
              احجز جلسة
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-4 font-bold tracking-wide group hover:bg-slate-100 dark:hover:bg-white/5 text-slate-900 dark:text-white border-slate-200 dark:border-white/20"
            >
              <Sparkles className="w-6 h-6 ml-2 group-hover:rotate-12 transition-transform" />
              أعمالنا
            </Button>
          </motion.div>

          {/* Epic Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto border-t border-slate-200 dark:border-white/10 pt-10"
          >
            {[
              {
                number: "+1K",
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
                whileHover={{ y: -5 }}
                className="group text-center"
              >
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl transition-colors duration-300">
                  <stat.icon
                    className={`w-8 h-8 mb-3 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}
                  />
                  {/* Fallback for icon color if bg-clip doesn't work well on stroke: use text color or separate wrapper */}
                  {/* Better approach for Icon gradient equivalent: wrap in div with text-transparent bg-clip-text if using that, or just standard colors. Let's stick to standard colors for clarity or style properly. */}
                  {/* Actually, let's just color the icon with the first color of gradient for simplicity and elegance. */}

                  <div
                    className={`text-3xl sm:text-4xl font-black mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-slate-500 dark:text-gray-400 text-sm sm:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
