import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Node.js", level: 80 },
  { name: "mongodb", level: 80 },
  { name: "Tailwind CSS", level: 95 },
  { name: "material-ui", level: 85 },
  { name: "firebase", level: 85 },
  { name: "google analytics", level: 85 },
  { name: "agolia", level: 85 },
  { name: "shadcn/ui", level: 85 },
  { name: "python", level: 65 },

];
const MySkill = () => {
  return (
    <div className="flex py-5 gap-5 flex-col">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-1">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <Progress value={skill.level} className="h-3 bg-gray-300" />
        </div>
      ))}
    </div>
  );
};

export default MySkill;
