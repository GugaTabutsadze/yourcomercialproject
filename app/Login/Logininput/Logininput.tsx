import Signinbutton from '@/app/components/Buttons/Signinbutton'
import Link from 'next/link'
import React, { useState } from 'react'

const Logininput = () => {
     const [hiddenPassword, setHiddenPassword] = useState(false)
        
    
        const hiddenHandle = () => {
            setHiddenPassword(prev => !prev)
        }
       
  return (
    <div className='w-full'>
      <form className='flex flex-col gap-10 w-full
            px-8 py-6 items-start'>
        <div className='flex flex-col relative gap-2 w-full'>
          <label>Email</label>
          <input 
            placeholder='Email address'
            className='border border-black w-full bg-transparent outline-hidden
            px-10 py-2 rounded-lg focus:placeholder:opacity-0'
            type='text' alt='/' />
            <img 
              className='absolute top-[42px] left-3'
              width={23}
              src='/images/email.png'
              alt='/mail' />
        </div>
        <div className='flex flex-col relative gap-2 w-full'>
          <label>Password</label>
          {
            hiddenPassword ? 
            <input 
              placeholder='Password'
              className='border border-black w-full bg-transparent outline-hidden
              px-10 py-2 rounded-lg focus:placeholder:opacity-0'
              type='text' alt='/' /> 
              :
           <input 
              placeholder='Password'
              className='border border-black w-full bg-transparent outline-hidden
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
            
            <Link className= 'text-light-pink absolute top-20 right-5' href="/Forgotpassword">Forgot password?</Link>
            
        </div>
        <Signinbutton />
      </form>
    </div>
  )
}

export default Logininput
