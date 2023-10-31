import React from 'react';
import { FiFileMinus } from "react-icons/fi";
import Me from '../images/profile-picture.png'
const Home = () => {
    return (
        <div 
            className='
                flex flex-col p-5 md:p-10 items-center
                sm:items-start
                md:flex-row md:items-center bg-gray-200
                lg:p-16
            '
            id="home"
        >
            <div className='mb-5 p-10 rounded-lg bg-white w-fit shadow-xl shadow-gray-400'>
                <img className="w-48 lg:w-52 xl:w-60 2xl:w-80 rounded-full bg-gray-200" src={Me} alt="Me"/>
            </div>
            <div className='text-blue-950 sm:ml-5 md:ml-10 lg:ml-14'>
                <p className='font-bold text-lg'>Hello there!</p>
                <p className='text-sm'>I'm</p>
                <h1 className='font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'>Richard Divino</h1>
                <p className='text-lg'>
                    <span>A passionate </span> 
                    <span className='font-bold text-red-600'>"Software Developer"</span>
                </p>
                <button 
                    className='
                        flex items-center px-5 py-2
                        my-5 border-2 border-blue-950
                        font-semibold text-lg rounded-full
                        hover:bg-blue-950 hover:text-white
                    '
                >   
                    
                    <div className='p-3 rounded-full bg-blue-200 mr-3'>
                        <FiFileMinus className='text-red-600'/>
                    </div>
                    <span className='ml-2'>Download Resume</span>
                </button>
            </div>
        </div>
    );
}

export default Home;
