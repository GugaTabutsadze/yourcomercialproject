import Link from 'next/link'
import React from 'react'

const Herobutton = () => {
  return (
    <div>
        <Link href="Signup">
          <button className='flex items-center mt-6 bg-lightYellow px-4 py-3 rounded-lg'>
             <p className='text-[#85823D] font-semibold'>Get started</p>
             <img 
               className='hover:translate-x-2 duration-200'
               width={30} height={30}
               src='/images/rightarrow.png'
               alt='arrow' />
          </button>
        </Link>
    </div>
  )
}

export default Herobutton
