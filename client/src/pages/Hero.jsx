import React from 'react';
import { Link } from 'react-router-dom';

const flickityOptions = {
  initialIndex: 0,
  autoPlay: 3000,
  wrapAround: true
};

const Hero = () => {

  return (
    <div className="flex flex-col text-white w-full items-center justify-center min-h-[100vh] text-center p-4 bg-center bg-cover bg-[linear-gradient(90deg,rgba(99,115,115,1)_0%,rgba(99,115,115,0.38699229691876746)_99%),url('./assets/back.png')]">
      <h1 className="text-5xl font-bold mb-4 font-test mt-4 animation">Welcome To Laidbydiba</h1>
      <p className="text-lg mb-2">
        Your go-to destination for stylish and professional hair services. Book your appointment today!
      </p>
      <div className='flex gap-4'> 
        <Link to="/slots" className="btn btn-primary">Book Now</Link>
        <Link to="/training" className="btn btn-secondary">Training</Link>
      </div>
    </div>
  );
};

export default Hero;
