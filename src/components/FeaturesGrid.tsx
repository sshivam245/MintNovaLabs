"use client";

import { motion } from "framer-motion";
import { Search, MessageSquare, Activity, BarChart3, Shield, Monitor } from "lucide-react";

const features = [
  {
    icon: Search,
    iconBg: "bg-green-100 text-green-700",
    title: "Smart Lead Discovery",
    desc: "Search across 300M+ verified B2B contacts with 50+ filters. Nova automatically qualifies leads by fit score, intent signals, and buying stage.",
    large: true,
    bullets: ["Real-time contact verification", "Technographic & firmographic data", "Funding & hiring signals"],
  },
  {
    icon: MessageSquare,
    iconBg: "bg-teal-100 text-teal-700",
    title: "AI Email Writer",
    desc: "Nova writes hyper-personalized cold emails using LinkedIn profiles, company news, and intent data — automatically.",
  },
  {
    icon: Activity,
    iconBg: "bg-emerald-100 text-emerald-800",
    title: "Multi-Step Sequences",
    desc: "Build sophisticated email + LinkedIn + call sequences with AI-driven timing optimization and automatic follow-ups.",
  },
  {
    icon: BarChart3,
    iconBg: "bg-green-50 text-green-800",
    title: "Real-Time Analytics",
    desc: "Track open rates, click-throughs, reply rates, and booked meetings with live dashboards and weekly performance reports.",
  },
  {
    icon: Shield,
    iconBg: "bg-lime-50 text-lime-800",
    title: "Inbox Protection",
    desc: "Smart sending limits, domain warm-up, and deliverability monitoring keep your emails out of spam and your domain healthy.",
  },
  {
    icon: Monitor,
    iconBg: "bg-green-50 text-green-900",
    title: "CRM Integration",
    desc: "Bi-directional sync with Salesforce, HubSpot, Pipedrive and 50+ tools. All activity automatically logged, zero manual work.",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const dbRows = [
  { name: "Alex Chen", company: "Stripe", score: 98, level: "high" },
  { name: "Maria Lopez", company: "Notion", score: 95, level: "high" },
  { name: "James Park", company: "Linear", score: 87, level: "mid" },
  { name: "Priya Sharma", company: "Vercel", score: 84, level: "mid" },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 text-xs font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full mb-5">
            Platform Features
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-4">
            Everything you need to{" "}
            <span className="gradient-text">close more deals</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className={`bg-white border border-gray-200 rounded-[28px] p-9 transition-all duration-200 hover:border-green-300 hover:shadow-md hover:-translate-y-1 overflow-hidden ${
                  f.large ? "sm:col-span-2 grid sm:grid-cols-2 gap-10 items-center" : ""
                }`}
              >
                <div>
                  <div className={`w-[52px] h-[52px] rounded-lg flex items-center justify-center mb-5 ${f.iconBg}`}>
                    <Icon size={f.large ? 28 : 24} />
                  </div>
                  <h3 className={`font-bold mb-3 ${f.large ? "text-2xl" : "text-xl"}`}>
                    {f.title}
                  </h3>
                  <p className="text-[14.5px] text-gray-500 leading-relaxed">
                    {f.desc}
                  </p>
                  {f.bullets && (
                    <ul className="mt-5 space-y-2">
                      {f.bullets.map((b) => (
                        <li key={b} className="text-[13.5px] text-gray-700 pl-[18px] relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Database visual for large card */}
                {f.large && (
                  <div className="bg-gray-100 rounded-[14px] overflow-hidden border border-gray-200">
                    <div className="grid grid-cols-[1fr_1fr_auto] px-4 py-2.5 bg-green-700 text-white text-[11px] font-bold uppercase tracking-wider">
                      <span>Name</span>
                      <span>Company</span>
                      <span>Score</span>
                    </div>
                    {dbRows.map((row) => (
                      <div
                        key={row.name}
                        className="grid grid-cols-[1fr_1fr_auto] px-4 py-2.5 border-b border-gray-200 last:border-b-0 text-[13px]"
                      >
                        <span>{row.name}</span>
                        <span>{row.company}</span>
                        <span
                          className={`font-bold px-2 py-0.5 rounded-full text-xs ${
                            row.level === "high"
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {row.score}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
