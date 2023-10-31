import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {AiOutlineClose} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';

const Nav = () => {
    const [displayNav, setDisplayNav] = useState(false);

    return (
        <div>
            <ul 
                className={`
                    md:flex ${displayNav ? "flex" : "hidden" } flex-col md:flex-row absolute md:relative top-0 left-0 p-5 md:p-0
                    w-full border-b-2 md:border-none text-blue-950 font-semibold
                    bg-white text-center
                `}
            >   
                <li className='flex md:hidden justify-end text-xl'>
                    <AiOutlineClose className='text-xl cursor-pointer hover:text-red-600' onClick={() => setDisplayNav(false)}/>
                </li>

                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setDisplayNav(false)}
                >
                    <li
                        className='px-5 py-2 cursor-pointer hover:text-red-600'
                    >
                        Home
                    </li>
                </Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setDisplayNav(false)}
                >
                    <li
                        className='px-5 py-2 cursor-pointer hover:text-red-600'
                    >
                        About
                    </li>
                </Link>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setDisplayNav(false)}
                >
                    <li
                        className='px-5 py-2 cursor-pointer hover:text-red-600'
                    >
                        Skills
                    </li>
                </Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setDisplayNav(false)}
                >
                    <li
                        className='px-5 py-2 cursor-pointer hover:text-red-600'
                    >
                        Projects
                    </li>
                </Link>
            </ul>
            <div className='flex md:hidden'>
                <GiHamburgerMenu 
                    className='text-xl cursor-pointer hover:text-red-600'
                    onClick={() => setDisplayNav(true)}
                />
            </div>
        </div>
        
    );
}

export default Nav;
