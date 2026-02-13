"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  Edit,
  Plus,
  Search,
  Trash2,
  Image as ImageIcon,
  Filter,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Ahmed & Fatima Wedding",
    category: "Weddings",
    date: "2026-01-15",
    image: "/placeholder-wedding.jpg",
    status: "Published",
  },
  {
    id: 2,
    title: "Summer Fashion Shoot",
    category: "Commercial",
    date: "2026-02-10",
    image: "/placeholder-commercial.jpg",
    status: "Draft",
  },
  {
    id: 3,
    title: "Graduation Ceremony",
    category: "Events",
    date: "2026-02-05",
    image: "/placeholder-event.jpg",
    status: "Published",
  },
  {
    id: 4,
    title: "Baby Portrait",
    category: "Family",
    date: "2026-01-28",
    image: "/placeholder-family.jpg",
    status: "Published",
  },
  {
    id: 5,
    title: "Corporate Headshots",
    category: "Portrait",
    date: "2026-01-20",
    image: "/placeholder-portrait.jpg",
    status: "Archived",
  },
];

const categories = [
  "All",
  "Weddings",
  "Commercial",
  "Events",
  "Family",
  "Portrait",
];

export default function PortfolioPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = portfolioItems.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-white">Portfolio Management</h1>
        <Button variant="primary">
          <Plus className="w-5 h-5 ml-2" />
          Add New Item
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search portfolio items..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative min-w-[200px]">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all appearance-none cursor-pointer"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="h-full group hover:border-yellow-500/30 transition-all duration-300">
              <div className="aspect-[4/3] bg-gray-800 rounded-xl mb-4 relative overflow-hidden">
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <ImageIcon className="w-12 h-12 text-gray-600" />
                </div>

                <div className="absolute top-3 right-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${
                      item.status === "Published"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : item.status === "Draft"
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-500 transition-colors line-clamp-1">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">{item.category}</p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-xs text-gray-500">{item.date}</span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <Card className="text-center py-16 border-dashed border-white/10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
            <ImageIcon className="w-8 h-8 text-gray-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No items found</h3>
          <p className="text-gray-400">
            Add some portfolio items to showcase your work
          </p>
        </Card>
      )}
    </div>
  );
}
