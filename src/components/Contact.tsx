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
      className="py-32 sm:py-40 relative overflow-hidden bg-black"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

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
            <MessageSquare className="w-6 h-6 text-yellow-500" />
            <span className="text-yellow-500 font-bold text-xl">
              تواصل معنا
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8">
            <span className="text-white">احجز جلسة التصوير</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]">
              الخاصة بك
            </span>
          </h2>

          <p className="text-2xl sm:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            نحن هنا لالتقاط أجمل لحظاتك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-xl border border-yellow-500/20 shadow-2xl hover:shadow-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <info.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
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
              className="p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-orange-500/5 border border-yellow-500/30 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Camera className="w-6 h-6 text-yellow-500" />
                <h3 className="text-2xl font-bold text-white">
                  استشارة مجانية
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                احصل على استشارة مجانية لجلسة التصوير واكتشف كيف يمكننا التقاط
                أجمل لحظاتك
              </p>
              <Button
                variant="primary"
                size="lg"
                className="w-full shadow-lg shadow-yellow-500/20"
              >
                <Sparkles className="w-6 h-6 ml-2" />
                احجز استشارتك
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-xl border border-yellow-500/20 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-3 text-lg">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all text-lg"
                  placeholder="أدخل اسمك"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-3 text-lg">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all text-lg"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-3 text-lg">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all text-lg"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-3 text-lg">
                  رسالتك
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all resize-none text-lg"
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
                className="w-full text-xl py-6 shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/50"
              >
                <Send className="w-6 h-6 ml-2" />
                إرسال الرسالة
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
