"use client";

import { cn } from "@/lib/utils";
import {
  Calendar,
  FolderOpen,
  Home,
  LogOut,
  Menu,
  Settings,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Bookings", href: "/admin/bookings", icon: Calendar },
  { name: "Projects", href: "/admin/projects", icon: FolderOpen },
  { name: "Clients", href: "/admin/clients", icon: Users },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-[#1a1a1a] border-r border-white/10 transition-transform duration-300 lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <Link href="/admin" className="flex items-center">
              <div className="relative w-40 h-12">
                <Image
                  src="/logo.jpg"
                  alt="Chicago Records"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg transition-all",
                    isActive
                      ? "bg-gradient-to-r from-[#ffd700] to-[#d4af37] text-black"
                      : "text-gray-400 hover:bg-white/5 hover:text-white",
                  )}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-white/10">
            <button className="flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all w-full">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:mr-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-[#1a1a1a]/95 backdrop-blur-lg border-b border-white/10">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-white"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="text-right">
                <p className="text-sm text-white font-medium">Admin User</p>
                <p className="text-xs text-gray-400">
                  admin@chicagorecords.com
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffd700] to-[#d4af37] flex items-center justify-center text-black font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
