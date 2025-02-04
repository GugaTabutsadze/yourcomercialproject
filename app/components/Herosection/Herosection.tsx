import React from 'react'
import Herobutton from '../Buttons/Herobutton'

const Herosection = () => {
  return (
    <div className='flex items-center justify-center lg:justify-between mt-[80px] py-4 px-6 lg:px-32'>
      <div className='flex flex-col items-center justify-center text-center lg:text-start lg:items-start lg:justify-normal space-y-3'>
        <h1 className='text-5xl font-bold lg:w-[50%] bg-clip-text text-transparent
          bg-white bg-gradient-to-br from-[#DB287B] to-[#DB9E28]'>Secure your accounts, secure your peace of mind</h1>
        <h3 className='text-lightPink text-xl lg:w-1/2 xl:w-full'>Simple and secure password management for all your accounts!</h3>
        <Herobutton />
      </div>
     <div className='hidden lg:block md:w-[500px] xl:mr-[100px]'>
        <img 
           className='md:min-w-[300px]'
           width={500} height={500}
           src='/images/website.png'
           alt='web' 
        />
     </div>
    </div>
  )
}

export default Herosection
