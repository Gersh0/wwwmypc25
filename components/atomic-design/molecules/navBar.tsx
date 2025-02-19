// components/atomic-design/molecules/NavBar.tsx
import React, { useState } from 'react';
import { TitleBar } from '../atoms/texts/titleBar';
import { NoBackgroundButton } from '../atoms/buttons/noBackgroundButton';
import { RoundedButton } from '../atoms/buttons/roundedButton';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-5">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <TitleBar>WWWMYPC</TitleBar>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-400 hover:border-gray-400"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
          </svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow lg:flex lg:justify-end">
          <NoBackgroundButton className="block mt-4 lg:inline-block lg:mt-0 text-[#898786] hover:text-gray-400 mr-4">Home</NoBackgroundButton>
          <NoBackgroundButton className="block mt-4 lg:inline-block lg:mt-0 text-[#898786] hover:text-gray-400 mr-4">About</NoBackgroundButton>
          <NoBackgroundButton className="block mt-4 lg:inline-block lg:mt-0 text-[#898786] hover:text-gray-400 mr-4">Contact</NoBackgroundButton>
          <RoundedButton backgroundColor="#032B4D" textColor="#A7B4BE" className="block mt-4 lg:inline-block lg:mt-0 w-20 h-10">FAQS</RoundedButton>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };