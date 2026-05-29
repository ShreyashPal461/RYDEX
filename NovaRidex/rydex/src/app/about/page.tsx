"use client";

import { motion } from "framer-motion";
import { Sparkles, User, Users, Landmark, Navigation, Clock, Shield, Zap, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-white text-zinc-900 selection:bg-zinc-950 selection:text-white">
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-xs font-semibold tracking-wider text-zinc-900 uppercase"
          >
            <Sparkles size={12} /> Discover RYDEX
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-900"
          >
            Mobility Built for Everyone
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium"
          >
            RYDEX is a state-of-the-art multi-vendor vehicle booking platform designed to offer seamless, transparent, and ultra-reliable transportation. By bridging clients, professional partners, and real-time administrators, we redefine how the world moves.
          </motion.p>
        </div>
      </section>

      {/* The Three Pillars Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900">One Ecosystem. Three Experiences.</h2>
          <p className="text-zinc-400 text-sm max-w-md mx-auto font-medium">Explore the tailored dashboards designed to bring convenience, profitability, and control under one platform.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: User */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-300 transition shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 bg-zinc-100 text-zinc-900 rounded-2xl flex items-center justify-center">
                <User size={22} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-900">The Client Interface</h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-medium">
                  Engineered for ultimate simplicity. Clients search for any vehicle type, request a ride on a live interactive map, make instant payments (via Cash or secure Razorpay gateway), and track their driver in real time with an automated OTP-verified start and drop flow.
                </p>
              </div>
            </div>
            <div className="pt-8 flex items-center gap-2 text-xs font-bold text-zinc-900 tracking-wider uppercase">
              Seamless Booking <ArrowRight size={13} />
            </div>
          </motion.div>

          {/* Card 2: Partner */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-300 transition shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 bg-zinc-100 text-zinc-900 rounded-2xl flex items-center justify-center">
                <Users size={22} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-900">The Partner Dashboard</h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-medium">
                  Empowering drivers and fleet operators. Partners access a comprehensive onboarding system covering vehicle details, document submissions, and bank setup. They receive real-time ride requests via WebSockets, track daily earnings performance, and join secured Video KYC calls with admins.
                </p>
              </div>
            </div>
            <div className="pt-8 flex items-center gap-2 text-xs font-bold text-zinc-900 tracking-wider uppercase">
              Partner & Earn <ArrowRight size={13} />
            </div>
          </motion.div>

          {/* Card 3: Admin */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-300 transition shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 bg-zinc-100 text-zinc-900 rounded-2xl flex items-center justify-center">
                <Landmark size={22} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-900">The Admin Command Center</h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-medium">
                  The control center of RYDEX. Administrators oversee the platform through a powerful dynamic dashboard showing real-time vendor approval queues, pending vehicle image reviews, and active Video KYC calls. They can approve/reject requests with custom notes and track platform-wide commissions.
                </p>
              </div>
            </div>
            <div className="pt-8 flex items-center gap-2 text-xs font-bold text-zinc-900 tracking-wider uppercase">
              Administrative Control <ArrowRight size={13} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 bg-zinc-50 border-t border-b border-zinc-100 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Navigation size={20} />, title: "Live GPS Tracking", desc: "Interactive maps powered by Leaflet to track active rides in real time." },
            { icon: <Clock size={20} />, title: "Instantly Real-time", desc: "Instant ride notifications and chats powered by WebSocket architecture." },
            { icon: <Shield size={20} />, title: "Dual OTP Security", desc: "Automated OTPs generated at both pickup and drop-off to protect your trip." },
            { icon: <Zap size={20} />, title: "Dynamic Redundancies", desc: "Multi-layered fail-safe routes ensuring real-time dashboard data stays absolutely fresh." },
          ].map((feat, i) => (
            <div key={i} className="space-y-3">
              <div className="w-10 h-10 bg-white rounded-xl border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-sm">
                {feat.icon}
              </div>
              <h4 className="font-bold text-sm text-zinc-800">{feat.title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed font-medium">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
