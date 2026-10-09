"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { fadeUp, stagger } from "@/components/motion";

const skills = [
  { name: "React", mark: "Rx" },
  { name: "Next.js", mark: "Nx" },
  { name: "MySQL", mark: "My" },
  { name: "PostgreSQL", mark: "Pg" },
  { name: "MongoDB", mark: "Mo" },
  { name: "Node.js", mark: "Nd" },
  { name: "Express", mark: "Ex" },
  { name: "Fastify", mark: "Fa" },
  { name: "Drizzle", mark: "Dz" },
  { name: "Knex", mark: "Kn" },
  { name: "Redis", mark: "Re" },
  { name: "Docker", mark: "Dc" },
  { name: "Git/GitHub", mark: "Gh" },
  { name: "REST API", mark: "Api" },
  { name: "HTML", mark: "H5" },
  { name: "CSS", mark: "C3" },
  { name: "JavaScript", mark: "JS" },
  { name: "TypeScript", mark: "TS" },
  { name: "Python", mark: "Py" },
  { name: "C++", mark: "C++" },
];

export default function Skills() {
  return (
    <Section id="skills" eyebrow="// Skills" title="Tools I use to ship.">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
        className="rounded-card border border-line bg-panel p-5 md:p-7"
      >
        <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-[28px] font-extrabold leading-tight tracking-[-0.03em] text-text">
              Tools I use to ship
            </h3>
            <p className="mt-3 max-w-[620px] text-sm leading-6 text-muted">
              A practical stack for building responsive interfaces, APIs,
              databases, and deployable services with clean version control.
            </p>
          </div>
          <span className="w-fit rounded-chip border border-line px-3 py-2 font-mono text-xs text-accent">
            {skills.length} skills
          </span>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              className="group flex min-h-[116px] flex-col items-center justify-center rounded-card border border-line bg-elevated px-3 py-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(227,179,65,.4)]"
            >
              <div
                aria-hidden="true"
                className="mb-3 flex size-11 items-center justify-center rounded-social border border-line bg-panel font-mono text-[13px] font-medium text-accent transition-colors duration-200 group-hover:border-accent"
              >
                {skill.mark}
              </div>
              <p
                className="w-full text-sm font-medium leading-5 text-text"
                title={skill.name}
              >
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
