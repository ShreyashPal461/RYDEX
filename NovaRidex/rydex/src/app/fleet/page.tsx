"use client";

import { motion } from "framer-motion";
import { Bike, Car, Truck, Sparkles, User, Landmark, ShieldCheck } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type VehicleType = {
  type: string;
  name: string;
  desc: string;
  capacity: string;
  baseFare: string;
  ratePerKm: string;
  icon: any;
  highlight: string;
  border: string;
};

const VEHICLES: VehicleType[] = [
  {
    type: "Bike",
    name: "Express Bike",
    desc: "Perfect for single riders trying to beat traffic in busy cities. Rapid and cost-efficient.",
    capacity: "1 Passenger + 1 Helmet",
    baseFare: "₹35",
    ratePerKm: "₹6 / km",
    icon: Bike,
    highlight: "text-blue-600 bg-blue-50",
    border: "hover:border-blue-500/30",
  },
  {
    type: "Sedan",
    name: "Classic Sedan",
    desc: "Spacious, air-conditioned cars perfect for daily commutes, business trips, or small families.",
    capacity: "4 Passengers + Luggage",
    baseFare: "₹65",
    ratePerKm: "₹12 / km",
    icon: Car,
    highlight: "text-purple-600 bg-purple-50",
    border: "hover:border-purple-500/30",
  },
  {
    type: "SUV",
    name: "Premium SUV",
    desc: "High-capacity vehicles with superior legroom and storage. Perfect for group trips or heavy luggage.",
    capacity: "6 Passengers + Heavy Luggage",
    baseFare: "₹95",
    ratePerKm: "₹18 / km",
    icon: Car,
    highlight: "text-pink-600 bg-pink-50",
    border: "hover:border-pink-500/30",
  },
  {
    type: "Truck",
    name: "Commercial Loader",
    desc: "Designed for transport, moving houses, commercial deliveries, or heavy cargo load shipments.",
    capacity: "Up to 1.5 Tons of Cargo",
    baseFare: "₹199",
    ratePerKm: "₹24 / km",
    icon: Truck,
    highlight: "text-amber-600 bg-amber-50",
    border: "hover:border-amber-500/30",
  },
];

export default function FleetPage() {
  return (
    <div className="w-full min-h-screen bg-white text-zinc-900 selection:bg-zinc-950 selection:text-white">
      <Nav />

      {/* Header */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden text-center space-y-4">
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-xs font-semibold tracking-wider text-blue-600 uppercase"
        >
          <Sparkles size={12} /> RYDEX Fleet
        </motion.div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900">Our Premium Fleet</h1>
        <p className="text-zinc-500 text-sm max-w-md mx-auto font-medium">Explore our diverse range of verified vehicles ready to cater to any of your travel or commercial cargo requirements.</p>
      </section>

      {/* Fleet Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-8 relative z-10">
        {VEHICLES.map((vehicle, index) => {
          const Icon = vehicle.icon;
          return (
            <motion.div
              key={vehicle.type}
              whileHover={{ y: -6 }}
              className={`bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-md ${vehicle.border}`}
            >
              <div className="space-y-6">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${vehicle.highlight}`}>
                    <Icon size={22} />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
                    {vehicle.type}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-zinc-800">{vehicle.name}</h3>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-medium">{vehicle.desc}</p>
                </div>

                {/* Specifications List */}
                <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-5 space-y-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)]">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                    <span className="text-zinc-400 flex items-center gap-1.5"><User size={14} /> Capacity</span>
                    <span className="font-semibold text-zinc-700">{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm border-t border-zinc-200/50 pt-3 font-medium">
                    <span className="text-zinc-400 flex items-center gap-1.5"><Landmark size={14} /> Base Fare</span>
                    <span className="font-semibold text-zinc-700">{vehicle.baseFare}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm border-t border-zinc-200/50 pt-3 font-medium">
                    <span className="text-zinc-400 flex items-center gap-1.5"><ShieldCheck size={14} /> Distance Rate</span>
                    <span className="font-semibold text-zinc-700">{vehicle.ratePerKm}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      <Footer />
    </div>
  );
}
