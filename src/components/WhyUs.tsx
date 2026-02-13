"use client";

import { motion } from "framer-motion";
import {
  Award,
  Camera,
  Clock,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "خبرة +10 سنوات",
    description: "أكثر من عشر سنوات من الخبرة في التصوير الفوتوغرافي الاحترافي",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Camera,
    title: "معدات احترافية",
    description: "نستخدم أحدث كاميرات وعدسات Canon و Sony و Nikon الاحترافية",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: Users,
    title: "+500 عميل سعيد",
    description: "خدمنا أكثر من 500 عميل راضٍ عن جودة خدماتنا",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    icon: Clock,
    title: "تسليم سريع",
    description: "نلتزم بتسليم الصور المعدلة خلال 7-10 أيام كحد أقصى",
    gradient: "from-pink-400 to-pink-600",
  },
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "نضمن لك أعلى جودة في التصوير والمعالجة مع إمكانية التعديل",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: Sparkles,
    title: "معالجة احترافية",
    description: "فريق متخصص في معالجة وتحرير الصور باستخدام أحدث البرامج",
    gradient: "from-orange-400 to-red-500",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-gray-900 dark:to-black">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/05 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/05 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 backdrop-blur-md shadow-lg shadow-yellow-500/20 mb-8">
            <Star className="w-5 h-5 text-yellow-400" fill="#FFD700" />
            <span className="text-yellow-400 font-bold text-sm sm:text-base">
              لماذا نحن؟
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </div>

          <h2 className="font-black mb-6">
            <span className="block text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.5)] mb-2">
              لماذا تختار
            </span>
            <span className="block text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl">
              استوديو شيكاغو؟
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            نجمع بين الخبرة والاحترافية والمعدات الحديثة لنقدم لك أفضل تجربة
            تصوير
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-gray-800/80 dark:to-gray-900/90 backdrop-blur-md border border-slate-200 dark:border-yellow-500/20 hover:border-yellow-500/40 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-yellow-500/20 transition-all duration-300 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 shadow-lg`}
              >
                <feature.icon
                  className="w-full h-full text-white"
                  strokeWidth={2}
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-gray-300 text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Equipment Section */}
      </div>
    </section>
  );
}
