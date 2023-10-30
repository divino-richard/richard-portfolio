import React from 'react';
import { ImNewTab } from 'react-icons/im';

const ContactLink = ({title, link, icon}) => {
    return (
        <a
            href={link}
            target='_blank'
            className='flex items-center justify-between bg-white p-3 mb-3 rounded-lg shadow-gray-300 shadow-lg'
            rel="noreferrer"
        >
            <div className='flex items-center'>
                {icon}
                <span className='px-3'>{title}</span>
            </div>
            <ImNewTab/>
        </a>
    );
}

export default ContactLink;
