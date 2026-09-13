"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
  layout?: "landscape" | "portrait";
}

export default function ProjectGallery({
  images,
  projectTitle,
  layout = "landscape",
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  useEffect(() => {
    const syncFullscreenState = () => {
      setIsFullscreen(document.fullscreenElement === galleryRef.current);
    };

    document.addEventListener("fullscreenchange", syncFullscreenState);
    return () => {
      document.removeEventListener("fullscreenchange", syncFullscreenState);
    };
  }, []);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement === galleryRef.current) {
      await document.exitFullscreen();
      return;
    }

    await galleryRef.current?.requestFullscreen();
  };

  return (
    <div
      ref={galleryRef}
      className={`project-gallery project-gallery--${layout}`}
      tabIndex={0}
      aria-label={`${projectTitle} image gallery`}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") showPrevious();
        if (event.key === "ArrowRight") showNext();
      }}
    >
      <div className="project-gallery-stage">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={images[activeIndex]}
            className="project-gallery-image-wrap"
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={images[activeIndex]}
              alt={`${projectTitle} system screen ${activeIndex + 1}`}
              fill
              priority={activeIndex === 0}
              sizes="(max-width: 767px) calc(100vw - 72px), 1050px"
              className="project-gallery-image"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          className="project-gallery-arrow project-gallery-arrow-left"
          onClick={showPrevious}
          aria-label="Previous project image"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          className="project-gallery-arrow project-gallery-arrow-right"
          onClick={showNext}
          aria-label="Next project image"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className="project-gallery-controls">
        <span className="project-gallery-count" aria-live="polite">
          {activeIndex + 1}/{images.length}
        </span>
        <button
          type="button"
          className="project-gallery-fullscreen"
          onClick={() => void toggleFullscreen()}
          aria-label={isFullscreen ? "Exit fullscreen" : "View fullscreen"}
        >
          {isFullscreen ? (
            <Minimize2 aria-hidden="true" />
          ) : (
            <Maximize2 aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
