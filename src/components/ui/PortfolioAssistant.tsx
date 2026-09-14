"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Bot, MessageCircle, Send, User, X } from "lucide-react";
import { answerPortfolioQuestion, type AssistantAnswer } from "@/lib/portfolio-assistant";

type Message = AssistantAnswer & { id: number; role: "user" | "assistant" };
const suggestions = ["แนะนำตัวหน่อย", "มีผลงานอะไรบ้าง", "มีทักษะอะไรบ้าง", "How can I hire you?", "Tell me about PPE", "ขอดู Resume", "What's your process?", "What are your rates?"];

export default function PortfolioAssistant() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const field = useRef<HTMLTextAreaElement>(null);
  const feed = useRef<HTMLDivElement>(null);
  const sequence = useRef(1);
  const project = useRef<string | undefined>(undefined);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([{ id: 0, role: "assistant", text: "สวัสดีครับ สอบถามเกี่ยวกับผลงาน ทักษะ และช่องทางติดต่อของ Worachat ได้เลย\n\nAsk in Thai or English. Answers use the published portfolio information; project descriptions may be in English." }]);

  useEffect(() => { feed.current?.scrollTo({ top: feed.current.scrollHeight }); }, [messages]);
  function close() { dialog.current?.close(); trigger.current?.focus(); }
  function send(raw: string) {
    const question = raw.trim().slice(0, 2000);
    if (!question) return;
    const answer = answerPortfolioQuestion(question, project.current);
    project.current = answer.projectSlug;
    const userId = sequence.current++;
    const answerId = sequence.current++;
    setMessages(old => [...old.slice(-98), { id: userId, role: "user", text: question }, { ...answer, id: answerId, role: "assistant" }]);
    setValue("");
    field.current?.focus();
  }
  return <>
    <button ref={trigger} className="assistant-launcher" aria-label="Open AI Assistant" aria-haspopup="dialog" onClick={() => { dialog.current?.showModal(); field.current?.focus(); }}><MessageCircle size={23} /></button>
    <dialog ref={dialog} className="portfolio-assistant" aria-labelledby="assistant-title" data-lenis-prevent onClose={() => trigger.current?.focus()} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
    }}>
      <div className="assistant-window">
        <header className="assistant-header"><span className="assistant-avatar"><Bot size={20} /></span><div><h2 id="assistant-title">AI Assistant</h2><p><i /> Portfolio guide</p></div><button onClick={close} aria-label="Close AI Assistant"><X size={18} /></button></header>
        <div className="assistant-feed" ref={feed} role="log" aria-live="polite" aria-relevant="additions" data-lenis-prevent>
          {messages.map(message => <div className={`assistant-message assistant-message-${message.role}`} key={message.id}><span className="assistant-message-icon" aria-hidden="true">{message.role === "assistant" ? <Bot size={16} /> : <User size={16} />}</span><div className="assistant-bubble"><p>{message.text}</p>{message.links?.map(link => <Link key={link.href} href={link.href} onClick={close} target={link.href.startsWith("https:") ? "_blank" : undefined} rel={link.href.startsWith("https:") ? "noreferrer" : undefined}>{link.label}</Link>)}</div></div>)}
        </div>
        <div className="assistant-suggestions" aria-label="Suggested questions" data-lenis-prevent>{suggestions.map(question => <button key={question} onClick={() => send(question)}>{question}</button>)}</div>
        <form className="assistant-compose" onSubmit={event => { event.preventDefault(); send(value); }}>
          <label className="sr-only" htmlFor="assistant-question">Ask about Worachat&apos;s portfolio</label>
          <textarea id="assistant-question" ref={field} value={value} onChange={event => setValue(event.target.value)} maxLength={2000} rows={2} placeholder="พิมพ์คำถาม / Ask a question..." onKeyDown={event => { if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); send(value); } }} />
          <button type="submit" disabled={!value.trim()} aria-label="Send question"><Send size={19} /></button>
          <small>{value.length}/2000 · Shift + Enter สำหรับขึ้นบรรทัดใหม่</small>
        </form>
      </div>
    </dialog>
  </>;
}
