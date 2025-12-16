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
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!publicKey || !serviceId || !templateId || 
          publicKey === 'YOUR_PUBLIC_KEY' || 
          serviceId === 'YOUR_SERVICE_ID' || 
          templateId === 'YOUR_TEMPLATE_ID') {
        throw new Error('EmailJS_NOT_CONFIGURED');
      }

      // Initialize EmailJS
      emailjs.init(publicKey);

      // Send email
      const result = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'nick.worachatz@gmail.com',
      });

      // Check if email was sent successfully
      if (result.status !== 200) {
        throw new Error('EmailJS_SEND_FAILED');
      }

      setIsSubmitting(false);
      setSubmitStatus('success');
      setShowConfetti(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset confetti after 3 seconds
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error: any) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      // Log detailed error for debugging
      if (error?.text) {
        console.error('EmailJS Error Details:', error.text);
      }
      
      // Reset error message after 8 seconds (longer for production issues)
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 8000);
    }
  };

  return (
    <>
      <Confetti trigger={showConfetti} />
      <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
        <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition backdrop-blur-sm"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition backdrop-blur-sm"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition backdrop-blur-sm"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition resize-none backdrop-blur-sm"
              placeholder="Your message here..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="p-4 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-400">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
              <div className="font-semibold mb-2">✗ Something went wrong. Please try again later.</div>
              <div className="text-sm text-red-300/80 space-y-1">
                <p>If this persists, please check:</p>
                <ul className="list-disc list-inside ml-2 space-y-0.5">
                  <li>EmailJS environment variables are set in your deployment platform (Vercel/Netlify)</li>
                  <li>Service ID, Template ID, and Public Key are correct</li>
                  <li>EmailJS account is active and not exceeded monthly limit</li>
                </ul>
                <p className="mt-2 text-xs">
                  See <code className="bg-red-500/20 px-1 rounded">EMAILJS_SETUP.md</code> for setup instructions.
                </p>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-[1.02] transform"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </>
  );
}

