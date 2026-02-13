"use client";

import { motion } from "framer-motion";
import { Camera, Mail, Phone, Sparkles, Star } from "lucide-react";

const team = [
  {
    name: "أحمد المصور",
    role: "مصور أعراس",
    experience: "+8 سنوات",
    specialty: "تصوير حفلات الزفاف",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    name: "سارة الفنانة",
    role: "مصورة بورتريه",
    experience: "+6 سنوات",
    specialty: "جلسات التصوير الشخصية",
    gradient: "from-pink-400 to-rose-500",
  },
  {
    name: "محمد الخبير",
    role: "مصور تجاري",
    experience: "+10 سنوات",
    specialty: "التصوير التجاري",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    name: "ليلى المبدعة",
    role: "محررة صور",
    experience: "+7 سنوات",
    specialty: "معالجة وتحرير الصور",
    gradient: "from-purple-400 to-purple-600",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-gray-900 dark:to-black"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-pink-500/05 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 left-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-cyan-500/05 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 backdrop-blur-md shadow-lg shadow-pink-500/20 mb-8">
            <Camera className="w-5 h-5 text-pink-400" />
            <span className="text-pink-400 font-bold text-sm sm:text-base">
              فريق العمل
            </span>
            <Sparkles className="w-5 h-5 text-pink-400" />
          </div>

          <h2 className="font-black mb-6">
            <span className="block text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-pink-300 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(236,72,153,0.5)] mb-2">
              تعرف على فريقنا
            </span>
            <span className="block text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl">
              المحترف
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            فريق من المصورين المحترفين المتخصصين في مختلف مجالات التصوير
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/60 backdrop-blur-xl border border-slate-200 dark:border-pink-500/20 shadow-xl hover:shadow-pink-500/20 hover:border-pink-500/40 transition-all duration-300 overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Avatar Placeholder */}
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="relative w-24 h-24 mx-auto mb-5 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-700 dark:to-gray-800 border-2 border-slate-200 dark:border-pink-500/30 group-hover:border-pink-500/60 shadow-lg transition-all duration-300 overflow-hidden flex items-center justify-center"
                >
                  <Camera className="w-10 h-10 text-slate-400 dark:text-gray-500" />
                </motion.div>

                {/* Name */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 text-center">
                  {member.name}
                </h3>

                {/* Role */}
                <div
                  className={`text-center text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${member.gradient} text-white mb-3 inline-block mx-auto`}
                >
                  {member.role}
                </div>

                {/* Experience */}
                <div className="flex items-center justify-center gap-1 mb-2 text-sm">
                  <Star className="w-4 h-4 text-yellow-400" fill="#FFD700" />
                  <span className="text-slate-600 dark:text-gray-300">
                    {member.experience}
                  </span>
                </div>

                {/* Specialty */}
                <p className="text-slate-500 dark:text-gray-400 text-center mb-5 text-sm">
                  {member.specialty}
                </p>

                {/* Contact Icons */}
                <div className="flex justify-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-gray-700 hover:bg-pink-500 text-slate-500 dark:text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-gray-700 hover:bg-cyan-500 text-slate-500 dark:text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Phone className="w-4 h-4" />
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
