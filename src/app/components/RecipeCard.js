import React from 'react';
import Stars from './Stars';
import Image from 'next/image';

const RecipeCard = (props) => {
  return (
    <div className='bg-white w-[285px] rounded-xl p-2 shadow-lg transition-shadow duration-500 hover:shadow-2xl'>
      <h1 className='text-xl px-1 font-semibold h-16 overflow-hidden overflow-ellipsis'>
        {props.name}
      </h1>
      <div className='group relative rounded-xl overflow-hidden'>
        <img
          className='object-cover w-[272px] h-[272px] transition-transform duration-500'
          src={props.image}
          alt={props.name}
        />
        <div className='absolute flex items-end p-2 font-medium text-sm top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#ffffffa3] opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
          <p className='transition-opacity duration-700 ease-in-out'>
            {props.ingredients.join(', ')}
          </p>
        </div>
      </div>
      <div className='top-0 py-2 px-1 w-full h-auto flex justify-between'>
        <div className='flex gap-1'>
          <Image src={'/watch.svg'} alt={props.name} width={20} height={20} />
          {props.time} mins
        </div>
        <div className='w-5 mr-[88px]'>
          <Stars rating={props.rating} />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
