import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between px-4 py-8 mt-[100px] border-t border-b border-black'>
      <div>

      </div>
      <div className='flex flex-col items-center md:flex-row gap-6 underline text-[18px] md:ml-[180px]'>
        <Link href="/Contact">Contact us!</Link>
        <Link href="/Faq">Frequently asked questions!</Link>
        <Link href="/Signup">Sign up!</Link>
      </div>
      <div className='flex items-end font-semibold text-[18px] h-[80px]'>
        <p>support@pass-protect.com</p>
      </div>
    </div>
  )
}

export default Footer
