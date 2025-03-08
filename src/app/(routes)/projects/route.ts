import { NextResponse } from 'next/server';
import projects from 'data/projects.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const featured = searchParams.get('featured');

  let filteredProjects = [...projects];

  if (category) {
    filteredProjects = filteredProjects.filter((p) => p.category === category);
  }

  if (featured === 'true') {
    filteredProjects = filteredProjects.filter((p) => p.featured);
  }

  return NextResponse.json(filteredProjects);
}
