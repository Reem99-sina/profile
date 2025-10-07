import React, { ReactNode } from "react";

import {
  img1,
  img3,
  img4,
  img5,
  img9,
  img10,
  img11,
  uber,
  tiktok,
  CodeKids,
  HealthCare,
  Ecommerce,
} from "@/assets";
import { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import "./my-project.css";

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
const backendProjects = [
  {
    title: "E-Commerce API",
    image: Ecommerce,
    githubLink: "https://github.com/Reem99-sina/ecommerce-api",
  },
  {
    title: "food type from api ",
    image: img1,
    githubLink: "https://github.com/Reem99-sina/food.git",
  },

  {
    title: "exam backend project ",
    image: img3,
    githubLink: "https://github.com/Reem99-sina/exam.git",
  },
  
];

const frontProject = [
  {
    title: "code kids website",
    image: CodeKids,
    githubLink: "https://github.com/Reem99-sina/code-kids",
    liveDome: "https://code-kids-five.vercel.app/",
  },
  {
    title: "health care website",
    image: HealthCare,
    githubLink: "https://github.com/Reem99-sina/code-kids",
  },

  {
    title: "amazon react project",
    image: img5,
    githubLink: "https://github.com/Reem99-sina/amazonheroku",
    liveDome: "https://reem99-sina.github.io/productlist/",
  },
  {
    title: "messager project with next js",
    image: img9,
    githubLink: "https://github.com/Reem99-sina/messager",
    liveDome: "https://messager-woad.vercel.app/",
  },
  {
    title: "baby shop with next js",
    image: img10,
    githubLink: "https://github.com/Reem99-sina/baby-shop",
    liveDome: "https://baby-shop-ten.vercel.app/",
  },
  {
    title: "coffee shop with react native",
    image: img11,
    githubLink: "https://github.com/Reem99-sina/coffeeshop",
  },
  {
    title: "movies search example ",
    image: img4,
    githubLink: "https://github.com/Reem99-sina/movies",
    liveDome: "https://movies-ten-ivory.vercel.app/",
  },
  {
    title: "Uber with react native and node js",
    image: uber,
    githubLink: "https://github.com/Reem99-sina/uberFront.git",
  },
  {
    title: "tiktok with react native and supabase",
    image: tiktok,
    githubLink: "https://github.com/Reem99-sina/tiktok",
  },
];

const MyProject = () => {
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
            {frontProject.map((ele, index) => (
              <Project url={ele.image} key={ele.title + index}>
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
            {backendProjects.map((ele, index) => (
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
