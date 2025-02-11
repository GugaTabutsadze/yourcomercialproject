import Forgotbutton from '@/app/components/Buttons/Forgotbutton'
import React from 'react'

const Forgotinput = () => {
  return (
    <div className='w-full'>
      <form className='flex flex-col gap-10 w-full
            px-8 py-6 items-start'>
        <div className='flex flex-col items-center relative gap-2 w-full'>
            <p>Enter the email for your account</p>
        <p>
         You will be emailed a link to reset your password
         </p>
         <div className='w-full relative'>
         <label>Email</label>
          <input 
            placeholder='Email address'
            className='border border-black w-full bg-transparent outline-hidden
            px-10 py-2 rounded-lg focus:placeholder:opacity-0'
            type='text' alt='/' />
            <img 
              className='absolute top-[33px] left-3'
              width={23}
              src='/images/email.png'
              alt='/mail' />
         </div>
        </div>
        <Forgotbutton />
      </form>
    </div>
  )
}

export default Forgotinput
