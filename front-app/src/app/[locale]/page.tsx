import CallToAction from "@/src/components/call-to-action";
import FeaturesSection from "@/src/components/features";
import FooterSection from "@/src/components/footer";
import { Gallery4 } from "@/src/components/gallery4";
import HeroSection from "@/src/components/hero-section";
import WallOfLoveSection from "@/src/components/testimonials";
import FAQsTwo from "@/src/components/faqs-2";
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
