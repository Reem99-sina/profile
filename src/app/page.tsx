"use client";

import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { useMemo, useState } from "react";
import { MdContactPhone } from "react-icons/md";
import { HomeComponent } from "@/components/layout/Home";
import { AboutMe } from "@/components/layout/aboutMe";
import clsx from "clsx";
import { ContactUs } from "@/components/layout/contactUs";
import MyProject from "@/components/layout/my-project";

export default function Home() {
  const [tabActive, setTabActive] = useState("/");
  const navLinks = [
    { href: "/", label: "Home", icon: <FaHome />, children: <HomeComponent /> },
    {
      href: "/about",
      label: "About",
      icon: <FaRegUser />,
      children: <AboutMe />,
    },
    {
      href: "/projects",
      label: "Projects",
      icon: <IoBag />,
      children: <MyProject />,
    },
    {
      href: "/contact",
      label: "Contact",
      icon: <MdContactPhone />,
      children: <ContactUs />,
    },
  ];
  const childrenLink = useMemo(() => {
    return navLinks?.find((link) => link.href == tabActive)?.children;
  }, [tabActive]);

  return (
    <div className=" flex bg-black  relative flex-col md:flex-row items-center">
      {childrenLink}
      <div className="bg-[#2b2a2a] flex flex-row md:flex-col  fixed top-[95%] md:top-[50%] -translate-y-1/2 right-0 md:right-10 z-10 items-end w-auto justify-around  md:bg-transparent">
        {navLinks.map((link) => (
          <div key={link.href} className="group flex items-center">
            <div
              className={clsx(
                tabActive == link.href ? "bg-mainYellow" : "bg-[#2b2a2a]",
                " p-5 my-5 rounded-full hover:bg-mainYellow flex flex-row-reverse items-center gap-2"
              )}
              onClick={() => setTabActive(link.href)}
            >
              {link.icon}
              <span className="hidden group-hover:block transition-opacity duration-300">
                {link.label}
              </span>
            </div>
          </div>
        ))}

        {/* <div className="group bg-[#2b2a2a] p-5 my-5 rounded-full hover:bg-mainYellow flex flex-row-reverse items-center gap-2">
                  <FaRegUser />
                  <span className="hidden group-hover:block transition-opacity duration-300">
                    About
                  </span>
                </div>

                <div className="group bg-[#2b2a2a] p-5 my-5 rounded-full hover:bg-mainYellow flex flex-row-reverse items-center gap-2">
                  <IoBag />
                  <span className="hidden group-hover:block transition-opacity duration-300">
                    Projects
                  </span>
                </div>
                <div className="group bg-[#2b2a2a] p-5 my-5 rounded-full hover:bg-mainYellow flex flex-row-reverse items-center gap-2">
                  <MdContactPhone />
                  <span className="hidden group-hover:block transition-opacity duration-300">
                    Contact
                  </span>
                </div> */}
      </div>
    </div>
  );
}
