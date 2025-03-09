import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const projectsPath = path.join(process.cwd(), "data/projects.json");
    const projects = JSON.parse(fs.readFileSync(projectsPath, "utf-8"));

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error loading projects.json:", error);
    return NextResponse.json({ error: "Failed to load projects" }, { status: 500 });
  }
}
