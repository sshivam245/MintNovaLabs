"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const activityItems = [
  { icon: "📨", title: "Personalized email sent", sub: "To Alex Chen @ Stripe — just now", status: "Sent", color: "bg-blue-100 text-blue-700", active: true },
  { icon: "🔍", title: "Lead research completed", sub: "48 new prospects qualified", status: "Done", color: "bg-green-100 text-green-700", active: false },
  { icon: "📊", title: "Campaign A/B test", sub: "Variant B winning — 34% open rate", status: "Live", color: "bg-red-100 text-red-700", active: false },
  { icon: "🎯", title: "Intent signals detected", sub: "12 leads showing buying intent", status: "New", color: "bg-amber-100 text-amber-700", active: false },
  { icon: "🤝", title: "Meeting booked", sub: "Sarah Williams @ Notion · Tomorrow 2 PM", status: "Booked", color: "bg-purple-100 text-purple-700", active: false },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="hero" className="relative pt-20 overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* Decorative radial */}
      <div className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(34,197,94,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pb-16">
        {/* Left */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[580px]"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(38px,5.5vw,62px)] font-extrabold leading-[1.07] tracking-tight text-gray-900 mb-6"
          >
            Stop Doing Outreach.
            <br />
            <span className="gradient-text">Let Nova Handle It.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg text-gray-500 leading-relaxed mb-9 max-w-[500px]">
            MintnovaLabs is the all-in-one outbound platform powered by AI. One
            autonomous agent replaces your entire outreach stack — prospecting,
            personalization, sequencing, and follow-ups.
          </motion.p>

          <motion.form
            variants={fadeUp}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="mb-7"
          >
            <div className="flex gap-2 bg-white border-[1.5px] border-gray-200 rounded-[14px] p-1.5 shadow-md transition-all focus-within:border-green-400 focus-within:shadow-[0_0_0_4px_rgba(34,197,94,0.1),0_4px_16px_rgba(0,0,0,0.1)]">
              <input
                type="email"
                placeholder="Enter your work email"
                required
                className="flex-1 border-none outline-none px-3.5 py-2.5 text-[15px] font-sans text-gray-900 bg-transparent placeholder:text-gray-400"
              />
              <button
                type="submit"
                disabled={submitted}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-br from-green-600 to-green-500 rounded-lg shadow-[0_8px_32px_rgba(34,197,94,0.25)] transition-all hover:from-green-700 hover:to-green-600 hover:-translate-y-0.5 disabled:opacity-80 whitespace-nowrap"
              >
                {submitted ? "✓ We'll be in touch!" : "Book a Demo"}
              </button>
            </div>
            <p className="text-[12.5px] text-gray-400 mt-2.5">
              Free 14-day trial · No credit card required
            </p>
          </motion.form>

          <motion.div variants={fadeUp} className="flex items-center gap-3.5">
            <div className="flex">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/36?img=${i}`}
                  alt="user"
                  className="w-9 h-9 rounded-full border-[2.5px] border-white -ml-2.5 first:ml-0 object-cover"
                />
              ))}
            </div>
            <p className="text-[13.5px] text-gray-500">
              <strong className="text-gray-900">2,400+</strong> sales teams
              already using MintnovaLabs
            </p>
          </motion.div>
        </motion.div>

        {/* Right — Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="hidden lg:block"
        >
          <div className="bg-white border border-gray-200 rounded-[28px] shadow-xl overflow-hidden animate-float">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3.5 border-b border-gray-100 bg-gray-100">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="ml-1 text-xs font-semibold text-gray-500">
                Nova · Live Activity
              </span>
            </div>

            {/* Feed */}
            <div className="p-3 flex flex-col gap-1.5">
              {activityItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    item.active
                      ? "bg-green-50 border border-green-100"
                      : "bg-gray-100"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <div className="flex-1 flex flex-col">
                    <strong className="text-[13px] font-semibold">{item.title}</strong>
                    <span className="text-[11px] text-gray-400">{item.sub}</span>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${item.color}`}>
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 border-t border-gray-100">
              {[
                { value: "247", label: "Emails today" },
                { value: "12", label: "Replies" },
                { value: "4", label: "Meetings" },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center py-3.5 ${
                    i < 2 ? "border-r border-gray-100" : ""
                  }`}
                >
                  <span className="text-[22px] font-display font-extrabold text-green-700">
                    {s.value}
                  </span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
