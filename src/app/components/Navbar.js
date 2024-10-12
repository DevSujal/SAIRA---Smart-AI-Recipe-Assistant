// components/Navbar.js
import React from 'react';
import Logo from './Logo';
import NavItem from './NavItem';
import AuthButton from './AuthButton';
import { auth } from '/src/auth';

const Navbar = async () => {
  const session = await auth();
  
  
  return (
    <div className="bg-white text-black flex justify-between w-full z-50 px-5 py-3 items-center fixed">
      <div className="left flex gap-8 items-center">
        <Logo />
        <div className="flex gap-10">
          <NavItem label="About" />
          <NavItem label="Recipes" />
          <NavItem label="Contact Us" />
          <NavItem label="Products" />
          <NavItem label="Popular" />
        </div>
      </div>
      <div className="right flex gap-7 items-center">
        {session ? (
          <div className='flex items-center gap-3' >
           
            {session.user.name}
            <img className="w-10 rounded-full"  src={session ?(session?.user?.image):"github-mark.svg"} alt="profile picture" />
          </div>
        ) : (<>
          <AuthButton label="Login" />
          <AuthButton label="Register" /></>
        )}

        
        
      </div>
    </div>
  );
};

export default Navbar;
