import { Title } from '@/components/atomic-design/atoms/texts/title';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='h-full w-full'>
      <Title>Home</Title>
      <Link href='/page-2'>
        <a>Go to Page 2</a>
      </Link>
    </div>
  );
};

export default Home;
