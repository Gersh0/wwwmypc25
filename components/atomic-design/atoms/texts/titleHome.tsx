// components/atomic-design/atoms/texts/titleHome.tsx
import React from 'react';

const TitleHome = ({ children }: { children: React.ReactNode }) => {
  return <h1 className='text-7xl' style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: '600' }}>{children}</h1>;
};

export { TitleHome };