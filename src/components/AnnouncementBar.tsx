"use client";

import { motion } from "framer-motion";

export default function AnnouncementBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-green-50 to-green-50/80 border-b border-green-100 px-6 py-2.5 mt-[68px]"
    >
      <span className="bg-gradient-to-br from-green-600 to-green-500 text-white text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full">
        New
      </span>
      <p className="text-[13.5px] text-gray-700">
        MintnovaLabs raises <strong>$8M Seed</strong> to build the future of
        AI-powered outreach&nbsp;&rarr;
      </p>
    </motion.div>
  );
}
