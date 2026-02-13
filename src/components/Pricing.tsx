"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Check, Crown, Star, Camera } from "lucide-react";

const packages = [
  {
    name: "باقة البداية",
    price: "$200",
    duration: "ساعتين",
    description: "مثالية للجلسات الشخصية",
    features: ["ساعتين تصوير", "50 صورة معدلة", "مصور محترف", "نسخة رقمية"],
    popular: false,
    gradient: "from-gray-600 to-gray-800",
  },
  {
    name: "باقة الاحتراف",
    price: "$500",
    duration: "5 ساعات",
    description: "الأكثر طلباً للأعراس",
    features: [
      "5 ساعات تصوير",
      "150 صورة معدلة",
      "معالجة احترافية",
      "ألبوم رقمي",
      "فيديو قصير",
    ],
    popular: true,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    name: "باقة الفخامة",
    price: "$1500",
    duration: "يوم كامل",
    description: "حل شامل للمناسبات الكبرى",
    features: [
      "تغطية يوم كامل",
      "300+ صورة معدلة",
      "فريق متكامل",
      "ألبوم مطبوع",
      "فيديو سينمائي",
      "تصوير جوي",
    ],
    popular: false,
    gradient: "from-cyan-400 to-blue-500",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 sm:py-32 relative overflow-hidden bg-slate-50 dark:bg-black"
    >
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-yellow-500/05 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-cyan-500/05 rounded-full blur-3xl" />

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
            <Crown className="w-5 h-5 text-yellow-500" />
            <span className="text-yellow-500 font-bold text-sm sm:text-base">
              الأسعار والباقات
            </span>
          </div>

          <h2 className="font-black mb-6">
            <span className="block text-slate-900 dark:text-white text-4xl sm:text-5xl md:text-6xl mb-2">
              اختر الباقة
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
              المناسبة لك
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            باقات تصوير مرنة تناسب جميع المناسبات والميزانيات
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`${pkg.popular ? "md:col-span-2 lg:col-span-1 lg:scale-105 lg:z-10" : ""}`}
            >
              <div
                className={`h-full rounded-3xl bg-white dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-black/95 backdrop-blur-xl border shadow-xl transition-all duration-300 overflow-hidden flex flex-col ${
                  pkg.popular
                    ? "border-2 border-yellow-500 shadow-yellow-500/20"
                    : "border-slate-200 dark:border-yellow-500/20 hover:border-yellow-500/40"
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-center py-2 px-4 font-bold text-sm flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    الأكثر طلباً
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                )}

                <div
                  className={`p-8 flex-1 flex flex-col ${pkg.popular ? "" : "pt-8"}`}
                >
                  {/* Package Name */}
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-gray-400 mb-6 text-sm">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span
                        className={`text-4xl sm:text-5xl font-black ${
                          pkg.popular
                            ? "bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                            : "text-slate-900 dark:text-white"
                        }`}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <div className="text-gray-500 text-sm font-medium">
                      {pkg.duration}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${pkg.gradient} flex items-center justify-center flex-shrink-0`}
                        >
                          <Check
                            className="w-3 h-3 text-white"
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-slate-700 dark:text-gray-300 text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant={pkg.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full text-base font-bold py-4 shadow-lg rounded-xl"
                  >
                    <Camera className="w-5 h-5 ml-2" />
                    احجز الباقة
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
