import React from 'react'
import RecipeCard from './RecipeCard'


const RecipesContainer = (props) => {
    const popular_recipes = [
        {
            image: "https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg",
            name: "Paneer Tikka",
            rating: 8,
            time: 20,
            ingredients: [
              "Paneer cubes",
              "Yogurt",
              "Garam masala",
              "Bell peppers",
              "Onions",
              "Mint chutney"
            ]
          },
          {
              image: "https://www.eatingbirdfood.com/wp-content/uploads/2024/07/pasta-primavera-hero-new.jpg",
              name: "Pasta Primavera",
              rating: 9,
              time: 30,
              ingredients: [
                "Pasta",
                "Zucchini",
                "Cherry tomatoes",
                "Olive oil",
                "Garlic",
                "Parmesan cheese",
                "Basil"
              ]
            },
            {
              image: "https://www.acouplecooks.com/wp-content/uploads/2020/02/Vegetable-Curry-001.jpg",
              name: "Vegetable Curry",
              rating: 9,
              time: 40,
              ingredients: [
                "Mixed vegetables",
                "Coconut milk",
                "Curry powder",
                "Ginger",
                "Garlic",
                "Rice"
              ]
            },
            {
              image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg",
              name: "Caprese Salad",
              rating: 8,
              time: 10,
              ingredients: [
                "Fresh mozzarella",
                "Tomatoes",
                "Basil",
                "Olive oil",
                "Balsamic vinegar",
                "Salt and pepper"
              ]
            },
        {
          image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-kebab.jpg",
          name: "Chicken Tikka",
          rating: 9,
          time: 30,
          ingredients: [
            "Chicken breast",
            "Yogurt",
            "Ginger garlic paste",
            "Spices",
            "Lemon juice",
            "Coriander leaves"
          ]
        },
        {
          image: "https://d21klxpge3tttg.cloudfront.net/wp-content/uploads/2022/04/Breakfast-Pizza-.jpg",
          name: "Breakfast Pizza",
          rating: 8,
          time: 25,
          ingredients: [
            "Prepared pizza crust",
            "Sausage patty",
            "Eggs",
            "Cheese",
            "Tomato sauce",
            "Green peppers"
          ]
        },
        {
          image: "https://www.kingsford.com/wp-content/uploads/2023/05/ChickenKabobs_cc1_00000000_72-Desktop.jpg?quality=50",
          name: "Grilled Chicken Skewers",
          rating: 9,
          time: 40,
          ingredients: [
            "Chicken breast",
            "Bell peppers",
            "Onions",
            "Garlic",
            "Olive oil",
            "Lemon zest"
          ]
        },
        {
            image: "https://zarskitchen.com/wp-content/uploads/2021/02/screenshot-2021-02-19-at-21.47.17.png",
            name: "Vegetarian Pizza",
            rating: 9,
            time: 30,
            ingredients: [
              "Prepared pizza crust",
              "Tomato sauce",
              "Mozzarella cheese",
              "Bell peppers",
              "Onions",
              "Olives",
              "Oregano"
            ]
          }
        ];
      
  return (
    <div className="bg-gradient-to-r from-[#86fff7] to-[#62d93d] py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#333] animate-fade-in-down">
        {props.tittle}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 animate-fade-in-up">
        {popular_recipes.map((recipe, index) => (
          <div key={index} className="transform hover:scale-105 transition-transform duration-500">
            <RecipeCard
              image={recipe.image}
              name={recipe.name}
              rating={recipe.rating}
              ingredients={recipe.ingredients}
              time={recipe.time}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecipesContainer
