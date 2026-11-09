
import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";
import type { Category } from "@/lib/data/skill";

type SkillsResponse = {
  categories: Category[];
  technologies: string[];
};

export function Skills() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchSkills = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/skills", {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error("Failed to fetch skills");
        }

        const data: SkillsResponse = await res.json();

        setCategories(data.categories);
        setTechnologies(data.technologies);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchSkills();

    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <section id="skills" className="py-20 text-center">
        <p className="text-muted-foreground">Loading skills...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="skills" className="py-20 text-center">
        <p className="text-destructive">{error}</p>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 text-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase relative inline-block">
              My <span className="text-mainYellow">Skills</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-mainYellow" />
            </h2>

            <p className="text-lg text-muted-foreground mt-6">
              Here are the technologies and tools I work with regularly.
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category) => (
              <div
                key={category.title}
                className="rounded-xl p-4 shadow-md
                hover:shadow-lg hover:border-mainYellow
                transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-mainYellow mb-6">
                  {category.title}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>

                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>

                      <Progress
                        value={skill.level}
                        className="h-2"
                        aria-label={`${skill.name} proficiency`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="rounded-xl border border-border p-6 shadow-md">
            <h3 className="text-xl font-semibold text-mainYellow mb-6">
              Technologies I Work With
            </h3>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-mainYellow text-mainYellow-foreground
                  hover:bg-mainYellow/90 transition-colors
                  duration-300 px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
