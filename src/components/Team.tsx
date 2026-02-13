"use client";

import { motion } from "framer-motion";
import { Camera, Mail, Phone, Sparkles, Star } from "lucide-react";

const team = [
  {
    name: "أحمد المصور",
    role: "مصور رئيسي - متخصص في الأعراس",
    experience: "+8 سنوات خبرة",
    specialty: "تصوير حفلات الزفاف والمناسبات الكبرى",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    name: "سارة الفنانة",
    role: "مصورة بورتريه",
    experience: "+6 سنوات خبرة",
    specialty: "جلسات التصوير الشخصية والعائلية",
    gradient: "from-pink-400 to-rose-500",
  },
  {
    name: "محمد الخبير",
    role: "مصور تجاري",
    experience: "+10 سنوات خبرة",
    specialty: "التصوير التجاري والمنتجات",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    name: "ليلى المبدعة",
    role: "محررة صور",
    experience: "+7 سنوات خبرة",
    specialty: "معالجة وتحرير الصور الاحترافية",
    gradient: "from-purple-400 to-purple-600",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-32 sm:py-40 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
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
          <div className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-2 border-pink-500/50 backdrop-blur-xl shadow-2xl shadow-pink-500/30 mb-10">
            <Camera className="w-7 h-7 text-pink-400" />
            <span className="text-pink-400 font-black text-2xl">
              فريق العمل
            </span>
            <Sparkles className="w-7 h-7 text-pink-400" />
          </div>

          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black mb-10">
            <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(236,72,153,0.7)]">
              تعرف على فريقنا
            </span>
            <br />
            <span className="text-white text-5xl sm:text-6xl md:text-7xl">
              المحترف
            </span>
          </h2>

          <p className="text-2xl sm:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-semibold">
            فريق من المصورين المحترفين المتخصصين في مختلف مجالات التصوير
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="group relative"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/95 to-gray-900/98 backdrop-blur-xl border-2 border-pink-500/30 shadow-2xl hover:shadow-pink-500/40 hover:border-pink-500/60 transition-all duration-300 overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Avatar Placeholder */}
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="relative w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-4 border-pink-500/50 group-hover:border-pink-500 shadow-2xl group-hover:shadow-pink-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="w-16 h-16 text-gray-600" />
                  </div>
                </motion.div>

                {/* Name */}
                <h3 className="text-2xl font-black text-white mb-2 text-center">
                  {member.name}
                </h3>

                {/* Role */}
                <div
                  className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${member.gradient} text-white text-sm font-bold mb-4 w-full text-center`}
                >
                  {member.role}
                </div>

                {/* Experience */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400" fill="#FFD700" />
                  <span className="text-gray-300 font-semibold">
                    {member.experience}
                  </span>
                </div>

                {/* Specialty */}
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {member.specialty}
                </p>

                {/* Contact Icons */}
                <div className="flex justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg hover:shadow-pink-500/50 transition-shadow"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
