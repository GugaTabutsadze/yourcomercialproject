import React from 'react'

const Openclose = ({handleBurgerMenu, burgerMenu}) => {
  return (
    <div className='flex items-center justify-center lg:hidden w-8'>
      <img 
          onClick={handleBurgerMenu}
          className={`cursor-pointer ${burgerMenu ? 'hidden' : 'block'}`}
          width={35} height={35} 
          src='/images/menuburger.png'
          alt='menu' />
      <img 
          onClick={handleBurgerMenu}
          className={`cursor-pointer ${burgerMenu ? 'block' : 'hidden'}`}
          width={20} height={20}
          src='/images/close.png' 
          alt='close'/>
    </div>
  )
}

export default Openclose
