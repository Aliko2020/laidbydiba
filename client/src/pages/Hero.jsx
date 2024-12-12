import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Flickity from 'react-flickity-component';
import hair from '../assets/hair.jpg'

const flickityOptions = {
  initialIndex: 0,
  autoPlay: 3000, // Auto-slide every 3 seconds
  wrapAround: true // Allows continuous loop
};

const Hero = () => {
  
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-[90vh] text-center p-4 bg-gradient-to-b from-[#ec99a7] via-pink-100 to-white">
      <div className="w-full max-h-[40vh] overflow-hidden mb-0 rounded-lg"> {/* Reduced bottom margin */}
        <Flickity
          className={'carousel'} 
          elementType={'div'}
          options={flickityOptions} 
          disableImagesLoaded={false} 
          reloadOnUpdate 
          static // default false
        >
          
          <img
            src="https://images.unsplash.com/photo-1517840933437-c41356892b35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 1"
            className="object-cover w-full max-h-[40vh] md:max-h-full md:h-auto"
          />
          <img
            src="https://images.unsplash.com/photo-1499651681375-8afc5a4db253?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2"
            className="object-cover w-full max-h-[40vh] md:max-h-full md:h-auto"
          />
          <img
            src="https://images.unsplash.com/photo-1711504039975-47a6f424d8b4?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 3"
            className="object-cover w-full max-h-[40vh] md:max-h-full md:h-auto"
          />
          <img
            src="https://images.unsplash.com/photo-1663582815412-665909d70e01?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 4"
            className="object-cover w-full max-h-[40vh] md:max-h-full md:h-auto"
          />
        </Flickity>
      </div>
      <h1 className="text-5xl font-bold text-[#F7879A] mb-4 font-test mt-4">Welcome To Laidbydiba</h1>
      <p className="text-lg text-gray-900 mb-2"> {/* Reduced bottom margin */}
        Your go-to destination for stylish and professional hair services. Book your appointment today!
      </p>
      <div className='flex gap-4'> {/* Removed margin */}
        <Link to="/slots" className="bg-[#F7879A] text-white px-4 py-2 rounded-l-lg  font-semibold">Book Now</Link>
        <Link to="/services" className="bg-Secondary bg-[#eea239] text-white px-4 py-2 rounded-r-lg font-semibold">Training</Link>
      </div>
    </div>
  );
};

export default Hero;
