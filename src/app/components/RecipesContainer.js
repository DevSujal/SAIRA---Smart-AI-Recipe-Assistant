import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const RecipesContainer = (props) => {
 

  // State to store random values for images and ratings
  const [randomValues, setRandomValues] = useState([]);

  useEffect(() => {
    const values = props.recipes.map((recipes_images) => ({
      image: recipes_images[Math.floor(Math.random() * recipes_images.length)],
      rating: Math.floor(Math.random() * 10),
    }));
    setRandomValues(values);
  }, [props.recipes]);

  const handleClick = async (recipe) => {
    // console.log(recipe)
    try {
      props.setCurrentRecipe(recipe.name);
      props.setImage("");
      const response2 = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: recipe.name }),
      });

      if (!response2.ok) {
        throw new Error("Failed to fetch image");
      }
      const data = await response2.json();
      const {image} = data;
      // console.log(image)
      props.setImage(image);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg-[#fff0dc] py-12 px-5">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#333]  animate-fade-in-down">
        {props.tittle}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 animate-fade-in-up">
        {props.recipes &&
          props.recipes.map((recipe, index) => (
            <div
              key={index}
              onClick={() => props.setCurrentRecipe(recipe.name)}
              className="transform hover:scale-105 transition-transform duration-500"
            >
              <RecipeCard
                rating={randomValues[index]?.rating || "No Rating"}
                recipe={recipe}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecipesContainer;
