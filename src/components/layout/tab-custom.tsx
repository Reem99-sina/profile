import React, { FC,  ReactNode, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";

interface Props {
  tabs: {
    title: string;
    component: ReactNode;
  }[];
  onClick: (value: string) => void;
  activeIndex: string;
}

const TabCustom: FC<Props> = ({ tabs, activeIndex, onClick }) => {
  const tabActive = useMemo(() => {
    return tabs.find((ele) => ele.title == activeIndex);
  }, [activeIndex]);
  
  return (
    <Tabs defaultValue="About me" onValueChange={onClick}>
      <TabsList className=" w-full flex items-center  justify-start bg-transparent p-0">
        {tabs.map((ele, index) => (
          <TabsTrigger
            value={ele.title}
            key={index}
            className={clsx(
              ele.title == activeIndex
                ? "border-b border-mainColor text-white"
                : "border-b border-gray-300 text-gray-400",
              "!shadow-none rounded-none bg-transparent"
            )}
          >
            {ele.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={tabActive?.title || ""}>
        {tabActive?.component}
      </TabsContent>
    </Tabs>
  );
};

export default TabCustom;
