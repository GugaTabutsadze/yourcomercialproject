import Link from 'next/link'
import React from 'react'

const Buttons = () => {
  return (
    <div className={`flex items-center pt-8 lg:pt-0 gap-4`}>
        <button className='flex items-center font-bold text-[18px]
              text-dark-pink border border-dark-pink rounded-lg px-6 py-2'>
             <Link href="/Login">Login</Link>
        </button>
        <button className='flex items-center font-bold text-[18px]
              bg-not-verylight-pink text-white rounded-lg px-6 py-2'>
             <Link href="/Signup">Sign up</Link>
        </button>
      </div>
  )
}

export default Buttons
