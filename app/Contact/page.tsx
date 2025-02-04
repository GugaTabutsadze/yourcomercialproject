"use client"
import React from 'react'

const page = () => {
  const [isClient, setIsClient] = React.useState(false)
  React.useEffect(() => {
    setIsClient(true)
  }, [])
  if (!isClient) return null
  return (
    <div className='flex flex-col items-center  gap-6 mt-[100px]'>
      <h1 className='text-3xl font-semibold'>Contact us</h1>
      <p className='text-center px-6 text-neutral-500 text-lg'>Fill this form to contact us, we'll get back to you as soon as we can</p>
      <form className='flex flex-col items-start gap-4 px-6 w-full md:w-4/5 lg:w-[800px]'>
        <div className='flex flex-col gap-2 w-full'>
          <label className='text-[17px]'>Email</label>
          <input
             placeholder='The email we will replay to'
             className='w-full border border-black rounded-lg p-2 focus:placeholder:opacity-0'
             type='email' />
        </div>
        <div className='flex flex-col gap-2 w-full'>
           <label className='text-[17px]'>Message</label>
           <textarea className='border border-black rounded-lg h-[300px]'/>
        </div>
        <button className='bg-[#FFFCBA] py-2 px-6 w-full rounded-md text-[#85823D] border border-[#FFFCBA]
                 text-base font-semibold duration-150 hover:brightness-90'>
          <span>Send massege</span>
        </button>
      </form>
    </div>
  )
}

export default page
