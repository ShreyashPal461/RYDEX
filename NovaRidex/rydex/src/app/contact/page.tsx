"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
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
    <div className="w-full min-h-screen bg-white text-zinc-900 selection:bg-zinc-950 selection:text-white">
      <Nav />

      {/* Header */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden text-center space-y-4">
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-xs font-semibold tracking-wider text-purple-600 uppercase"
        >
          <MessageSquare size={12} /> Contact Us
        </motion.div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900">Let's Connect</h1>
        <p className="text-zinc-500 text-sm max-w-md mx-auto font-medium">Have questions, feedback, or need help? Reach out to us and our support team will respond shortly.</p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            <h3 className="font-bold text-lg text-zinc-800">Support Channels</h3>
            
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Call Support</p>
                  <p className="text-sm font-bold text-zinc-800 mt-0.5">+91 98765 43210</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5 font-medium">Toll-free / Mon - Sat, 9am - 6pm</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Email Us</p>
                  <p className="text-sm font-bold text-zinc-800 mt-0.5">support@rydex.com</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5 font-medium">Response within 24 hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Office Headquarters</p>
                  <p className="text-sm font-bold text-zinc-800 mt-0.5">RYDEX Tech Park, Sector 62</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5 font-medium">Noida, Uttar Pradesh, India - 201301</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Help Status */}
          <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-6 flex gap-4 items-start shadow-[0_8px_30px_rgba(0,0,0,0.01)]">
            <div className="w-10 h-10 bg-green-50 text-green-600 border border-green-100 rounded-xl flex items-center justify-center flex-shrink-0 animate-pulse">
              <Clock size={18} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-zinc-800">System Status: Active</h4>
              <p className="text-zinc-500 text-xs mt-1 leading-relaxed font-medium">
                All booking and server engines are fully operational. Driver notifications and Razorpay gateways are online.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <h3 className="font-bold text-xl mb-6 text-zinc-800">Send us a Message</h3>
            
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center border border-green-100">
                  <Send size={24} />
                </div>
                <h4 className="text-lg font-bold text-zinc-800">Message Sent!</h4>
                <p className="text-zinc-500 text-sm max-w-xs leading-relaxed font-medium">
                  Thank you for reaching out. A support executive has received your message and will review it shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs font-bold text-purple-600 hover:text-purple-800 uppercase tracking-wider transition pt-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-purple-600 rounded-xl px-4 py-3 text-sm outline-none text-zinc-800 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-purple-600 rounded-xl px-4 py-3 text-sm outline-none text-zinc-800 transition-all font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-1.5 block">Message / Inquiry</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.msg}
                    onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                    placeholder="Describe your issue or question in detail..."
                    className="w-full bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-purple-600 rounded-xl px-4 py-3 text-sm outline-none text-zinc-800 transition-all resize-none font-medium"
                  />
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  disabled={loading}
                  type="submit"
                  className="w-full h-12 bg-zinc-950 text-white hover:bg-zinc-800 font-bold text-sm rounded-xl flex items-center justify-center gap-2.5 transition shadow-lg"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
