import React, { useState } from 'react';
import logo from '../assets/logo2.png';


const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='flex flex-col sm:flex-row sm:gap-4 bg-[#F7879A] text-white justify-center sm:justify-around items-center sm:items-end p-4'>
        <img src={logo} alt="Logo" className='max-w-md px-8'/>
        <div className='flex flex-col gap-4 justify-center max-w-lg sm:mb-4'>
            <div className='flex flex-col'>
                <h1 className='text-2xl mb-2 md:text-4xl font-bold '>Who we are</h1>
                <div className='w-32 h-1 bg-white'></div>
            </div>
            <p className=''>
              We are Laidbydiba, your premier destination for exceptional beauty and hairstyling services. Located in the heart of Bolgatanga, our salon is dedicated to providing high-quality, personalized care to help you look and feel your best.
              {isExpanded && (
                <span>
                  {" "}Our team of experienced professionals specializes in a range of services including glue-less wigs (frontal & closure), bridal hairstyling, revamping services, and more. We take pride in using the finest products and techniques to ensure you leave our salon feeling confident and beautiful.
                </span>
              )}
            <button onClick={handleReadMore} className='py-1 text-white font-semibold'>
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
            </p>
            
        </div>
    </div>
  );
}

export default About;
