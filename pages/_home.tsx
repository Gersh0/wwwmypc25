import React from 'react';
import { NavBar } from '@/components/atomic-design/molecules/navBar';

const HomePage = () => {
  return (
    <div className="h-full w-full">
      <NavBar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to WWWMYPC</h1>
        <p className="mt-2 text-lg">This is the homepage content.</p>
      </div>
    </div>
  );
};

export default HomePage;