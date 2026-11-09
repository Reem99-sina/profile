
import {
  EstateHub,
  tiktok,
  Ecommerce,
  Chat,
  TaskManagement,
  BlogPost,
} from "@/assets";

import type { Project } from "@/lib/types/project";

export const backendProjects = [
  {
    title: "EstateHub API",
    image: EstateHub,
    category: "Backend",
    description:
      "RESTful API for a real estate platform with authentication, role-based authorization, property management, bookings, and real-time communication.",
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "JWT",
      "Socket.IO",
    ],
    githubLink: "https://github.com/Reem99-sina/estatehub-api",
    liveDemo: "https://estatehub-api.vercel.app/",
  },
  {
    title: "TikTok Backend",
    image: tiktok,
    category: "Backend",
    description:
      "Backend implementation of a video-sharing application.",
    technologies: ["Node.js", "Express.js"],
    githubLink: "https://github.com/Reem99-sina/tiktok_back",
  },
  {
    title: "E-commerce API",
    image: Ecommerce,
    category: "Backend",
    description:
      "Backend services for an e-commerce application.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    githubLink: "https://github.com/Reem99-sina/ecommerce-api",
  },
  {
    title: "Real-time Chat API",
    image: Chat,
    category: "Backend",
    description:
      "Backend services for real-time messaging.",
    technologies: ["Node.js", "Express.js", "Socket.IO"],
    githubLink: "https://github.com/Reem99-sina/real-chat-api",
  },
  {
    title: "Task Management API",
    image: TaskManagement,
    category: "Backend",
    description:
      "API for managing tasks and organizing workflows.",
    technologies: ["Node.js", "Express.js"],
    githubLink: "https://github.com/Reem99-sina/taskFlow",
  },
  {
    title: "Blog API",
    image: BlogPost,
    category: "Backend",
    description:
      "Backend API for managing blog posts and content.",
    technologies: ["Node.js", "Express.js"],
    githubLink: "https://github.com/Reem99-sina/blog",
  },
] satisfies Project[];
