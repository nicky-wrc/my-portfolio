"use client";

import { MotionConfig } from "framer-motion";
import { IntroAnimationProvider } from "@/context/IntroAnimationContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/layout/Footer/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScrollWrapper from "./SmoothScrollWrapper";
import TerminalSandbox from "@/components/ui/TerminalSandbox";
import PortfolioAssistant from "@/components/ui/PortfolioAssistant";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <IntroAnimationProvider>
        <SmoothScrollWrapper>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navigation />
          {children}
          <Footer />
          <CustomCursor />
          <TerminalSandbox />
          <PortfolioAssistant />
        </SmoothScrollWrapper>
      </IntroAnimationProvider>
    </MotionConfig>
  );
}
