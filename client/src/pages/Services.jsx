import React from 'react';
import logo from '../assets/logo.jpeg';

const services = [
  {
    title: "Wig Making",
    price: "from GH₵50",
    discount: "🎄20% discount this Christmas"
  },
  {
    title: "Wig Installations",
    price: "from GH₵150",
    discount: "🎄20% discount this Christmas"
  },
  {
    title: "Revamping Services",
    price: "from GH₵50",
    discount: "🎄20% discount this Christmas"
  },
  {
    title: "Sew in",
    price: "from GH₵50",
    discount: "🎄20% discount this Christmas"
  },
  {
    title: "Training",
    price: "from GH₵50",
    discount: "🎄20% discount this Christmas"
  }
];

const Services = () => {
  return (
    <div className='relative container mx-auto p-4 bg-gradient-to-b from-white via-pink-100 to-pink-100'>
      <div className='absolute inset-0 bg-cover bg-center opacity-10' style={{ backgroundImage: `url(${logo})` }}></div>
      <h1 className='relative text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center'>Our Services</h1>
      <div className='relative w-20 h-1 bg-[#eea239] mx-auto mb-6'></div>
      <div className='relative flex flex-wrap gap-4 md:gap-8 justify-center'>
        {services.map((service, index) => (
          <div key={index} className='service-card p-4 text-center rounded-lg border-b border-yellow-400 shadow-sm w-full sm:w-1/2 lg:w-1/3'>
            <h3 className='font-semibold'>{service.title}</h3>
            {/* <p className='text-gray-600'>{service.price}</p> */}
            {/* <span className='text-green-600'>{service.discount}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
