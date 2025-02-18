import React from 'react';

const TitleBar = ({ children }: { children: React.ReactNode }) => {
  return <h1 className='text-2xl' style={{ fontFamily: 'DM Serif Display, serif' }}>{children}</h1>;
};

export { TitleBar };