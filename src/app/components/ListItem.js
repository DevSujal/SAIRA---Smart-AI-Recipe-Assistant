// ListItem.js
import React from 'react';

const ListItem = ({ children }) => {
  return (
    <li className='relative w-[1000px] transform transition-transform duration-300 ease-in-out hover:scale-105'>
      <div className='
        p-2 rounded-lg shadow-lg 
        bg-white 
        text-gray-800 
        border border-gray-300
        hover:bg-[#57c233] 
        hover:text-white
      '>
        {children}
      </div>
      
    </li>
  );
};

export default ListItem;
