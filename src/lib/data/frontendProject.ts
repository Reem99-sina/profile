
import {
  EstateHub,
  ReviewerCv,
  Stock,
  EcommerceVue,
  SkillSwap,
  MacBook,
  CodeKids,
  HealthCare,
  img9,
} from "@/assets";

import type { Project } from "@/lib/types/project";

export const frontProjects = [
  {
    title: "EstateHub",
    image: EstateHub,
    category: "Full-Stack",
    description:
      "A real estate platform with property search, favorites, booking visits, real-time chat, notifications, and role-based dashboards.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Socket.IO",
    ],
    githubLink: "https://github.com/Reem99-sina/estatehub",
    liveDemo: "https://estatehub-indol.vercel.app/",
  },
  {
    title: "AI CV Reviewer",
    image: ReviewerCv,
    category: "Full-Stack",
    description:
      "An AI-powered resume reviewing platform that helps users analyze and improve their CVs, with an admin dashboard.",
    technologies: [
      "React",
      "TypeScript",
      "AI Integration",
      "Dashboard",
    ],
    githubLink: "https://github.com/Reem99-sina/Review_cv",
    liveDemo: "https://review-cv-peach.vercel.app/",
  },
  {
    title: "CV Reviewer Admin Dashboard",
    image: ReviewerCv,
    category: "Frontend",
    description:
      "An administrative dashboard for managing and reviewing CV submissions.",
    technologies: ["React", "TypeScript", "Dashboard"],
    githubLink: "https://github.com/Reem99-sina/Review_cv_admin",
    liveDemo: "https://review-cv-admin.vercel.app/",
  },
  {
    title: "Stock Market Dashboard",
    image: Stock,
    category: "Frontend",
    description:
      "A financial dashboard for exploring stock market data and monitoring market information.",
    technologies: ["React", "JavaScript", "API Integration"],
    githubLink: "https://github.com/Reem99-sina/stocks_market",
    liveDemo: "https://stocks-market-ec9k.vercel.app/",
  },
  {
    title: "E-commerce Website",
    image: EcommerceVue,
    category: "Frontend",
    description:
      "An online shopping experience with product browsing and a responsive user interface.",
    technologies: ["Vue.js", "JavaScript", "CSS"],
    githubLink: "https://github.com/Reem99-sina/ecommerce-vue",
    liveDemo: "https://ecommerce-vue-dusky.vercel.app/",
  },
  {
    title: "SkillSwap",
    image: SkillSwap,
    category: "Mobile",
    description:
      "A mobile application concept for connecting people who want to exchange skills and knowledge.",
    technologies: ["React Native"],
    githubLink: "https://github.com/Reem99-sina/skillswap_mobile",
  },
  {
    title: "Messenger",
    image: img9,
    category: "Full-Stack",
    description:
      "A messaging application built with Next.js.",
    technologies: ["Next.js", "React"],
    githubLink: "https://github.com/Reem99-sina/messager"
  },
  {
    title: "MacBook 3D Website",
    image: MacBook,
    category: "Frontend",
    description:
      "An interactive product showcase featuring a modern 3D-inspired web experience.",
    technologies: ["React", "JavaScript", "3D"],
    githubLink: "https://github.com/Reem99-sina/-mac-book",
    liveDemo: "https://mac-book-six.vercel.app/",
  },
  {
    title: "Code Kids",
    image: CodeKids,
    category: "Frontend",
    description:
      "An educational website designed to introduce children to coding.",
    technologies: ["React", "JavaScript"],
    githubLink: "https://github.com/Reem99-sina/code-kids",
    liveDemo: "https://code-kids-five.vercel.app/",
  },
  {
    title: "Healthcare Platform",
    image: HealthCare,
    category: "Frontend",
    description:
      "A healthcare web interface designed to provide an accessible user experience.",
    technologies: ["React", "JavaScript"],
    githubLink: "https://github.com/Reem99-sina/healthcare-plateform",
  },
] satisfies Project[];
