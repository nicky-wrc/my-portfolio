'use client';

import { motion } from 'framer-motion';
import { useIntroAnimation } from '@/context/IntroAnimationContext';

export default function HorizonGlow() {
  const { isIntroComplete } = useIntroAnimation();

  return (
    <div className="absolute bottom-[-24px] sm:bottom-[-36px] left-0 w-full h-[380px] sm:h-[500px] z-[13] pointer-events-none overflow-visible">
      {/* Entrance Animation Layer */}
      <motion.div
        className="relative w-full h-full"
        initial={{ opacity: 0, y: 240, scaleY: 0.9 }}
        animate={
          isIntroComplete
            ? { opacity: 1, y: 0, scaleY: 1 }
            : { opacity: 0, y: 240, scaleY: 0.9 }
        }
        transition={{ duration: 2.2, delay: 2.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Continuous Slow Up-and-Down Breathing/Pulsing Loop */}
        <motion.div
          className="w-full h-full"
          animate={
            isIntroComplete
              ? { y: [0, -8] }
              : { y: 0 }
          }
          transition={{
            y: {
              duration: 5.5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: 4.65, // Starts exactly as the entrance animation completes
            }
          }}
        >
          <svg
            className="absolute bottom-0 inset-x-0 w-full h-full z-10"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              {/* Concentrated, low-profile dark orange atmospheric glow centered at the curve peak (y = 460) with smaller radius */}
              <radialGradient id="skyGlow" cx="50%" cy="77%" r="42%">
                <stop offset="0%"   stopColor="#d35400" stopOpacity="0.95"/>
                <stop offset="15%"  stopColor="#b23b00" stopOpacity="0.75"/>
                <stop offset="35%"  stopColor="#802000" stopOpacity="0.45"/>
                <stop offset="60%"  stopColor="#3b0800" stopOpacity="0.15"/>
                <stop offset="85%"  stopColor="#120100" stopOpacity="0.02"/>
                <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
              </radialGradient>

              {/* Intense dark orange core glow right on the curve peak */}
              <radialGradient id="coreGlow" cx="50%" cy="77%" r="14%">
                <stop offset="0%"   stopColor="#ff9100" stopOpacity="1"/>
                <stop offset="20%"  stopColor="#d35400" stopOpacity="0.9"/>
                <stop offset="55%"  stopColor="#802000" stopOpacity="0.35"/>
                <stop offset="100%" stopColor="#3b0800" stopOpacity="0"/>
              </radialGradient>

              {/* Linear gradient matching AboutDome's glowing sunset orange color theme */}
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ff3c00" stopOpacity="0" />
                <stop offset="25%" stopColor="#ff5500" stopOpacity="0.6" />
                <stop offset="45%" stopColor="#ffb088" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="55%" stopColor="#ffb088" stopOpacity="0.9" />
                <stop offset="75%" stopColor="#ff5500" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ff3c00" stopOpacity="0" />
              </linearGradient>

              <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3"/>
              </filter>
              <filter id="lineBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.8"/>
              </filter>

              {/* Mask the glow so it only shines above the horizon arc (curve starting at y = 560, peaking at y = 360) */}
              <clipPath id="skyClip">
                <path d="M 0 560 Q 600 360, 1200 560 L 1200 0 L 0 0 Z"/>
              </clipPath>
            </defs>

            {/* Glowing atmospheric dome above the horizon */}
            <g clipPath="url(#skyClip)">
              <rect x="0" y="0" width="1200" height="600" fill="url(#skyGlow)"/>
              <rect x="0" y="0" width="1200" height="600" fill="url(#coreGlow)"/>
            </g>

            {/* Soft glow halo surrounding the horizon line */}
            <path d="M 0 560 Q 600 360, 1200 560" fill="none" stroke="url(#lineGrad)"
                  strokeWidth="20" strokeLinecap="round" filter="url(#softBlur)" opacity="0.35"/>

            {/* Crisp bright horizon edge (Outer Line) */}
            <path d="M 0 560 Q 600 360, 1200 560" fill="none" stroke="url(#lineGrad)"
                  strokeWidth="5" strokeLinecap="round" filter="url(#lineBlur)"/>

            {/* Thinner Concentric Inner Line */}
            <path d="M 70 560 Q 600 425, 1130 560" fill="none" stroke="url(#lineGrad)"
                  strokeWidth="2.4" strokeLinecap="round" filter="url(#lineBlur)" opacity="0.25"/>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
