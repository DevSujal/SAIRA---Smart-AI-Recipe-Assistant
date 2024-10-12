import React from 'react'

const page = ({params}) => {
  return (
    <div className='text-black text-4xl'>{params.slug}</div>
  )
}

export default page