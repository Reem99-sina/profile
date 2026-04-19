import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";
import { category } from "@/lib/data/skill";

export function Skills() {
  const [categories, setCategories] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const res = await fetch("/api/skills");
      const data = await res.json();

      setCategories(data.categories);
      setTechnologies(data.technologies);
    };

    fetchSkills();
  }, []);
  
  return (
    <section id="skills" className="py-20  text-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase relative inline-block">
              My <span className="text-mainYellow">Skills</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-mainYellow"></span>
            </h2>
            <p className="text-lg text-muted-foreground mt-6">
              Here are the technologies and tools I work with regularly
            </p>
          </div>
          {/* Skill Bars */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {categories.map((category: category, index) => (
              <div
                key={index}
                className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] border-border hover:border-mainYellow bg-background"
              >
                <div>
                  <div className="text-mainYellow">{category.title}</div>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2 " />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Technology Tags */}
          <div className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] border-border hover:border-mainYellow bg-background">
            <div>
              <div className="text-mainYellow mb-3">
                Technologies I Work With
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-mainYellow text-mainYellow-foreground hover:bg-mainYellow/90 transition-colors duration-300 p-3 rounded-md"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
