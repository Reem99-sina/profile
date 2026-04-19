import { skillCategories, technologies } from "@/lib/data/skill";

export async function GET() {
  return Response.json({
    categories: skillCategories,
    technologies,
  });
}