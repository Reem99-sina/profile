import { Badge, GraduationCap } from "lucide-react";

export function Experience() {
  const experiences = [
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
  const educationData = [
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

  return (
    <section id="experience" className="py-20 text-foreground">
      <div className="container mx-auto px-6 flex flex-col gap-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase relative inline-block">
              My <span className="text-mainYellow">Experience</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-mainYellow"></span>
            </h2>
            <p className="text-lg text-muted-foreground mt-6">
              My career progression and key achievements over the years
            </p>
          </div>

          <div className="relative space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="flex items-start relative pl-16">
                <div className="absolute left-7 top-16 bottom-0 w-[2px] bg-border"></div>
                <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full bg-mainYellow text-mainYellow-foreground shadow-lg z-10">
                  <Badge />
                </div>
                <div className="flex-1  border-border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 uppercase">
                      {exp.title}{" "}
                      <span className="text-mainYellow">— {exp.company}</span>
                    </h3>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center my-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase relative inline-block">
              My <span className="text-mainYellow">Education</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-mainYellow"></span>
            </h2>
            <p className="text-lg text-muted-foreground mt-6">
              My career progression and key achievements over the years
            </p>
          </div>
          <div className="relative space-y-6">
            {educationData.map((item, index) => (
              <div key={index} className="flex items-start relative pl-16">
                {/* Vertical Line */}
                <div className="absolute left-7 top-0 bottom-0 w-[2px] bg-border"></div>
                {/* Icon */}
                <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full bg-mainYellow text-mainYellow-foreground shadow-lg z-10">
                  <item.icon className="h-6 w-6" />
                </div>
                {/* Content */}
                <div className="flex-1  border-border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 uppercase">
                      {item.title}{" "}
                      <span className="text-mainYellow">
                        — {item.institution}
                      </span>
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
