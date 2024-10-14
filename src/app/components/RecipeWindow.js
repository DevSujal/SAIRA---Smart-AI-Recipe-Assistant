import React from 'react'
import Image from 'next/image'
import Stars from '../components/Stars'
import Steps from '../components/Steps'
import Nutritions from '../components/Nutritions'
const RecipeWindow = ( {foodItem} ) => {
    const nutritions= [["Calories","kcal"],["Total Fat","g"],["Sodium","mg"],["Protein","g"],["Total Carbohydrate","g"],["Sugar ","g"],["Fiber","g"]]
    return (
        <div className='bg-[#e4f5db]'>
            <div className='flex '>
                <div className="left min-w-fit">
                    <img className='h-screen object-cover w-[980px] overflow-hidden' src={foodItem.image} alt={"props.name"} />
                </div>
                <div className="right relative mt-16 p-5"> 
                    <h1 className="name absolute text-6xl text-[#57c233] top-6 right-4  w-[900px] font-bold" style={{"text-shadow":"2px 2px 4px rgba(0, 0, 0, 0.55)"}}>{foodItem.name}</h1>
                    <div className='flex mt-36 items-center justify-between pr-3'>

                        <div className="time flex items-center gap-3  text-xl">
                            <Image src={"/watch.svg"} alt={"props.name"} width={30} height={30} />{foodItem.minutes} mins
                        </div>
                        <div className="Rating pb-2"><Stars rating={foodItem.rating}/></div>
                    </div>

                    <div className="description py-4 ">
                        <h2 className='border-b-2 border-[#57c233] font-bold w-fit pr-6  text-xl mb-3'>Description</h2>
                        <p className='px-3'>{foodItem.description}</p>
                    </div>

                    <Nutritions nutritionData={foodItem.nutrition} />
                </div>
            </div>
            <Steps ingridents={foodItem.ingredients} steps={foodItem.steps} />
        </div>
    )
}

export default RecipeWindow