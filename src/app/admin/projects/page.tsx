"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Edit, Plus, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Summer Vibes Album",
    artist: "Ahmed Hassan",
    type: "Album",
    tracks: 12,
    status: "Completed",
    date: "2026-01-15",
    thumbnail: "/placeholder-album.jpg",
  },
  {
    id: 2,
    title: "Commercial Voice Over",
    artist: "Sara Mohamed",
    type: "Voice Over",
    tracks: 3,
    status: "In Progress",
    date: "2026-02-10",
    thumbnail: "/placeholder-vo.jpg",
  },
  {
    id: 3,
    title: "Electronic EP",
    artist: "Omar Ali",
    type: "EP",
    tracks: 5,
    status: "Mixing",
    date: "2026-02-05",
    thumbnail: "/placeholder-ep.jpg",
  },
  {
    id: 4,
    title: "Podcast Intro Music",
    artist: "Layla Ibrahim",
    type: "Production",
    tracks: 1,
    status: "Completed",
    date: "2026-01-28",
    thumbnail: "/placeholder-podcast.jpg",
  },
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.artist.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Projects Management</h1>
        <Button variant="primary">
          <Plus className="w-5 h-5 ml-2" />
          New Project
        </Button>
      </div>

      {/* Search */}
      <Card>
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-4 pr-10 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#ffd700] transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </Card>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="h-full group">
              <div className="aspect-square bg-gradient-to-br from-[#ffd700]/20 to-[#d4af37]/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">🎵</div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ffd700] transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">{project.artist}</p>

              <div className="space-y-2 text-sm text-gray-400 mb-4">
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="text-white">{project.type}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tracks:</span>
                  <span className="text-white">{project.tracks}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="text-white">{project.date}</span>
                </div>
              </div>

              <div className="mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Completed"
                      ? "bg-green-500/20 text-green-500"
                      : project.status === "In Progress"
                        ? "bg-blue-500/20 text-blue-500"
                        : "bg-yellow-500/20 text-yellow-500"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="flex gap-2">
                <Button variant="secondary" size="sm" className="flex-1">
                  <Edit className="w-4 h-4 ml-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <Card className="text-center py-12">
          <p className="text-gray-400">No projects found</p>
        </Card>
      )}
    </div>
  );
}
