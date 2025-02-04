import Link from 'next/link'
import React from 'react'

const Pricingsubsection = () => {
  return (
    <div className='flex items-center justify-center text-center mt-6'>
      <p className='font-semibold'>If you're a business or organization, you can <Link className='text-lightPink font-semibold' href="/Signup">contact us</Link> to discuss bulk discounts
      </p>
    </div>
  )
}

export default Pricingsubsection
