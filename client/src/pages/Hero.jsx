import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/image1.png';

const Hero = () => {
  return (
    <div className='flex flex-col w-full'>
        <div className="flex w-full py-2 px-2">
            <img src={image1} alt="Image 1" className="w-full rounded-lg h-auto max-h-[50vh]" />
        </div>
        <div className='flex flex-col gap-1 mt-1 px-2'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold '>Laidbydiba</h1>
                <Link to="/slots" className='bg-Complemetary text-white px-4 py-1 rounded-sm'>Book</Link>
            </div>
            <div className='flex justify-between gap-2'>
                <div className='flex gap-2'>
                    <span className='font-semibold text-blue-400'>Closed</span>
                    <span>Bolgatanga main street</span>
                </div>
                <Link className='text-blue-400'>Get Directions</Link>
            </div>
        </div>
    </div>
  );
};

export default Hero;
