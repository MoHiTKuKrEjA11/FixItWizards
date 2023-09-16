import React from 'react';
import  hamburger  from "../assets/icons/hamburger.svg";
function Navbar() {
  return (
    <header className='absolute z-10 w-full py-8 padding-x'>
      <nav className='flex items-center justify-between max-container'>
      <h1 className='text-lg'>FixItWizards</h1>
        <ul className='flex items-center justify-center flex-1 gap-16 max-md:hidden'>
          <li>Home</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
        <div className='flex gap-2 text-lg font-medium leading-normal font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-md:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
