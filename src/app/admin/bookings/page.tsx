"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Calendar, Clock, Mail, Phone, Search } from "lucide-react";
import { useState } from "react";

const bookings = [
  {
    id: 1,
    client: "Ahmed Hassan",
    email: "ahmed@example.com",
    phone: "+1 555-0101",
    service: "Vocal Recording",
    date: "2026-02-15",
    time: "10:00 AM - 12:00 PM",
    status: "Confirmed",
    notes: "Needs microphone setup for rap recording",
  },
  {
    id: 2,
    client: "Sara Mohamed",
    email: "sara@example.com",
    phone: "+1 555-0102",
    service: "Mixing & Mastering",
    date: "2026-02-15",
    time: "2:00 PM - 4:00 PM",
    status: "Pending",
    notes: "Album project - 10 tracks",
  },
  {
    id: 3,
    client: "Omar Ali",
    email: "omar@example.com",
    phone: "+1 555-0103",
    service: "Music Production",
    date: "2026-02-16",
    time: "11:00 AM - 3:00 PM",
    status: "Confirmed",
    notes: "Electronic music production",
  },
  {
    id: 4,
    client: "Layla Ibrahim",
    email: "layla@example.com",
    phone: "+1 555-0104",
    service: "Voice Over",
    date: "2026-02-16",
    time: "3:00 PM - 4:00 PM",
    status: "Confirmed",
    notes: "Commercial voice over",
  },
  {
    id: 5,
    client: "Khaled Youssef",
    email: "khaled@example.com",
    phone: "+1 555-0105",
    service: "Vocal Recording",
    date: "2026-02-17",
    time: "10:00 AM - 1:00 PM",
    status: "Cancelled",
    notes: "Client requested cancellation",
  },
];

export default function BookingsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "All" || booking.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Bookings Management</h1>
        <Button variant="primary">New Booking</Button>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search bookings..."
              className="w-full pl-4 pr-10 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#ffd700] transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#ffd700] transition-colors"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </Card>

      {/* Bookings List */}
      <div className="grid gap-4">
        {filteredBookings.map((booking, index) => (
          <motion.div
            key={booking.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="hover:border-[#ffd700]/30 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {booking.client}
                      </h3>
                      <p className="text-[#ffd700] font-medium">
                        {booking.service}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === "Confirmed"
                          ? "bg-green-500/20 text-green-500"
                          : booking.status === "Pending"
                            ? "bg-yellow-500/20 text-yellow-500"
                            : "bg-red-500/20 text-red-500"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 ml-2" />
                      {booking.email}
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 ml-2" />
                      {booking.phone}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 ml-2" />
                      {booking.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 ml-2" />
                      {booking.time}
                    </div>
                  </div>

                  {booking.notes && (
                    <p className="text-sm text-gray-500 italic">
                      Note: {booking.notes}
                    </p>
                  )}
                </div>

                <div className="flex lg:flex-col gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex-1 lg:flex-none"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 lg:flex-none"
                  >
                    View
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredBookings.length === 0 && (
        <Card className="text-center py-12">
          <p className="text-gray-400">No bookings found</p>
        </Card>
      )}
    </div>
  );
}
