"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Search,
  Trash2,
  User,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

const messages = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 555-0100",
    subject: "Wedding Photography Inquiry",
    message:
      "Hi, I'm looking for a photographer for my wedding next month. Are you available on the 15th?",
    date: "2 hours ago",
    status: "Unread",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    phone: "+1 555-0101",
    subject: "Portrait Session Price",
    message:
      "Hello, I was wondering how much you charge for a 1-hour solo portrait session suitable for LinkedIn?",
    date: "1 day ago",
    status: "Read",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 555-0102",
    subject: "Collaboration Proposal",
    message:
      "We are a new fashion brand and would like to collaborate with you for our upcoming catalog shoot.",
    date: "2 days ago",
    status: "Replied",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    phone: "+1 555-0103",
    subject: "Family Photoshoot",
    message:
      "Hi there! I'd like to book a family photoshoot for 5 people. Do you have a studio or do you do outdoor shoots?",
    date: "3 days ago",
    status: "Read",
  },
];

export default function MessagesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredMessages = messages.filter((msg) => {
    const matchesSearch =
      msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "All" || msg.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Messages
      </h1>

      {/* Filters */}
      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
            {["All", "Unread", "Read", "Replied"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-3 rounded-xl border transition-all whitespace-nowrap ${
                  filterStatus === status
                    ? "bg-yellow-500 text-black border-yellow-500 font-bold"
                    : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Messages List */}
      <div className="space-y-4">
        {filteredMessages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card
              className={`group transition-all duration-300 ${msg.status === "Unread" ? "border-l-4 border-l-yellow-500 bg-slate-50 dark:bg-white/[0.07]" : "hover:bg-slate-50 dark:hover:bg-white/[0.07]"}`}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                          msg.status === "Unread"
                            ? "bg-yellow-500 text-black"
                            : "bg-slate-200 dark:bg-gray-700 text-slate-600 dark:text-gray-300"
                        }`}
                      >
                        {msg.name.charAt(0)}
                      </div>
                      <div>
                        <h3
                          className={`font-bold text-slate-900 dark:text-white ${msg.status === "Unread" ? "text-lg" : "text-base"}`}
                        >
                          {msg.name}
                        </h3>
                        <p className="text-slate-500 dark:text-gray-400 text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {msg.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {msg.status === "Unread" && (
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-bold border border-yellow-500/20">
                          <AlertCircle className="w-3 h-3" /> Unread
                        </span>
                      )}
                      {msg.status === "Replied" && (
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/20">
                          <CheckCircle className="w-3 h-3" /> Replied
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pl-13 lg:pl-0">
                    <h4 className="text-slate-900 dark:text-white font-semibold mb-2">
                      {msg.subject}
                    </h4>
                    <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {msg.message}
                    </p>

                    <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-gray-500 pt-3 border-t border-slate-200 dark:border-white/5">
                      <span className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-gray-300 transition-colors">
                        <Mail className="w-3 h-3" /> {msg.email}
                      </span>
                      <span className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-gray-300 transition-colors">
                        <Phone className="w-3 h-3" /> {msg.phone}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex lg:flex-col gap-3 justify-end lg:justify-start lg:min-w-[140px] border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-white/10 pt-4 lg:pt-0 lg:pl-6">
                  <Button
                    variant="primary"
                    size="sm"
                    className="flex-1 lg:flex-none"
                  >
                    Reply
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 lg:flex-none"
                  >
                    Mark as Read
                  </Button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-red-500/10 text-slate-400 dark:text-gray-400 hover:text-red-500 transition-colors text-sm">
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredMessages.length === 0 && (
        <Card className="text-center py-16 border-dashed border-slate-200 dark:border-white/10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-white/5 mb-4">
            <Mail className="w-8 h-8 text-slate-400 dark:text-gray-500" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            No messages found
          </h3>
          <p className="text-slate-500 dark:text-gray-400">
            Your inbox is empty
          </p>
        </Card>
      )}
    </div>
  );
}
