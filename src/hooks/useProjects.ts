// hooks/useProjects.ts
import { useState, useEffect } from 'react';
import type { Project } from '../types/project';

export function useProjects(category?: string) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProjects() {
            try {
                // In production, this could be a fetch from an API
                const response = await fetch('/data/projects.json');
                const projects = await response.json();
                
                let filteredProjects = projects;
                
                if (category) {
                    filteredProjects = filteredProjects.filter(
                        (project: Project) => project.category === category
                    );
                }
                
                setProjects(filteredProjects);
            } catch (err) {
                console.error(err);
                setError('Failed to load projects');
            } finally {
                setLoading(false);
            }
        }
        
        fetchProjects();
    }, [category]);

    return { projects, loading, error };
}