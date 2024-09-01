import Link from 'next/link'
import React from 'react'

const page = () => {

    return (
        <div className='relative flex justify-center items-center h-screen'>
            <img src='bg.png' className='absolute z-0 object-cover object-left-top w-full h-full' />
            <div className=' z-10 flex flex-col text-white gap-6 bg-black bg-opacity-50 px-6 py-4 rounded-lg'>
                <h1 className='font-semibold text-3xl text-center'>Login detials</h1>
                <div className='flex flex-col min-w-[350px] gap-4 px-2'>
                    <input type='text' placeholder='Enter your email or username' className='border-2 border-gray-300 p-2 rounded-md text-black outline-none' />
                    <input type='password' placeholder='Enter your password' className='border-2 border-gray-300 p-2 rounded-md text-black outline-none' />

                    <button className='bg-green-500 px-5 py-2 text-white font-semibold rounded-md hover:bg-green-600'>Login</button>
                </div>
                <div>

                    <div className='h-[2px] rounded-lg bg-slate-300'></div>
                    <div className='flex justify-between items-center px-3 pt-2 pb-1  font-semibold'>
                        <h1 className='hover:underline hover:text-blue-600'>forgot password</h1>
                        <Link href='/register'>
                        <h1 className='hover:underline hover:text-blue-600'>Sign up</h1>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default page
