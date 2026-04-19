export type skill={
    name:string,
    level:number
}

export type category={
    title:string,
    skills:skill[]
}
export const skillCategories:category[] = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "vue.js", level: 70 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Material UI", level: 95 },
        { name: "React Native", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Figma", level: 85 },
      ],
    },
  ];

export  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Python",
    "MongoDB",
    "Tailwind CSS",
    "shadcn/ui ",
    "Git",
    "Docker",
    "AWS",
    "Figma",
    "Firebase",
    "Vercel",
  ];

