export const links = {
  github: "https://github.com/Arun-Tomar13",
  linkedin: "https://www.linkedin.com/in/aruntomar-/",
  email: "", // TODO: Add Arun's email address, then use `mailto:email@example.com`.
  cv: "/CV.pdf",
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: links.linkedin,
  },
  {
    label: "GitHub",
    href: links.github,
  },
  {
    label: "Email",
    href: links.email ? `mailto:${links.email}` : "#contact",
  },
];
