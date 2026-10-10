export const links = {
  github: "https://github.com/Arun-Tomar13",
  linkedin: "https://www.linkedin.com/in/aruntomar-/",
  medium: "https://medium.com/@aruntomar1330",
  email: `aruntomar1330@gmail.com`,
  phone: "9484651568",
  cv: "/CV.pdf",
};

export function getEmailComposeUrl(subject = "", body = "") {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: links.email,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

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
    label: "Medium",
    href: links.medium,
  },
  {
    label: "Email",
    href: getEmailComposeUrl(),
  },
] as const;
