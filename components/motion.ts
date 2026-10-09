export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] as const },
  },
};

export const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};
