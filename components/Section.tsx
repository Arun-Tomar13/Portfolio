"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/motion";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-[1280px] scroll-mt-24 px-6 pb-20 pt-8 md:pb-[120px] md:pt-12 lg:px-[72px] ${className}`}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mb-10"
      >
        {eyebrow && (
          <p className="mb-3 font-mono text-sm text-accent">{eyebrow}</p>
        )}
        <h2 className="text-[clamp(32px,4.6vw,40px)] font-extrabold leading-tight tracking-[-0.03em] text-text">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  );
}
