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

const equipment = [
  { name: "Canon EOS R5", type: "كاميرا احترافية" },
  { name: "Sony A7R IV", type: "كاميرا احترافية" },
  { name: "Canon RF 70-200mm f/2.8", type: "عدسة احترافية" },
  { name: "Sony FE 24-70mm f/2.8 GM", type: "عدسة احترافية" },
  { name: "Profoto B10 Plus", type: "إضاءة استوديو" },
  { name: "DJI Mavic 3 Pro", type: "تصوير جوي (Drone)" },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-32 sm:py-40 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/50 backdrop-blur-xl shadow-2xl shadow-yellow-500/30 mb-10">
            <Star className="w-7 h-7 text-yellow-400" fill="#FFD700" />
            <span className="text-yellow-400 font-black text-2xl">
              لماذا نحن؟
            </span>
            <Sparkles className="w-7 h-7 text-yellow-400" />
          </div>

          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black mb-10">
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,215,0,0.7)]">
              لماذا تختار
            </span>
            <br />
            <span className="text-white text-5xl sm:text-6xl md:text-7xl">
              استوديو شيكاغو؟
            </span>
          </h2>

          <p className="text-2xl sm:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-semibold">
            نجمع بين الخبرة والاحترافية والمعدات الحديثة لنقدم لك أفضل تجربة
            تصوير
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="p-10 rounded-3xl bg-gradient-to-br from-gray-800/95 to-gray-900/98 backdrop-blur-xl border-2 border-yellow-500/30 shadow-2xl hover:shadow-yellow-500/40 hover:border-yellow-500/60 transition-all duration-300 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.gradient} p-5 mb-6 shadow-2xl`}
              >
                <feature.icon
                  className="w-full h-full text-white"
                  strokeWidth={2.5}
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-3xl font-black text-white mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-200 text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Equipment Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                المعدات المستخدمة
              </span>
            </h3>
            <p className="text-xl text-gray-300">
              نستخدم أحدث وأفضل المعدات الاحترافية في السوق
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/90 border-2 border-cyan-500/30 hover:border-cyan-500/60 shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-gray-400">{item.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
