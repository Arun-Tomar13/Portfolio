
export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  live: string | null;
  code: string;
};

export const projects: Project[] = [
  {
    title: "Talkify",
    category: "REAL-TIME COMMUNICATION",
    description:
      "A communication platform for real-time messaging, video calls, screen sharing, and language exchange.",
    tags: ["React", "Express", "MongoDB", "Zustand", "Stream", "JWT"],
    image: "/talkify.png",
    live: null,
    code: "https://github.com/Arun-Tomar13/Talkify",
  },
  {
    title: "Foody",
    category: "FOOD ORDERING PLATFORM",
    description:
      "A food ordering application built around a modern React interface.",
    tags: ["React", "JavaScript", "Redux Toolkit", "Axios", "Material UI"],
    image: "/foody.png",
    live: null,
    code: "https://github.com/Arun-Tomar13/Foody",
  },
];
