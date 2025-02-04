import Link from 'next/link'
import React from 'react'

const Signinbutton = () => {
    return (
        <div className='w-full'>
          <button className='flex items-center justify-center px-4 py-3  w-full rounded-md text-white font-semibold bg-[#DB287B]
                  duration-150 hover:bg-[#75093c] border border-[#DB287B] hover:border-[#75093c]'>
            <Link href="">Sign up</Link>
          </button>
        </div>
      )
}

export default Signinbutton

