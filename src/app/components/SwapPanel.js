import React from "react";

const SwapPanel = ({ isLogin, toggleForm }) => {
  return (
    <div
      className={`swap z-30 absolute bg-[url('/fp3.avif')] bg-cover w-[50%] bg-center h-full transition-transform duration-1000 ${
        isLogin ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="bg-black bg-opacity-30 w-full h-full p-6 flex justify-center items-center">
        <div className="flex flex-col items-center gap-3 mb-10">
          <h1 className="text-3xl font-semibold">Welcome back</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button
            onClick={toggleForm}
            className="border-2 hover:border-green-500 hover:bg-green-500 px-4 py-2 rounded-lg font-medium"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwapPanel;

