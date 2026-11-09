
import type { StaticImageData } from "next/image";

export type ProjectCategory =
  | "Full-Stack"
  | "Frontend"
  | "Backend"
  | "Mobile";

export type Project = {
  title: string;
  image: StaticImageData | string;
  githubLink: string;
  liveDemo?: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
};
