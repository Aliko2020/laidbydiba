import React from 'react';

const Services = () => {
  return (
    <div className='flex flex-col gap-2 mt-4 w-full p-4'>
        <h1 className='text-lg text-gray-800 font-bold sm:mb-4'>Services</h1>
        <div className='w-full flex flex-wrap gap-4 text-gray-700'>
               
                    <div className='flex flex-col gap-1 border p-2 w-full lg:max-w-md rounded-md'>
                        <h3 className='font-semibold '>Glue-less wigs (frontal & closure)</h3>
                        <p className='text-sm'>from GH₵50</p>
                    </div>

      
                    <div className='flex flex-col gap-1 border p-2 w-full lg:max-w-md rounded-md'>
                        <h3 className='font-semibold'>Bridal Hairstyling</h3>
                        <p className='text-sm'>from GH₵150</p>
                    </div>
                    
           
                    <div className='flex flex-col gap-1 border p-2 w-full lg:max-w-md rounded-md'>
                        <h3 className='font-semibold'>Revamping services</h3>
                        <p className='text-sm'>from GH₵50</p>
                    </div>
                    
            
                    <div className='flex flex-col gap-1 border p-2 w-full lg:max-w-md rounded-md'>
                        <h3 className='font-semibold'>Wig styling for Occasion & shoots</h3>
                        <p className='text-sm'>from GH₵50</p>
                    </div>
                    
        
                    <div className='flex flex-col gap-1 border p-2 w-full lg:max-w-md rounded-md'>
                        <h3 className='font-semibold'>Hair colouring</h3>
                        <p className='text-sm'>from GH₵50</p>
                    </div>
                    
        </div>
        <div className='w-full md:w-3/10 p-2'>
            {/* Additional content for the second div can go here */}
        </div>
    </div>
  );
}

export default Services;
