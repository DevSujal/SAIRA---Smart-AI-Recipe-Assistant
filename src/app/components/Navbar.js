"use client";
// components/Navbar.js
import Logo from "./Logo";
import NavItem from "./NavItem";
import AuthButton from "./AuthButton";
// import { auth } from '/src/auth';
import { doLogout } from "../actions";
import { useEffect, useState } from "react";

const Navbar = ({ session }) => {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [isLogout, setIsLogout] = useState(false);
  // const session = await auth();

  useEffect(() => {
    if (session && session.user && session.user.name) {
      setName(session.user.name);
    }
    if (session && session.user && session.user.image) {
      setImage(session.user.image);
    }
  }, [session]);

  return (
    <div className="bg-[#fcfffc] text-black flex justify-between w-full z-50 px-5 py-3 items-center fixed">
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
      <div className="relative right flex gap-7 items-center">
        {session ? (
          <div className="flex items-center gap-3">
            {name}
            
            <img
              className="w-10 rounded-full cursor-pointer"
              src={"profile.jpg"}
              alt="profile picture"
              onClick={() => setIsLogout((prev) => !prev)}
            />

            {isLogout && (
              <button
                onClick={doLogout}
                className="absolute top-14 hover:bg-white/70  right-0 bg-white text-red-500 font-bold py-2 rounded px-3 "
              >
                Logout
              </button>
            )}
          </div>
        ) : (
          <>
            <AuthButton label="Login" />
            <AuthButton label="Register" />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
