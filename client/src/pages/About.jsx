import React, { useState } from 'react';
import logo from '../assets/logo2.png';
import image1 from '../assets/hair.jpg';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative flex flex-col sm:flex-row text-white sm:gap-4 justify-center sm:justify-around items-center sm:items-end p-4 bg-cover bg-center" style={{ backgroundImage: `url(${image1})`, opacity: 0.8 }}>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10">
        <img src={logo} alt="Logo" className="max-w-md p-4" />
      </div>
      <div className="relative z-10 flex flex-col gap-4 justify-center max-w-lg">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-2 md:text-4xl font-bold">About Us</h1>
          <div className="w-24 h-1 bg-white"></div>
        </div>
        <p className="">
          Welcome to Laidbydiba, your premier destination for exceptional beauty and hairstyling services. Located in the heart of Bolgatanga, our salon is dedicated to providing high-quality, personalized care to help you look and feel your best.
          {isExpanded && (
            <span>
              {" "}Our team of experienced professionals specializes in a range of services including glue-less wigs (frontal & closure), bridal hairstyling, revamping services, and more. We take pride in using the finest products and techniques to ensure you leave our salon feeling confident and beautiful.
            </span>
          )}
          <button onClick={handleReadMore} className="py-1 font-semibold">
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default About;
