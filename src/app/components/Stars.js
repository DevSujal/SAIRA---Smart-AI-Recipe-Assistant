import React from 'react'
import Image from 'next/image'

const Stars = (props) => {
  return (
    <div className='flex gap-2 items-center'>
        {Array.from({ length: props.rating/2 }).map((_, index) => (
            <Image key={index} src={"/star.svg"} alt={"props.name"} width={25} height={25} />
      ))}
      {Array.from({ length: props.rating%2 }).map((_, index) => (
        <Image key={index} src={"/star_half.svg"} alt={"props.name"} width={25} height={25} />
      ))}
      {Array.from({ length: ((10-props.rating)/2) }).map((_, index) => (
        <Image key={index} src={"/no_star.svg"} alt={"props.name"} width={25} height={25} />
      ))}

    </div>
  )
}

export default Stars
