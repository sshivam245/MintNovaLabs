"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    icon: "🔍",
    title: "Finds the right leads",
    desc: "Nova searches our 300M+ contact database using advanced filters — industry, title, company size, tech stack, and funding stage.",
  },
  {
    icon: "✍️",
    title: "Writes emails that convert",
    desc: "Using LinkedIn activity, recent news, and company data, Nova crafts emails so personal recipients think you wrote them yourself.",
  },
  {
    icon: "⚡",
    title: "Executes multi-channel sequences",
    desc: "Email, LinkedIn, and call tasks — orchestrated automatically across every lead in your pipeline without manual intervention.",
  },
  {
    icon: "🎯",
    title: "Optimizes in real-time",
    desc: "Nova monitors open rates, replies, and intent signals to automatically adjust messaging and timing for maximum conversion.",
  },
];

const tags = ["Cold Outreach", "Lead Research", "Personalization", "Follow-ups", "CRM Sync", "A/B Testing"];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function NovaSection() {
  return (
    <section id="nova" className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 text-xs font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full mb-5">
            Meet Your AI Agent
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-4">
            Introducing <span className="gradient-text">Nova</span> — Your AI
            Sales Agent
          </h2>
          <p className="text-lg text-gray-500 max-w-[580px] leading-relaxed mb-14">
            Nova isn&apos;t a chatbot. She&apos;s a fully autonomous AI employee
            that works 24/7 to fill your pipeline — without supervision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-green-100 rounded-[28px] p-10 text-center shadow-md lg:sticky lg:top-24"
          >
            {/* Avatar */}
            <div className="relative mx-auto w-fit mb-5">
              <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-green-600 via-green-500 to-emerald-500 flex items-center justify-center shadow-[0_0_0_6px_rgba(34,197,94,0.12)] relative">
                <span className="font-display text-[44px] font-extrabold text-white">
                  N
                </span>
                <div className="absolute -inset-2 rounded-full border-2 border-green-500/30 animate-pulse_ring" />
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-white border border-green-200 rounded-full px-2.5 py-1 text-[11px] font-semibold text-green-700 flex items-center gap-1.5 whitespace-nowrap shadow-sm">
                <span className="w-[7px] h-[7px] bg-green-500 rounded-full animate-blink" />
                Online now
              </div>
            </div>

            <h3 className="font-display text-[26px] font-extrabold mt-6 mb-1">Nova</h3>
            <p className="text-[13px] text-gray-500 mb-5">AI Sales Development Rep</p>

            <div className="flex flex-wrap gap-2 justify-center">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-green-50 text-green-700 border border-green-200 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Capabilities */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {capabilities.map((cap) => (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                className="bg-white border border-gray-200 rounded-[20px] p-7 flex gap-4 transition-all duration-200 hover:border-green-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="text-[28px] shrink-0">{cap.icon}</span>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">{cap.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
