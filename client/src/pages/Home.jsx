import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Reviews from './Reviews';
import ContactForm from './Contact';


const Home = () => {
  return (
    <div className='flex flex-col w-full'>
      <Hero />
      <Services />
      {/* <Reviews /> */}
      <ContactForm />
    </div>
  );
};

export default Home;
