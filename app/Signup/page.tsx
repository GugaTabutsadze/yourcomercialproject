"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Input from './Inputs/Input';


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
      <h1 className='text-center text-3xl sm:text-5xl font-bold'>Create account</h1>
      <p className='text-center text-gray-600 w-[95%] sm:w-[65%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur in fugiat placeat voluptas, quisquam nulla aperiam.</p>
      <div className='flex flex-col items-center md:shadow-2xl rounded-3xl w-full md:max-w-[75%] lg:w-[900px]'>
      <Input />
      <p className='mt-8 pb-6 text-[18px]'>
       Already have an account?  <Link className='text-light-pink text-[18px] font-semibold' href="/Login">Sign in</Link>
      </p>
      </div>
      
    </div>
  )
}

export default page
