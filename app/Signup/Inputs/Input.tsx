import Signupbutton from '@/app/components/Buttons/Signupbutton'
import Link from 'next/link'
import React, { useState } from 'react'

const Input = () => {
    const [hiddenPassword, setHiddenPassword] = useState(false)
    const [confirmHidden, setConfirmHidden] = useState(false)

    const hiddenHandle = () => {
        setHiddenPassword(prev => !prev)
    }
    const handleConfirm = () => {
        setConfirmHidden(prev => !prev)
    }

  return (
    <div className='w-full'>
      <form className='flex flex-col gap-10 w-full
            px-8 py-6 items-start'>
        <div className='flex flex-col relative gap-2 w-full'>
          <label htmlFor='email'>Email</label>
          <input 
            required
            name='email'
            id='email'
            placeholder='Email address'
            className='border border-black w-full bg-transparent outline-none
            px-10 py-2 rounded-lg focus:placeholder:opacity-0'
            type='text' alt='/' />
            <img 
              className='absolute top-[42px] left-3'
              width={23}
              src='/images/email.png'
              alt='/mail' />
        </div>
        <div className='flex flex-col relative gap-2 w-full'>
          <label htmlFor="password">Password</label>
          {
            hiddenPassword ? 
            <input
              required
              name='password' 
              id='password'
              placeholder='Password'
              className='border border-black w-full bg-transparent outline-none
              px-10 py-2 rounded-lg focus:placeholder:opacity-0'
              type='text' alt='/' /> 
              :
           <input 
              required
              name='password'
              id='password'
              placeholder='Password'
              className='border border-black w-full bg-transparent outline-none
              px-10 py-2 rounded-lg focus:placeholder:opacity-0'
              type='password' alt='/' />
          }
          <img 
              className='absolute top-[42px] left-3'
              width={23}
              src='/images/lock.png'
              alt='/lock' />
            <div onClick={hiddenHandle} className='cursor-pointer'>
                {
                   hiddenPassword ?
                   <img 
                     className='absolute top-[42px] right-3'
                     width={23}
                     src='/images/eye.png'
                     alt='/lock' /> 
                     :
                   <img 
                     className='absolute top-[42px] right-3'
                     width={23}
                     src='/images/hidden.png'
                     alt='/lock' />
                }
            </div>
          
        </div>
        <div className='flex flex-col relative gap-2 w-full'>
          <label htmlFor="confirmpassword">Confirm password</label>
          {
            confirmHidden ? 
            <input 
              required
              name='confirmpassword'
              id='confirmpassword'
              placeholder='Password'
              className='border border-black w-full bg-transparent outline-none
              px-10 py-2 rounded-lg focus:placeholder:opacity-0'
              type='text' alt='/' /> 
              :
           <input 
              required
              name='confirmpassword'
              id='confirmpassword'
              placeholder='Password'
              className='border border-black w-full bg-transparent outline-none
              px-10 py-2 rounded-lg focus:placeholder:opacity-0'
              type='password' alt='/' />
          }
          <img 
              className='absolute top-[42px] left-3'
              width={23}
              src='/images/lock.png'
              alt='/lock' />
            <div onClick={handleConfirm} className='cursor-pointer'>
                {
                   confirmHidden ?
                   <img 
                     className='absolute top-[42px] right-3'
                     width={23}
                     src='/images/eye.png'
                     alt='/lock' /> 
                     :
                   <img 
                     className='absolute top-[42px] right-3'
                     width={23}
                     src='/images/hidden.png'
                     alt='/lock' />
                }
            </div>
        </div>
        <Signupbutton />
        <div className='flex gap-2 text-[18px]'>
           <input required type='checkbox' alt='/' />
           <p>I agree with the <Link className='text-lightPink font-semibold' href="/Termsandservice">
            Terms & Conditions</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Input
