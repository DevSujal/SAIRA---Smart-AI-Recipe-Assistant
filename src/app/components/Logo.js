// components/Logo.js
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
    <div className="flex items-center ">
       <img src="logo_saira.png" alt="logo" className="w-10 scale-150"  />
      <div className="text-4xl font-bold font-mono text-gray-800">Saira</div>
    </div>
    </Link>
  );
};

export default Logo;
