import { Twitter, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  Product: ["Meet Nova", "Lead Discovery", "Email Sequences", "Analytics", "Integrations", "Pricing"],
  Solutions: ["For Startups", "For Agencies", "For Enterprise", "For SDR Teams", "For Founders"],
  Resources: ["Blog", "Case Studies", "Documentation", "Changelog", "Community"],
  Company: ["About", "Careers", "Press", "Contact", "Security"],
};

const socials = [
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f0d] text-white/70 pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-20 mb-16 pb-16 border-b border-white/[0.08]">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 text-white mb-4">
              <span className="w-[34px] h-[34px] bg-gradient-to-br from-green-600 to-green-500 text-white font-extrabold text-lg rounded-lg flex items-center justify-center shadow-[0_2px_8px_rgba(34,197,94,0.4)] font-display">
                M
              </span>
              <span className="text-[17px] font-medium tracking-tight">
                Mintnova<strong className="font-extrabold">Labs</strong>
              </span>
            </a>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              The AI-powered outreach platform that replaces your entire outbound stack.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-9 h-9 bg-white/[0.06] border border-white/10 rounded-lg flex items-center justify-center text-white/50 transition-all duration-200 hover:bg-green-500/15 hover:border-green-500/40 hover:text-green-400"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {Object.entries(footerLinks).map(([title, items]) => (
              <div key={title}>
                <h5 className="text-xs font-bold uppercase tracking-[0.1em] text-white/90 mb-4">
                  {title}
                </h5>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[13.5px] text-white/45 hover:text-green-400 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 flex-wrap">
          <p className="text-[13px] text-white/30">
            &copy; 2025 MintnovaLabs Inc. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[13px] text-white/30 hover:text-white/70 transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex gap-2">
            {["SOC 2", "GDPR", "CCPA"].map((badge) => (
              <span
                key={badge}
                className="text-[10px] font-bold tracking-wider uppercase text-white/40 border border-white/12 px-2.5 py-1 rounded-md"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
