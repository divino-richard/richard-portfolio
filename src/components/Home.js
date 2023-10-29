import React from 'react';
import { FiFileMinus } from "react-icons/fi";
import Me from '../images/profile-picture.png'
const Home = () => {
    return (
        <div 
            className='flex items-center p-16 bg-gray-200'
            id="home"
        >
            <div className='p-10 rounded-2xl bg-white w-fit shadow-xl shadow-gray-400'>
                <img className="w-80 rounded-full bg-gray-200" src={Me} alt="Me"/>
            </div>
            <div className='ml-16 text-blue-950'>
                <p className='font-bold text-xl'>Hello there!</p>
                <p className='text-lg'>I'm</p>
                <h1 className='font-bold text-8xl'>Richard Divino</h1>
                <p className='text-xl'>
                    <span>A passionate </span> 
                    <span className='font-bold text-red-600'>"Software Developer"</span>
                </p>
                <button 
                    className='
                        flex items-center
                        px-7 py-3
                        mt-10 bg-white
                        font-semibold text-xl shadow-md 
                        shadow-gray-400 rounded-3xl
                        hover:bg-opacity-50
                    '
                >   
                    <FiFileMinus className='text-red-600'/>
                    <span className='ml-2'>Download Resume</span>
                </button>
            </div>
        </div>
    );
}

export default Home;
