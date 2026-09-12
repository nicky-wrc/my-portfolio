"use client";

import { MotionConfig } from "framer-motion";
import { IntroAnimationProvider } from "@/context/IntroAnimationContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/layout/Footer/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScrollWrapper from "./SmoothScrollWrapper";

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
        </SmoothScrollWrapper>
      </IntroAnimationProvider>
    </MotionConfig>
  );
}
