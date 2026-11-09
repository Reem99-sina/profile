
export type Skill = {
  name: string;
  level: number;
};

export type Category = {
  title: string;
  skills: Skill[];
};

export const skillCategories: Category[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Vue.js", level: 70 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Material UI", level: 95 },
      { name: "Ant Design", level: 85 },
      { name: "shadcn/ui", level: 85 },
      { name: "React Native", level: 75 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    title: "State Management & Data Fetching",
    skills: [
      { name: "Zustand", level: 85 },
      { name: "TanStack Query", level: 85 },
      { name: "Axios", level: 90 },
      { name: "REST API Integration", level: 90 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Java / Spring Boot", level: 70 },
      { name: "MongoDB / Mongoose", level: 75 },
      { name: "PostgreSQL", level: 75 },
      { name: "Socket.IO", level: 80 },
      { name: "JWT Authentication", level: 85 },
    ],
  },
  {
    title: "Forms & Validation",
    skills: [
      { name: "React Hook Form", level: 90 },
      { name: "Zod", level: 85 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 85 },
      { name: "Postman / Hoppscotch", level: 90 },
      { name: "Webpack / Babel", level: 80 },
      { name: "Vercel", level: 90 },
    ],
  },
];

export const technologies = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Vue.js",
  "React Native",
  "Tailwind CSS",
  "Material UI",
  "Ant Design",
  "shadcn/ui",
  "Zustand",
  "TanStack Query",
  "React Hook Form",
  "Zod",
  "Node.js",
  "Express.js",
  "Java",
  "Spring Boot",
  "MongoDB",
  "PostgreSQL",
  "Socket.IO",
  "REST APIs",
  "Git",
  "Docker",
  "AWS",
  "Figma",
  "Firebase",
  "Vercel",
  "Webpack",
];
