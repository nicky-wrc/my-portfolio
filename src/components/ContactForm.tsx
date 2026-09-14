"use client";

import { PortfolioArrow } from "@/components/ui/PortfolioIcons";
import { useRef, useState } from "react";
import { siteConfig } from "@/data/site";

type FormStatus =
  | { state: "idle"; message: "" }
  | { state: "sending"; message: string }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const idleStatus: FormStatus = { state: "idle", message: "" };

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(idleStatus);
  const sending = useRef(false);
  const [emailDraft, setEmailDraft] = useState(siteConfig.emailHref as string);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim();
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim();
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim();
    const fields = Object.fromEntries(["name", "email", "subject", "message"].map(key => [key, String(data.get(key) ?? "").trim()]));
    setEmailDraft(`${siteConfig.emailHref}?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(`From: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`)}`);

    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId === "YOUR_SERVICE_ID" ||
      templateId === "YOUR_TEMPLATE_ID" ||
      publicKey === "YOUR_PUBLIC_KEY" ||
      [serviceId, templateId, publicKey].some(value => /^your_|^placeholder|^<.*>$/i.test(value))
    ) {
      setStatus({
        state: "error",
        message:
          "The contact form is not configured yet. Please email me directly.",
      });
      return;
    }

    setStatus({ state: "sending", message: "Sending your message…" });
    sending.current = true;

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      const result = await emailjs.send(serviceId, templateId, {
        from_name: fields.name,
        from_email: fields.email,
        reply_to: fields.email,
        subject: fields.subject,
        message: fields.message,
        to_email: "nick.worachatz@gmail.com",
      }, { publicKey });

      if (result.status !== 200) throw new Error("Email delivery failed");
      form.reset();
      setStatus({
        state: "success",
        message: "Message sent. Thank you — I’ll reply as soon as I can.",
      });
    } catch (error) {
      const code = typeof error === "object" && error !== null && "status" in error ? Number(error.status) : 0;
      // Provider diagnostics only; never log the submitted personal message.
      const detail = typeof error === "object" && error !== null && "text" in error ? String(error.text) : "";
      console.error("Contact delivery failed", { status: code, providerMessage: detail });
      let message = "The email service could not send your message. Your text is still here; use the email option below.";
      if (code === 429) message = "The email service has reached its sending limit. Please try later or use the email option below.";
      else if (code === 412) message = "The website's email connection needs to be renewed. Your message has not been sent. Please use the email option below.";
      else if (code === 400 || code === 401 || code === 403 || code === 404 || code === 422) message = "The email service configuration or authorization needs attention. Please use the email option below.";
      else if (!code) message = "Could not connect to the email service. Check your connection or browser blocking settings, or use the email option below.";
      setStatus({
        state: "error",
        message,
      });
    } finally {
      sending.current = false;
    }
  }

  const isSending = status.state === "sending";

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      aria-busy={isSending}
    >
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>

      <label>
        <span>Subject</span>
        <input name="subject" type="text" autoComplete="off" required />
      </label>

      <label>
        <span>Message</span>
        <textarea name="message" rows={6} required />
      </label>

      <div className="form-footer">
        <button
          type="submit"
          className="button button-primary"
          disabled={isSending}
        >
          {isSending ? "Sending…" : "Send message"}
          <span aria-hidden="true"><PortfolioArrow /></span>
        </button>
        <p
          className={`form-status form-status-${status.state}`}
          role={status.state === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status.message}
        </p>
        {status.state === "error" && <a className="text-link" href={emailDraft}>Open email app with this message <PortfolioArrow /></a>}
      </div>
    </form>
  );
}
