import React from 'react';

const IngridentItem = ({ children }) => {
  return (
    <li className="relative group min-w-[160px] w-fit">
      <div className="
        bg-white 
        font-semibold text-lg rounded-lg 
        text-gray-800 p-3
        shadow-md 
        border border-gray-300
        flex items-center justify-between
        transition-transform duration-300 ease-in-out
      ">
        <span className="flex-1">{children}</span>
      </div>
      <span className="absolute left-0 -bottom-1 right-0 h-1 bg-[#4CAF50] transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
    </li>
  );
};

export default IngridentItem;
