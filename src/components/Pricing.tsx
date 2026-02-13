"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Check, Crown, Sparkles, Star, Camera } from "lucide-react";

const packages = [
  {
    name: "باقة البداية",
    price: "$200",
    duration: "ساعتين",
    description: "مثالية للجلسات الشخصية والمناسبات الصغيرة",
    features: [
      "ساعتين تصوير",
      "50 صورة معدلة",
      "مصور محترف",
      "نسخة رقمية عالية الجودة",
      "معالجة أساسية للصور",
    ],
    popular: false,
    gradient: "from-gray-600 to-gray-800",
  },
  {
    name: "باقة الاحتراف",
    price: "$500",
    duration: "5 ساعات",
    description: "الأكثر طلباً لحفلات الزفاف والمناسبات الكبرى",
    features: [
      "5 ساعات تصوير",
      "150 صورة معدلة",
      "مصورين محترفين",
      "معالجة احترافية متقدمة",
      "ألبوم رقمي فاخر",
      "فيديو قصير (1 دقيقة)",
      "نسخ متعددة الصيغ",
    ],
    popular: true,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    name: "باقة الفخامة",
    price: "$1500",
    duration: "يوم كامل",
    description: "حل شامل للمناسبات الكبرى والأعراس الفاخرة",
    features: [
      "تغطية كاملة ليوم كامل",
      "300+ صورة معدلة",
      "فريق تصوير متكامل",
      "معالجة احترافية شاملة",
      "ألبوم مطبوع فاخر",
      "فيديو سينمائي كامل",
      "تصوير جوي (Drone)",
      "تسليم سريع خلال أسبوع",
    ],
    popular: false,
    gradient: "from-cyan-400 to-blue-500",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32 sm:py-40 relative overflow-hidden bg-black"
    >
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 backdrop-blur-xl shadow-lg shadow-yellow-500/20 mb-8">
            <Crown className="w-6 h-6 text-yellow-500" />
            <span className="text-yellow-500 font-bold text-xl">
              الأسعار والباقات
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8">
            <span className="text-white">اختر الباقة</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]">
              المناسبة لك
            </span>
          </h2>

          <p className="text-2xl sm:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            باقات تصوير مرنة تناسب جميع المناسبات والميزانيات
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={pkg.popular ? "lg:scale-110 lg:z-10" : ""}
            >
              <div
                className={`h-full rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-xl border shadow-2xl transition-all duration-300 overflow-hidden ${
                  pkg.popular
                    ? "border-2 border-yellow-500 shadow-yellow-500/30"
                    : "border border-yellow-500/20 hover:border-yellow-500/50"
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-center py-4 px-4 font-bold text-lg flex items-center justify-center gap-2">
                    <Star className="w-5 h-5 fill-current" />
                    الأكثر طلباً
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                )}

                <div className={`p-10 ${pkg.popular ? "" : "pt-10"}`}>
                  {/* Package Name */}
                  <h3 className="text-3xl font-black text-white mb-3">
                    {pkg.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 text-lg">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span
                        className={`text-6xl font-black ${
                          pkg.popular
                            ? "bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                            : "text-white"
                        }`}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <div className="text-gray-400 text-lg">{pkg.duration}</div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`mt-1 w-6 h-6 rounded-full bg-gradient-to-br ${pkg.gradient} flex items-center justify-center flex-shrink-0`}
                        >
                          <Check
                            className="w-4 h-4 text-white"
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-gray-300 text-lg leading-relaxed">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant={pkg.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full text-xl py-6 shadow-lg"
                  >
                    <Camera className="w-6 h-6 ml-2" />
                    احجز الآن
                  </Button>
                </div>

                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-5 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-xl border border-yellow-500/20 shadow-2xl p-8">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Sparkles className="w-8 h-8 text-yellow-500" />
              <p className="text-xl text-gray-300">تحتاج باقة مخصصة؟</p>
              <Button
                variant="primary"
                size="lg"
                className="shadow-lg shadow-yellow-500/20"
              >
                <Camera className="w-6 h-6 ml-2" />
                تواصل معنا
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
