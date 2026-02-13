"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Bell, Building2, Globe, Lock, Mail, Save, User } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    studioName: "Chicago Records",
    email: "info@chicagorecords.com",
    phone: "+1 (555) 123-4567",
    address: "شارع الموسيقى، مبنى الفنون، شيكاغو",
    website: "www.chicagorecords.com",
    notifications: true,
    emailNotifications: true,
    bookingConfirmations: true,
  });

  const handleSave = () => {
    console.log("Settings saved:", settings);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Studio Information */}
        <Card>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ffd700] to-[#d4af37] flex items-center justify-center mr-3">
              <Building2 className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Studio Information
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2 text-sm">
                Studio Name
              </label>
              <div className="relative">
                <User className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  className="w-full pl-4 pr-10 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#ffd700] transition-colors"
                  value={settings.studioName}
                  onChange={(e) =>
                    setSettings({ ...settings, studioName: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-sm">Email</label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  className="w-full pl-4 pr-10 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#ffd700] transition-colors"
                  value={settings.email}
                  onChange={(e) =>
                    setSettings({ ...settings, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-sm">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#ffd700] transition-colors"
                value={settings.phone}
                onChange={(e) =>
                  setSettings({ ...settings, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-sm">
                Address
              </label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#ffd700] transition-colors resize-none"
                value={settings.address}
                onChange={(e) =>
                  setSettings({ ...settings, address: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-sm">
                Website
              </label>
              <div className="relative">
                <Globe className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="url"
                  className="w-full pl-4 pr-10 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#ffd700] transition-colors"
                  value={settings.website}
                  onChange={(e) =>
                    setSettings({ ...settings, website: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Notifications */}
        <div className="space-y-6">
          <Card>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-3">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Notifications</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                <div>
                  <h3 className="text-white font-medium mb-1">
                    Push Notifications
                  </h3>
                  <p className="text-sm text-gray-400">
                    Receive push notifications for new bookings
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={settings.notifications}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        notifications: e.target.checked,
                      })
                    }
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ffd700]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                <div>
                  <h3 className="text-white font-medium mb-1">
                    Email Notifications
                  </h3>
                  <p className="text-sm text-gray-400">
                    Receive email updates for bookings
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={settings.emailNotifications}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        emailNotifications: e.target.checked,
                      })
                    }
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ffd700]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                <div>
                  <h3 className="text-white font-medium mb-1">
                    Booking Confirmations
                  </h3>
                  <p className="text-sm text-gray-400">
                    Auto-send confirmation emails
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={settings.bookingConfirmations}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        bookingConfirmations: e.target.checked,
                      })
                    }
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ffd700]"></div>
                </label>
              </div>
            </div>
          </Card>

          {/* Security */}
          <Card>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mr-3">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Security</h2>
            </div>

            <div className="space-y-3">
              <Button variant="secondary" className="w-full">
                Change Password
              </Button>
              <Button variant="outline" className="w-full">
                Two-Factor Authentication
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Save Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Button
          variant="primary"
          size="lg"
          onClick={handleSave}
          className="w-full md:w-auto"
        >
          <Save className="w-5 h-5 ml-2" />
          Save Changes
        </Button>
      </motion.div>
    </div>
  );
}
