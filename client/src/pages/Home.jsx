import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Reviews from './Reviews';
import ContactForm from './Contact';
import About from './About';



const Home = () => {
  return (
    <div className='flex flex-col w-full'>
      <Hero />
      <About />
      <Services />
      {/* <Reviews /> */}
      <ContactForm />
    </div>
  );
};

export default Home;
