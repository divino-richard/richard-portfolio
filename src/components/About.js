import React from 'react';
import {TbTargetArrow} from 'react-icons/tb';
import {IoSchoolSharp} from 'react-icons/io5';
import {BsLinkedin, BsFacebook} from 'react-icons/bs';
import {BiLogoGmail} from 'react-icons/bi';
import {MdConnectWithoutContact, MdHandshake, MdWorkHistory} from 'react-icons/md';
import ContactLink from './ContactLink';

const About = () => {
    
    return (
        <div className='text-blue-950' id="about">
            <h1 className='text-center py-5 font-bold text-xl'>About</h1>
            <div
                className='
                    grid gap-4 grid-cols-1 grid-rows-3
                    sm:grid-cols-2 sm:grid-rows-2
                    p-5 text-lg
                '
            >
                <div className='p-5 bg-gray-50 rounded-lg border-2 border-blue-950'>
                    <h1 className='flex items-center font-semibold'>
                        <div className='p-3 rounded-full bg-blue-200 mr-3'>
                            <TbTargetArrow className='text-red-600'/>
                        </div>
                        Goals
                    </h1>
                    <div className='py-3'>
                        <p>- To provide quality contributions to your company based on the technical knowledge and skills that I have and may have.</p>
                    </div>

                    <h1 className='flex items-center font-semibold'>
                        <div className='p-3 rounded-full bg-blue-200 mr-3'>
                            <MdWorkHistory className='text-red-600'/>
                        </div>
                        Experience
                    </h1>
                    <div className='py-3'>
                        <p>- 1 year at DXForm Cebu as Front-end Web Developer from 2023 to 2024</p>
                    </div>
                </div>
                <div className='p-5 bg-gray-50 rounded-lg border-2 border-blue-950'>
                    <h1 className='flex items-center font-semibold'>
                        <div className='p-3 rounded-full bg-blue-200 mr-3'>
                            <IoSchoolSharp className='text-red-600'/>
                        </div>
                        School
                    </h1>
                    <div className='py-3'>
                        <p>- Graduated <b>Bachelor of Science in Computer Science</b> at North Eastern Mindanao State University</p>
                    </div>

                    <h1 className='flex items-center font-semibold'>
                        <div className='p-3 rounded-full bg-blue-200 mr-3'>
                            <MdHandshake className='text-red-600'/>
                        </div>
                        Offers
                    </h1>
                    <div className='py-3'>
                        <p>- Best quality Software Development</p>
                        <p>- Clean and readable code</p>
                        <p>- New technology adaptability</p>
                    </div>
                </div>
                <div className='p-5 bg-gray-50 rounded-lg border-2 border-blue-950'>
                    <h1 className='flex items-center font-semibold'>
                        <div className='p-3 rounded-full bg-blue-200 mr-3'>
                            <MdConnectWithoutContact className='text-red-600'/>
                        </div>
                        Contact With
                    </h1>
                    <div className='py-5'>
                        <ContactLink 
                            title='Facebook'
                            link='https://web.facebook.com/richard.divino.35'
                            icon={<BsFacebook />}
                        />
                        <ContactLink 
                            title='LinkedIn'
                            link='https://www.linkedin.com/in/richard-divino-b99136210/'
                            icon={<BsLinkedin />}
                        />
                        <button className='flex items-center px-5 py-2 rounded-lg bg-red-600 text-white  shadow-gray-300 shadow-lg'>
                            <BiLogoGmail className='mr-3' />
                            Send email
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
