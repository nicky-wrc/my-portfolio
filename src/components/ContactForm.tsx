"use client";

import { useState } from "react";

type FormStatus =
  | { state: "idle"; message: "" }
  | { state: "sending"; message: string }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const idleStatus: FormStatus = { state: "idle", message: "" };

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(idleStatus);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId === "YOUR_SERVICE_ID" ||
      templateId === "YOUR_TEMPLATE_ID" ||
      publicKey === "YOUR_PUBLIC_KEY"
    ) {
      setStatus({
        state: "error",
        message: "The contact form is not configured yet. Please email me directly.",
      });
      return;
    }

    setStatus({ state: "sending", message: "Sending your message…" });

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      emailjs.init(publicKey);
      const result = await emailjs.send(serviceId, templateId, {
        from_name: String(data.get("name") ?? ""),
        from_email: String(data.get("email") ?? ""),
        subject: String(data.get("subject") ?? ""),
        message: String(data.get("message") ?? ""),
        to_email: "nick.worachatz@gmail.com",
      });

      if (result.status !== 200) throw new Error("Email delivery failed");
      form.reset();
      setStatus({
        state: "success",
        message: "Message sent. Thank you — I’ll reply as soon as I can.",
      });
    } catch (error) {
      console.error("Unable to send contact form", error);
      setStatus({
        state: "error",
        message: "The message could not be sent. Please use the email link instead.",
      });
    }
  }

  const isSending = status.state === "sending";

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-busy={isSending}>
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
        <button type="submit" className="button button-primary" disabled={isSending}>
          {isSending ? "Sending…" : "Send message"}
          <span aria-hidden="true">↗</span>
        </button>
        <p
          className={`form-status form-status-${status.state}`}
          role={status.state === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status.message}
        </p>
      </div>
    </form>
  );
}
