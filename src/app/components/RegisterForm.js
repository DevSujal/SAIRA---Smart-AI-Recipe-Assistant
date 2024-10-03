import React from "react";
import SocialLoginButtons from "./SocialLoginButtons";  

const RegisterForm = ({ doSocialLogin, isVisible }) => {
  return (
    <form
      action={doSocialLogin}
      className={`register flex flex-col gap-8 py-10 pr-12 transition-all duration-1000 ${
        isVisible ? "translate-x-0 opacity-100 z-20" : "-translate-x-full opacity-0"
      }`}
    >
      <h1 className="font-semibold text-3xl text-center">Register to get started</h1>
      <div className="flex flex-col min-w-[350px] gap-5 px-2">
        <input
          type="text"
          placeholder="Enter your username"
          className="border-2 border-gray-300 p-2 rounded-md text-black outline-none"
        />
        <input
          type="text"
          placeholder="Enter your email"
          className="border-2 border-gray-300 p-2 rounded-md text-black outline-none"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="border-2 border-gray-300 p-2 rounded-md text-black outline-none"
        />
        <button className="bg-green-500 px-5 py-2 text-white font-semibold rounded-md hover:bg-green-600">
          Register
        </button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <hr className="w-full rounded-lg bg-slate-300" />
        <h1 className="text-slate-300 min-w-32 text-center">Or Register with</h1>
        <hr className="w-full rounded-lg bg-slate-300" />
      </div>
      <SocialLoginButtons />
    </form>
  );
};

export default RegisterForm;
