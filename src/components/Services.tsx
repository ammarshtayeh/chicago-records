"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Users,
  Heart,
  Briefcase,
  Image,
  Sparkles,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "تصوير حفلات الزفاف",
    description:
      "نلتقط أجمل لحظات يومكم الخاص بأسلوب فني راقي واحترافي يحفظ ذكرياتكم للأبد",
    features: [
      "تصوير فوتوغرافي احترافي",
      "تغطية كاملة للحفل",
      "ألبوم فاخر مطبوع",
    ],
    gradient: "from-pink-400 via-pink-500 to-rose-500",
    iconBg: "from-pink-400 to-rose-500",
    shadow: "shadow-pink-500/40",
  },
  {
    icon: Users,
    title: "تصوير المناسبات",
    description:
      "تغطية شاملة لجميع المناسبات الاجتماعية والعائلية بأعلى مستويات الجودة والاحترافية",
    features: ["حفلات الخطوبة والأعراس", "أعياد الميلاد", "المناسبات العائلية"],
    gradient: "from-yellow-400 via-yellow-500 to-orange-500",
    iconBg: "from-yellow-400 to-orange-500",
    shadow: "shadow-yellow-500/40",
  },
  {
    icon: Camera,
    title: "جلسات التصوير الشخصية",
    description:
      "جلسات تصوير احترافية للأفراد والعائلات في الاستوديو أو في الأماكن الخارجية",
    features: ["تصوير بورتريه احترافي", "جلسات عائلية", "تصوير أطفال"],
    gradient: "from-purple-400 via-purple-500 to-purple-600",
    iconBg: "from-purple-400 to-purple-600",
    shadow: "shadow-purple-500/40",
  },
  {
    icon: Briefcase,
    title: "التصوير التجاري",
    description:
      "تصوير احترافي للمنتجات والشركات والمشاريع التجارية بجودة عالية تبرز علامتك التجارية",
    features: ["تصوير المنتجات", "تصوير الشركات", "محتوى تسويقي"],
    gradient: "from-cyan-400 via-cyan-500 to-blue-500",
    iconBg: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-500/40",
  },
  {
    icon: Video,
    title: "التصوير الفيديوغرافي",
    description:
      "إنتاج فيديوهات احترافية للمناسبات والفعاليات بأحدث معدات التصوير والمونتاج",
    features: ["فيديو سينمائي", "مونتاج احترافي", "جودة 4K"],
    gradient: "from-emerald-400 via-emerald-500 to-teal-500",
    iconBg: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/40",
  },
  {
    icon: Image,
    title: "المعالجة والتحرير",
    description:
      "خدمات معالجة وتحرير الصور باحترافية عالية لإخراج صور مثالية تليق بمناسباتكم",
    features: ["معالجة احترافية", "تحسين الألوان", "ريتوش متقدم"],
    gradient: "from-orange-400 via-orange-500 to-red-500",
    iconBg: "from-orange-400 to-red-500",
    shadow: "shadow-orange-500/40",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Background Decorations */}
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
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 backdrop-blur-md mb-6">
            <Camera className="w-4 h-4 text-yellow-500" />
            <span className="text-yellow-500 font-bold text-sm">
              خدمات التصوير
            </span>
          </div>

          <h2 className="font-black mb-6">
            <span className="block text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.5)] mb-2">
              خدمات تصوير متكاملة
            </span>
            <span className="block text-white text-3xl sm:text-4xl">
              لجميع المناسبات
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            نقدم مجموعة شاملة من خدمات التصوير الفوتوغرافي والفيديوغرافي بأعلى
            معايير الجودة
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full p-8 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-white/10 hover:border-yellow-500/40 hover:bg-gray-800/80 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background Gradient on Hover*/}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}
              />

              {/* Icon */}
              <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconBg} p-4 mb-6 shadow-lg shadow-black/50 relative z-10 flex items-center justify-center`}
              >
                <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed text-base relative z-10">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 relative z-10 border-t border-white/5 pt-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}
                    />
                    <span className="text-gray-300 text-sm font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
