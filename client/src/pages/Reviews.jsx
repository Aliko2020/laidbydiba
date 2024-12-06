import React, { useState } from 'react';

const Reviews = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const reviewText = "I recently visited Laidbydiba for a hair and makeup session, and I couldn't be more thrilled with the results. From the moment I walked in, I was greeted with warm smiles and a welcoming atmosphere. The staff were incredibly professional, taking the time to understand exactly what I wanted.";

  const previewText = reviewText.split(' ').slice(0, 20).join(' ');

  return (
    <div className='flex flex-col px-4'>
        
            <h1 className='text-lg font-bold'>Reviews</h1>
            <div className='w-16 p-0.5 bg-black mb-4'></div>
        
        <div className='flex flex-col md:flex-row gap-4 '>
      <div className='flex flex-col text-[17px] max-w-lg'>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <div className='flex justify-center items-center w-16 h-16 bg-gray-100 rounded-full'>
              <span className='text-2xl text-gray-400'>A</span>
            </div>
            <div className='flex flex-col gap-1 justify-center'>
              <p className='text-gray-600 text-[18px] font-semibold'>Amanda A.</p>
              <p className='text-sm text-gray-400'>Tue,12 Sep 2024 at 11:31pm</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='text-gray-600'>
            {isExpanded ? reviewText : `${previewText}...`}
            <span onClick={toggleReadMore} className='text-Links cursor-pointer'>
            {isExpanded ? 'Read Less' : 'Read More'}
          </span>
          
          </p>
         
        </div>
      </div>
      <div className='flex flex-col text-[17px] max-w-lg'>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <div className='flex justify-center items-center w-16 h-16 bg-gray-100 rounded-full'>
              <span className='text-2xl text-gray-400'>A</span>
            </div>
            <div className='flex flex-col gap-1 justify-center'>
              <p className='text-gray-600 text-[18px] font-semibold'>Gloria J.</p>
              <p className='text-sm text-gray-400'>Tue,12 Sep 2024 at 11:31pm</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='text-gray-600'>
            {isExpanded ? reviewText : `${previewText}...`}
            <span onClick={toggleReadMore} className='text-Links cursor-pointer'>
            {isExpanded ? 'Read Less' : 'Read More'}
          </span>
          
          </p>
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default Reviews;
