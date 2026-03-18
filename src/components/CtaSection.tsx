"use client";

import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#052e16] via-[#14532d] to-green-600 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(34,197,94,0.2)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 bg-white/10 text-white border border-white/25 text-xs font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full mb-5">
            Get Started Today
          </span>

          <h2 className="font-display text-[clamp(32px,5vw,54px)] font-extrabold text-white mb-5 tracking-tight">
            Ready to let Nova{" "}
            <span className="gradient-text-light">fill your pipeline?</span>
          </h2>

          <p className="text-lg text-white/70 max-w-[520px] mx-auto leading-relaxed mb-9">
            Join 2,400+ sales teams using MintnovaLabs to automate outreach and
            close more deals — without hiring more SDRs.
          </p>

          <div className="flex items-center justify-center gap-3.5 flex-wrap mb-5">
            <a
              href="#"
              className="px-7 py-3 text-sm font-bold text-green-800 bg-white rounded-lg transition-all duration-200 hover:bg-green-50 hover:-translate-y-0.5"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              className="px-7 py-3 text-sm font-semibold text-white border-[1.5px] border-white/40 rounded-lg transition-all duration-200 hover:bg-white/10 hover:border-white/70"
            >
              Book a Demo
            </a>
          </div>

          <p className="text-[13px] text-white/40">
            Free 14-day trial · No credit card required · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
