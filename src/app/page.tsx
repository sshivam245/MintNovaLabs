import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import CompareSection from "@/components/CompareSection";
import NovaSection from "@/components/NovaSection";
import HowItWorks from "@/components/HowItWorks";
import StatsBar from "@/components/StatsBar";
import FeaturesGrid from "@/components/FeaturesGrid";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <AnnouncementBar />
        <Hero />
        <LogoStrip />
        <CompareSection />
        <NovaSection />
        <HowItWorks />
        <StatsBar />
        <FeaturesGrid />
        <Testimonials />
        <Pricing />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
