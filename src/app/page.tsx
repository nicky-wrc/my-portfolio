"use client";
import Hero from "@/components/sections/Hero/Hero";
import IntroScreen from "@/components/sections/Hero/IntroScreen";
import AboutOverviewContent from "@/components/AboutOverviewContent";
import SkillSection from "@/components/SkillSection";
import WorkSection from "@/components/WorkSection";
import WorkflowSection from "@/components/WorkflowSection";
import GitHubContributions from "@/components/GitHubContributions";
import MarqueeBanner from "@/components/sections/About/MarqueeBanner";
import ContactSection from "@/components/ContactSection";
import { useIntroAnimation } from "@/context/IntroAnimationContext";
import { ScrollStack, ScrollPanel } from "@/components/ui/smooth-scroll";
export default function Home() {
  const { isIntroComplete } = useIntroAnimation();
  return (
    <main id="main-content">
      {!isIntroComplete && <IntroScreen />}
      <div inert={!isIntroComplete}>
        <ScrollStack>
          <ScrollPanel anchor="home">
            <Hero />
          </ScrollPanel>
          <ScrollPanel anchor="about">
            <AboutOverviewContent />
          </ScrollPanel>
          <ScrollPanel anchor="skills">
            <SkillSection />
          </ScrollPanel>
          <ScrollPanel anchor="projects">
            <WorkSection />
          </ScrollPanel>
          <ScrollPanel anchor="workflow">
            <WorkflowSection />
          </ScrollPanel>
          <ScrollPanel anchor="github">
            <GitHubContributions />
          </ScrollPanel>
          <ScrollPanel anchor="marquee">
            <MarqueeBanner />
          </ScrollPanel>
          <ScrollPanel anchor="contact">
            <ContactSection />
          </ScrollPanel>
        </ScrollStack>
      </div>
    </main>
  );
}
