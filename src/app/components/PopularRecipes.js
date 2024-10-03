import { it } from 'node:test'
import React from 'react'


const PopularRecipes = (props) => {
  return (
    <div className={`relative food group text-white p-3 rounded-lg w-fit transition-all duration-500 ease-in-out shadow-lg hover:shadow-2xl transform ${props.rotate}`}>
              <div className="flex gap-5 relative z-10">
                <img
                  src={props.image}
                  alt="food item image"
                  className="w-56 h-56 object-cover rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="info w-[450px] h-full my-auto text-gray-800">
                  <h1 className="text-2xl font-bold transition-all duration-500 ease-in-out group-hover:text-3xl">
                    {props.title}
                  </h1>
                  <p className="text-sm transition-opacity duration-500 ease-in-out group-hover:opacity-70">
                    {props.description}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 transition-all rounded-lg duration-700 ease-in-out z-0 animate-gradient"></div>

              <div className="absolute left-0 w-full ingredients overflow-hidden transition-all duration-700 ease-in-out max-h-0 opacity-0 transform translate-y-5 group-hover:max-h-64 group-hover:opacity-100 group-hover:translate-y-0 mt-5 text-black p-5 rounded-lg shadow-lg bg-white">
                <h1 className="font-bold">Ingredients:</h1>
                <ul className="list-disc pl-5">
                    {props.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                  
                </ul>
              </div>
            </div>
  )
}

export default PopularRecipes