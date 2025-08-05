import React from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

const CTA = () => {
  return (
    <div className="my-4 text-white hover:opacity-90 transition-opacity py-2  rounded">
      <a href={"/Reem-Ebrahim.pdf"} download className="btn">
        <Button className="bg-mainYellow text-primary-foreground  transition-colors duration-300 rounded-full px-8 py-6 text-lg font-semibold shadow-lg">
          <span className="button-text uppercase mr-3">Download CV</span>
          <Download className="h-6 w-6" />
        </Button>
      </a>
    </div>
  );
};

export default CTA;
