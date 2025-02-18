import React from 'react';

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h1 className='text-2xl font-bold'>{children}</h1>;
};

export { Title };
