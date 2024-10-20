'use client';
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import SwapPanel from "./SwapPanel";
import { doSocialLogin } from "../actions";

const FormContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="relative flex justify-center items-center h-screen">
      <img src="bg.png" className="absolute z-0 object-cover object-left-top w-full h-full" alt="Background" />
      <div className="relative z-10 flex min-w-[900px] gap-24 text-white bg-black bg-opacity-60 rounded-lg overflow-hidden">
        <LoginForm doSocialLogin={doSocialLogin} isVisible={isLogin} />
        <RegisterForm doSocialLogin={doSocialLogin} isVisible={!isLogin} />
        <SwapPanel isLogin={isLogin} toggleForm={toggleForm} />
      </div>
    </div>
  );
};

export default FormContainer;
