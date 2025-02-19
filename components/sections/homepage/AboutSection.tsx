// layouts/homeLayouts/AboutLayout.tsx
import React from 'react';
import { TitleHome } from '@/components/atomic-design/atoms/texts/titleHome';
import { ItemText } from '@/components/atomic-design/atoms/texts/itemText';

const AboutSection = () => {
  return (
    <section className="pr-32 pl-32 min-h-screen w-full flex flex-col relative">
      <div className="flex text-center items-center text-4xl max-w-full">
        <div className="max-w-96 mx-auto">
          <TitleHome>
            <p>Unlock the full potential of your PC</p>
          </TitleHome>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-8 xl:grid-cols-3 ">
        <div className="w-[100%] h-64">
          <div className="text-2xl">
            <TitleHome>Streamlined Diagnostics</TitleHome>
          </div>
          <ItemText>
            <p className="text-balance text-3xs text-[#898786]">Our advanced diagnostic tools analyze your system's
              hardware and software components</p>
          </ItemText>
        </div>
        <div className="w-[100%] h-64">
          <div className="text-2xl">
            <TitleHome>Eficient Troubleshooting</TitleHome>
          </div>
          <ItemText>
            <p className="text-balance text-3xs text-[#898786]">With our user-friendly chatbot, you can easily
              communicate your concerns and receive tailored recommendations to resolve your PC </p>
          </ItemText>
        </div>
        <div className="w-[100%] h-64">
          <div className="text-2xl">
            <TitleHome>Comprehensive Solutions</TitleHome>
          </div>
          <ItemText>
            <p className="text-balance text-3xs text-[#898786]">Whether it's a hardware malfunction, software conflict,
              or performance bottleneck </p>
          </ItemText>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };