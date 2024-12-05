import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Reviews from './Reviews';


const Home = () => {
  return (
    <div className='flex flex-col w-full'>
      <Hero />
      <Services />
      <Reviews />
    </div>
  );
};

export default Home;
