import React from 'react';

const Services = () => {
  return (
    <div className='flex flex-col gap-2 mt-4 w-full p-4'>
        <h1 className='text-lg font-bold'>Services</h1>
        <div className='w-20 p-0.5 bg-[#eea239] mb-4'></div>
        <div className='w-full flex flex-wrap gap-4 md:gap-10 text-gray-700 text-[17px]'>
               
                    <div className='flex flex-col gap-1 border p-2 w-full lg:max-w-lg rounded-md'>
                        <h3 className=' '>Glue-less wigs (frontal & closure)</h3>
                        <p className=''>from GH₵50</p> <span className='text-green-600'>🎄20% <span className='text-gray-700'>discount this Christmas</span></span>
                    </div>

      
                    <div className='flex flex-col gap-1 border p-2 w-full lg:max-w-lg rounded-md'>
                        <h3 className=''>Bridal Hairstyling</h3>
                        <p className=''>from GH₵150</p> <span className='text-green-600'>🎄20% <span className='text-gray-700'>discount this Christmas</span></span>
                    </div>
                    
           
                    <div className='flex flex-col gap-1 border p-2 w-full lg:max-w-lg rounded-md'>
                        <h3 className=''>Revamping services</h3>
                        <p className=''>from GH₵50</p> <span className='text-green-600'>🎄20% <span className='text-gray-700'>discount this Christmas</span></span>
                    </div>
                    
            
                    <div className='flex flex-col gap-1 border p-2 w-full lg:max-w-lg rounded-md'>
                        <h3 className=''>Wig styling for Occasion & shoots</h3>
                        <p className=''>from GH₵50</p> <span className='text-green-600'>🎄20% <span className='text-gray-700'>discount this Christmas</span></span>
                    </div>
                    
        
                    <div className='flex flex-col gap-1 border p-2 w-full lg:max-w-lg rounded-md'>
                        <h3 className=''>Hair colouring</h3>
                        <p className=''>from GH₵50</p> <span className='text-green-600'>🎄20% <span className='text-gray-700'>discount this Christmas</span></span>
                    </div>
                    
        </div>
        <div className='w-full md:w-3/10 p-2'>
            {/* Additional content for the second div can go here */}
        </div>
    </div>
  );
}

export default Services;
