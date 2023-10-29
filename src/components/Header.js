import React from 'react';
import Logo from '../images/logo.png';
import Nav from './Nav';
const Header = () => {
    return (
        <div className='flex items-center justify-between px-16 py-2 border-b-2 sticky top-0 bg-white bg-opacity-75'>
            <div className='flex items-center'>
                <div className='w-12 h-12 rounded-full border-2'>
                    <img className="scale-75 rounded-full" src={Logo} alt='logo'/>
                </div>
                <span className='ml-2 text-lg text-blue-950 font-bold'>Richard Divino</span>
            </div>
            <Nav />
        </div>
    );
}

export default Header;
