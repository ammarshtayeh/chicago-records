"use client";

import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  Calendar,
  DollarSign,
  FolderOpen,
  TrendingUp,
  Users,
} from "lucide-react";

const stats = [
  {
    name: "Total Bookings",
    value: "156",
    change: "+12%",
    icon: Calendar,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Active Projects",
    value: "23",
    change: "+5%",
    icon: FolderOpen,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Total Clients",
    value: "89",
    change: "+18%",
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Revenue",
    value: "$45,230",
    change: "+23%",
    icon: DollarSign,
    color: "from-[#ffd700] to-[#d4af37]",
  },
];

const recentBookings = [
  {
    id: 1,
    client: "Ahmed Hassan",
    service: "Vocal Recording",
    date: "2026-02-15",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    client: "Sara Mohamed",
    service: "Mixing & Mastering",
    date: "2026-02-15",
    time: "2:00 PM",
    status: "Pending",
  },
  {
    id: 3,
    client: "Omar Ali",
    service: "Music Production",
    date: "2026-02-16",
    time: "11:00 AM",
    status: "Confirmed",
  },
  {
    id: 4,
    client: "Layla Ibrahim",
    service: "Voice Over",
    date: "2026-02-16",
    time: "3:00 PM",
    status: "Confirmed",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">{stat.name}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 ml-1" />
                    <span className="text-green-500 text-sm">
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Recent Bookings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Recent Bookings</h2>
            <button className="text-[#ffd700] hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-right py-3 px-4 text-gray-400 font-medium">
                    Client
                  </th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium">
                    Service
                  </th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium">
                    Date
                  </th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium">
                    Time
                  </th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-4 text-white">{booking.client}</td>
                    <td className="py-4 px-4 text-gray-300">
                      {booking.service}
                    </td>
                    <td className="py-4 px-4 text-gray-300">{booking.date}</td>
                    <td className="py-4 px-4 text-gray-300">{booking.time}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          booking.status === "Confirmed"
                            ? "bg-green-500/20 text-green-500"
                            : "bg-yellow-500/20 text-yellow-500"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
