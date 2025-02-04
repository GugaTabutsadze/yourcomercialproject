import Link from 'next/link'
import React from 'react'
import Buttons from '../Buttons/Buttons'

const Burgermenu = ({burgerMenu}) => {
  return (
      <div className='flex flex-col  items-start flex-wrap lg:space-x-6 border-b border-b-[#DB287B] 
           py-4 text-2xl lg:max-w-sm w-full text-darkRed font-medium'>
        <Link className='hover:scale-105 py-2 duration-150 w-full' href="/">Home</Link>
        <Link className='hover:scale-105 py-2 duration-150 w-full' href="#pricing">Pricing</Link>
        <Link className='hover:scale-105 py-2 duration-150 w-full' href="/Contact">Contact</Link>
        <Link className='hover:scale-105 py-2 duration-150 w-full' href="/Faq">Faq</Link>
        <div className='lg:hidden'>
        <Buttons burgerMenu={burgerMenu} />
        </div>
      </div>
  )
}

export default Burgermenu
