
import {
  img1,
  img3,
  tiktok,
  Ecommerce,
  Chat,
  TaskManagement,
  BlogPost
} from "@/assets";

export type backendProject={
    title:string,
    image:string,
    githubLink:string
}

export const backendProjects = [
 {
    title: "tiktok with express",
    image: tiktok,
    githubLink: "https://github.com/Reem99-sina/tiktok_back",
  },
  {
    title: "E-Commerce API",
    image: Ecommerce,
    githubLink: "https://github.com/Reem99-sina/ecommerce-api",
  },
  {
    title: "Real chat API",
    image: Chat,
    githubLink: "https://github.com/Reem99-sina/real-chat-api",
  },
  {
    title: "Task Management API",
    image: TaskManagement,
    githubLink: "https://github.com/Reem99-sina/taskFlow",
  },
  {
    title: "Blog  API",
    image: BlogPost,
    githubLink: "https://github.com/Reem99-sina/blog",
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