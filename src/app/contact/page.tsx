import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import GridBackground from '@/components/GridBackground';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Worachat Paranya. Open for internship opportunities, collaborations, and freelance projects in web and mobile development.',
  openGraph: {
    title: 'Contact | Worachat',
    description: 'Get in touch with Worachat Paranya for development opportunities.',
  },
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'worachat.pa@kkumail.com',
      link: 'mailto:worachat.pa@kkumail.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      label: 'Instagram',
      value: 'nicky_wrc',
      link: 'https://www.instagram.com/nicky_wrc/',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/nicky-wrc',
      link: 'https://github.com/nicky-wrc',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '082-881-4470',
      link: 'tel:+66828814470',
    },
  ];

  return (
    <main id="main-content" className="min-h-screen text-slate-100 relative overflow-hidden">
      <GridBackground />
      <Navigation />

      <section className="pt-32 pb-16 px-6 relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="font-script text-2xl text-cyan-200/90 mb-2">— say hello —</p>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight mb-6">
            <span className="text-white">Get In </span>
            <span className="text-holo-pink">Touch</span>
          </h1>
          <p className="text-slate-300/85 max-w-2xl mx-auto leading-relaxed">
            มีคำถามหรือสนใจในผลงานของผม? ส่งสัญญาณมาหา robot ตัวนี้ได้เลย — ผมตอบทุกข้อความครับ
          </p>
        </div>
      </section>

      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ContactForm />

            <div className="space-y-6">
              <div className="cyber-card p-8">
                <h2 className="font-display text-xl md:text-2xl uppercase tracking-wider mb-6 text-white flex items-center gap-3">
                  <span className="w-2 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-fuchsia-400" />
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-4 rounded-xl bg-[#050816]/50 border border-cyan-400/15 hover:border-fuchsia-400/40 hover:bg-[#050816]/70 hover:scale-[1.02] transition-all duration-300 group"
                      aria-label={`${info.label}: ${info.value}`}
                    >
                      <span className="w-10 h-10 rounded-lg flex items-center justify-center cyber-border bg-[#050816]/60 group-hover:scale-110 transition-transform">
                        <span className="text-cyan-300 group-hover:text-fuchsia-300 transition-colors">{info.icon}</span>
                      </span>
                      <div>
                        <p className="text-[0.65rem] tracking-[0.22em] uppercase font-display text-slate-400 mb-1">{info.label}</p>
                        <p className="text-white font-medium group-hover:text-holo-cyan transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="cyber-frame p-8">
                <h3 className="font-display text-xl uppercase tracking-wider mb-3 text-white">
                  Let&apos;s <span className="text-holo-pink">Connect</span>
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  ผมเปิดรับโอกาสในการฝึกงานและทำงานร่วมกัน
                  หากคุณมีโปรเจกต์ที่น่าสนใจ ทักมาเลยครับ
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/nicky-wrc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-holo-ghost"
                  >
                    View GitHub
                  </a>
                  <Link href="/projects" className="btn-holo-ghost">
                    View Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
