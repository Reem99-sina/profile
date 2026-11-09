
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { frontProjects } from "@/lib/data/frontendProject";
import { backendProjects } from "@/lib/data/backendProject";

const filters = [
  "All",
  "Full-Stack",
  "Frontend",
  "Backend",
  "Mobile",
] as const;

type Filter = (typeof filters)[number];

const MyProject = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const projects = useMemo(
    () => [...frontProjects, ...backendProjects],
    []
  );

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="project"
      className="relative overflow-hidden bg-background px-6 py-28 text-foreground"
    >
      <div className="container relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="relative inline-block text-4xl font-bold uppercase md:text-5xl">
            My Recent <span className="text-mainYellow">Work</span>
            <span className="absolute -bottom-3 left-0 h-1 w-full bg-mainYellow" />
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-muted-foreground">
            Explore some of my recent projects, showcasing my experience
            in building modern, responsive, and scalable applications.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "border-mainYellow bg-mainYellow text-mainYellow-foreground"
                  : "border-border hover:border-mainYellow hover:text-mainYellow"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl  transition-all duration-300 hover:-translate-y-2 hover:border-mainYellow hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-mainYellow backdrop-blur">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-mainYellow">
                  {project.title}
                </h3>

                <p className="mb-5 min-h-16 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex min-h-14 flex-wrap content-start gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-mainYellow/10 px-2.5 py-1 text-xs font-medium text-mainYellow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </Button>

                  {project.liveDemo && (
                    <Button
                      asChild
                      className="flex-1 bg-mainYellow text-mainYellow-foreground hover:bg-mainYellow/90"
                    >
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">
            No projects found in this category.
          </p>
        )}

      </div>
    </section>
  );
};

export default MyProject;
