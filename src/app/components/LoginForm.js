import React from "react";
import SocialLoginButtons from "./SocialLoginButtons";

const LoginForm = ({ doSocialLogin, isVisible }) => {
  return (
    <form
      action={doSocialLogin}
      className={`login flex flex-col gap-8 py-10 pl-12 transition-all duration-1000 ${
        isVisible ? "translate-x-0 opacity-100 z-20" : "translate-x-full opacity-0"
      }`}
    >
      <h1 className="font-semibold text-3xl text-center">Login details</h1>
      <div className="flex flex-col min-w-[350px] gap-6 px-2">
        <input
          type="text"
          placeholder="Enter your email or username"
          className="border-2 border-gray-300 p-2 rounded-md text-black outline-none"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="border-2 border-gray-300 p-2 rounded-md text-black outline-none"
        />
        <button className="bg-green-500 px-5 py-2 text-white font-semibold rounded-md hover:bg-green-600">
          Login
        </button>
      </div>
      <div className="flex flex-row items-center gap-2 ">
        <hr className="w-full rounded-lg bg-slate-300" />
        <h1 className="text-slate-300 min-w-28 text-center">Or Login with</h1>
        <hr className="w-full rounded-lg bg-slate-300" />
      </div>
      <SocialLoginButtons />
      <div className="flex justify-between items-center text-sm absolute bottom-10 min-w-[350px]">
        <h1 className="hover:underline hover:text-blue-600">Forgot password</h1>
      </div>
    </form>
  );
};

export default LoginForm;
