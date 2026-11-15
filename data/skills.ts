import type { LucideIcon } from "lucide-react";
import {
  Braces,
  Code2,
  Cpu,
  Lightbulb,
  Terminal,
  Workflow,
} from "lucide-react";

export type Skill = {
  name: string;
  description: string;
  icon: LucideIcon;
  category: "Programming" | "Web" | "Core";
};

export const skills: Skill[] = [
  {
    name: "C++",
    description: "Building a strong foundation in programming and logic.",
    icon: Code2,
    category: "Programming",
  },
  {
    name: "C#",
    description: "Exploring object-oriented programming and application development.",
    icon: Braces,
    category: "Programming",
  },
  {
    name: "Python",
    description: "Writing clear code and experimenting with practical projects.",
    icon: Terminal,
    category: "Programming",
  },
  {
    name: "HTML",
    description: "Creating the structure behind accessible web experiences.",
    icon: Workflow,
    category: "Web",
  },
  {
    name: "JavaScript",
    description: "Learning to make web interfaces interactive and dynamic.",
    icon: Cpu,
    category: "Web",
  },
  {
    name: "Problem solving",
    description: "Breaking challenges into smaller, thoughtful steps.",
    icon: Lightbulb,
    category: "Core",
  },
];
