import React from 'react'

const page = () => {
  return (
    <div className='relative flex justify-center items-center h-screen'>
            <img src='bg.png' className='absolute z-0 object-cover object-left-top w-full h-full' />
            <div className=' z-10 flex flex-col text-white gap-6 bg-black bg-opacity-50 px-6 py-4  rounded-lg'>
                <h1 className='font-semibold text-3xl text-center py-2'>Register to get started</h1>
                <div className='flex flex-col min-w-[350px] gap-4 px-2'>
                    <input type='text' placeholder='Enter your username' className='border-2 border-gray-300 p-2 rounded-md text-black outline-none' />
                    <input type='text' placeholder='Enter your email' className='border-2 border-gray-300 p-2 rounded-md text-black outline-none' />
                    <input type='password' placeholder='Enter your password' className='border-2 border-gray-300 p-2 rounded-md text-black outline-none' />
                    <input type='password' placeholder='Confirm your password' className='border-2 border-gray-300 p-2 rounded-md text-black outline-none' />
                    <button className='bg-green-500 px-5 py-2 text-white font-semibold rounded-md hover:bg-green-600'>Register</button>
                </div>
                <div className='flex flex-row items-center gap-2'>
                <div className='h-[2px] w-[30%] rounded-lg bg-slate-300'></div>
                <h1 className='text-slate-300'>Or Register with</h1>
                <div className='h-[2px] w-[30%] rounded-lg bg-slate-300'></div>
                </div>
                <div className='flex justify-center gap-5 pb-2'>
                   <div className='bg-white py-2 px-4 rounded-lg'><img className='w-9 h-9' src="facebook_ic.svg" alt="facebook" /></div>
                   <div className='bg-white py-2 px-4 rounded-lg'><img className='w-9 h-9' src="google_ic.svg" alt="google" /></div>
                   <div className='bg-white py-2 px-4 rounded-lg'><img className='w-9 h-9' src="github-mark.svg" alt="google" /></div>
                </div>
                    
               
            </div>
        </div>
  )
}

export default page
