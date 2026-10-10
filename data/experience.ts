
export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  description: string;
  points: string[];
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    role: "Junior Software Developer",
    org: "Zealous System & Solutions",
    period: "Mar – Present",
    current: true,
    description:
      "Working on a live full-stack product combining blockchain technology with secure, agent-based investing.",
    points: [
      "Contributing to scalable application features using React, Node.js, and backend technologies.",
      "Working on investment policies and guardrails that let owners control how their agents operate.",
      "Contributing to SDK capabilities that help entrepreneurs create their own investment solutions.",
      "Integrated Slack and in-app webhook notifications for application updates.",
    ],

  },
  {
    role: "Web Developer Trainee",
    org: "Zealous System & Solutions",
    period: "Jan – Mar",
    description:
      "Applied web development fundamentals by building features for Foody, a food-ordering website.",
    points: [
      "Implemented and debugged features using React, Redux Toolkit, and Material UI.",
      "Developed independently without AI coding tools, focusing on understanding concepts and solving problems hands-on.",
    ],
  },
];
