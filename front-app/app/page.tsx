import CallToAction from "@/components/call-to-action";
import FeaturesSection from "@/components/features-8";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import WallOfLoveSection from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <WallOfLoveSection />
      <CallToAction />
      <FooterSection />
    </>
  );
}
