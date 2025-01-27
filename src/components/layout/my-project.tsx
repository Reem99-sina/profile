import React, { ReactNode } from "react";
import "./my-project.css";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img9,
  img10,
  img11,
  uber,
  tiktok,
  img7,
  img8,
} from "@/assets";
import { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

const Project = ({
  url,
  children,
}: {
  url: StaticImageData;
  children: ReactNode;
}) => {
  return (
    <article
      className="protifolio__item"
      style={{ backgroundImage: `url(${url.src})` }}
    >
      <div className="layout_profile">{children}</div>
    </article>
  );
};
const projectsDetail = [
  {
    title: "food type from api ",
    image: img1,
    githubLink: "https://github.com/Reem99-sina/food.git",
  },
  {
    title: "profile Websites example ",
    image: img2,
    githubLink: "https://github.com/Reem99-sina/profiolo.git",
  },
  {
    title: "example of backend project ",
    image: img3,
    githubLink: "https://github.com/Reem99-sina/exam.git",
  },
  {
    title: "react project of movices",
    image: img4,
    githubLink: "https://github.com/Reem99-sina/register.git",
    liveDome: "https://reem99-sina.github.io/register/",
  },

  {
    title: "amazon react project",
    image: img5,
    githubLink: "https://github.com/Reem99-sina/amazonheroku",
    liveDome: "https://reem99-sina.github.io/productlist/",
  },
  {
    title: "dashboard store with next js",
    image: img6,
    githubLink: "https://github.com/Reem99-sina/ecommerce-admin",
    liveDome: "https://reem99-sina.github.io/productlist/",
  },
  {
    title: "website admin with next js",
    image: img7,
    githubLink: "https://github.com/Reem99-sina/ecommerce-admin",
    liveDome: "https://ecommerce-admin-h7tt1yjel-reem99-sina.vercel.app/",
  },
  {
    title: "website store with next js",
    image: img8,
    githubLink: "https://github.com/Reem99-sina/ecommerce-store",
    liveDome: "https://ecommerce-store-topaz-two.vercel.app/",
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
    <section id="project">
      <h5 style={{ textTransform: "capitalize" }}>my recent work</h5>
      <div className="protifolio__container text-white">
        {projectsDetail.map((ele, index) => (
          <Project url={ele.image} key={ele.title + index}>
            <h3>{ele.title}</h3>
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
    </section>
  );
};

export default MyProject;
