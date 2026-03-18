"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "MintnovaLabs completely transformed our outbound. We went from 3 SDRs manually sending 50 emails a day to Nova sending 500+ personalized emails daily. Pipeline is up 340% in 60 days.",
    name: "Marcus Thompson",
    role: "VP Sales, ScaleHub",
    img: 5,
    featured: true,
    metric: "340%",
    metricLabel: "pipeline growth in 60 days",
  },
  {
    text: "We replaced 6 different tools with MintnovaLabs and cut our outreach costs by 70%. The personalization Nova produces is honestly better than what our reps were writing manually.",
    name: "Priya Sharma",
    role: "Head of Growth, Fintrek",
    img: 9,
  },
  {
    text: "Nova booked 18 qualified demos in our first two weeks. Our SDR team now focuses entirely on closing — not prospecting. Game changer for our small team.",
    name: "James Keller",
    role: "CEO, Launchbolt",
    img: 12,
  },
  {
    text: "The intent data alone is worth the price. We're reaching out to prospects at exactly the right moment — the reply rates are unlike anything we've seen before.",
    name: "Lisa Wang",
    role: "Director of Sales, Cloudify",
    img: 20,
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function Testimonials() {
  return (
    <section id="social-proof" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 text-xs font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full mb-5">
            Customer Stories
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-14">
            Teams that <span className="gradient-text">scaled with Nova</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className={`rounded-[28px] p-9 transition-all duration-200 hover:shadow-md ${
                t.featured
                  ? "bg-gradient-to-br from-green-50 to-green-100 border border-green-200 md:row-span-2 flex flex-col justify-between"
                  : "bg-gray-100 border border-gray-200 hover:border-green-300"
              }`}
            >
              <div>
                <div className="text-green-500 text-lg mb-5 tracking-widest">
                  ★★★★★
                </div>
                <blockquote
                  className={`italic text-gray-700 leading-relaxed mb-6 ${
                    t.featured ? "text-lg" : "text-base"
                  }`}
                >
                  &ldquo;{t.text}&rdquo;
                </blockquote>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/48?img=${t.img}`}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <strong className="block text-sm font-bold">{t.name}</strong>
                    <span className="text-[12.5px] text-gray-500">{t.role}</span>
                  </div>
                </div>

                {t.metric && (
                  <div className="mt-7 pt-6 border-t border-green-200 flex items-baseline gap-2.5">
                    <span className="font-display text-5xl font-extrabold text-green-700 leading-none">
                      {t.metric}
                    </span>
                    <span className="text-sm text-gray-500 max-w-[120px] leading-snug">
                      {t.metricLabel}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
