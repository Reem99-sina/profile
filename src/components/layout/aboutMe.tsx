import { Skills } from "./skills";
import { Experience } from "./experiences";
import CTA from "./CTA";

export function AboutMe() {
  const personalInfos = [
    { label: "First Name", value: "Reem" },
    { label: "Last Name", value: "Ebrahim" },
    { label: "Age", value: "26 Years" },
    { label: "Nationality", value: "Egyptian" },
    { label: "Freelance", value: "Available", highlight: true },
    { label: "Address", value: "Cairo" },
    { label: "Phone", value: "+201129134700" },
    { label: "Email", value: "reemsina99@gmail.com" },
    { label: "Languages", value: "Arabic, English" },
  ];
  const stats = [{ value: "2+", label: "YEARS OF EXPERIENCE" }];
  
  return (
    <section
      id="about"
      className="py-20 px-10 bg-background text-foreground relative overflow-hidden"
    >
      <h2 className="text-6xl md:text-8xl font-bold text-foreground/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 uppercase whitespace-nowrap opacity-10">
        Resume
      </h2>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase relative inline-block">
              About <span className="text-mainYellow">Me</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-mainYellow"></span>
            </h2>
          </div>

          <div className="flex items-center justify-between gap-12 flex-col md:flex-row ">
            {/* Personal Infos */}
            <div>
              <h3 className="text-2xl font-bold mb-6 uppercase">
                Personal Infos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-lg">
                {personalInfos.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <span className="font-semibold text-muted-foreground mr-2">
                      {info.label}:
                    </span>
                    <span
                      className={
                        info.highlight
                          ? "text-green-500 font-bold"
                          : "text-foreground"
                      }
                    >
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>

              <CTA />
            </div>
            <div className="grid grid-cols-1 gap-6 items-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className=" text-center p-6 shadow-lg border border-border transition-all duration-300 hover:scale-[1.02] hover:border-mainYellow"
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-5xl font-bold text-mainYellow mb-2">
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Experience />
    </section>
  );
}
