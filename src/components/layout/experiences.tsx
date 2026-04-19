import { educationType, experience } from "@/lib/data/experiences";
import { Badge, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";

export function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const res = await fetch("/api/experiences");
      const data = await res.json();

      setExperiences(data.experiences);
      setEducation(data.education);
    };

    fetchSkills();
  }, []);
  
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
            {experiences.map((exp: experience, index) => (
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
            {education.map((item: educationType, index) => (
              <div key={index} className="flex items-start relative pl-16">
                {/* Vertical Line */}
                <div className="absolute left-7 top-0 bottom-0 w-[2px] bg-border"></div>
                {/* Icon */}
                <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full bg-mainYellow text-mainYellow-foreground shadow-lg z-10">
                  <GraduationCap className="h-6 w-6" />
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
