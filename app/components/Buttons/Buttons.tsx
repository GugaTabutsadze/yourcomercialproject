import Link from 'next/link'
import React from 'react'

const Buttons = ({burgerMenu}) => {
  return (
    <div className={`flex items-center pt-8 lg:pt-0 gap-4`}>
        <button className='flex items-center font-bold text-[18px]
              text-darkPink border border-darkPink rounded-lg px-6 py-2'>
             <Link href="/Login">Login</Link>
        </button>
        <button className='flex items-center font-bold text-[18px]
              bg-notVerylightPink text-white rounded-lg px-6 py-2'>
             <Link href="/Signup">Sign up</Link>
        </button>
      </div>
  )
}

export default Buttons
