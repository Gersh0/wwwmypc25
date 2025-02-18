import React from 'react';

const ItemText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="font-inter text-base">
      {children}
    </span>
  );
};

export { ItemText };