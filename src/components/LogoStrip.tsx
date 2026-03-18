"use client";

import { motion } from "framer-motion";

const logos = ["Stripe", "Notion", "Linear", "Vercel", "Figma", "Loom", "Intercom"];

export default function LogoStrip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-gray-100 py-8 text-center overflow-hidden"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-400 mb-5">
        Trusted by teams at
      </p>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((name, i) => (
            <span
              key={i}
              className="mx-8 text-[15px] font-bold text-gray-300 hover:text-gray-500 transition-colors duration-200 shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
