
import { GraduationCap } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { LucideProps } from "lucide-react";

export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    title: "Full-Stack Developer",
    company: "DTR",
    location: "Egypt",
    period: "2026 - Present",
    type: "Full-time",
    description:
      "Working as a Full-Stack Developer on an e-commerce management platform, contributing to frontend development using React.js and TypeScript, and backend development using Java and Spring Boot.",
    achievements: [
      "Developing responsive interfaces using React.js, TypeScript, and Ant Design",
      "Building RESTful APIs using Java and Spring Boot",
      "Implementing database integration using PostgreSQL, Spring Data JPA, and Hibernate",
      "Working on authentication, authorization, products, categories, orders, promotions, and inventory management",
      "Managing database migrations using Flyway",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Valoro",
    location: "Cairo, Egypt",
    period: "2024 - Oct 2025",
    type: "Full-time",
    description:
      "Worked as a Frontend Developer at Valoro, contributing to the development of responsive, user-centric web applications using React.js, Next.js, and Tailwind CSS.",
    achievements: [
      "Built and maintained responsive user interfaces",
      "Integrated frontend applications with RESTful APIs",
      "Focused on performance, usability, and clean code",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Cyparta",
    location: "6th of October, Egypt",
    period: "Mar 2023 - Oct 2023",
    type: "Full-time",
    description:
      "Worked as a Frontend Developer, building modern and responsive user interfaces with a focus on performance, usability, and clean code.",
    achievements: [
      "Developed responsive web interfaces",
      "Integrated frontend components with backend APIs",
      "Collaborated on web application development",
    ],
  },
];

export type EducationType = {
  title: string;
  institution: string;
  period: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export const education: EducationType[] = [
  {
    title: "Bachelor Engineering Degree",
    institution: "Al Ma'ali Institute of Engineering and Technology",
    period: "2016 - 2021",
    description:
      "Earned a Bachelor's degree in Engineering, developing strong analytical thinking, problem-solving abilities, and a structured approach to technology and systems.",
    icon: GraduationCap,
  },
  {
    title: "Full-Stack Web Development Diploma",
    institution: "Route",
    period: "Oct 2021 - Aug 2022",
    description:
      "Completed an intensive diploma program focused on full-stack web development using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
    icon: GraduationCap,
  },
];
