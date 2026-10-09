
"use client";

import { useEffect, useState } from "react";
import { links as siteLinks } from "@/data/links";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const observedLinks = [{ label: "Home", href: "#home" }, ...links];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = observedLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.35, 0.65] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 lg:px-[72px]"
      >
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-[18px] font-extrabold tracking-tight text-text"
        >
          arun<span className="text-accent">.</span>tomar
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm transition-colors duration-200 hover:text-text ${
                activeSection === link.href.slice(1) ? "text-text" : "text-muted"
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-accent" />
              )}
            </a>
          ))}

          <a
            href={siteLinks.cv}
            download
            className="rounded-btn bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:-translate-y-px hover:shadow-[0_10px_28px_-10px_rgba(227,179,65,0.5)]"
          >
            Download CV <span aria-hidden="true">↗</span>
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-10 items-center justify-center rounded-xl border border-line text-text transition-colors hover:border-accent md:hidden"
        >
          <span className="text-xl" aria-hidden="true">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-bg px-6 py-5 md:hidden"
        >
          <div className="mx-auto flex max-w-[1280px] flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[15px] text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}

            <a
              href={siteLinks.cv}
              download
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-fit rounded-btn bg-accent px-5 py-3 text-sm font-semibold text-on-accent"
            >
              Download CV ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
