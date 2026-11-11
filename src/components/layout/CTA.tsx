
import { Button } from "../ui/button";
import { Download } from "lucide-react";

const CTA = () => {
  return (
    <div className="my-4">
      <Button
        asChild
        className="bg-mainColor text-primary-foreground transition-colors duration-300 rounded-full px-8 py-6 text-lg font-semibold shadow-lg"
      >
        <a href="/Reem Ebrahim.pdf" download="Reem-Ebrahim.pdf">
          <span className="uppercase mr-3">
            Download CV
          </span>
          <Download className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

export default CTA;
