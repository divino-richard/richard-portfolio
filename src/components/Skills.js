import React from 'react';
import { skills } from '../data';
import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <div className='text-blue-950' id="skills">
            <h1 className='text-center py-5 font-bold text-xl'>Skills</h1>
            <div 
                className='
                    grid gap-4 grid-cols-1 grid-rows-2
                    sm:grid-cols-2 sm:grid-rows-1
                    p-5 text-lg
                '
            >
                {skills.map(skill => (
                    <div className='p-2 bg-gray-50 rounded-lg border-2 border-blue-950'>
                        <h1 className='text-center'>{skill.category}</h1>
                        <div className='flex flex-wrap items-center justify-center'>
                            {skill.items.map(skillItem => (
                                <SkillCard name={skillItem.name} icon={skillItem.icon}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
