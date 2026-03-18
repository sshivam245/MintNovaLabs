"use client";

import { motion } from "framer-motion";

const beforeItems = [
  "Apollo for prospecting",
  "Outreach / Salesloft for sequencing",
  "Clay for enrichment",
  "ChatGPT for email writing",
  "ZoomInfo for intent data",
  "Lemlist for personalization",
  "Manual follow-up tracking",
  "$8,000+/month in tools",
];

const afterItems = [
  "300M+ verified B2B contacts",
  "AI-powered multi-step sequences",
  "Real-time data enrichment",
  "Hyper-personalized email generation",
  "Buying intent signals",
  "Automated follow-ups",
  "CRM sync & reporting",
  "One flat monthly price",
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function CompareSection() {
  return (
    <section id="product" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 text-xs font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full mb-5">
            The MintnovaLabs Difference
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-4">
            Replace <span className="gradient-text">10 tools</span> with one
            platform
          </h2>
          <p className="text-lg text-gray-500 max-w-[580px] leading-relaxed mb-14">
            Your current stack is expensive, fragmented, and slow. MintnovaLabs
            consolidates everything into one intelligent, autonomous agent.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_64px_1fr] gap-0 rounded-[28px] overflow-hidden shadow-xl border border-gray-200">
          {/* Before */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-10 bg-gray-100"
          >
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.1em] bg-gray-200 text-gray-500 px-3 py-1 rounded-full">
                Before MintnovaLabs
              </span>
            </div>
            <ul className="space-y-2.5">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[14.5px] font-medium text-gray-500">
                  <span className="w-5 h-5 flex items-center justify-center bg-gray-200 text-gray-400 rounded-full text-[11px] shrink-0">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:flex items-center justify-center bg-white">
            <div className="w-11 h-11 bg-gradient-to-br from-green-600 to-green-500 text-white rounded-full flex items-center justify-center text-lg shadow-[0_8px_32px_rgba(34,197,94,0.25)]">
              →
            </div>
          </div>

          {/* After */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-10 bg-gradient-to-br from-green-50 to-green-100"
          >
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.1em] bg-green-200 text-green-800 px-3 py-1 rounded-full">
                After MintnovaLabs
              </span>
            </div>
            <ul className="space-y-2.5">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[14.5px] font-medium text-gray-900">
                  <span className="w-5 h-5 flex items-center justify-center bg-green-500 text-white rounded-full text-[11px] font-bold shrink-0">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
