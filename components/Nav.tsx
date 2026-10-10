
"use client";

import { useEffect, useState } from "react";
import { links as siteLinks } from "@/data/links";
import { FaDownload } from "react-icons/fa6";


const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const observedLinks = [{ label: "Home", href: "#home" }, ...links];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 4);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


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
    
<header
  className={`sticky top-0 z-50 border-b shadow-[0_10px_40px_-30px_rgba(0,0,0,0.8)] transition-all duration-300 ${
    scrolled
      ? "border-line/70 bg-bg/80 backdrop-blur-xl"
      : "border-transparent bg-bg/70 backdrop-blur-sm shadow-none"
  }`}
>

      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-[72px]"
      >
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-[18px] font-extrabold tracking-tight text-text transition-colors hover:text-accent"
        >
          arun<span className="text-accent">.</span>tomar
        </a>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={
                activeSection === link.href.slice(1) ? "location" : undefined
              }
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
            className="flex  justify-center items-center gap-1 rounded-btn bg-accent-button px-4 py-2.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:-translate-y-px hover:shadow-[0_10px_28px_-10px_rgba(227,179,65,0.5)] xl:px-5"
          >
            Download CV <FaDownload color="black" />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-10 items-center justify-center rounded-xl border border-line bg-panel/70 text-text transition-colors hover:border-accent lg:hidden"
        >
          <span className="text-xl" aria-hidden="true">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-bg/95 px-6 py-5 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-[1280px] flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={
                  activeSection === link.href.slice(1) ? "location" : undefined
                }
                onClick={() => setMenuOpen(false)}
                className={`text-[15px] transition-colors hover:text-accent ${
                  activeSection === link.href.slice(1)
                    ? "text-accent"
                    : "text-muted"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href={siteLinks.cv}
              download
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-fit rounded-btn bg-accent-button px-5 py-3 text-sm font-semibold text-on-accent"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
