import BackgroundLayer from "@/components/BackgroundLayer";
import HeroSection from "@/components/HeroSection";
import EcoReciclareSection from "@/components/EcoReciclareSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import PricesSection from "@/components/PricesSection";
import OutMissionSection from "@/components/OurMission";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
      <main>
          <BackgroundLayer/>
          <HeroSection/>
          <EcoReciclareSection/>
          <TargetAudienceSection/>
          <PricesSection/>
          <OutMissionSection/>
          <FAQSection/>
          <ContactForm/>
      </main>
  );
}
