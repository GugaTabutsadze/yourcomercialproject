"use client"
import React, { useState } from 'react'

const Questions = ({questions}) => {

    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const handleOpen = (id: number): void => {
        setFaqOpen((prev) => (prev === id ? null : id));
      };


  return (
    <div className='w-full py-6'>
      {questions.map((question) => (
        <div 
          className='flex flex-col gap-2 py-3 px-2 border-b border-gray-300 items-start'
          key={question.id}>
        <div className='flex items-start justify-between w-full'>
         <div>
           <h2 className='text-[18px] md:text-3xl font-bold'>{question.quest}</h2>
         </div>
          <div>
            {faqOpen === question.id ? 
            <img
              onClick={() => handleOpen(question.id)}
              className='cursor-pointer' 
              width={30}
              src='/images/minus.png' alt='minus' />
                :
            <img src='/images/plus.png' 
                onClick={() => handleOpen(question.id)}
              className='cursor-pointer' 
              width={30}
              alt='plus' />
            }
          </div>
        </div>
          <div className='w-[70%]'>
            {faqOpen === question.id && (
              <p className='text-[18px] text-gray-400 font-medium'>{question.answer}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Questions
