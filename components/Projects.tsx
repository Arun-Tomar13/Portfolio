
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import { projects } from "@/data/projects";
import { fadeUp, stagger } from "@/components/motion";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="// Selected work"
      title="Things I've built."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
        className="grid gap-5 md:grid-cols-2"
      >
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            variants={fadeUp}
            className="group relative isolate flex min-h-[340px] flex-col overflow-hidden rounded-card border border-line bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(227,179,65,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:min-h-[360px]"
          >
            {/* Background project image */}
            <Image
  src={project.image}
  alt=""
  fill
  sizes="(max-width: 767px) 100vw, 50vw"
  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
/>

            {/* Dark overlays keep the text readable */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-0 bg-linear-to-b from-[#0A0D12]/65 via-[#0A0D12]/55 to-[#0A0D12]/97"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-0 bg-gradient-to-r from-[#0A0D12]/35 to-transparent"
            />

            {/* Card content */}
            <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-auto flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/15 bg-[#0A0D12]/50 px-3 py-1.5 font-mono text-xs text-accent backdrop-blur-md">
                  PROJECT / 0{index + 1}
                </span>

                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-[#0A0D12]/50 text-lg text-text backdrop-blur-md transition-all duration-200 group-hover:border-accent group-hover:bg-accent-button group-hover:text-on-accent"
                >
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 3h7v7" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </span>
              </div>

              <div className="mt-20">
                <p className="mb-2 font-mono text-[10px] tracking-[0.16em] text-accent sm:text-[11px]">
                  {project.category}
                </p>

                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-accent sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mb-5 max-w-lg text-sm leading-6 text-white/75">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-chip border border-white/15 bg-[#0A0D12]/55 px-2.5 py-1 font-mono text-[10px] text-white/80 backdrop-blur-md sm:text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
