"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Calendar, Clock, Mail, Phone, Search, Filter } from "lucide-react";
import { useState } from "react";

const bookings = [
  {
    id: 1,
    client: "Ahmed Hassan",
    email: "ahmed@example.com",
    phone: "+1 555-0101",
    service: "Wedding Photography",
    date: "2026-02-15",
    time: "10:00 AM - 10:00 PM",
    status: "Confirmed",
    notes: "Full day wedding coverage, including reception",
  },
  {
    id: 2,
    client: "Sara Mohamed",
    email: "sara@example.com",
    phone: "+1 555-0102",
    service: "Portrait Session",
    date: "2026-02-15",
    time: "2:00 PM - 4:00 PM",
    status: "Pending",
    notes: "Outdoor session at the park",
  },
  {
    id: 3,
    client: "Omar Ali",
    email: "omar@example.com",
    phone: "+1 555-0103",
    service: "Commercial Shoot",
    date: "2026-02-16",
    time: "11:00 AM - 3:00 PM",
    status: "Confirmed",
    notes: "Product photography for new clothing line",
  },
  {
    id: 4,
    client: "Layla Ibrahim",
    email: "layla@example.com",
    phone: "+1 555-0104",
    service: "Event Coverage",
    date: "2026-02-16",
    time: "6:00 PM - 10:00 PM",
    status: "Confirmed",
    notes: "Corporate annual dinner",
  },
  {
    id: 5,
    client: "Khaled Youssef",
    email: "khaled@example.com",
    phone: "+1 555-0105",
    service: "Family Session",
    date: "2026-02-17",
    time: "10:00 AM - 12:00 PM",
    status: "Cancelled",
    notes: "Rescheduled to next week",
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Bookings Management</h1>
        <Button variant="primary">New Booking</Button>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search clients or services..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative min-w-[200px]">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-400 w-5 h-5" />
            <select
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all appearance-none cursor-pointer"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
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
            <Card className="hover:border-yellow-500/30 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {booking.client}
                      </h3>
                      <p className="text-yellow-600 dark:text-yellow-500 font-medium">
                        {booking.service}
                      </p>
                    </div>
                    <span
                      className={`px-4 py-1.5 rounded-full text-sm font-bold border ${
                        booking.status === "Confirmed"
                          ? "bg-green-500/10 text-green-500 border-green-500/20"
                          : booking.status === "Pending"
                            ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                            : "bg-red-500/10 text-red-500 border-red-500/20"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-sm text-slate-500 dark:text-gray-400">
                    <div className="flex items-center hover:text-slate-900 dark:hover:text-white transition-colors">
                      <Mail className="w-4 h-4 mr-2 text-slate-400 dark:text-gray-500" />
                      {booking.email}
                    </div>
                    <div className="flex items-center hover:text-slate-900 dark:hover:text-white transition-colors">
                      <Phone className="w-4 h-4 mr-2 text-slate-400 dark:text-gray-500" />
                      {booking.phone}
                    </div>
                    <div className="flex items-center hover:text-slate-900 dark:hover:text-white transition-colors">
                      <Calendar className="w-4 h-4 mr-2 text-slate-400 dark:text-gray-500" />
                      {booking.date}
                    </div>
                    <div className="flex items-center hover:text-slate-900 dark:hover:text-white transition-colors">
                      <Clock className="w-4 h-4 mr-2 text-slate-400 dark:text-gray-500" />
                      {booking.time}
                    </div>
                  </div>

                  {booking.notes && (
                    <div className="bg-slate-100 dark:bg-white/5 p-3 rounded-lg border border-slate-200 dark:border-white/5">
                      <p className="text-sm text-slate-600 dark:text-gray-400 italic">
                        <span className="font-semibold text-slate-700 dark:text-gray-300 not-italic">
                          Note:{" "}
                        </span>
                        {booking.notes}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex lg:flex-col gap-3 justify-end lg:justify-start lg:min-w-[120px]">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex-1 lg:flex-none"
                  >
                    Edit Details
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 lg:flex-none"
                  >
                    View Invoice
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredBookings.length === 0 && (
        <Card className="text-center py-16 border-dashed border-slate-200 dark:border-white/10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-white/5 mb-4">
            <Search className="w-8 h-8 text-slate-400 dark:text-gray-500" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            No bookings found
          </h3>
          <p className="text-slate-500 dark:text-gray-400">Try adjusting your search criteria</p>
        </Card>
      )}
    </div>
  );
}
