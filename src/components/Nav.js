import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <ul className='flex text-blue-950 font-semibold'>
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <li className='px-5 py-2 cursor-pointer hover:text-red-600'>Home</li>
            </Link>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <li className='px-5 py-2 cursor-pointer hover:text-red-600'>About</li>
            </Link>
            <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <li className='px-5 py-2 cursor-pointer hover:text-red-600'>Experience</li>
            </Link>
            <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <li className='px-5 py-2 cursor-pointer hover:text-red-600'>Skills</li>
            </Link>
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <li className='px-5 py-2 cursor-pointer hover:text-red-600'>Projects</li>
            </Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <li className='px-5 py-2 cursor-pointer hover:text-red-600'>Contact</li>
            </Link>
        </ul>
    );
}

export default Nav;
