import React from 'react';
import Hero from './Hero';
import Services from './Services';


const Home = () => {
  return (
    <div className='flex flex-col w-full'>
      <Hero />
      <Services />
    </div>
  );
};

export default Home;
