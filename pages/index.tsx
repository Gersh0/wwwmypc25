// pages/index.tsx

import { NavBar } from '@/components/atomic-design/molecules/navBar';
import {HeroLayout} from '@/layouts/homeLayouts/HeroLayout';
import { AboutLayout } from '@/layouts/homeLayouts/AboutLayout';
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
     <HeroLayout />
      <AboutLayout />

    </div>
  );
};

export default Home;