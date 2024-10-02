"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import {doSocialLogin} from "../actions";

const page = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="relative flex justify-center items-center h-[91vh]">
      <img
        src="bg.png"
        className="absolute z-0 object-cover object-left-top w-full h-full"
      />

      <div className="relative z-10 flex min-w-[900px]   gap-24 text-white bg-black bg-opacity-60  rounded-lg overflow-hidden">
        <form
        action={doSocialLogin}
          className={`login  flex flex-col gap-8  py-10 pl-12 transition-all duration-1000 ${
            isLogin
              ? "translate-x-0 opacity-100 z-20"
              : "translate-x-full opacity-0"
          }`}
        >
          <h1 className="font-semibold text-3xl text-center ">Login detials</h1>

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
            <h1 className="text-slate-300 min-w-28 text-center">
              Or Login with
            </h1>
            <hr className="w-full rounded-lg bg-slate-300" />
          </div>

          <div className="flex justify-center gap-5 pb-2">
            <button type = "submit" className="bg-white py-2 px-4 rounded-lg cursor-pointer" name="action" value={"facebook"}>
              <img className="w-9 h-9" src="facebook_ic.svg" alt="facebook" />
            </button>
            <button type = "submit" className="bg-white py-2 px-4 rounded-lg cursor-pointer" name="action" value={"google"}>
              <img className="w-9 h-9" src="google_ic.svg" alt="google" />
            </button>
            <button type = "submit" className="bg-white py-2 px-4 rounded-lg cursor-pointer" name="action" value={"github"}>
              <img className="w-9 h-9" src="github-mark.svg" alt="google" />
            </button>
          </div>

          <div className="flex justify-between items-center text-sm absolute bottom-10 min-w-[350px]">
            <h1 className="hover:underline hover:text-blue-600">
              forgot password
            </h1>
          </div>
        </form>
        <form
        action={doSocialLogin}
          className={`register flex flex-col gap-8 py-10 pr-12 transition-all duration-1000 ${
            !isLogin
              ? "translate-x-0 opacity-100 z-20"
              : "-translate-x-full opacity-0"
          }`}
        >
          <h1 className="font-semibold text-3xl text-center">
            Register to get started
          </h1>

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
            <h1 className="text-slate-300 min-w-32 text-center">
              Or Register with
            </h1>
            <hr className="w-full rounded-lg bg-slate-300" />
          </div>

          <div className="flex justify-center gap-5 pb-2">
            <button type = "submit" className="bg-white py-2 px-4 rounded-lg cursor-pointer" name="action" value={"facebook"}>
              <img className="w-9 h-9" src="facebook_ic.svg" alt="facebook" />
            </button>
            <button type = "submit" className="bg-white py-2 px-4 rounded-lg cursor-pointer" name="action" value={"google"}>
              <img className="w-9 h-9" src="google_ic.svg" alt="google" />
            </button>
            <button type = "submit" className="bg-white py-2 px-4 rounded-lg cursor-pointer" name="action" value={"github"}>
              <img className="w-9 h-9" src="github-mark.svg" alt="google" />
            </button>
          </div>
        </form>
        <div
          className={`swap z-30 absolute bg-[url('/fp3.avif')] bg-cover w-[50%] bg-center h-full transition-transform duration-1000 ${
            !isLogin ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="bg-black bg-opacity-30 w-full h-full p-6  flex justify-center items-center">
            <div className=" flex flex-col items-center gap-3 mb-10">
              <h1 className="text-3xl font-semibold">Welcome back</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur elit. Nihil porro
                placeat, odio quia cumque a sed vitae dolor nam esse rerum sit
                possimus ame. A neque fuga. Lorem ipsum dolor sit amet.
              </p>
              <button
                onClick={toggleForm}
                className="border-2 hover:border-green-500 hover:bg-green-500 px-4 py-2 rounded-lg font-medium"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
