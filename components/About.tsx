
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/Section";
import { fadeUp, stagger } from "@/components/motion";

const principles = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "Break complex problems into smaller pieces and understand what actually needs solving before writing code.",
  },
  {
    number: "02",
    title: "Explore and experiment",
    description:
      "Test different approaches, question assumptions, and learn from mistakes instead of settling for the first solution.",
  },
  {
    number: "03",
    title: "Stay until it clicks",
    description:
      "I enjoy the challenge of debugging, investigating unexpected behavior, and staying with a problem until the solution makes sense.",
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="about"
      eyebrow="// About me"
      title="A little about how I think."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        transition={
          shouldReduceMotion ? { staggerChildren: 0 } : undefined
        }
        className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
      >
        {/* Left: How I work */}
        <motion.aside variants={fadeUp}>
          <p className="mb-3 font-mono text-xs text-accent">
            THE PROCESS
          </p>

          <h3 className="mb-8 text-[22px] font-semibold leading-snug tracking-tight text-text sm:text-[27px]">
            How I approach problems.
          </h3>

          <div className="space-y-6">
            {principles.map((principle) => (
              <div key={principle.number} className="flex gap-4">
                <div className="flex shrink-0 flex-col items-center">
                  <span className="flex size-9 items-center justify-center rounded-full border border-line bg-panel font-mono text-xs text-accent">
                    {principle.number}
                  </span>

                  {principle.number !== "03" && (
                    <span className="mt-3 w-px flex-1 bg-line" />
                  )}
                </div>

                <div className="pb-2">
                  <h4 className="mb-2 text-base font-semibold text-text">
                    {principle.title}
                  </h4>
                  <p className="text-sm leading-7 text-muted">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <blockquote className="mt-8 border-l-2 border-accent py-1 pl-5">
            <p className="text-[15px] italic leading-7 text-text">
              &ldquo;It&apos;s not that I&apos;m so smart, it&apos;s just
              that I stay with problems longer.&rdquo;
            </p>
            <footer className="mt-2 font-mono text-xs text-dim">
              — Albert Einstein
            </footer>
          </blockquote>
        </motion.aside>

        {/* Right: Engineering philosophy */}
        <motion.div variants={fadeUp} className="lg:pt-1">
          <p className="mb-4 font-mono text-xs text-accent">
            THE WAY I SEE SOFTWARE
          </p>

          <h3 className="mb-6 max-w-2xl text-[27px] font-bold leading-tight tracking-[-0.035em] text-text sm:text-[32px] lg:text-[38px]">
            I believe good software starts with asking better questions.
          </h3>

          
<div className="max-w-2xl space-y-4 text-[15px] leading-7 text-muted sm:text-[17px]">
  <p>
    To me, good software begins with understanding the problem, not just
    writing code. I enjoy turning complex ideas into simple, reliable
    solutions that make sense for the people using them.
  </p>

  <p>
    With a B.E. in Computer Engineering from GTU, I built my foundation
    in computing. At Zealous System, I continue to grow as a Junior
    Software Engineer, connecting technical concepts with practical
    requirements and turning ideas into working software.
  </p>

  <p>
    What keeps me curious is figuring out the unknown. I enjoy debugging,
    exploring different approaches, and digging deeper when things don&apos;t
    work as expected. For me, the best part is when a difficult problem
    finally clicks.
  </p>
</div>


        </motion.div>
      </motion.div>
    </Section>
  );
}
