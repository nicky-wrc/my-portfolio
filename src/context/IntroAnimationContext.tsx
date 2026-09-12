"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { usePathname } from "next/navigation";

const IntroContext = createContext({
  isIntroComplete: true,
  completeIntro: () => {},
});

export function IntroAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isIntroComplete, setComplete] = useState(pathname !== "/");
  const completeIntro = useCallback(() => setComplete(true), []);
  return (
    <IntroContext.Provider value={{ isIntroComplete, completeIntro }}>
      {children}
    </IntroContext.Provider>
  );
}

export const useIntroAnimation = () => useContext(IntroContext);
