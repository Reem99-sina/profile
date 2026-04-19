

import { education, experiences } from "@/lib/data/experiences";

export async function GET() {
  return Response.json({
    experiences,
    education,
  });
}