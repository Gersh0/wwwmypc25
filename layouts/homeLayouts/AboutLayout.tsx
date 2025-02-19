// layouts/homeLayouts/AboutLayout.tsx
import React from 'react';
import { TitleHome } from '@/components/atomic-design/atoms/texts/titleHome';
import { ItemText } from '@/components/atomic-design/atoms/texts/itemText';

const AboutLayout = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">

      <TitleHome>
        <div className="text-center text-4xl">
          <p>Unlock the full</p>
          <p>potential of your PC</p>
        </div>
      </TitleHome>

  <div></div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="w-[30%] h-64">
          <TitleHome>Streamlined Diagnostics</TitleHome>
          <ItemText >
            <p className="text-balance">Our advanced diagnostic tools analyze your system's hardware and software components</p>
          </ItemText>
        </div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
    </section>
  );
};

export { AboutLayout };