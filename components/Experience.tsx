"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { experience } from "@/data/experience";
import { fadeUp, stagger } from "@/components/motion";

function isPublic(value: string) {
  return value && !value.startsWith("[");
}

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="// Experience"
      title="A growing engineering path."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="relative"
      >
        <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-line" />

        <div className="space-y-8">
          {experience.map((item) => {
            const points = item.points.filter(isPublic);

            return (
              <motion.article
                key={`${item.role}-${item.org}`}
                variants={fadeUp}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-2 size-[15px] rounded-full border-4 border-bg bg-accent" />
                {isPublic(item.period) && (
                  <p className="mb-2 font-mono text-xs text-dim">
                    {item.period}
                  </p>
                )}
                <h3 className="text-[18px] font-semibold text-text">{item.role}</h3>
                <p className="mt-1 text-sm text-muted">{item.org}</p>
                {points.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                    {points.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                )}
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}
