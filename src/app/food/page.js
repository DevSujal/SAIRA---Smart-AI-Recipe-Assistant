'use client'
import React from 'react'
import RecipeWindow from '../components/RecipeWindow'
import { useState } from 'react'
import RecipeContainer from '../components/RecipesContainer'

const page = ({}) => {
  const [foodItem, setfoodItem] = useState({
    "name": "A Bit Different Breakfast Pizza",
    "id": 31490,
    "minutes": 30,
    "contributor_id": 26278,
    "submitted": "2002-06-17",
    "tags": [
      "30-minutes-or-less", 
      "time-to-make", 
      "course", 
      "main-ingredient", 
      "cuisine", 
      "preparation", 
      "occasion", 
      "north-american", 
      "breakfast", 
      "main-dish", 
      "pork", 
      "american", 
      "oven", 
      "easy", 
      "kid-friendly", 
      "pizza", 
      "dietary", 
      "northeastern-united-states", 
      "meat", 
      "equipment"
    ],
    "nutrition": [173.4, 18.0, 0.0, 17.0, 22.0, 35.0, 1.0],
    "n_steps": 9,
    "steps": [
      "Preheat oven to 425 degrees F",
      "Press dough into the bottom and sides of a 12-inch pizza pan",
      "Bake for 5 minutes until set but not browned",
      "Cut sausage into small pieces",
      "Whisk eggs and milk in a bowl until frothy",
      "Spoon sausage over baked crust and sprinkle with cheese",
      "Pour egg mixture slowly over sausage and cheese",
      "Season with salt and pepper to taste",
      "Bake 15-20 minutes or until eggs are set and crust is brown"
    ],
    "description": "This recipe calls for the crust to be prebaked a bit before adding ingredients. Feel free to change sausage to ham or bacon. This warms well in the microwave for those late risers.",
    "ingredients": [
      "Prepared pizza crust",
      "Sausage patty",
      "Eggs",
      "Milk",
      "Salt and pepper",
      "Cheese"
    ],
    "n_ingredients": 6,
    "image": "https://www.foodnetwork.com/content/dam/images/food/fullset/2022/04/04/0/FN_PIZZA-OVEN-BREAKFAST-PIZZA-H-f_s4x3.jpg",
    "rating": 9
  }
  )
  return (
    <div >
        <RecipeWindow foodItem={foodItem}/>
        <RecipeContainer tittle={"Similar recipes"} />
    </div>
  )
}

export default page