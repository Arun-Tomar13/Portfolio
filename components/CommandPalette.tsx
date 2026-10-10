"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "@/data/links";

const commands = [
  { label: "Jump to Home", action: "section", target: "home" },
  { label: "Jump to About", action: "section", target: "about" },
  { label: "Jump to Skills", action: "section", target: "skills" },
  { label: "Jump to Projects", action: "section", target: "projects" },
  { label: "Jump to Experience", action: "section", target: "experience" },
  { label: "Jump to Contact", action: "section", target: "contact" },
  { label: "Open GitHub", action: "external", target: links.github },
  { label: "Open LinkedIn", action: "external", target: links.linkedin },
  { label: "Download CV", action: "external", target: links.cv },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCommand = useMemo(() => commands[activeIndex], [activeIndex]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isPaletteShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";

      if (isPaletteShortcut) {
        event.preventDefault();
        setOpen((value) => !value);
        return;
      }

      if (!open) {
        return;
      }

      if (event.key === "Escape") {
        setOpen(false);
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % commands.length);
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((index) => (index - 1 + commands.length) % commands.length);
      }

      if (event.key === "Enter") {
        event.preventDefault();
        runCommand(activeCommand);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCommand, open]);

  function runCommand(command: (typeof commands)[number]) {
    if (command.action === "section") {
      document.getElementById(command.target)?.scrollIntoView({ behavior: "smooth" });
    }

    if (command.action === "external") {
      window.open(command.target, "_blank", "noopener,noreferrer");
    }

    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        aria-label="Open command palette"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 hidden rounded-social border border-line bg-panel px-3 py-2 font-mono text-xs text-muted shadow-[0_18px_45px_-30px_rgba(0,0,0,.8)] transition-colors hover:border-accent hover:text-text md:block"
      >
        ⌘K
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-start justify-center bg-[rgba(4,5,7,.72)] px-4 pt-[18vh] backdrop-blur"
            onMouseDown={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              className="w-full max-w-[520px] rounded-card border border-line bg-panel p-2 shadow-[0_24px_80px_-48px_rgba(0,0,0,.9)]"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="border-b border-line px-4 py-3 font-mono text-xs text-dim">
                Ctrl+K / ⌘K
              </div>
              <div className="py-2">
                {commands.map((command, index) => (
                  <button
                    key={command.label}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => runCommand(command)}
                    className={`flex w-full items-center justify-between rounded-chip px-4 py-3 text-left text-sm transition-colors ${
                      index === activeIndex
                        ? "bg-elevated text-text"
                        : "text-muted hover:bg-elevated hover:text-text"
                    }`}
                  >
                    {command.label}
                    <span className="font-mono text-xs text-accent">Enter</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
