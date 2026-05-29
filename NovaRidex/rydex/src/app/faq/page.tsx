"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type FAQItem = {
  q: string;
  a: string;
  cat: string;
};

const FAQS: FAQItem[] = [
  {
    cat: "Booking",
    q: "How do I book a ride on RYDEX?",
    a: "Booking is extremely simple. Login using your mobile number or Google account, choose your pickup and drop destinations on our interactive map, select your preferred vehicle type (Bike, Car, Auto, or Truck), review the estimated fare, and click 'Request Ride'. Once a nearby driver accepts, select your payment method to confirm your booking.",
  },
  {
    cat: "Booking",
    q: "What are the OTPs shown on my ride screen?",
    a: "To ensure maximum safety and prevent unauthorized ride starts, RYDEX uses a secure dual-OTP system. You will see a 'Pickup OTP' on your ride page which you must share with the driver upon arrival so they can start the trip. Similarly, a 'Drop OTP' is generated at the destination to securely complete the transaction.",
  },
  {
    cat: "Payments",
    q: "What payment methods are supported?",
    a: "RYDEX supports both Cash and Online payments. If you select Online Payment, you can safely complete the transaction using UPI, Credit/Debit cards, or Netbanking securely processed via our integrated Razorpay payment gateway.",
  },
  {
    cat: "Partnership",
    q: "How do I register as a RYDEX Partner/Driver?",
    a: "Simply log in to your account, click on your profile icon in the navigation bar, and select 'Become a Partner'. You will be guided through a 3-step onboarding process to add your vehicle details, upload verification documents (license, RC, ID), and set up your bank account for payouts. Once submitted, your profile will be reviewed by the administrator.",
  },
  {
    cat: "Partnership",
    q: "What is the Video KYC process for Partners?",
    a: "After an administrator approves your initial documents, you will enter the Video KYC stage. This is a secure, platform-integrated live video call with a RYDEX administrator to verify your identity and vehicle. Once the call is started by the admin, you will see a 'Join Call' button on your partner dashboard.",
  },
  {
    cat: "Partnership",
    q: "How do I set my pricing and vehicle image?",
    a: "Once your Video KYC is successfully approved, the 'Pricing' step will unlock on your partner dashboard. Click on it to upload a clear image of your vehicle and set your desired pricing (Base Fare, Price per KM, and Waiting charges per minute) for admin review.",
  },
];

export default function FAQPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [activeCat, setActiveCat] = useState<string>("All");

  const categories = ["All", "Booking", "Payments", "Partnership"];

  const filtered = activeCat === "All" ? FAQS : FAQS.filter((f) => f.cat === activeCat);

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-black">
      <Nav />

      {/* Header */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden text-center space-y-4">
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-wider text-indigo-400 uppercase"
        >
          <HelpCircle size={12} /> Help Center
        </motion.div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Frequently Asked Questions</h1>
        <p className="text-zinc-500 text-sm max-w-md mx-auto">Have questions about RYDEX? Find quick answers, tutorials, and guidelines right here.</p>
      </section>

      {/* Categories filter */}
      <section className="max-w-7xl mx-auto px-6 mb-12 flex justify-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCat(cat);
              setActiveIdx(null);
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition border ${
              activeCat === cat
                ? "bg-white text-black border-white shadow-lg"
                : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-3xl mx-auto px-6 pb-24 space-y-4">
        {filtered.map((item, index) => {
          const open = activeIdx === index;
          return (
            <div
              key={index}
              className="bg-zinc-900/40 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 transition"
            >
              <button
                onClick={() => setActiveIdx(open ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
              >
                <span className="font-bold text-sm sm:text-base text-zinc-100">{item.q}</span>
                <span className="text-zinc-500 flex-shrink-0">
                  {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="px-6 pb-6 text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-zinc-900/50 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </section>

      <Footer />
    </div>
  );
}
