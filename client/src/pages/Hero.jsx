import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Flickity from 'react-flickity-component';

const flickityOptions = {
  initialIndex: 0,
  autoPlay: 3000, // Auto-slide every 3 seconds
  wrapAround: true // Allows continuous loop
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const currentDate = new Date();
      const currentDay = currentDate.getDay(); // Sunday - Saturday: 0 - 6
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
    <div className="flex flex-col w-full items-center justify-center min-h-screen text-center bg-gray-50 p-6">
      <div className=" w-full mb-8">
        <Flickity
          className={'carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <img
            src="https://images.unsplash.com/photo-1517840933437-c41356892b35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 1"
            className="object-cover w-full max-h-[40vh]"
          />
          <img
            src="https://images.unsplash.com/photo-1499651681375-8afc5a4db253?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2"
            className="object-cover w-full max-h-[40vh]"
          />
          <img
            src="https://images.unsplash.com/photo-1711504039975-47a6f424d8b4?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2"
            className="object-cover w-full max-h-[40vh]"
          />
          <img
            src="https://images.unsplash.com/photo-1663582815412-665909d70e01?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2"
            className="object-cover w-full max-h-[40vh]"
          />
        </Flickity>
      </div>
      <h1 className="text-5xl font-bold text-gray-800 mb-4">You are Welcome To Laidbydiba</h1>
      <p className="text-lg text-gray-600 mb-8">
        Your go-to destination for stylish and professional hair services. Book your appointment today!
      </p>
      <div className='flex gap-4'>
        <Link to="/slots" className="bg-Complemetary text-white px-4 py-2 rounded-lg">Book Now</Link>
        <Link to="/services" className="bg-Secondary bg-[#eea239] text-white px-4 py-2 rounded-lg">Our Services</Link>
      </div>
    </div>
  );
};

export default Hero;
