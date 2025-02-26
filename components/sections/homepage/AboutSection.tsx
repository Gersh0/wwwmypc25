// layouts/homeLayouts/AboutLayout.tsx
import React from 'react';
import { TitleHome } from '@/components/atomic-design/atoms/texts/titleHome';
import { ItemText } from '@/components/atomic-design/atoms/texts/itemText';

const AboutSection = () => {
  return (
    <section className="pr-32 pl-32 min-h-[34rem] w-full flex flex-col relative ">
      <div className="flex text-center items-center text-4xl max-w-full">
        <div className="max-w-96 mx-auto">
          <TitleHome>
            <p>Unlock the full potential of your PC</p>
          </TitleHome>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-8 xl:grid-cols-3 ">
        <div className="w-[100%] h-64 ">
          <div className="w-24 h-24 flex justify-center items-center pb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="size-11/12">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
            </svg>
          </div>

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
            <div className="w-24 h-24 flex justify-center items-center pb-2">
              <svg fill="#000000" width="800px" height="800px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.514 13c-.45 0-.688.54-.363.857l3.143 3.14-3.146 3.146c-.455.436.255 1.177.707.707L15 17.705l3.146 3.145c.452.47 1.162-.27.707-.707l-3.146-3.145 3.142-3.14c.324-.318.087-.858-.364-.858-.13.004-.253.058-.344.15L15 16.29l-3.142-3.14c-.09-.092-.214-.146-.344-.15zM2.5 8h25c.277 0 .5.223.5.5s-.223.5-.5.5h-25c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zM7 6.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5zm-2 0a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5zm-2 0a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5zM1.5 4C.678 4 0 4.678 0 5.5v19c0 .822.678 1.5 1.5 1.5h27c.822 0 1.5-.678 1.5-1.5v-19c0-.822-.678-1.5-1.5-1.5h-27zm0 1h27c.286 0 .5.214.5.5v19c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-19c0-.286.214-.5.5-.5z" />
              </svg>
            </div>
            <TitleHome>Eficient Troubleshooting</TitleHome>
          </div>
          <ItemText>
            <p className="text-balance text-3xs text-[#898786]">With our user-friendly chatbot, you can easily
              communicate your concerns and receive tailored recommendations to resolve your PC </p>
          </ItemText>
        </div>
        <div className="w-[100%] h-64">
          <div className="text-2xl">
            <div className="w-20 h-auto flex justify-center items-center pb-2">

              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" width="85" height="85"
                   viewBox="0 0 100 100">
                <g>
                  <g>
                    <path d="M47.6,20.1c-9.8,1.1-17.7,8.8-18.5,18.4c-0.6,7,2.5,13.4,7.5,17.5c1.5,1.2,2.4,3,2.4,4.9v0.1
			c0,2.8,2.3,5.1,5.2,5.1h11.6c2.9,0,5.2-2.3,5.2-5.1v-0.1c0-1.9,0.9-3.7,2.4-4.9C68,52.2,71,46.6,71,40.3
			C71,28.3,60.3,18.8,47.6,20.1z" />
                  </g>
                  <g>
                    <path d="M59,72H41c-1.1,0-2,0.9-2,2c0,3.3,2.7,6,6,6h10c3.3,0,6-2.7,6-6C61,72.9,60.1,72,59,72z" />
                  </g>
                </g>
              </svg>
            </div>
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