"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { Terminal, X } from "lucide-react";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { siteConfig } from "@/data/site";

const quickCommands = ["help", "hack", "matrix", "projects", "skills", "about", "neofetch", "clear"];
const commands = [...quickCommands, "contact", "resume", "theme matrix", "theme amber", "theme dracula", "exit"];
const themes = { matrix: "#39d353", amber: "#ffb000", dracula: "#bd93f9" };
type Entry = { id: number; command: string; output: ReactNode };

export default function TerminalSandbox() {
  const dialog = useRef<HTMLDialogElement>(null);
  const launcher = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const output = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);
  const [value, setValue] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [theme, setTheme] = useState<keyof typeof themes>("matrix");
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    output.current?.scrollTo({ top: output.current.scrollHeight });
  }, [entries]);

  function close() {
    dialog.current?.close();
    launcher.current?.focus();
  }

  function execute(raw: string) {
    const command = raw.trim().toLowerCase().replace(/\s+/g, " ");
    if (!command) return;
    setValue("");
    setHistory((previous) => [...previous.slice(-49), command]);
    setHistoryIndex(-1);
    let result: ReactNode;
    switch (command) {
      case "clear":
        setEntries([]);
        setShowBanner(false);
        input.current?.focus();
        return;
      case "exit": close(); return;
      case "help":
        result = "projects / skills / about / contact / resume — explore my portfolio\nneofetch — profile summary\nmatrix / hack — visual sandbox\ntheme matrix | amber | dracula — change colors\nclear / exit\n↑ ↓ command history · Tab autocomplete · Esc close";
        break;
      case "about":
        result = `${siteConfig.name}\n${siteConfig.role} · ${siteConfig.location}\nBuilding web systems, APIs, and applied AI projects. Explore projects to see my work.`;
        break;
      case "skills":
        result = skills.map((group) => `${group.category}\n${group.items.join(" · ")}`).join("\n\n");
        break;
      case "projects":
        result = <ul className="terminal-projects">{projects.map((project) => <li key={project.slug}><Link href={`/projects/${project.slug}`} onClick={close}>{project.title} ↗</Link></li>)}</ul>;
        break;
      case "contact":
        result = <div className="terminal-projects"><a href={siteConfig.emailHref}>{siteConfig.email}</a><br /><a href={siteConfig.github.url} target="_blank" rel="noreferrer">GitHub @{siteConfig.github.handle} ↗</a></div>;
        break;
      case "resume":
        result = <Link href="/resume" onClick={close}>View Worachat&apos;s resume ↗</Link>;
        break;
      case "neofetch":
        result = `${siteConfig.name}\n────────────────────────\nRole     ${siteConfig.role}\nLocation ${siteConfig.location}\nGitHub   @${siteConfig.github.handle}\nProjects ${projects.length}\nStack    Next.js · React · TypeScript\nShell    Portfolio sandbox`;
        break;
      case "matrix":
        setTheme("matrix");
        result = <pre className="terminal-matrix" aria-label="Decorative Matrix code">{"01 10 01 11 00 01 10 01\n10 01 11 00 10 11 01 10\n11 00 10 01 01 10 11 00\n00 11 01 10 11 00 10 01"}</pre>;
        break;
      case "hack":
        result = "[SIMULATION] Starting portfolio diagnostics...\n[OK] Creativity loaded\n[OK] Curiosity enabled\n[OK] Projects ready to explore\nAccess granted. Welcome to Worachat CLI.";
        break;
      default: {
        const chosen = command.slice(6);
        if (command.startsWith("theme ") && Object.hasOwn(themes, chosen)) {
          setTheme(chosen as keyof typeof themes);
          result = `Theme changed to ${chosen}.`;
        } else {
          result = `Unknown command: ${command}\nType help to see available commands.`;
        }
      }
    }
    setEntries((previous) => [...previous.slice(-49), { id: nextId.current++, command, output: result }]);
    input.current?.focus();
  }

  return (
    <>
      <button ref={launcher} style={process.env.NODE_ENV === "development" ? { bottom: 80 } : undefined} className="terminal-launcher" aria-label="Open portfolio terminal" aria-haspopup="dialog" onClick={() => { dialog.current?.showModal(); input.current?.focus(); }}><Terminal size={22} /></button>
      <dialog ref={dialog} className="portfolio-terminal" aria-labelledby="terminal-title" data-lenis-prevent style={{ borderColor: `${themes[theme]}55`, color: themes[theme] }} onClose={() => launcher.current?.focus()} onClick={(event) => { if (event.target === event.currentTarget) { const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close(); } }}>
        <div className="terminal-window">
          <header className="terminal-header">
            <div className="terminal-dots" aria-hidden="true"><i /><i /><i /></div>
            <Terminal size={15} aria-hidden="true" /><h2 id="terminal-title">Sandbox Terminal</h2>
            <span className="terminal-theme">theme: {theme}</span>
            <button onClick={close} aria-label="Close terminal"><X size={16} /></button>
          </header>
          <div className="terminal-quick"><span>TAP:</span>{quickCommands.map((command) => <button key={command} onClick={() => execute(command)}>{command}</button>)}</div>
          <div className="terminal-output" ref={output} data-lenis-prevent>
            {showBanner && <div className="terminal-banner"><pre aria-label="WP CLI">{`██╗    ██╗██████╗      CLI
██║    ██║██╔══██╗
██║ █╗ ██║██████╔╝
██║███╗██║██╔═══╝
╚███╔███╔╝██║
 ╚══╝╚══╝ ╚═╝`}</pre><p>WORACHAT CLI <span>• ONLINE</span></p></div>}
            <div role="log" aria-live="polite" aria-relevant="additions">{entries.map((entry) => <div key={entry.id} className="terminal-entry"><p>guest@worachat.dev:~$ <span>{entry.command}</span></p><div className="terminal-result">{entry.output}</div></div>)}</div>
          </div>
          <form className="terminal-input" onSubmit={(event) => { event.preventDefault(); execute(value); }}>
            <label htmlFor="terminal-command">guest@worachat.dev:~$</label>
            <input ref={input} id="terminal-command" value={value} maxLength={200} onChange={(event) => { setValue(event.target.value); setHistoryIndex(-1); }} placeholder="Type commands..." autoComplete="off" autoCapitalize="off" spellCheck={false} onKeyDown={(event) => {
              if (event.key === "Tab" && value.trim()) {
                const matches = commands.filter((command) => command.startsWith(value.trim().toLowerCase()));
                if (matches.length === 1) { event.preventDefault(); setValue(matches[0]); }
              }
              if (event.key === "ArrowUp" || event.key === "ArrowDown") {
                event.preventDefault();
                const index = event.key === "ArrowUp" ? (historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1)) : (historyIndex < 0 || historyIndex >= history.length - 1 ? -1 : historyIndex + 1);
                setHistoryIndex(index);
                setValue(history[index] ?? "");
              }
            }} />
            <button type="submit" aria-label="Run command">↵</button>
          </form>
        </div>
      </dialog>
    </>
  );
}
