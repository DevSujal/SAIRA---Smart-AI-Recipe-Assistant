    import React from 'react';
    import Image from 'next/image';
    import Stars from '../components/Stars';
    import Steps from '../components/Steps';
    import Nutritions from '../components/Nutritions';

    const RecipeWindow = ({ foodItem }) => {
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
                <div className="relative  flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="relative md:w-1/2">
                        <img
                            className="h-[500px] w-full object-cover md:h-screen rounded-lg shadow-lg"
                            src={foodItem.image}
                            alt={foodItem.name}
                        />
                        {/* Floating Dish Name */}
                        
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:w-1/2 flex flex-col justify-between">
                    <div className="absolute top-2 left-1/4 flex flex-col justify-center items-center text-center">
                            <h1 className="text-6xl md:text-6xl font-bold text-green-500  p-4 " style={{textShadow: "2px 2px 4px rgba(255, 255, 255, 1)",}}>
                                {foodItem.name}
                            </h1>
                        </div>
                        <div className="mb-6 mt-20">
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

                {/* Steps Section */}
                <div className=" bg-[#F9F9F9] mt-8 rounded-lg shadow-lg">
                    <Steps ingredients={foodItem.ingredients} steps={foodItem.steps} />
                </div>
            </div>
        );
    }

    export default RecipeWindow;
