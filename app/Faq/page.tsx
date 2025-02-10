import React from 'react'
import Questions from './Questions/Questions'
import Link from 'next/link'


const page = () => {
  const questions = [
    {id: 1, quest: "Question 1", answer: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
    {id: 2, quest: "Question 2", answer: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
    {id: 3, quest: "Question 3", answer: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
    {id: 4, quest: "Question 4", answer: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
    {id: 5, quest: "Question 5", answer: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
    {id: 6, quest: "Question 6", answer: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
    {id: 7, quest: "Question 7", answer: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
  ]
  return (
    <div className='flex flex-col items-center justify-center mt-[30px]'>
      <h1 className='text-4xl font-medium text-center'>Frequently asked questions</h1>
      <div className='w-1/2'>
        <Questions questions={questions}/>
      </div>
      <div className='flex flex-col gap-4 px-4 text-center items-center'>
        <h2 className='text-2xl font-medium'>Still have questions?</h2>
        <div className='flex flex-col gap-2 items-center'>
          <p className='text-gray-400'>Can't find the answer you're looking for? Get in touch with us.</p>
          <button className='bg-[#FFFCBA] text-[#85823D] px-3 py-1 flex items-center
                  justify-center rounded-lg hover:brightness-90 duration-100'>
            <Link href='/Contact'>Contact us</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default page
