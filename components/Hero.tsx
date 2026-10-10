
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { socialLinks } from "@/data/links";
import { fadeUp, stagger } from "@/components/motion";
import SocialIcon from "@/components/SocialIcon";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(640px 460px at 78% 32%, rgba(227,179,65,.13), transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-12 md:grid-cols-[minmax(0,1fr)_280px] md:gap-10 md:py-12 lg:min-h-[calc(100svh-73px)] lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16 lg:px-[72px] lg:py-20">
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(227,179,65,0.22)] bg-[rgba(227,179,65,0.06)] px-3 py-2 font-mono text-xs text-accent sm:text-sm"
          >
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(227,179,65,0.7)]"
            />
            Software Engineer · Ahmedabad
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mb-7 text-[clamp(48px,7.5vw,82px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-text"
          >
            Build <span className="text-accent">better</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mb-9 max-w-[560px] text-base leading-7 text-muted sm:text-lg sm:leading-8"
          >
            I build practical, polished digital experiences from idea to launch —
            combining frontend craft, problem-solving, and solid engineering to
            make products feel effortless.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mb-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#experience"
              className="rounded-btn bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent shadow-[0_12px_35px_-18px_rgba(227,179,65,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-10px_rgba(227,179,65,0.5)]"
            >
              View experience <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#contact"
              className="rounded-btn border border-line-strong bg-panel/45 px-6 py-3.5 text-sm font-medium text-text transition-all duration-200 hover:border-accent hover:bg-panel"
            >
              Get in touch
            </a>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="border-l border-accent/50 pl-3 font-mono text-xs text-dim sm:text-sm"
          >
            “Code never lies.”
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.7,
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
          className="mx-auto w-full max-w-[280px] md:max-w-[280px] lg:max-w-[340px]"
        >
          <div className="rounded-photo bg-[linear-gradient(145deg,rgba(227,179,65,.75),rgba(227,179,65,.06)_58%,rgba(106,126,157,.28))] p-px shadow-[0_28px_90px_-48px_rgba(227,179,65,0.42)]">
            <div className="relative aspect-340/370 overflow-hidden rounded-[27px] bg-elevated">
              <Image
                src="/arun.png"
                alt="Portrait of Arun Tomar"
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="my-4 text-center text-sm text-muted">
            <p>
              <span className="font-semibold text-text">Arun Tomar</span> ·
              Software Engineer
            </p>
          </div>

          <div className="mt-3 flex justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center gap-1.5 rounded-social border border-line bg-panel/80 p-3 text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <SocialIcon label={link.label} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
