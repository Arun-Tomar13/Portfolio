
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/Section";
import { experience } from "@/data/experience";
import { fadeUp, stagger } from "@/components/motion";

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="experience"
      eyebrow="// Experience"
      title="From learning fundamentals to building in production."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        transition={shouldReduceMotion ? { staggerChildren: 0 } : undefined}
        className="relative"
      >
        {/* Timeline rail */}
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-[7px] top-8 w-px bg-gradient-to-b from-accent/70 via-line to-transparent sm:left-[11px]"
        />

        <div className="space-y-6 sm:space-y-8">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.org}`}
              variants={fadeUp}
              className="relative pl-8 sm:pl-12"
            >
              {/* Timeline marker */}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-7 size-[15px] rounded-full border-[4px] border-bg sm:left-1 sm:top-8 sm:size-[17px] ${
                  item.current ? "bg-accent" : "bg-dim"
                }`}
              />

              <div className="group rounded-card border border-line bg-panel p-4 transition-all duration-300 hover:border-[rgba(227,179,65,0.35)] sm:p-6">
                {/* Period and status */}
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-xs tracking-wide text-accent">
                    {item.period}
                  </span>

                  {item.current ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(227,179,65,0.25)] bg-[rgba(227,179,65,0.07)] px-3 py-1.5 font-mono text-[10px] tracking-wider text-accent">
                      <span className="size-1.5 rounded-full bg-accent" />
                      CURRENT ROLE
                    </span>
                  ) : (
                    <span className="rounded-full border border-line bg-elevated px-3 py-1.5 font-mono text-[10px] tracking-wider text-dim">
                      EXPERIENCE / 0{index + 1}
                    </span>
                  )}
                </div>

                {/* Role heading */}
                <h3 className="text-xl font-semibold tracking-tight text-text transition-colors group-hover:text-accent sm:text-2xl">
                  {item.role}
                </h3>

                <p className="mt-2 text-sm font-medium text-muted">
                  {item.org}
                </p>

                {/* Overview */}
                <p className="mt-4 max-w-3xl text-sm leading-6 text-muted sm:text-[15px]">
                  {item.description}
                </p>

                {/* Responsibilities and contributions */}
                <div className="mt-5">
                  <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-dim">
                    KEY CONTRIBUTIONS
                  </p>

                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent/80"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
