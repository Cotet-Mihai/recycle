import HeroSection from "@/components/HeroSection";
import WhyRecycleSection from "@/components/WhyRecycleSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import OurMissionSection from "@/components/OurMissionSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
      <main>
          <HeroSection/>
          <WhyRecycleSection/>
          <TargetAudienceSection/>
          <OurMissionSection/>
          <FAQSection/>
          <ContactForm/>
      </main>
  );
}
