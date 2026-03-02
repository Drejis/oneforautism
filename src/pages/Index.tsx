import { useState } from "react";
import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import DonationCounter from "@/components/DonationCounter";
import VideoSection from "@/components/VideoSection";
import CrisisSection from "@/components/CrisisSection";
import MiracleSection from "@/components/MiracleSection";
import HowItWorks from "@/components/HowItWorks";
import DonationModal from "@/components/DonationModal";
import SocialProofTicker from "@/components/SocialProofTicker";
import CampaignFooter from "@/components/CampaignFooter";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <StickyHeader onDonateClick={() => setModalOpen(true)} />
      <HeroSection onDonateClick={() => setModalOpen(true)} />
      <DonationCounter />
      <VideoSection />
      <CrisisSection />
      <MiracleSection />
      <HowItWorks />
      <CampaignFooter onDonateClick={() => setModalOpen(true)} />
      <DonationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <SocialProofTicker />
      <BackToTop />
    </div>
  );
};

export default Index;
