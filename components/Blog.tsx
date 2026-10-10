"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/Section";
import { fadeUp, stagger } from "@/components/motion";
import { blogArticles } from "@/data/blog";

export default function Blog() {
  const shouldReduceMotion = useReducedMotion();
  const articleVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0, transition: { duration: 0 } },
      }
    : fadeUp;

  return (
    <Section
      id="blog"
      eyebrow="// Notes & articles"
      title="Things I've learned and shared."
    >
      <motion.div
        variants={stagger}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
        transition={shouldReduceMotion ? { staggerChildren: 0 } : undefined}
        className="space-y-5"
      >
        {blogArticles.map((article) => (
          <motion.article
            key={article.url}
            variants={articleVariants}
            className="rounded-card"
          >
            <motion.a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read article: ${article.title}`}
              className="group block rounded-card border border-line bg-panel p-5 transition-colors duration-200 hover:border-[rgba(227,179,65,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-[rgba(227,179,65,0.25)] bg-[rgba(227,179,65,0.07)] px-3 py-1 font-mono text-[10px] tracking-[0.12em] text-accent">
                  FEATURED ARTICLE
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] text-dim">
                  ENGINEERING NOTES
                </span>
              </div>

              <h3 className="max-w-4xl text-lg font-semibold leading-snug tracking-tight text-text transition-colors group-hover:text-accent sm:text-xl">
                {article.title}
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
                {article.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Article topics">
                {article.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-chip border border-line bg-elevated px-2.5 py-1 font-mono text-[10px] text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.a>
          </motion.article>
        ))}

          <p className="text-sm text-muted">
            More notes and ideas on Medium.
          </p>
      </motion.div>
    </Section>
  );
}
