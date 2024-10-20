import { auth } from "../auth";
import Input from "./components/Input";
import React from "react";
import { redirect } from "next/navigation";
import { data } from "./data"
import Image from "next/image";
import "./globals.css";

import PopularCategories from "./components/PopularCategories";
import PopularRecipes from "./components/PopularRecipes";
import Carousel from "./components/Carousel";
import FooterComp from "./components/FooterComp";
import Link from "next/link";

const HomePage = async () => {
  const session = await auth();
  const popular_craterias = ([
    {
      image: "/fp2.jpg",
      title: "Easy to make",
      description: "only take few simple steps"
    },
    {
      image: "/fp4.avif",
      title: "5 mins cooking",
      description: "only take 5 min to make it"
    },
    {
      image: "/fp5.jpg",
      title: "Healthy diet",
      description: "Recipes for good health"
    },
    {
      image: "/fp1.jpg",
      title: "Vegetarian diet",
      description: "Recipes for good health"
    }
  ])

  const popular_recipes = ([
    {
      image: "https://static.wixstatic.com/media/10df86_ad17b161877246d2bb35806a5e55a597~mv2.jpg/v1/fill/w_568,h_434,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/10df86_ad17b161877246d2bb35806a5e55a597~mv2.jpg",
      title: "Grilled Veggie Delight",
      description: "A delicious mix of grilled vegetables with mouth-watering flavors",
      ingredients: ["🥕 Carrot", "🍆 Eggplant", "🧄 Garlic", "🥬 Spinach", "🍋 Lemon"]
    },
    {
      image: "https://zardyplants.com/wp-content/uploads/2021/07/Vegan-Pasta-Primavera-04.jpg",
      title: "Pasta Primavera",
      description: "Fresh pasta tossed with vibrant veggies and a light sauce",
      ingredients: ["🍅 Tomato", "🥦 Broccoli", "🧄 Garlic", "🧀 Parmesan", "🍋 Lemon"]
    },
    {
      image: "https://www.thelastfoodblog.com/wp-content/uploads/2017/06/mexican-bean-salad-1.jpg",
      title: "Mexican Bean Salad",
      description: "A colorful and refreshing salad with a zesty dressing",
      ingredients: ["🌽 Corn", "🫘 Black Beans", "🧅 Red Onion", "🌶️ Jalapeño", "🍋 Lime"]
    },
    {
      image: "https://img.taste.com.au/hMi8EcPf/taste/2018/04/may-18_chicken-mushroom-stir-fry-3000x2000-136801-1.jpg",
      title: "Mushroom Stir-Fry",
      description: "Sautéed mushrooms with a flavorful Asian-inspired sauce",
      ingredients: ["🍄 Mushrooms", "🧄 Garlic", "🧅 Onion", "🌱 Cilantro", "🌶️ Red Pepper"]
    }
  ]);

  if (!session) {
    redirect("/login");
  }
  { console.log(session) }

  return (
    <div className="w-full">
      <div className="topsimage relative w-full h-fit">

        <img src="bg.png" alt="" className="w-full h-[500px] object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40">
          <div className="absolute top-1/2 left-80 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-4xl font-semibold">Welcome to Saira</h1>
            <p className="text-lg">A smart recipe A.I recipe assistant</p>
            <Link href={"/login"}>
              <button className="bg-green-500 hover:bg-green-600  text-white px-4 py-2 rounded-md mt-4">Get Started &gt; </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="popular_craterias pt-12 pb-24 my-20 bg-[#fff0dc]">

        <h1 className="text-4xl font-bold text-center">Popular Categories</h1>
        <div className="flex justify-center gap-12 mt-16">
          {popular_craterias.map((item, index) => (

            <PopularCategories key={index} image={item.image} title={item.title} description={item.description} />

          ))}


        </div>
      </div>

      <div className="popular_recipes  p-4  bg-[#4CAF50]">
        <h1 className="text-4xl font-bold  py-10 text-center text-white">Popular Recipes</h1>
        <div className="recipes flex justify-between">

          <div className="left space-y-60">



            {popular_recipes.map((item, index) => (
              index % 2 === 0 && (
                <PopularRecipes key={index} image={item.image} title={item.title} description={item.description} ingredients={item.ingredients} rotate={"hover:rotate-1"} />
              )
            ))}

          </div>
          <div className="right space-y-60 mt-64 my-52">
            {popular_recipes.map((item, index) => (
              index % 2 !== 0 && (
                <PopularRecipes key={index} image={item.image} title={item.title} description={item.description} ingredients={item.ingredients} rotate={"hover:-rotate-1"} />
              )
            ))}



          </div>
        </div>
      </div>
      <div className="flex items-center justify-center max-h-screen py-24  ">
        <Carousel />
      </div>



    </div>
  );
};

export default HomePage;
