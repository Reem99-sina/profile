
import Image from "next/image";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import CTA from "./CTA";

const Account = () => {
  return (
    <div className="flex items-center flex-col gap-5 md:w-auto w-full">
      <div className="bg-gradient-to-br from-darkMainColor to-secondaryColor p-4 rounded-full overflow-hidden">
        <Image
          src={"/reem.jpeg"}
          width={200}
          height={100}
          alt="image"
          className="rounded-full"
        />
      </div>
      <h3 className="font-black text-white text-center">
        Reem ebrahim desouky
      </h3>
      <p className="text-mainColor ">Full stack Developer</p>
      <div className="flex items-center gap-4 text-gray-500">
        <a
          href="https://www.linkedin.com/in/reem-ebrahim-801bb21b0/"
          target="_blank"
        >
          <FiLinkedin />
        </a>
        <a href="https://github.com/Reem99-sina" target="_blank">
          <LuGithub />
        </a>
      </div>
      <CTA/>
    </div>
  );
};

export default Account;
