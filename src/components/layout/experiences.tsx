
import {
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  CalendarDays,
} from "lucide-react";

import {
  experiences,
  education,
} from "@/lib/data/experiences";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 text-foreground">
      <div className="container mx-auto px-6 flex flex-col gap-5">
        <div className="max-w-4xl mx-auto w-full">
          {/* Experience Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase relative inline-block">
              My <span className="text-mainYellow">Experience</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-mainYellow" />
            </h2>

            <p className="text-lg text-muted-foreground mt-6">
              My career progression and key achievements over the years
            </p>
          </div>

          {/* Experience List */}
          <div className="relative space-y-8">
            {experiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="flex items-start relative pl-16"
              >
                <div className="absolute left-7 top-14 bottom-0 w-[2px] bg-border" />

                <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full bg-mainYellow text-black shadow-lg z-10">
                  <BriefcaseBusiness className="h-6 w-6" />
                </div>

                <div className="flex-1 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 uppercase">
                      {exp.title}
                      <span className="text-mainYellow">
                        {" "}— {exp.company}
                      </span>
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-2">
                        <CalendarDays size={16} />
                        {exp.period}
                      </span>

                      <span className="flex items-center gap-2">
                        <MapPin size={16} />
                        {exp.location}
                      </span>

                      <span>{exp.type}</span>
                    </div>

                    <p className="text-muted-foreground leading-7">
                      {exp.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-mainYellow mt-1">✦</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Heading */}
          <div className="text-center my-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase relative inline-block">
              My <span className="text-mainYellow">Education</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-mainYellow" />
            </h2>

            <p className="text-lg text-muted-foreground mt-6">
              My academic background and professional development
            </p>
          </div>

          {/* Education List */}
          <div className="relative space-y-8">
            {education.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.institution}-${item.period}`}
                  className="flex items-start relative pl-16"
                >
                  <div className="absolute left-7 top-14 bottom-0 w-[2px] bg-border" />

                  <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full bg-mainYellow text-black shadow-lg z-10">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex-1  rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 uppercase">
                        {item.title}
                        <span className="text-mainYellow">
                          {" "}— {item.institution}
                        </span>
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4">
                        {item.period}
                      </p>

                      <p className="text-muted-foreground leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
