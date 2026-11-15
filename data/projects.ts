export type ProjectStatus = "Developed" | "Completed";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  repositoryUrl?: string;
  demoUrl?: string;
  thumbnail?: string;
  thumbnailAlt?: string;
};

export const projects: Project[] = [
  {
    title: "STARK AI Agent",
    description:
      "A Python-based AI agent project exploring conversational assistance and intelligent task support. Its specific features and public source link have not been provided, so this portfolio avoids claiming unverified capabilities.",
    technologies: ["Python"],
    status: "Developed",
  },
  {
    title: "Student CGPA Calculator",
    description:
      "A Python tool for students to enter subject grades and credits and calculate GPA or CGPA. The source repository and a live demo link were not available to verify.",
    technologies: ["Python"],
    status: "Completed",
  },
];
