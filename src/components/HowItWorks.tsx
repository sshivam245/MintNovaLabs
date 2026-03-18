"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", icon: "🏢", title: "Define your ICP", desc: "Tell Nova who you're targeting — industry, company size, job titles, geography, and tech stack. She'll handle the rest." },
  { num: "02", icon: "🔎", title: "Nova researches leads", desc: "Nova scans our 300M+ database, enriches each contact with real-time data, and scores them by fit and intent." },
  { num: "03", icon: "💬", title: "Hyper-personalized outreach", desc: "Nova writes a unique, personalized email for every single prospect — referencing their work, company news, or LinkedIn activity." },
  { num: "04", icon: "📅", title: "Meetings land on your calendar", desc: "Nova handles replies, qualifies interest, and books meetings directly — you just show up to the call." },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function HowItWorks() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 text-xs font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full mb-5">
            How It Works
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-4">
            From setup to <span className="gradient-text">pipeline in minutes</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-[580px] leading-relaxed mb-14">
            Get Nova running in your first session. No technical setup, no ops work, no headaches.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className="relative bg-white border border-gray-200 rounded-[20px] p-8 text-center transition-all duration-200 hover:border-green-300 hover:shadow-md hover:-translate-y-1 group"
            >
              {/* Connector arrow (desktop) */}
              {i < steps.length - 1 && (
                <span className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 text-green-400 text-xl z-10">
                  →
                </span>
              )}
              <div className="font-display text-[13px] font-extrabold text-green-500 tracking-[0.1em] mb-4">
                {step.num}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h4 className="text-[17px] font-bold mb-2.5">{step.title}</h4>
              <p className="text-[13.5px] text-gray-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
