"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    monthly: "$99",
    annual: "$79",
    desc: "Perfect for solo founders and small teams just getting started with AI outreach.",
    features: ["1 Nova agent", "1,000 emails/month", "5,000 contact credits", "Email sequences", "Basic analytics", "Gmail & Outlook integration"],
    cta: "Get Started",
    outline: true,
  },
  {
    name: "Growth",
    monthly: "$299",
    annual: "$239",
    desc: "For growing sales teams that need serious scale and deeper personalization.",
    features: ["3 Nova agents", "10,000 emails/month", "25,000 contact credits", "Multi-channel sequences", "Intent signals", "Advanced A/B testing", "CRM integrations", "Priority support"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    monthly: "Custom",
    annual: "Custom",
    desc: "For large revenue teams with custom workflows, compliance needs, and dedicated support.",
    features: ["Unlimited Nova agents", "Unlimited emails", "Unlimited contacts", "Custom AI training", "Dedicated CSM", "SSO & SAML", "SOC 2 Type II", "SLA guarantee"],
    cta: "Talk to Sales",
    outline: true,
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 text-xs font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full mb-5">
            Pricing
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-4">
            Simple, <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-[580px] mx-auto leading-relaxed mb-12">
            No per-seat surprises. No hidden add-ons. One flat price for everything Nova can do.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3.5 mb-12">
          <span className={`text-sm font-medium ${!annual ? "text-gray-900 font-semibold" : "text-gray-500"}`}>
            Monthly
          </span>
          <label className="relative inline-block w-11 h-6 cursor-pointer">
            <input
              type="checkbox"
              checked={annual}
              onChange={() => setAnnual(!annual)}
              className="sr-only peer"
            />
            <span className="absolute inset-0 bg-gray-300 rounded-xl transition-colors peer-checked:bg-green-500" />
            <span className="absolute top-[3px] left-[3px] w-[18px] h-[18px] bg-white rounded-full shadow-sm transition-transform peer-checked:translate-x-5" />
          </label>
          <span className={`text-sm font-medium flex items-center gap-2 ${annual ? "text-gray-900 font-semibold" : "text-gray-500"}`}>
            Annual
            <span className="bg-green-100 text-green-700 text-[11px] font-bold px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </span>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`relative bg-white border rounded-[28px] p-10 transition-all duration-200 ${
                plan.popular
                  ? "border-green-400 shadow-[0_0_0_3px_rgba(34,197,94,0.15)] shadow-xl md:scale-[1.03]"
                  : "border-gray-200 hover:border-green-300 hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-br from-green-600 to-green-500 text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1 rounded-full whitespace-nowrap shadow-[0_8px_32px_rgba(34,197,94,0.25)]">
                  Most Popular
                </div>
              )}

              <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-gray-500 mb-3">
                {plan.name}
              </div>

              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display text-[44px] font-extrabold text-gray-900 leading-none transition-all">
                  {annual ? plan.annual : plan.monthly}
                </span>
                {plan.monthly !== "Custom" && (
                  <span className="text-sm text-gray-400">/month</span>
                )}
              </div>

              <p className="text-sm text-gray-500 leading-relaxed mb-7 pb-7 border-b border-gray-100">
                {plan.desc}
              </p>

              <ul className="space-y-2.5 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span className="w-[18px] h-[18px] bg-green-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full text-center px-5 py-3 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  plan.popular
                    ? "text-white bg-gradient-to-br from-green-600 to-green-500 shadow-[0_8px_32px_rgba(34,197,94,0.25)] hover:from-green-700 hover:to-green-600 hover:-translate-y-0.5"
                    : "text-green-700 border-[1.5px] border-green-300 hover:bg-green-50 hover:border-green-500"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
