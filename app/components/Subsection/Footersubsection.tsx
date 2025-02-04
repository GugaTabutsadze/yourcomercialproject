import Link from 'next/link'
import React from 'react'

const Footersubsection = () => {
  return (
    <div className='flex justify-between px-4 py-4'>
      <p>Pass Protect 2023 ©</p>
      <Link className='underline' href="/Termsandservice">Terms of service</Link>
    </div>
  )
}

export default Footersubsection
