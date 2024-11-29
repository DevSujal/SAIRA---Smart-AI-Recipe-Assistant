import React, { useEffect, useState } from "react";
import Image from "next/image";
import Stars from "../components/Stars";
import Steps from "../components/Steps";
import Nutritions from "../components/Nutritions";

const RecipeWindow = ({ foodItem, setCurrentRecipe, image }) => {
  const nutritions = [
    ["Calories", "kcal"],
    ["Total Fat", "g"],
    ["Sodium", "mg"],
    ["Protein", "g"],
    ["Total Carbohydrate", "g"],
    ["Sugar", "g"],
    ["Fiber", "g"],
  ];
  return (
    <div className="bg-white text-gray-800">
        {/* {console.log(image)} */}
      <div className="relative flex flex-col justify-between ">
        
        
        <div
          onClick={() => {
            setCurrentRecipe("");
          }}
          className="absolute top-2 left-2 cursor-pointer z-20 flex bg-white px-2 rounded-lg justify-center items-center text-center"
        >
          <img src="/arrow.svg" alt="Cooking Time" width={30} height={30} />
        </div>
          
          <div className="p-8  gap-7  flex flex-col justify-between">
              <h1
                className="text-6xl pt-6 md:text-6xl font-bold text-green-500 "
                style={{ textShadow: "1px 1px 1px rgba(255, 255, 255, 1)" }}
              >
                {foodItem.name}
              </h1>
        
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xl text-[#FFAB40] font-semibold">
                  <Image
                    src={"/watch.svg"}
                    alt="Cooking Time"
                    width={30}
                    height={30}
                  />
                  {foodItem.minutes} mins
                </div>
                <Stars rating={foodItem.rating} />
              </div>

             
              <div className="">
                <h2 className="text-2xl font-bold border-b-2 border-[#4CAF50] inline-block pb-1 mb-4">
                  Description
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-h-32 line-clamp-4 overflow-hidden text-ellipsis">
                  {foodItem.description}
                </p>
              </div>
            
            {/* Nutrition Facts */}
            <div className="mt-4 max-w-[600px]">
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
};

export default RecipeWindow;
