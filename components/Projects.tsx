"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { projects } from "@/data/projects";
import { fadeUp, stagger } from "@/components/motion";

function hasLink(value: string | null) {
  return Boolean(value && !value.startsWith("["));
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="// Projects"
      title="Two focused builds."
      className="pt-10"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
        className="grid gap-5 md:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            className="group rounded-card border border-line bg-panel p-[22px] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(227,179,65,.4)]"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="font-mono text-xs text-accent">
                {project.tags.join(" · ")}
              </p>
              <span className="text-accent" aria-hidden="true">
                ↗
              </span>
            </div>

            <h3 className="mb-3 text-[18px] font-semibold text-text">
              {project.title}
            </h3>
            <p className="mb-7 text-sm leading-6 text-muted">
              {project.description}
            </p>

            <div className="flex gap-5 text-sm font-medium text-muted">
              {hasLink(project.live) && (
                <a
                  href={project.live ?? ""}
                  className="transition-colors hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo
                </a>
              )}
              {hasLink(project.code) && (
                <a
                  href={project.code}
                  className="transition-colors hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
