import Image from "next/image";
import CTA from "./CTA";

export function HomeComponent() {
  return (
    <>
      <div
        className="bg-mainYellow fixed -top-[50%]"
        style={{
          height: "200%",
          width: "100%",
          transform: "rotate(-15deg)",
          left: "-83%",
          top: "-50%",
          zIndex: -1,
        }}
      ></div>
      <div className=" flex-[0.5] bg-black flex items-center  gap-5 md:w-auto w-full justify-center md:justify-start">
        <div className=" p-4 rounded-lg overflow-hidden">
          <Image
            src={"/reem.PNG"}
            width={200}
            height={200}
            alt="image"
            className="rounded-full md:rounded-lg"
          />
        </div>
      </div>
      <div className="p-5 flex flex-col gap-5 flex-1 justify-center me-0 md:me-28 text-center md:text-start">
        <h3 className="font-black text-mainYellow uppercase text-3xl">
          I'm Reem Ebrahim.
        </h3>
        <h3 className="font-black  uppercase text-3xl">Front-end Developer</h3>
        <p className=" text-white">
          I'm a passionate front-end developer with 2 years of experience
          creating responsive and user-friendly web applications. I specialize
          in Reactjs,Nextjs and love working with modern JavaScript frameworks
          and libraries.
        </p>
        <CTA />
      </div>
    </>
  );
}
