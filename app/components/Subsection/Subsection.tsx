import React from 'react'

const Subsection = () => {
  return (
    <div className='flex flex-col items-center mt-[150px] px-10'>
      <div >
        <h1 className='text-4xl md:text-6xl  font-semibold text-darkerGreen'>Compability</h1>
      </div>
      <div>
        <p className='text-2xl mt-[50px] text-center text-darkerGreen'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis provident vitae deleniti quae magni possimus.</p>
      </div>
      <div className='flex flex-col mt-[50px] md:mt-0 md:flex-row items-center justify-between max-w-[1000px] w-full'>
        <img width={400}  src='/images/google.svg' alt='google' />
        <img width={350}  src='/images/appstore.svg' alt='appstore' />
      </div>
    </div>
  )
}

export default Subsection

