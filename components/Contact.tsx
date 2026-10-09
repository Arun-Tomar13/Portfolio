"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { links, socialLinks } from "@/data/links";
import { fadeUp, stagger } from "@/components/motion";
import SocialIcon from "@/components/SocialIcon";

export default function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const body = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const content = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${body}`,
    );
    const to = links.email || "";

    setMessage("Opening your email app...");
    window.location.href = `mailto:${to}?subject=${subject}&body=${content}`;
  }

  return (
    <Section id="contact" eyebrow="// Contact" title="Let’s build something.">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        className="grid gap-10 lg:grid-cols-[380px_minmax(0,1fr)]"
      >
        <motion.div variants={fadeUp}>
          <p className="mb-7 max-w-[520px] text-[17px] leading-[1.75] text-muted">
            Have an idea, role, or collaboration in mind? Send a note and I’ll
            open it in your email app.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center gap-1.5 rounded-social border border-line bg-panel px-2 py-3 text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-text"
              >
                <SocialIcon label={link.label} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="rounded-card border border-line bg-panel p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-muted">
              Name
              <input
                required
                name="name"
                className="rounded-xl border border-line bg-elevated px-4 py-3 text-text outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="grid gap-2 text-sm text-muted">
              Email
              <input
                required
                name="email"
                type="email"
                className="rounded-xl border border-line bg-elevated px-4 py-3 text-text outline-none transition-colors focus:border-accent"
              />
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm text-muted">
            Message
            <textarea
              required
              name="message"
              rows={5}
              className="resize-none rounded-xl border border-line bg-elevated px-4 py-3 text-text outline-none transition-colors focus:border-accent"
            />
          </label>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="rounded-btn bg-accent px-7 py-3 text-sm font-semibold text-on-accent transition-all duration-200 hover:-translate-y-px hover:shadow-[0_10px_28px_-10px_rgba(227,179,65,0.5)]"
            >
              Send message
            </button>
            {message && (
              <p className="font-mono text-xs text-muted" role="status">
                {message}
              </p>
            )}
          </div>
        </motion.form>
      </motion.div>
    </Section>
  );
}
