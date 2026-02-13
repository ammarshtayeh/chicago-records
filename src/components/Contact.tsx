"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  Camera,
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "الهاتف",
    value: "+1 (555) 123-4567",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "info@chicagostudio.com",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: MapPin,
    title: "العنوان",
    value: "شارع الفنون، مبنى الإبداع، شيكاغو",
    gradient: "from-pink-400 to-pink-600",
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    value: "السبت - الخميس: 9:00 - 22:00",
    gradient: "from-emerald-400 to-teal-500",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative overflow-hidden bg-slate-50 dark:bg-black"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-yellow-500/05 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-cyan-500/05 rounded-full blur-3xl" />

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
            <MessageSquare className="w-5 h-5 text-yellow-500" />
            <span className="text-yellow-500 font-bold text-sm sm:text-base">
              تواصل معنا
            </span>
          </div>

          <h2 className="font-black mb-6">
            <span className="block text-slate-900 dark:text-white text-4xl sm:text-5xl md:text-6xl mb-2">
              احجز جلسة التصوير
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
              الخاصة بك
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            نحن هنا لالتقاط أجمل لحظاتك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-5 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-black/95 backdrop-blur-xl border border-slate-200 dark:border-yellow-500/10 hover:border-yellow-500/30 shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-yellow-500 transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
                      {info.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/5 border border-yellow-500/20 backdrop-blur-xl mt-6 bg-white dark:bg-transparent"
            >
              <div className="flex items-center gap-3 mb-3">
                <Camera className="w-5 h-5 text-yellow-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  استشارة مجانية
                </h3>
              </div>
              <p className="text-slate-600 dark:text-gray-300 text-base leading-relaxed mb-5">
                احصل على استشارة مجانية لجلسة التصوير واكتشف كيف يمكننا التقاط
                أجمل لحظاتك
              </p>
              <Button
                variant="primary"
                size="lg"
                className="w-full shadow-lg shadow-yellow-500/20 text-base font-bold py-3.5 rounded-xl"
              >
                <Sparkles className="w-5 h-5 ml-2" />
                احجز استشارتك
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-black/95 backdrop-blur-xl border border-slate-200 dark:border-yellow-500/10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-slate-700 dark:text-white font-semibold mb-2 text-base">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/20 transition-all text-base"
                  placeholder="أدخل اسمك"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-white font-semibold mb-2 text-base">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/20 transition-all text-base"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-white font-semibold mb-2 text-base">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/20 transition-all text-base"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-white font-semibold mb-2 text-base">
                  رسالتك
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/20 transition-all resize-none text-base"
                  placeholder="أخبرنا عن المناسبة ونوع التصوير المطلوب..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full text-lg py-4 shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/40 rounded-xl"
              >
                <Send className="w-5 h-5 ml-2" />
                إرسال الرسالة
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
