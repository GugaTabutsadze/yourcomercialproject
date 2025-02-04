"use client"
import Link from 'next/link'
import React from 'react'
import Buttons from '../Buttons/Buttons'
import Burgermenu from '../NavBurgerMenu/Burgermenu'
import Openclose from '../Openclose/Openclose'

const Nav = () => {
    const [burgerMenu, setBurgerMenu] = React.useState(false)

    const handleBurgerMenu = () => {
        setBurgerMenu(!burgerMenu)
    }
  return (
    <div className='flex flex-col lg:flex-row justify-between  items-start lg:items-center w-full px-6 lg:px-16 py-9'>
      <div className='hidden lg:flex flex-wrap space-x-6 text-2xl  max-w-sm w-full text-darkRed font-medium'>
        <Link className='hover:scale-105 py-2 duration-150' href="/">Home</Link>
        <Link  className='hover:scale-105 py-2 duration-150' href="#pricing">Pricing</Link>
        <Link className='hover:scale-105 py-2 duration-150' href="/Contact">Contact</Link>
        <Link className='hover:scale-105 py-2 duration-150' href="/Faq">Faq</Link>
      </div>
      <div className='flex items-center  justify-between w-full lg:w-auto h-10 '>
        <div className='lg:hidden'></div>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-notVerylightPink
            nav-h1 font-bold'><Link href="/">Your Logo</Link></h1>
            <Openclose handleBurgerMenu={handleBurgerMenu} burgerMenu={burgerMenu} />
        </div>
        <div className='hidden lg:flex items-center  gap-4'>
        <Buttons burgerMenu={burgerMenu} />
        </div>
      <div className='lg:hidden w-full mt-4'>
          {burgerMenu && <Burgermenu burgerMenu={burgerMenu}/>}
      </div>
    </div>
  )
}

export default Nav
