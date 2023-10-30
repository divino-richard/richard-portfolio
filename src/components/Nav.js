import React from 'react';
import { Link } from 'react-scroll';
import {AiOutlineClose} from 'react-icons/ai';

const Nav = ({handleCloseNav}) => {
    return (
        <ul 
            className='
                flex flex-col absolute top-0 left-0 p-5
                w-full border-b-2 text-blue-950 font-semibold
                bg-white text-center
            '
        >   
            <li className='flex justify-end text-xl'>
                <AiOutlineClose onClick={handleCloseNav} className='text-xl'/>
            </li>

            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleCloseNav}
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
                onClick={handleCloseNav}
            >
                <li className='px-5 py-2 cursor-pointer hover:text-red-600'>About</li>
            </Link>
            <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleCloseNav}
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
                onClick={handleCloseNav}
            >
                <li className='px-5 py-2 cursor-pointer hover:text-red-600'>Projects</li>
            </Link>
        </ul>
    );
}

export default Nav;
