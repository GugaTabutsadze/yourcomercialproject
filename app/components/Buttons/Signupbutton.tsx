import Link from 'next/link'
import React from 'react'

const Signupbutton = () => {
  return (
    <div className='w-full'>
      <input 
          type='submit'
          value={'Sign up'}
          className='flex items-center justify-center px-4 py-3 cursor-pointer w-full rounded-md text-white font-semibold bg-[#DB287B]
          duration-150 hover:bg-[#75093c] border border-[#DB287B] hover:border-[#75093c]'/>
        
    </div>
  )
}

export default Signupbutton
