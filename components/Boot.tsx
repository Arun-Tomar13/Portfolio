"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const lines = [
  { prefix: ">", text: "Initializing Arun.Tomar...", color: "text-accent" },
  { prefix: "✓", text: "Loading profile", color: "text-success" },
  { prefix: "✓", text: "Loading projects", color: "text-success" },
  { prefix: "✓", text: "Loading experience", color: "text-success" },
  { prefix: "✓", text: "Loading interface", color: "text-success" },
  { prefix: "✓", text: "System Ready", color: "text-success" },
];

export default function Boot() {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [lineCount, setLineCount] = useState(1);
  const [showSkip, setShowSkip] = useState(false);

  const timings = useMemo(
    () => ({
      lineDelay: shouldReduceMotion ? 80 : 450,
      doneDelay: shouldReduceMotion ? 450 : 3200,
      skipDelay: shouldReduceMotion ? 120 : 1000,
    }),
    [shouldReduceMotion],
  );

  useEffect(() => {
    if (sessionStorage.getItem("booted") === "1") {
      return;
    }

    const bootTimer = window.setTimeout(() => setVisible(true), 0);

    const lineTimer = window.setInterval(() => {
      setLineCount((count) => {
        if (count >= lines.length) {
          window.clearInterval(lineTimer);
          return count;
        }
        return count + 1;
      });
    }, timings.lineDelay);

    const skipTimer = window.setTimeout(() => setShowSkip(true), timings.skipDelay);
    const doneTimer = window.setTimeout(() => {
      sessionStorage.setItem("booted", "1");
      setVisible(false);
    }, timings.doneDelay);

    const skip = () => {
      sessionStorage.setItem("booted", "1");
      setVisible(false);
    };

    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);

    return () => {
      window.clearInterval(lineTimer);
      window.clearTimeout(bootTimer);
      window.clearTimeout(skipTimer);
      window.clearTimeout(doneTimer);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, [timings]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050607] px-6"
        >
          <div className="w-full max-w-[520px] font-mono text-[13px]">
            <div className="space-y-3">
              {lines.slice(0, lineCount).map((line) => (
                <p key={line.text} className="flex gap-3 text-muted">
                  <span className={line.color}>{line.prefix}</span>
                  <span>{line.text}</span>
                </p>
              ))}
            </div>

            <div className="mt-6 h-0.5 overflow-hidden rounded-full bg-line">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 3 }}
              />
            </div>

            {showSkip && (
              <p className="mt-5 text-xs text-dim">press any key to skip</p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
