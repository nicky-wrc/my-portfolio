"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site";
import RevealHeading from "@/components/ui/RevealHeading";
export default function ContactSection() {
  const entrance = useScrollReveal();
  return (
    <section id="contact" className="contact-cta">
      <div className="contact-grid-art" aria-hidden="true" />
      <motion.div
        {...entrance}
        className="contact-cta-content"
      >
        <span className="section-badge">✳ HAVE SOMETHING IN MIND?</span>
        <RevealHeading text="Let’s build something great." />
        <p>
          Have an internship opportunity or a project to discuss?
          <br />
          I’d love to hear what you’re working on.
        </p>
        <Link href="/contact" className="group inline-block rounded-full">
          <motion.span
            className="glowing-border-btn-white relative inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-sm font-semibold text-white sm:px-10 sm:text-base"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 rounded-full bg-[#0F0E0E]/95 backdrop-blur-xl transition-colors group-hover:bg-[#0F0E0E]" />
            <span className="relative z-10">Get in touch</span>
            <ArrowRight aria-hidden="true" size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
          </motion.span>
        </Link>
        <div className="contact-social-links">
          <a href={siteConfig.emailHref}>
            <Mail size={17} />
            Email
          </a>
          <a href={siteConfig.github.url} target="_blank" rel="noreferrer">
            <Github size={17} />
            GitHub
          </a>
          <a href={siteConfig.linkedin.url} target="_blank" rel="noreferrer">
            <Linkedin size={17} />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
