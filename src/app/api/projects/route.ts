import { backendProjects } from "@/lib/data/backendProject";
import { frontProjects } from "@/lib/data/frontendProject";

export async function GET() {
  return Response.json({
    backend: backendProjects,
    frontend: frontProjects,
  });
}