// pages/index.tsx

import { NavBar } from '@/components/atomic-design/molecules/navBar';

const Home = () => {
  return (
    <div
      className='h-full w-full'
      style={{
        background: 'radial-gradient(circle at top right, #AABACA, #FFFFFF 50%, #AABACA 100%)',
      }}
    >
      <NavBar />
    </div>
  );
};

export default Home;