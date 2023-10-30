import React from 'react';

const ProjectCard = ({title, image, description}) => {
    return (
        <div className='p-5 bg-gray-50 rounded-lg border-2 border-blue-950'>
            <h1 className='text-lg font-semibold mb-3'>{title}</h1>
            <div className='py-5 flex items-center justify-center'>
                <div className='p-14 rounded-full bg-blue-200 w-fit'>
                    <img 
                        src={image}
                        alt='project'
                        className='w-20 h-20'
                    />
                </div>
            </div>
            <p className='text-md'>{description}</p>
        </div>
    );
}

export default ProjectCard;
