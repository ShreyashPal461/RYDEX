"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ShieldAlert } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setFormData({ name: "", email: "", msg: "" });
    }, 1200);
  };

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-black">
      <Nav />

      {/* Header */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden text-center space-y-4">
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-wider text-purple-400 uppercase"
        >
          <MessageSquare size={12} /> Contact Us
        </motion.div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Let's Connect</h1>
        <p className="text-zinc-500 text-sm max-w-md mx-auto">Have questions, feedback, or need help? Reach out to us and our support team will respond shortly.</p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-zinc-900/60 border border-zinc-900 rounded-3xl p-6 space-y-4">
            <h3 className="font-bold text-lg">Support Channels</h3>
            
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Call Support</p>
                  <p className="text-sm font-bold text-zinc-200 mt-0.5">+91 98765 43210</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">Toll-free / Mon - Sat, 9am - 6pm</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Email Us</p>
                  <p className="text-sm font-bold text-zinc-200 mt-0.5">support@rydex.com</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">Response within 24 hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Office Headquarters</p>
                  <p className="text-sm font-bold text-zinc-200 mt-0.5">RYDEX Tech Park, Sector 62</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">Noida, Uttar Pradesh, India - 201301</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Help Status */}
          <div className="bg-zinc-900/40 border border-zinc-900 rounded-3xl p-6 flex gap-4 items-start">
            <div className="w-10 h-10 bg-green-500/10 text-green-400 rounded-xl flex items-center justify-center flex-shrink-0 animate-pulse">
              <Clock size={18} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-zinc-200">System Status: Active</h4>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                All booking and server engines are fully operational. Driver notifications and Razorpay gateways are online.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="lg:col-span-7">
          <div className="bg-zinc-900/60 border border-zinc-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <h3 className="font-bold text-xl mb-6">Send us a Message</h3>
            
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center border border-green-500/20">
                  <Send size={24} />
                </div>
                <h4 className="text-lg font-bold text-zinc-100">Message Sent!</h4>
                <p className="text-zinc-400 text-sm max-w-xs leading-relaxed">
                  Thank you for reaching out. A support executive has received your message and will review it shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs font-bold text-purple-400 hover:text-white uppercase tracking-wider transition pt-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-purple-500 rounded-xl px-4 py-3 text-sm outline-none text-zinc-200 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-purple-500 rounded-xl px-4 py-3 text-sm outline-none text-zinc-200 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1.5 block">Message / Inquiry</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.msg}
                    onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                    placeholder="Describe your issue or question in detail..."
                    className="w-full bg-zinc-950 border border-zinc-900 focus:border-purple-500 rounded-xl px-4 py-3 text-sm outline-none text-zinc-200 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  disabled={loading}
                  type="submit"
                  className="w-full h-12 bg-white text-black hover:bg-zinc-200 font-bold text-sm rounded-xl flex items-center justify-center gap-2.5 transition shadow-lg"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
