"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  Calendar,
  Camera,
  Clock,
  Mail,
  Phone,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import { useState } from "react";

const services = [
  "تصوير حفلات الزفاف",
  "تصوير المناسبات",
  "جلسات التصوير الشخصية",
  "التصوير التجاري",
  "التصوير الفيديوغرافي",
  "المعالجة والتحرير",
];

const timeSlots = [
  "9:00 - 11:00 صباحاً",
  "11:00 - 1:00 ظهراً",
  "1:00 - 3:00 عصراً",
  "3:00 - 5:00 عصراً",
  "5:00 - 7:00 مساءً",
  "7:00 - 9:00 مساءً",
];

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <section
      id="booking"
      className="py-32 sm:py-40 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"
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
          <div className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-2 border-emerald-500/50 backdrop-blur-xl shadow-2xl shadow-emerald-500/30 mb-10">
            <Calendar className="w-7 h-7 text-emerald-400" />
            <span className="text-emerald-400 font-black text-2xl">
              احجز موعدك
            </span>
            <Sparkles className="w-7 h-7 text-emerald-400" />
          </div>

          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black mb-10">
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(52,211,153,0.7)]">
              احجز جلسة التصوير
            </span>
            <br />
            <span className="text-white text-5xl sm:text-6xl md:text-7xl">
              الخاصة بك
            </span>
          </h2>

          <p className="text-2xl sm:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-semibold">
            املأ النموذج وسنتواصل معك خلال 24 ساعة لتأكيد الحجز
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 sm:p-12 rounded-3xl bg-gradient-to-br from-gray-800/95 to-gray-900/98 backdrop-blur-xl border-2 border-emerald-500/30 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-white font-bold mb-3 text-lg">
                    <User className="w-5 h-5 text-emerald-400" />
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-black/50 border-2 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-lg"
                    placeholder="أدخل اسمك"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-white font-bold mb-3 text-lg">
                    <Mail className="w-5 h-5 text-emerald-400" />
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-black/50 border-2 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-lg"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 text-white font-bold mb-3 text-lg">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-black/50 border-2 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-lg"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="flex items-center gap-2 text-white font-bold mb-3 text-lg">
                  <Camera className="w-5 h-5 text-emerald-400" />
                  نوع الخدمة
                </label>
                <select
                  required
                  className="w-full px-6 py-4 rounded-xl bg-black/50 border-2 border-gray-700 text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-lg"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option value="">اختر نوع الخدمة</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-white font-bold mb-3 text-lg">
                    <Calendar className="w-5 h-5 text-emerald-400" />
                    التاريخ المفضل
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-black/50 border-2 border-gray-700 text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-lg"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-white font-bold mb-3 text-lg">
                    <Clock className="w-5 h-5 text-emerald-400" />
                    الوقت المفضل
                  </label>
                  <select
                    required
                    className="w-full px-6 py-4 rounded-xl bg-black/50 border-2 border-gray-700 text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-lg"
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                  >
                    <option value="">اختر الوقت</option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center gap-2 text-white font-bold mb-3 text-lg">
                  <Send className="w-5 h-5 text-emerald-400" />
                  تفاصيل إضافية
                </label>
                <textarea
                  rows={5}
                  className="w-full px-6 py-4 rounded-xl bg-black/50 border-2 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none text-lg"
                  placeholder="أخبرنا المزيد عن المناسبة أو أي تفاصيل خاصة..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full text-2xl py-7 shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-teal-500 hover:to-emerald-500"
              >
                <Calendar className="w-7 h-7 ml-3" />
                تأكيد الحجز
              </Button>
            </form>
          </motion.div>

          {/* Info Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-block px-8 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
              <p className="text-gray-300 text-lg">
                ⏱️{" "}
                <span className="font-bold text-emerald-400">
                  سنتواصل معك خلال 24 ساعة
                </span>{" "}
                لتأكيد الحجز وتحديد التفاصيل النهائية
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
