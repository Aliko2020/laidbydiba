import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo2.png';

const Training = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  const handleJoinNow = () => {
    navigate('/training');
  };

  return (
    <div className='flex flex-col sm:flex-row sm:gap-4 bg-pink-700 text-white justify-center rounded-br-3xl sm:justify-around items-center sm:items-end p-4'>
        <div className='flex flex-col gap-4 justify-center max-w-lg sm:mb-4'>
            <div className='flex flex-col relative'>
                <h1 className='text-2xl mb-2 md:text-4xl font-bold mt-4'>
                  Join Our Training Program!
                </h1>
                <div className='w-32 h-1 bg-white'></div>
            </div>
            <p className=''>
            Unlock your potential with our expert-led courses in Wig Making, Makeup Artistry, and more! Whether you're a budding artist or looking to refine your skills, we've got the perfect program tailored just for you.
              {isExpanded && (
                <span>
                  {" "}Our team of experienced professionals specializes in a range of services including glue-less wigs (frontal & closure), bridal hairstyling, revamping services, and more. We take pride in using the finest products and techniques to ensure you leave our salon feeling confident and beautiful.
                </span>
              )}
            </p>
            <div className='flex'>
            <button onClick={handleJoinNow} className='py-2 bg-white px-8 rounded-lg mb-2 text-pink-700 font-semibold'>
                Join Now
            </button>
            </div>
        </div>
        <img src={logo} alt="Logo" className='max-w-md px-8'/>
    </div>
  );
}

export default Training;
