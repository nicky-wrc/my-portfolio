"use client";
import Hero from "@/components/sections/Hero/Hero";
import IntroScreen from "@/components/sections/Hero/IntroScreen";
import AboutOverviewContent from "@/components/AboutOverviewContent";
import SkillSection from "@/components/SkillSection";
import WorkSection from "@/components/WorkSection";
import MarqueeBanner from "@/components/sections/About/MarqueeBanner";
import ContactSection from "@/components/ContactSection";
import { useIntroAnimation } from "@/context/IntroAnimationContext";
export default function Home() {
  const { isIntroComplete } = useIntroAnimation();
  return (
    <main id="main-content">
      {!isIntroComplete && <IntroScreen />}
      <div inert={!isIntroComplete}>
        <Hero />
        <div className="relative z-20">
          <AboutOverviewContent />
          <SkillSection />
          <WorkSection />
          <MarqueeBanner />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
