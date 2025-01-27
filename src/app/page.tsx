"use client";
import AboutMe from "@/components/layout/aboutMe";
import MyProject from "@/components/layout/my-project";
import MySkill from "@/components/layout/my-skill";
import TabCustom from "@/components/layout/tab-custom";

import { useState } from "react";

export default function Home() {
  const [tabActive, setTabActive] = useState("About me");

  return (
    <div className="w-full h-[500px] overflow-y-auto ">
      <TabCustom
        tabs={[
          { title: "About me",component:<AboutMe/> },
          { title: "My skill",component:<MySkill/>  },
          { title: "My Projects",component:<MyProject/>  },
        ]}
        onClick={(index)=>setTabActive(index)}
        activeIndex={tabActive}
      />
    </div>
  );
}
