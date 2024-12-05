import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/image1.png';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const currentDate = new Date();
      const currentDay = currentDate.getDay(); // Sunday - Saturday : 0 - 6
      const currentTime = currentDate.getHours() * 60 + currentDate.getMinutes(); // Current time in minutes

      // Check if today is Monday to Saturday (1 to 6) and current time is between 8 AM (480) and 8 PM (1200)
      if (currentDay >= 1 && currentDay <= 6 && currentTime >= 480 && currentTime <= 1200) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkOpenStatus();
    const intervalId = setInterval(checkOpenStatus, 60000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className='flex flex-col w-full'>
      <div className="flex w-full py-2 px-2">
        <img src={image1} alt="Image 1" className="w-full rounded-lg h-auto max-h-[50vh]" />
      </div>
      <div className='flex flex-col mt-2 px-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl text-gray-800 font-bold'>Laidbydiba</h1>
          <Link to="/slots" className='bg-Complemetary text-white px-4 py-1 rounded-sm'>Book</Link>
        </div>
        <div className='flex justify-between gap-2 mt-2'>
          <div className='flex gap-2'>
            <span className={`text-${isOpen ? 'Links' : 'bg-red-400'}`}>Shop:{isOpen ? 'Opened' : 'Closed'}</span>
            <span className='text-gray-400'>Bolgatanga main street</span>
          </div>
          <Link className='text-Links'>Get Directions</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
