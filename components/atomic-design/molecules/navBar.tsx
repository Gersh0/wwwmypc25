// components/atomic-design/molecules/NavBar.tsx
import React from 'react';
import { TitleBar } from '../atoms/texts/titleBar';
import { NoBackgroundButton } from '../atoms/buttons/noBackgroundButton';
import { RoundedButton } from '../atoms/buttons/roundedButton';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center pl-24 pr-24 w-auto h-[70px]">
      <div className="mr-96">
        <TitleBar >WWWMYPC</TitleBar>
      </div>
      <div className="flex right-5 space-x-7 text-[#898786]">
        <NoBackgroundButton>Home</NoBackgroundButton>
        <NoBackgroundButton>About</NoBackgroundButton>
        <NoBackgroundButton>Contact</NoBackgroundButton>
        <RoundedButton backgroundColor="#032B4D" textColor="#A7B4BE" className="w-20 h-10">FAQS</RoundedButton>
      </div>
    </nav>
  );
};

export { NavBar };