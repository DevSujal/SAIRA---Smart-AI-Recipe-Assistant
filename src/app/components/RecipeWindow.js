import React from 'react';
import Image from 'next/image';
import Stars from '../components/Stars';
import Steps from '../components/Steps';
import Nutritions from '../components/Nutritions';

const RecipeWindow = ({ foodItem, setCurrentRecipe }) => {
    const nutritions = [
        ["Calories", "kcal"],
        ["Total Fat", "g"],
        ["Sodium", "mg"],
        ["Protein", "g"],
        ["Total Carbohydrate", "g"],
        ["Sugar", "g"],
        ["Fiber", "g"]
    ];

    return (
        <div className="bg-white text-gray-800">
            <div className="relative flex flex-col justify-between ">

                <div className=" pt-3 z-20   pr-2 ">
                    <h1 className="text-6xl  pl-[400px] md:text-6xl font-bold text-green-500 " style={{ textShadow: "1px 1px 1px rgba(255, 255, 255, 1)", }}>
                        {foodItem.name}
                    </h1>
                </div>
                {/* Image Section */}


                <div onClick={()=>{setCurrentRecipe("")}} className="absolute top-9 left-6 z-20 flex bg-white px-2 rounded-lg justify-center items-center text-center">
                    <img src="/arrow.svg" alt="Cooking Time" width={30} height={30} />
                    </div>



                <div className='flex'>
                    <div className="relative  md:w-1/2">
                        <img
                            className="h-[500px] absolute left-0 bottom-0 z-10 w-full object-cover md:h-screen rounded-lg shadow-lg"
                            src={foodItem.image || "https://homefoodi.com/wp-content/uploads/2023/04/delicious-brazilian-food-top-view.jpg"}
                            alt={foodItem.name} />
                    </div>
                    <div className="p-8 min-h-[600px] md:w-1/2 flex flex-col justify-between">

                        <div className="mb-6 mt-5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xl text-[#FFAB40] font-semibold">
                                    <Image src={"/watch.svg"} alt="Cooking Time" width={30} height={30} />
                                    {foodItem.minutes} mins
                                </div>
                                <Stars rating={foodItem.rating} />
                            </div>

                            {/* Description Section */}
                            <div className="mt-6">
                                <h2 className="text-2xl font-bold border-b-2 border-[#4CAF50] inline-block pb-1 mb-4">
                                    Description
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {foodItem.description}
                                </p>
                            </div>
                        </div>
                        {/* Nutrition Facts */}
                        <div className="mt-4">
                            <Nutritions nutritionData={foodItem.nutrition} />
                        </div>

                    </div>
                </div>
            </div>

            {/* Steps Section */}
            <div className=" bg-[#F9F9F9] mt-8 rounded-lg shadow-lg">
                <Steps ingredients={foodItem.ingredients} steps={foodItem.steps} />
            </div>
        </div>
    );
}

export default RecipeWindow;
