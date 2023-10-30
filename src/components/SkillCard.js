import React from 'react';

const SkillCard = ({name, icon}) => {
    return (
        <div 
            className='
                w-28 h-32 mx-2 mt-4 flex 
                items-center justify-center 
                flex-col rounded-lg bg-white shadow-lg
                shadow-gray-200 hover:scale-110
            '
        >
            <div className='text-3xl bg-blue-200 text-red-600 p-5 rounded-full'>{icon}</div>
            <span className='text-lg text-blue-950 font-semibold'>{name}</span>
        </div>
    );
}

export default SkillCard;
