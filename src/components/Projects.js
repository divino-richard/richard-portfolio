import React from 'react';
import { projects } from '../data';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className='text-blue-950' id="projects">
            <h1 className='text-center py-5 font-bold text-xl'>Projects</h1>
            <div 
                className='
                    grid gap-4 grid-cols-1 grid-rows-4
                    sm:grid-cols-2 sm:grid-rows-2
                    p-5
                '
            >
                {projects.map(project => (
                    <ProjectCard 
                        title={project.title} 
                        image={project.image} 
                        description={project.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
