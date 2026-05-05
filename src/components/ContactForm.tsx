'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Confetti from './Confetti';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!publicKey || !serviceId || !templateId ||
          publicKey === 'YOUR_PUBLIC_KEY' ||
          serviceId === 'YOUR_SERVICE_ID' ||
          templateId === 'YOUR_TEMPLATE_ID') {
        throw new Error('EmailJS_NOT_CONFIGURED');
      }

      emailjs.init(publicKey);

      const result = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'nick.worachatz@gmail.com',
      });

      if (result.status !== 200) throw new Error('EmailJS_SEND_FAILED');

      setIsSubmitting(false);
      setSubmitStatus('success');
      setShowConfetti(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setShowConfetti(false), 3000);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: unknown) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 8000);
    }
  };

  const inputBase =
    'w-full px-4 py-3 bg-[#050816]/60 border border-cyan-400/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-400/20 transition-all backdrop-blur-sm font-mono text-sm';

  return (
    <>
      <Confetti trigger={showConfetti} />
      <div className="cyber-card p-8 md:p-10 relative">
        <div className="scan-line" />
        <h3 className="font-display text-2xl uppercase tracking-wider mb-2 text-white flex items-center gap-3">
          <span className="w-2 h-6 rounded-full bg-gradient-to-b from-cyan-400 via-fuchsia-400 to-violet-400" />
          Send a <span className="text-holo-pink">Signal</span>
        </h3>
        <p className="font-mono text-xs text-slate-400 mb-7 tracking-wider">
          {'>'} transmit.message — secure_channel://worachat
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-[0.65rem] tracking-[0.22em] font-display uppercase text-cyan-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputBase}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[0.65rem] tracking-[0.22em] font-display uppercase text-cyan-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputBase}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-[0.65rem] tracking-[0.22em] font-display uppercase text-cyan-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={inputBase}
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-[0.65rem] tracking-[0.22em] font-display uppercase text-cyan-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className={`${inputBase} resize-none`}
              placeholder="Your message here..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="p-4 rounded-xl border border-emerald-400/40 bg-emerald-400/10 text-emerald-300 font-mono text-sm">
              ✓ Transmission successful. Thank you — I&apos;ll respond shortly.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 rounded-xl border border-red-400/40 bg-red-500/10 text-red-300 font-mono text-sm">
              ✗ Transmission failed. Please retry or check your connection.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-holo w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Transmitting...
              </>
            ) : (
              <>
                Send Signal
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
}
