type SocialIconProps = {
  label: "LinkedIn" | "GitHub" | "Medium" | "Email";
};

export default function SocialIcon({ label }: SocialIconProps) {
  if (label === "LinkedIn") {
    return (
      <svg
        aria-hidden="true"
        className="size-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.85-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.27 2.369 4.27 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
      </svg>
    );
  }

  if (label === "GitHub") {
    return (
      <svg
        aria-hidden="true"
        className="size-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.555.103.758-.241.758-.535v-2.08c-3.086.671-3.737-1.31-3.737-1.31-.505-1.283-1.233-1.625-1.233-1.625-1.008-.689.076-.675.076-.675 1.115.078 1.701 1.145 1.701 1.145.991 1.699 2.6 1.208 3.234.924.1-.718.388-1.209.705-1.487-2.464-.28-5.054-1.232-5.054-5.484 0-1.211.433-2.2 1.144-2.976-.115-.28-.496-1.407.108-2.934 0 0 .933-.299 3.055 1.137a10.63 10.63 0 0 1 5.56 0c2.12-1.436 3.051-1.137 3.051-1.137.606 1.527.225 2.654.11 2.934.713.776 1.142 1.765 1.142 2.976 0 4.263-2.594 5.201-5.066 5.475.398.344.753 1.019.753 2.054v3.063c0 .297.2.644.763.534A11.101 11.101 0 0 0 12 .9Z" />
      </svg>
    );
  }

  if (label === "Medium") {
    return (
      <svg
        aria-hidden="true"
        className="size-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <ellipse cx="6.5" cy="12" rx="5.5" ry="7.5" />
        <ellipse cx="17" cy="12" rx="2.7" ry="7.5" />
        <ellipse cx="22.5" cy="12" rx="1.2" ry="7.5" />
      </svg>
    );
  }

  return (
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
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
