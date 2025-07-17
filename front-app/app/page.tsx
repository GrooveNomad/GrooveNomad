import CallToAction from "@/components/call-to-action";
import FAQsTwo from "@/components/faqs-2";
import FeaturesSection from "@/components/features";
import FooterSection from "@/components/footer";
import { Gallery4 } from "@/components/gallery4";
import HeroSection from "@/components/hero-section";
import WallOfLoveSection from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <Gallery4 />
      <WallOfLoveSection />
      <CallToAction />
      <FAQsTwo />
      <FooterSection />
    </>
  );
}
