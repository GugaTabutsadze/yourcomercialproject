"use client"
import React, { useEffect, useState } from 'react'
import Signupbutton from '../components/Buttons/Signupbutton'
import Link from 'next/link'
import Input from '../Signup/Inputs/Input'
import Logininput from './Logininput/Logininput'

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
    <h1 className='text-center text-3xl sm:text-5xl font-bold'>Sign in</h1>
    <p className='text-center text-gray-600 w-[95%] sm:w-[65%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur in fugiat placeat voluptas, quisquam nulla aperiam.</p>
    <div className='flex flex-col items-center md:shadow-2xl rounded-3xl w-full md:max-w-[75%] lg:w-[900px]'>
    <Logininput />
    <p className='mt-8 pb-6 text-[18px]'>
     Already have an account?  <Link className='text-lightPink text-[18px] font-semibold' href="/Login">Sign in</Link>
    </p>
    </div>
    
  </div>
  )
}

export default page
