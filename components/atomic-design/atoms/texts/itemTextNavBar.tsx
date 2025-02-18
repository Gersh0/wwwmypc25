import React from 'react';

const TextNavBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="font-inter text-gray-500 text-base">
      {children}
    </span>
  );
};

export { TextNavBar };