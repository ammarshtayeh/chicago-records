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
      className="py-32 sm:py-40 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Background Decorations */}
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
            <Camera className="w-7 h-7 text-yellow-400" />
            <span className="text-yellow-400 font-black text-2xl">
              خدمات التصوير
            </span>
            <Sparkles className="w-7 h-7 text-yellow-400" />
          </div>

          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black mb-10">
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,215,0,0.7)]">
              خدمات تصوير متكاملة
            </span>
            <br />
            <span className="text-white text-5xl sm:text-6xl md:text-7xl">
              لجميع المناسبات
            </span>
          </h2>

          <p className="text-2xl sm:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-semibold">
            نقدم مجموعة شاملة من خدمات التصوير الفوتوغرافي والفيديوغرافي بأعلى
            معايير الجودة
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="h-full p-10 rounded-3xl bg-gradient-to-br from-gray-800/95 to-gray-900/98 backdrop-blur-xl border-2 border-yellow-500/30 shadow-2xl hover:shadow-yellow-500/40 hover:border-yellow-500/60 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 transition-all duration-500`}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.6 }}
                className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.iconBg} p-5 mb-8 shadow-2xl ${service.shadow} relative z-10`}
              >
                <service.icon
                  className="w-full h-full text-white"
                  strokeWidth={2.5}
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-3xl font-black text-white mb-5 relative z-10">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-200 mb-8 leading-relaxed text-lg relative z-10">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 relative z-10">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient} shadow-lg`}
                    />
                    <span className="text-gray-100 text-lg font-medium">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
