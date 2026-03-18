"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 300, suffix: "M+", label: "Verified B2B contacts" },
  { value: 4.2, suffix: "×", label: "More replies vs manual outreach", decimals: 1 },
  { value: 68, suffix: "%", label: "Reduction in cost per meeting" },
  { value: 24, suffix: "/7", label: "Nova works while you sleep" },
];

function CountUp({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-[clamp(36px,4vw,52px)] font-extrabold text-green-400 tracking-tight leading-none mb-2">
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#052e16] via-[#14532d] to-[#166534]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="flex flex-col items-center px-8 md:px-14 py-5">
                <CountUp target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                <span className="text-[13.5px] text-white/60 text-center max-w-[140px] leading-snug">
                  {stat.label}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-[60px] bg-white/15" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
