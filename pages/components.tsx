import React from 'react';
import Navbar from '@/components/common/navbar';

const components = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <Navbar />

      <div className='md:w-10/12 w-full h-full flex flex-col gap-4 mt-6 mb-20'>
        components
      </div>
    </div>
  )
}

export default components