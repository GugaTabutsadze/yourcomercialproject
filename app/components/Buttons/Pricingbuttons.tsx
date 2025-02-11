import React from 'react'

interface Props {
  monthly: boolean;
  setMonthly: (value: boolean) => void;
}

const Pricingbuttons = ({monthly, setMonthly}:Props) => {
  return (
    <div>
    <div className='flex items-center bg-[#DB287B]  p-3 rounded-xl text-2xl md:text-4xl'>
          <button  onClick={() => setMonthly(true)}
           className={`px-6 sm:px-16 cursor-pointer  py-4 font-bold rounded-xl ${monthly ? "bg-white text-[#DB287B]" : "bg-[#DB287B] text-white"}`}>
            Monthly
          </button>
          <button onClick={() => setMonthly(false)} 
           className={`px-6 sm:px-16 cursor-pointer py-4 font-bold rounded-xl ${!monthly ?  "bg-white text-[#DB287B]" : "bg-[#DB287B] text-white"}`}>
            Anual
          </button>
    </div>
    </div>
  )
}

export default Pricingbuttons
