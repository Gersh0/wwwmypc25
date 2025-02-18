// pages/index.tsx

import { NavBar } from '@/components/atomic-design/molecules/navBar';
import { TitleHome } from '@/components/atomic-design/atoms/texts/titleHome';
import { ItemText } from '@/components/atomic-design/atoms/texts/itemText';
import { RoundedButton } from '@/components/atomic-design/atoms/buttons/roundedButton';

const Home = () => {
  return (
    <div
      className="h-full w-full"
      style={{
        background: 'radial-gradient(circle at top right, #AABACA, #FFFFFF 50%, #AABACA 100%)',
      }}
    >
      <NavBar />
      <div className="pt-40 pl-32">
        <div>
          <TitleHome>
            <p className="pb-4">Welcome to</p>
            <p>WWWMYPC</p>
          </TitleHome>
        </div>
        <div className="pt-14 text-[#898786]">
          <ItemText>
            <p>WWWMYPC is a comprehensive PC software and hardware</p>
            <p> diagnosticator that utilizes a cutting-edge chatbot to help</p>
            <p>users effortlessly identify and resolve their computer-related </p>
          </ItemText>
        </div>
        <div className="space-x-7 pt-9">
          <RoundedButton backgroundColor="#032B4D" textColor="#898786" className="font-bold w-40 h-12 justify-center">
            <ItemText>
              <p>Diagnose Now</p>
            </ItemText>
          </RoundedButton>

          <RoundedButton backgroundColor="#FFFFFF" textColor="#898786" className="font-bold w-40 h-12 justify-center">
            <ItemText>
              <p>Get Support</p>
            </ItemText>
          </RoundedButton>

        </div>
      </div>


    </div>
  );
};

export default Home;