
import {
  img4,
  img9,
  img10,
  img11,
  uber,
  tiktok,
  CodeKids,
  HealthCare,
  MacBook,
  EcommerceVue,
  Stock
} from "@/assets";

export type frontendProject={
    title:string,
    image:string,
    githubLink:string,
    liveDome:string
}

export const frontProjects = [
  {
    title: "Stock Markets dashboard",
    image: Stock,
    githubLink: "https://github.com/Reem99-sina/stocks_market",
    liveDome: "https://stocks-market-ec9k.vercel.app/",
  },
   {
    title: "E-commerce website",
    image: EcommerceVue,
    githubLink: "https://github.com/Reem99-sina/ecommerce-vue",
    liveDome: "https://ecommerce-vue-dusky.vercel.app/",
  },
  {
    title: "mac-book 3d website",
    image: MacBook,
    githubLink: "https://github.com/Reem99-sina/-mac-book",
    liveDome: "https://mac-book-six.vercel.app/",
  },
  {
    title: "code kids website",
    image: CodeKids,
    githubLink: "https://github.com/Reem99-sina/code-kids",
    liveDome: "https://code-kids-five.vercel.app/",
  },
  {
    title: "health care website",
    image: HealthCare,
    githubLink: "https://github.com/Reem99-sina/healthcare-plateform",
  },

  // {
  //   title: "amazon react project",
  //   image: img5,
  //   githubLink: "https://github.com/Reem99-sina/amazonheroku",
  //   liveDome: "https://reem99-sina.github.io/productlist/",
  // },
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
    title: "tiktok with react native",
    image: tiktok,
    githubLink: "https://github.com/Reem99-sina/tiktok",
  },
];