import Link from 'next/link'
import React from 'react'

const Subscription = ({monthly}) => {

    const checkedItems = [
        {src: "/images/check.png", item: "Save unlimited passwords"},
        {src: "/images/check.png", item: "Access on any device"},
        {src: "/images/check.png", item: "Secure password generation"},
        {src: "/images/check.png", item: "7 day free trial"},
        {src: "/images/check.png", item: "Password AutoFill"},
    ]


  return (
    <div className='flex flex-col space-y-10 w-full border p-6 border-[#DB287B] rounded-xl sm:max-w-[512px]'>
      <div className='flex flex-col gap-4'>
        {monthly ? <h1 className='font-semibold text-2xl'>Monthly subsciption</h1>
         : <h1 className='font-semibold text-2xl'>Anual subsciption</h1>}
        {monthly ? 
         <p className='flex items-center'>
           <span className='text-5xl font-bold text-[#55424D]'>$3.00</span>
           <span className='text-[#88647B] text-lg ml-4'>/ Month</span>
         </p> :
         <p className='flex items-center'>
         <span className='text-5xl font-bold text-[#55424D]'>$2.50</span>
         <span className='text-[#88647B] text-lg ml-4'>/ Month (Billed yearly)</span>
       </p>
        }
      </div>
      
      <div className='flex flex-col gap-6'>
        {
            checkedItems.map((item, index) => (
              <div key={index} className='flex items-center gap-6'>
                  <div className='flex items-center justify-center p-2 bg-[#FFE7F2] rounded-[50%]'>
                    <img width={30} src={item.src} alt='/' />
                  </div>
                  <p>{item.item}</p>
              </div>
            ))
        }
      </div>
      <Link href="/Signup">
        <button className='w-full py-5 rounded-md border border-[#DB287B] 
             text-[#DB287B] font-bold hover:bg-[#DB287B] hover:text-[#fff] duration-150'>
             Start 7 day free trial
         </button>
     </Link>
    </div>
  )
}

export default Subscription
