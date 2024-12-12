import React, { useState } from 'react';
import logo from '../assets/logo.jpeg';
import image1 from '../assets/hair.jpg';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='flex flex-col sm:flex-row sm:gap-4 justify-center sm:justify-around items-center sm:items-end p-4'>
        <img src={logo} alt="Logo" className='max-w-md px-8'/>
        <div className='flex flex-col gap-4 justify-center max-w-lg'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl mb-2 md:text-4xl font-bold text-gray-800'>About Us</h1>
                <div className='w-24 h-1 bg-pink-100'></div>
            </div>
            <p className=''>
              Welcome to Laidbydiba, your premier destination for exceptional beauty and hairstyling services. Located in the heart of Bolgatanga, our salon is dedicated to providing high-quality, personalized care to help you look and feel your best.
              {isExpanded && (
                <span>
                  {" "}Our team of experienced professionals specializes in a range of services including glue-less wigs (frontal & closure), bridal hairstyling, revamping services, and more. We take pride in using the finest products and techniques to ensure you leave our salon feeling confident and beautiful.
                </span>
              )}
            <button onClick={handleReadMore} className='py-1 text-pink-400 font-semibold'>
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
            </p>
            
        </div>
    </div>
  );
}

export default About;
