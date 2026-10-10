
"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/Section";
import { getEmailComposeUrl, links, socialLinks } from "@/data/links";
import { fadeUp, stagger } from "@/components/motion";
import SocialIcon from "@/components/SocialIcon";
import { RiSendInsFill } from "react-icons/ri";


export default function Contact() {
  const [message, setMessage] = useState("");
  const [body, setBody] = useState("");
  const shouldReduceMotion = useReducedMotion();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!links.email) {
      setMessage("Email isn't configured yet. Please use a social link.");
      return;
    }

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const content = String(form.get("message") ?? "").trim();

    const subject = `Portfolio enquiry from ${name}`;
    const emailBody = `Hi Arun,\n\n${content}\n\nFrom: ${name}\nEmail: ${email}`;

    setMessage("Opening Gmail…");
    window.location.href = getEmailComposeUrl(subject, emailBody);
  }

  return (
    <Section
      id="contact"
      eyebrow="// Get in touch"
      title="Have something in mind?"
      className="!pb-12 md:!pb-16"
    >
      <motion.div
        variants={stagger}
        initial={false}
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        transition={shouldReduceMotion ? { staggerChildren: 0 } : undefined}
        className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8"
      >
        {/* Contact introduction */}
        <motion.div
          variants={fadeUp}
          initial={false}
          className="flex flex-col gap-6"
        >
          <div className="relative overflow-hidden rounded-card border border-line bg-panel p-5 sm:p-6">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-16 size-48 rounded-full bg-accent/10 blur-3xl"
            />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(227,179,65,0.25)] bg-[rgba(227,179,65,0.07)] px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] text-accent">
                <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(227,179,65,0.7)]" />
                OPEN TO OPPORTUNITIES
              </div>
              <p className="max-w-md text-sm leading-7 text-muted sm:text-base">
                Have a project, opportunity, or idea to discuss? Reach out
                directly or leave me a message.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-dim">
              DIRECT CONTACT
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a
                href={getEmailComposeUrl()}
                className="group flex min-w-0 items-center gap-3 rounded-card border border-line bg-panel p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-line bg-elevated text-accent transition-colors group-hover:border-accent/40">
                  <SocialIcon label="Email" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] tracking-wider text-dim">
                    EMAIL
                  </span>
                  <span className="mt-1 block break-all text-sm font-medium text-text">
                    {links.email}
                  </span>
                </span>
              </a>

              <a
                href={`tel:${links.phone}`}
                className="group flex min-w-0 items-center gap-3 rounded-card border border-line bg-panel p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-line bg-elevated text-accent transition-colors group-hover:border-accent/40">
                  <svg
                    aria-hidden="true"
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] tracking-wider text-dim">
                    PHONE
                  </span>
                  <span className="mt-1 block text-sm font-medium text-text">
                    {links.phone}
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div>
            <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-dim">
              AROUND THE WEB
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-2 rounded-social border border-line bg-panel px-3 py-2.5 text-sm text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <SocialIcon label={link.label} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.form
          variants={fadeUp}
          initial={false}
          onSubmit={handleSubmit}
          className="relative order-first overflow-hidden rounded-card border border-line bg-panel p-5 shadow-[0_24px_70px_-44px_rgba(227,179,65,0.3)] sm:p-7 lg:order-last"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
          />
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-[10px] tracking-[0.16em] text-accent">
                LET&apos;S TALK
              </p>
              <h3 className="text-xl font-semibold tracking-tight text-text sm:text-2xl">
                Send a message
              </h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-muted">
                Share a few details and Gmail will open a ready-to-send draft.
              </p>
            </div>

            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-[rgba(227,179,65,0.2)] bg-[rgba(227,179,65,0.07)] text-accent"
            >
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-muted">
              Your name
              <input
                required
                name="name"
                autoComplete="name"
                maxLength={100}
                placeholder="Jane Smith"
                className="min-w-0 rounded-xl border border-line bg-elevated px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-dim hover:border-line-strong focus:border-accent focus:ring-1 focus:ring-accent/30"
              />
            </label>

            <label className="grid gap-2 text-sm text-muted">
              Email address
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                placeholder="jane@company.com"
                className="min-w-0 rounded-xl border border-line bg-elevated px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-dim hover:border-line-strong focus:border-accent focus:ring-1 focus:ring-accent/30"
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm text-muted">
            What&apos;s on your mind?
            <textarea
              required
              name="message"
              rows={5}
              maxLength={2000}
              value={body}
              onChange={(event) => {
                setBody(event.target.value);
                if (message) setMessage("");
              }}
              placeholder="Tell me a little about your idea or opportunity..."
              className="min-w-0 resize-y rounded-xl border border-line bg-elevated px-4 py-3 text-sm leading-6 text-text outline-none transition-colors placeholder:text-dim hover:border-line-strong focus:border-accent focus:ring-1 focus:ring-accent/30"
            />

            <span className="text-right font-mono text-[10px] text-dim">
              {body.length}/2000
            </span>
          </label>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-1 rounded-btn bg-accent-button px-6 py-3 text-sm font-semibold text-on-accent transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-10px_rgba(227,179,65,0.5)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Send message <RiSendInsFill />
            </button>

            <p
              className="text-xs leading-5 text-muted"
              role="status"
              aria-live="polite"
            >
              {message}
            </p>
          </div>

          <p className="mt-5 border-t border-line pt-4 text-xs leading-5 text-dim">
            This opens a Gmail draft. Review and send it there; the website
            doesn&apos;t send or store your message.
          </p>
        </motion.form>
      </motion.div>
    </Section>
  );
}
