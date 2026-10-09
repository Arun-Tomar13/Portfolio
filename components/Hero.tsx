
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { socialLinks } from "@/data/links";
import { fadeUp, stagger } from "@/components/motion";
import SocialIcon from "@/components/SocialIcon";

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
            className="mb-7 text-[clamp(48px,7.5vw,88px)] font-extrabold leading-none tracking-[-0.04em] text-text"
          >
            Build <span className="text-accent">better</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mb-9 max-w-[560px] text-[17px] leading-[1.75] text-muted"
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
              className="rounded-btn bg-accent px-7 py-3.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:-translate-y-px hover:shadow-[0_10px_28px_-10px_rgba(227,179,65,0.5)]"
            >
              View experience <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#contact"
              className="rounded-btn border border-line-strong px-7 py-3.5 text-sm font-medium text-text transition-all duration-200 hover:border-accent"
            >
              Get in touch
            </a>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="font-mono text-sm text-muted"
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
          className="mx-auto w-full max-w-[340px]"
        >
          <div className="rounded-photo bg-[linear-gradient(160deg,rgba(227,179,65,.55),rgba(227,179,65,.06)_60%)] p-px">
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
                className="flex items-center justify-center gap-1.5 rounded-social border border-line bg-panel p-3 text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-text"
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
