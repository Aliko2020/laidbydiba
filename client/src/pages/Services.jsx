import React from 'react';

const services = [
  {
    title: "Glue-less Wigs (Frontal & Closure)",
    price: "from GH₵50",
    discount: "🎄20% discount this Christmas"
  },
  {
    title: "Bridal Hairstyling",
    price: "from GH₵150",
    discount: "🎄20% discount this Christmas"
  },
  {
    title: "Revamping Services",
    price: "from GH₵50",
    discount: "🎄20% discount this Christmas"
  },
  {
    title: "Wig Styling for Occasion & Shoots",
    price: "from GH₵50",
    discount: "🎄20% discount this Christmas"
  },
  {
    title: "Hair Colouring",
    price: "from GH₵50",
    discount: "🎄20% discount this Christmas"
  }
];

const Services = () => {
  return (
    <div className='container mx-auto p-4 bg-gradient-to-b from-white via-pink-100 to-pink-100'>
      <h1 className='text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center'>Our Services</h1>
      <div className='w-20 h-1 bg-[#eea239] mx-auto mb-6'></div>
      <div className='flex flex-wrap gap-4 md:gap-8 justify-center'>
        {services.map((service, index) => (
          <div key={index} className='service-card p-4 text-center rounded-lg border-b border-yellow-400 shadow-sm w-full sm:w-1/2 lg:w-1/3'>
            <h3 className='font-semibold'>{service.title}</h3>
            <p className='text-gray-600'>{service.price}</p>
            {/* <span className='text-green-600'>{service.discount}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
