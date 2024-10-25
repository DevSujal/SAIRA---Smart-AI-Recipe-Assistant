"use client";
import Image from "next/image";
import React from "react";
import RecipesContainer from "../components/RecipesContainer";
import InputSection from "../components/InputSection";
import RecipeWindow from "../components/RecipeWindow";
import SpeechRecognition from "../components/SpeechRecognition";
import { set } from "mongoose";

const HomePage = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [currentRecipe, setCurrentRecipe] = React.useState("");
  const [response, setResponse] = React.useState([]);
  const [error, setError] = React.useState(null);

  async function handleClick() {
    if (!input) {
      setError("Input cannot be empty!");
      return;
    }
    setError(null);
    try {
      setIsGenerating(true);
      const res = await fetch("/api/generate-prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate prompt");
      }

      const { response } = await res.json();
      const promptData = JSON.parse(
        response.substring(7, response.length - 5).trim()
      );
      const prompt =
        promptData?.dishName + " " + promptData?.ingredients.join(" ");
      const response2 = await fetch("/api/generate-recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: prompt }),
      });
      let recipeData = await response2.json();
      if (recipeData.recipes) {
        const newRecipes = recipeData.recipes.map((item) => {
          // Extract only the recipe
          const recipe = item.recipe;
  
          // Convert ingredients, nutrients, and steps if they are strings
          return {
            ...recipe,
            ingredients: convertStringToArray(recipe.ingredients), 
            nutrition: convertStringToArray(recipe.nutrition), 
            steps: convertStringToArray(recipe.steps) 
          };
        });
  
        console.log("Updated Recipes:", newRecipes);
        setRecipes(newRecipes);
      }

    } catch (error) {
      console.error("Error during generation:", error.message);
      setError(
        "An error occurred while generating the prompt. Please try again."
      );
    }
  }
// Function to convert string format to an actual array
const convertStringToArray = (str) => {
  if (typeof str === "string") {
    // Check for valid JSON format
    try {
      return JSON.parse(str).map(item => item.replace(/['"]/g, '').trim()); 
    } catch {
      // If not valid JSON, clean and split
      const cleanedStr = str.replace(/^\[|\]$/g, '').trim(); 
      return cleanedStr.split(',').map(item => item.replace(/['"]/g, '').trim()); 
    }
  }
  return str; 
};



  React.useEffect(() => {
    if (currentRecipe) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } 
  }, [currentRecipe]);

React.useEffect(() => {
    setIsGenerating(false);
    window.scrollTo({ top: 750, behavior: "smooth" });
}, [recipes]);

  
 
  

  return (
    <div className="relative  bg-green-600 min-h-screen">
      {currentRecipe==="" ? <InputSection input={input} setInput={setInput} handleClick={handleClick} error={error} isGenerating={isGenerating} setIsGenerating={setIsGenerating}/>
      : 
      <RecipeWindow foodItem={recipes.find(recipe => recipe.name === currentRecipe)} 
      setCurrentRecipe={setCurrentRecipe} />}

      {
        recipes.length > 0 && <RecipesContainer tittle="Recipes for you" recipes={recipes} setCurrentRecipe={setCurrentRecipe}/>
      }
      
    </div>
  );
};

export default HomePage;
