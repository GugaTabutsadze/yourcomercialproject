"use client"
import React, { useState } from 'react'
import Pricingbuttons from '../Buttons/Pricingbuttons'
import Subscription from './Subscription/Subscription'


const Pricing = () => {

    const [monthly, setMonthly] = useState<boolean>(true)

    

  return (
    <div id='pricing' className='flex flex-col items-center px-6 space-y-16'>
      <div>
        <h1 className='text-6xl font-semibold text-dark-red'>Pricing</h1>
      </div>
      <div className='flex items-center justify-center  w-full'>
        <Pricingbuttons monthly={monthly} setMonthly={setMonthly}/>
      </div>
        <Subscription monthly={monthly} />
    </div>
  )
}

export default Pricing
