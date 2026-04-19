import React, { ReactNode, useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import "./my-project.css";
import { backendProject } from "@/lib/data/backendProject";
import { frontendProject } from "@/lib/data/frontendProject";

const Project = ({
  url,
  children,
}: {
  url: StaticImageData | string;
  children: ReactNode;
}) => {
  return (
    <article
      className="protifolio__item"
      style={{ backgroundImage: `url(${(url as StaticImageData).src || url})` }}
    >
      <div className="layout_profile">{children}</div>
    </article>
  );
};


const MyProject = () => {
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();

      setFrontend(data.frontend);
      setBackend(data.backend);
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="project"
      className="py-20 px-10 bg-background text-foreground relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase relative inline-block">
              My recent <span className="text-mainYellow">work</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-mainYellow"></span>
            </h2>
          </div>
          <div className="relative w-auto">
            <div className="text-white font-bold text-2xl">Frontend</div>
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-mainYellow"></span>
          </div>
          <div className="protifolio__container text-white">
            {frontend?.map((ele:frontendProject, index) => (
              <Project url={ele.image} key={ele.title+index}>
                <h3 className="capitalize mb-2">{ele.title}</h3>
                <div className="protifolio__item-cta">
                  <Button className="bg-transparent border border-white rounded px-2 py-3">
                    <a href={ele.githubLink} className="btn" target="blank">
                      github
                    </a>
                  </Button>
                  {ele.liveDome && (
                    <Button className="bg-transparent border border-white rounded px-2 py-3">
                      <a href={ele.liveDome} className="btn" target="blank">
                        live demo
                      </a>
                    </Button>
                  )}
                </div>
              </Project>
            ))}
          </div>
          <div className="relative w-auto">
            <div className="text-white font-bold text-2xl">Backend</div>
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-mainYellow"></span>
          </div>
          <div className="protifolio__container text-white">
            {backend?.map((ele: backendProject, index) => (
              <Project url={ele.image} key={ele.title + index}>
                <h3 className="capitalize mb-2">{ele.title}</h3>
                <div className="protifolio__item-cta">
                  <Button className="bg-transparent border border-white rounded px-2 py-3">
                    <a href={ele.githubLink} className="btn" target="blank">
                      github
                    </a>
                  </Button>
                  {/* {ele?.liveDome && (
                    <Button className="bg-transparent border border-white rounded px-2 py-3">
                      <a href={ele?.liveDome} className="btn" target="blank">
                        live demo
                      </a>
                    </Button>
                  )} */}
                </div>
              </Project>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProject;
