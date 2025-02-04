"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Forgotinput from './Forgotinput/Forgotinput';

const page = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return null; // Render nothing on the server
    }
  
    return (
      <div className='flex flex-col items-center justify-center space-y-8 mt-[30px]'>
        <h1 className='text-center text-3xl sm:text-5xl font-bold'>Forgot password</h1>
        <div className='flex flex-col items-center md:shadow-2xl rounded-3xl w-full md:max-w-[75%] lg:w-[900px]'>
        <Forgotinput/>
        <p className='mt-8 px-10 pb-6 text-red-600 text-[16px]'>
        Resetting your password will cause you to lose all the data in your account! Only use this as a last resort
        </p>
        </div>
        
      </div>
    )
}

export default page
