import { GraduationCap, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
};

export const experiences: experience[] = [
  {
    title: "Frontend Developer",
    company: "Valoro",
    location: "Cairo, Egypt",
    period: "2024 - present",
    type: "Full-time",
    description:
      "Worked as a Frontend Developer at Valoro, contributing to the development of responsive, user-centric web applications using React.js, Next.js, and Tailwind CSS.",
    achievements: [
      "Built 3 major product features",
      "Reduced loading times by 35%",
      "Improved user engagement by 25%",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Cyparte",
    location: "Cairo, 6th of October",
    period: "2023/Mar - 2023/Oct",
    type: "Full-time",
    description:
      "As a Frontend Developer at Cyparte, I was responsible for building modern and responsive user interfaces with a focus on performance, usability, and clean code",
    achievements: [
      "Delivered 20+ client projects",
      "Maintained 99% client satisfaction",
      "Learned 5+ new technologies",
    ],
  },
];

export type educationType = {
  title: string;
  institution: string;
  period: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export const education: educationType[] = [
  {
    title: "Bachelor Engineering Degree",
    institution: "Higher institute of Engineering and Technology",
    period: "2016-2021",
    description:
      "Earned a Bachelor's degree in Engineering, which laid the foundation for my analytical thinking, problem-solving abilities, and structured approach to technology and systems. During this time, I developed strong fundamentals in logic, mathematics, and engineering principles — skills that later supported my transition into software development and frontend engineering. The discipline and persistence required throughout my engineering education helped shape my work ethic and ability to learn complex technical concepts independently.",
    icon: GraduationCap,
  },
  {
    title: "Diploma Degree",
    institution: "Route",
    period: "2021/Oct - 2022/Aug",
    description:
      "Completed an intensive diploma program at Route focused on full-stack web development using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    icon: GraduationCap,
  },
];
