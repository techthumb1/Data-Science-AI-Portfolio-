import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Project } from '@/types/project';
import path from 'path';
import fs from 'fs';

async function fetchProjects() {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileData);
}

export async function generateStaticParams() {
  const projects = await fetchProjects();
  return projects.map((project: Project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const projects = await fetchProjects();
  const project = projects.find((p: Project) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <div className="relative w-full h-80 mb-8">
        <Image 
          src={project.imageUrl} 
          alt={project.title} 
          fill 
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex gap-2 mb-6">
        {project.technologies.map((tech: string) => (
          <span 
            key={tech}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-lg mb-8">{project.description}</p>
    </div>
  );
}
