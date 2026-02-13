"use client";

import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  Calendar,
  DollarSign,
  Image as ImageIcon,
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
    name: "Portfolio Items",
    value: "45",
    change: "+3",
    icon: ImageIcon,
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
    color: "from-yellow-400 to-orange-500",
  },
];

const recentBookings = [
  {
    id: 1,
    client: "Ahmed Hassan",
    service: "Wedding Photography",
    date: "2026-02-15",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    client: "Sara Mohamed",
    service: "Portrait Session",
    date: "2026-02-15",
    time: "2:00 PM",
    status: "Pending",
  },
  {
    id: 3,
    client: "Omar Ali",
    service: "Commercial Shoot",
    date: "2026-02-16",
    time: "11:00 AM",
    status: "Confirmed",
  },
  {
    id: 4,
    client: "Layla Ibrahim",
    service: "Event Coverage",
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
            <Card className="relative overflow-hidden group hover:border-yellow-500/50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">{stat.name}</p>
                  <p className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </p>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-green-500 text-sm font-medium">
                      {stat.change}
                    </span>
                    <span className="text-gray-500 text-xs ml-2">
                      vs last month
                    </span>
                  </div>
                </div>
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className="w-7 h-7 text-white" />
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
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Recent Bookings</h2>
            <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-yellow-500 text-sm font-medium transition-colors">
              View All Bookings
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">
                    Client
                  </th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">
                    Service
                  </th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">
                    Date
                  </th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">
                    Time
                  </th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                  >
                    <td className="py-4 px-4 text-white font-medium">
                      {booking.client}
                    </td>
                    <td className="py-4 px-4 text-gray-300">
                      {booking.service}
                    </td>
                    <td className="py-4 px-4 text-gray-300">{booking.date}</td>
                    <td className="py-4 px-4 text-gray-300">{booking.time}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          booking.status === "Confirmed"
                            ? "bg-green-500/10 text-green-500 border border-green-500/20"
                            : "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
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
