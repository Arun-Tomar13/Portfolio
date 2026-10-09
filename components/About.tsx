"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { fadeUp, stagger } from "@/components/motion";

const facts = [
  {
    label: "Education",
    value: "B.E. Computer Engineering, GTU",
  },
  {
    label: "Current role",
    value: "Junior Software Engineer at Zealous System",
  },
  {
    label: "Location",
    value: "Ahmedabad, India",
  },
  {
    label: "Focus",
    value: "Data Structures, Algorithms, OOP, AI/ML",
  },
];

export default function About() {
  return (
    <Section id="about" eyebrow="// About" title="Clear thinking, clean builds.">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]"
      >
        <motion.p
          variants={fadeUp}
          className="max-w-[560px] text-lg leading-[1.7] text-muted"
        >
          I work across the stack with a foundation in computer engineering,
          practical product thinking, and a steady focus on making software feel
          simple for the people using it.
        </motion.p>

        <motion.div variants={fadeUp} className="grid gap-3 sm:grid-cols-2">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-card border border-line bg-panel p-5"
            >
              <p className="mb-2 font-mono text-xs text-dim">{fact.label}</p>
              <p className="text-sm leading-6 text-text">{fact.value}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
