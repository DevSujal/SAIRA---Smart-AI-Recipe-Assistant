import React from 'react';

const ListItem = ({ children }) => {
  return (
    <li className="relative w-full transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="
        p-3 rounded-lg shadow-md 
        bg-white 
        text-gray-800 
        border border-gray-300
        hover:bg-[#4CAF50] 
        hover:text-white
        transition-colors duration-300
      ">
        {children}
      </div>
    </li>
  );
};

export default ListItem;
