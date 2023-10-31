import React from 'react';
import { projects } from '../data';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className='text-blue-950' id="projects">
            <h1 className='text-center py-5 mt-24 font-bold text-xl'>Projects</h1>
            <div 
                className='
                    grid gap-4 grid-cols-1 grid-rows-4
                    sm:grid-cols-2 sm:grid-rows-2
                    lg:grid-cols-3 lg:grid-rows-2
                    p-5 lg:p-16
                '
            >
                {projects.map(project => (
                    <ProjectCard 
                        key={project.id}
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
