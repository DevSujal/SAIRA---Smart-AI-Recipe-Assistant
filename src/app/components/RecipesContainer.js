import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const RecipesContainer = (props) => {
  const recipes_images = [
    "https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg",
    "https://www.eatingbirdfood.com/wp-content/uploads/2024/07/pasta-primavera-hero-new.jpg",
    "https://www.acouplecooks.com/wp-content/uploads/2020/02/Vegetable-Curry-001.jpg",
    "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-kebab.jpg",
    "https://d21klxpge3tttg.cloudfront.net/wp-content/uploads/2022/04/Breakfast-Pizza-.jpg",
    "https://www.kingsford.com/wp-content/uploads/2023/05/ChickenKabobs_cc1_00000000_72-Desktop.jpg?quality=50",
    "https://zarskitchen.com/wp-content/uploads/2021/02/screenshot-2021-02-19-at-21.47.17.png",
  ];

  // State to store random values for images and ratings
  const [randomValues, setRandomValues] = useState([]);

  useEffect(() => {
    const values = props.recipes.map(() => ({
      image: recipes_images[Math.floor(Math.random() * recipes_images.length)],
      rating: Math.floor(Math.random() * 10),
    }));
    setRandomValues(values);
  }, [props.recipes]);

  return (
    <div className="bg-[#fff0dc] py-12 px-5 ">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#333]  animate-fade-in-down">
        {props.tittle}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 animate-fade-in-up">
        {props.recipes && props.recipes.map((recipe, index) => (
          <div key={index} className="transform hover:scale-105 transition-transform duration-500">
            <RecipeCard
              image={randomValues[index]?.image || recipes_images[0]} // Fallback to a default image
              rating={randomValues[index]?.rating || 'No Rating'}
              recipe={recipe}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesContainer;
