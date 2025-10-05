import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.jpg"
        alt="logo"
        width={160}
        height={50}
        style={{ width: 'auto', height: '80px' }}
        // quality={100}
        className='dark:hidden'
      />
      <Image
        src="/images/logo/logo-black.jpg"
        alt="logo"
        width={160}
        height={50}
        style={{ width: 'auto', height: '80px' }}
        // quality={100}
        className='dark:block hidden'
      />
    </Link>
  );
};

export default Logo;