// pages/index.tsx

import { NavBar } from '@/components/atomic-design/molecules/navBar';
import { HeroSection } from '@/components/sections/homepage/HeroSection';
import { AboutSection } from '@/components/sections/homepage/AboutSection';

const Home = () => {
  return (
    <div
      className="h-full w-full"
      style={{
        background: 'radial-gradient(circle at top right, #AABACA, #FFFFFF 50%, #AABACA 100%)',
      }}
    >
      <NavBar />
      <HeroSection />
      <AboutSection />

    </div>
  );
};

export default Home;