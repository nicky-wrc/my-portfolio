"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site";
export default function ContactSection() {
  return (
    <section id="contact" className="contact-cta">
      <div className="contact-grid-art" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="contact-cta-content"
      >
        <span className="section-badge">✳ HAVE SOMETHING IN MIND?</span>
        <h2>
          Let’s build
          <br />
          <em>something great.</em>
        </h2>
        <p>
          Have an internship opportunity or a project to discuss?
          <br />
          I’d love to hear what you’re working on.
        </p>
        <Link href="/contact" className="gradient-button">
          Get in touch <ArrowUpRight size={20} />
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
