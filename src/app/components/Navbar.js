import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='bg-white text-black flex justify-between px-5 py-3 items-center '>
      <div className="left flex gap-8 ">
        <div className='flex items-center gap-16'>

        <div className='flex items-center'>
          <img src="logo_saira.png" alt="logo" className="w-10 scale-150"  />
          <div className="text-4xl font-bold font-mono text-gray-800 relative group">
          Saira
          </div>

        </div>
        <div className="flex gap-10">

          <div className="relative group">
            <span className="relative z-10">About</span>
            <span className="absolute left-0 -bottom-1 right-0 h-1 bg-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </div>
          <div className="relative group">
            <span className="relative z-10">Recipes</span>
            <span className="absolute left-0 -bottom-1 right-0 h-1 bg-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </div>
          <div className="relative group">
            <span className="relative z-10">Contact Us</span>
            <span className="absolute left-0 -bottom-1 right-0 h-1 bg-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </div>
          <div className="relative group">
            <span className="relative z-10">Products</span>
            <span className="absolute left-0 -bottom-1 right-0 h-1 bg-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </div>
          <div className="relative group">
            <span className="relative z-10">Popular</span>
            <span className="absolute left-0 -bottom-1 right-0 h-1 bg-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </div>
        </div>

      </div>
      </div>
      <div className="right flex gap-7">
        <a href="#_" class="rounded flex items-center px-4 py-1 overflow-hidden group bg-green-600 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
          <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span class="relative">Login</span>
        </a>
        <a href="#_" class="rounded flex items-center px-4 py-1 overflow-hidden group bg-green-600 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
          <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span class="relative">register</span>
        </a>

        <div><img className='w-10' src="github-mark.svg" alt="profile picture" /></div>
      </div>
    </div>
  )
}

export default Navbar
