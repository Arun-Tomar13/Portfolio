
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { socialLinks } from "@/data/links";
import { fadeUp, stagger } from "@/components/motion";

const skills = ["HTML", "CSS", "JavaScript", "Python", "Git"];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate scroll-mt-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(640px 460px at 78% 32%, rgba(227,179,65,.13), transparent 70%)",
        }}
      />

      <div className="mx-auto grid min-h-[calc(100svh-81px)] max-w-[1280px] items-center gap-14 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16 lg:px-[72px] lg:py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          transition={
            shouldReduceMotion
              ? { duration: 0.01 }
              : { staggerChildren: 0.12 }
          }
          className="flex flex-col items-start"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 font-mono text-sm text-accent"
          >
            {"// Software Engineer · Ahmedabad"}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mb-7 text-[clamp(52px,8vw,96px)] font-extrabold leading-none tracking-[-0.04em] text-text"
          >
            Arun <span className="text-accent">Tomar</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mb-9 max-w-[560px] text-lg leading-[1.7] text-muted"
          >
            I build practical, polished digital experiences from idea to launch —
            combining frontend craft, problem-solving, and solid engineering to
            make products feel effortless.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mb-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="rounded-btn bg-accent px-7 py-3.5 text-[15px] font-semibold text-on-accent transition-all duration-200 hover:-translate-y-px hover:shadow-[0_10px_28px_-10px_rgba(227,179,65,0.5)]"
            >
              View projects <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#contact"
              className="rounded-btn border border-line-strong px-7 py-3.5 text-[15px] font-medium text-text transition-all duration-200 hover:border-accent"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            aria-label="Core skills"
            className="flex flex-wrap gap-2.5"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-chip border border-line px-[13px] py-[7px] font-mono text-[12px] text-muted"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.7,
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
          className="mx-auto w-full max-w-[340px]"
        >
          <div className="rounded-photo bg-[linear-gradient(160deg,rgba(227,179,65,.55),rgba(227,179,65,.06)_60%)] p-px">
            <div className="flex aspect-[340/370] flex-col items-center justify-center overflow-hidden rounded-[27px] bg-elevated">
              <div className="mb-4 flex size-16 items-center justify-center rounded-full border border-line text-2xl text-accent">
                AT
              </div>
              <p className="font-mono text-xs tracking-wider text-dim">
                [ YOUR PHOTO ]
              </p>
              <p className="mt-2 text-sm text-muted">
                Arun Tomar
              </p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center gap-1.5 rounded-social border border-line bg-panel px-2 py-3 text-sm font-medium text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-text"
              >
                {link.label}
                <span className="text-accent" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
