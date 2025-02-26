// `layouts/homeLayouts/HeroLayout.tsx`
import { useRouter } from 'next/router';
import { TitleHome } from '@/components/atomic-design/atoms/texts/titleHome';
import { ItemText } from '@/components/atomic-design/atoms/texts/itemText';
import { RoundedButton } from '@/components/atomic-design/atoms/buttons/roundedButton';
import { Canvas } from '@react-three/fiber';
import Cube from '@/public/models/Cube';
import Laptop from '@/public/models/Laptop';



const HeroSection = () => {
  const router = useRouter();

  const handleDiagnoseNowClick = () => {
    router.push('/page-2');
  };

  return (
    <section className="pt-40 xl:pl-32 pl-4 min-h-screen w-full relative grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2">
      <div className="justify-items-center xl:justify-items-start">
        <div className="text-7xl col-span-1 ">
          <TitleHome>
            <p className="pb-4">Welcome to</p>
            <p>WWWMYPC</p>
          </TitleHome>
        </div>
        <div className="pt-14 text-[#898786]">
          <ItemText>
            <p>WWWMYPC is a comprehensive PC software and hardware</p>
            <p> diagnosticator that utilizes a cutting-edge Q&A algorithm to help</p>
            <p>users effortlessly identify and resolve their computer-related </p>
          </ItemText>
        </div>
        <div className="space-x-7 pt-9">
          <RoundedButton
            backgroundColor="#032B4D"
            textColor="#898786"
            className="font-bold w-40 h-12 justify-center"
            onClick={handleDiagnoseNowClick}
          >
            <ItemText>
              <p>Diagnose Now</p>
            </ItemText>
          </RoundedButton>

          <RoundedButton
            backgroundColor="#FFFFFF"
            textColor="#898786"
            className="font-bold w-40 h-12 justify-center"
          >
            <ItemText>
              <p>Get Support</p>
            </ItemText>
          </RoundedButton>
        </div>
      </div>

      <div className="justify-items-center hidden xl:block md:block md:justify-items-center">
        <div className=" w-10/12 h-96 flex xl:pr-32  ">
          <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <directionalLight position={[10, 10, 5]} />
            <Cube/>
          </Canvas>
        </div>
      </div>

    </section>
  );
};

export {
  HeroSection,
};