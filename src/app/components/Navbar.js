// components/Navbar.js
import React from 'react';
import Logo from './Logo';
import NavItem from './NavItem';
import AuthButton from './AuthButton';

const Navbar = () => {
  return (
    <div className="bg-white text-black flex justify-between px-5 py-3 items-center">
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
      <div className="right flex gap-7">
        <AuthButton label="Login" />
        <AuthButton label="Register" />
        <div>
          <img className="w-10" src="github-mark.svg" alt="profile picture" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
