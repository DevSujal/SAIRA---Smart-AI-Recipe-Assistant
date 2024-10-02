import { auth } from "../auth";
import Input from "./components/Input";
import React from "react";
import { redirect } from "next/navigation";
import { data } from "./data"
import Image from "next/image";
import "./globals.css";

const HomePage = async () => {
  const session = await auth();
  // if (!session) {
  //   redirect("/login");
  // }

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
      title: "Healthy deit",
      description: "Recipes for good health"
    },
    {
      image: "/fp1.jpg",
      title: "Vegetarian deit",
      description: "Recipes for good health"
    }
  ])

  return (
    <div className="w-full h-full">
      <div className="topsimage relative w-full h-fit">

        <img src="bg.png" alt="" className="w-full h-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40">
          <div className="absolute top-1/2 left-80 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-4xl font-semibold">Welcome to Saira</h1>
            <p className="text-lg">A smart recipe A.I recipe assistant</p>
            <button className="bg-green-500 hover:bg-green-600  text-white px-4 py-2 rounded-md mt-4">Get Started &gt; </button>
          </div>
        </div>
      </div>
      <div className="popular_craterias mt-16">

        <h1 className="text-3xl font-bold text-center">Popular Categories</h1>
        <div className="flex justify-center gap-12 mt-14">
          {popular_craterias.map((item, index) => (
            <div key={index} className=" group relative">
              <div className="group-hover:rounded-xl rounded-full ease-in-out duration-500 transition-all  overflow-hidden w-52 h-52">

                <img src={item.image} alt="" className="w-52 h-52 object-cover " />
              </div>
              <div className="absolute group-hover:rounded-xl rounded-full text-white text-lg   top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:bg-opacity-0 ease-in-out duration-500 transition-all">

                <div className="group-hover:translate-y-28 mt-24 text-center group-hover:text-left  group-hover:text-black">
                  <h1 className="text-white group-hover:text-black ease-in-out duration-500 transition-all ">{item.title}</h1>
                  <p className="text-sm group-hover:opacity-100 opacity-0 ease-out duration-500 transition-all">{item.description}</p>
                </div>

              </div>
            </div>

          ))}


        </div>
      </div>

      <div className="popular_recipes mt-20 p-4  bg-[#77c35b]">
        <h1 className="text-3xl font-bold  py-10 text-center text-white">Popular Recipes</h1>
        <div className="recipes flex justify-between">

          <div className="left space-y-60">

            <div className="relative food group text-white p-3 rounded-lg w-fit transition-all duration-500 ease-in-out shadow-lg hover:shadow-2xl transform hover:rotate-1">
              <div className="flex gap-5 relative z-10">
                <img
                  src="/fp1.jpg"
                  alt="food item image"
                  className="w-56 h-56 object-cover rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="info w-[450px] h-full my-auto text-gray-800">
                  <h1 className="text-2xl font-bold transition-all duration-500 ease-in-out group-hover:text-3xl">
                    Vegetarian Pizza
                  </h1>
                  <p className="text-sm transition-opacity duration-500 ease-in-out group-hover:opacity-70">
                    This is a vegetarian pizza with the most delightful toppings
                  </p>
                </div>
              </div>

              {/* Background extension and gradient effect */}
              <div className="absolute inset-0 transition-all rounded-lg duration-700 ease-in-out z-0 animate-gradient"></div>

              <div className="absolute left-0 w-full ingredients overflow-hidden transition-all duration-700 ease-in-out max-h-0 opacity-0 transform translate-y-5 group-hover:max-h-64 group-hover:opacity-100 group-hover:translate-y-0 mt-5 text-black p-5 rounded-lg shadow-lg bg-white">
                <h1 className="font-bold">Ingredients:</h1>
                <ul className="list-disc pl-5">
                  <li>🍅 Tomato</li>
                  <li>🧅 Onion</li>
                  <li>🧀 Cheese</li>
                  <li>🫒 Olives</li>
                  <li>🌶️ Green Chilli</li>
                </ul>
              </div>
            </div>

            <div className="relative food group text-white p-3 rounded-lg w-fit transition-all duration-500 ease-in-out shadow-lg hover:shadow-2xl transform hover:rotate-1">
              <div className="flex gap-5 relative z-10">
                <img
                  src="/fp1.jpg"
                  alt="food item image"
                  className="w-56 h-56 object-cover rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="info w-[450px] h-full my-auto text-gray-800">
                  <h1 className="text-2xl font-bold transition-all duration-500 ease-in-out group-hover:text-3xl">
                    Vegetarian Pizza
                  </h1>
                  <p className="text-sm transition-opacity duration-500 ease-in-out group-hover:opacity-70">
                    This is a vegetarian pizza with the most delightful toppings
                  </p>
                </div>
              </div>

              {/* Background extension and gradient effect */}
              <div className="absolute inset-0 transition-all rounded-lg duration-700 ease-in-out z-0 animate-gradient"></div>

              <div className="absolute left-0 w-full ingredients overflow-hidden transition-all duration-700 ease-in-out max-h-0 opacity-0 transform translate-y-5 group-hover:max-h-64 group-hover:opacity-100 group-hover:translate-y-0 mt-5 text-black p-5 rounded-lg shadow-lg bg-white">
                <h1 className="font-bold">Ingredients:</h1>
                <ul className="list-disc pl-5">
                  <li>🍅 Tomato</li>
                  <li>🧅 Onion</li>
                  <li>🧀 Cheese</li>
                  <li>🫒 Olives</li>
                  <li>🌶️ Green Chilli</li>
                </ul>
              </div>
            </div>





          </div>
          <div className="right space-y-60 mt-64">



            <div className="relative food group text-white p-3 rounded-lg w-fit transition-all duration-500 ease-in-out shadow-lg hover:shadow-2xl transform hover:-rotate-1">
              <div className="flex gap-5 relative z-10">
                <img
                  src="/fp1.jpg"
                  alt="food item image"
                  className="w-56 h-56 object-cover rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="info w-[450px] h-full my-auto text-gray-800">
                  <h1 className="text-2xl font-bold transition-all duration-500 ease-in-out group-hover:text-3xl">
                    Vegetarian Pizza
                  </h1>
                  <p className="text-sm transition-opacity duration-500 ease-in-out group-hover:opacity-70">
                    This is a vegetarian pizza with the most delightful toppings
                  </p>
                </div>
              </div>

              {/* Background extension and gradient effect */}
              <div className="absolute inset-0 transition-all rounded-lg duration-700 ease-in-out z-0 animate-gradient"></div>

              <div className="absolute left-0 w-full ingredients overflow-hidden transition-all duration-700 ease-in-out max-h-0 opacity-0 transform translate-y-5 group-hover:max-h-64 group-hover:opacity-100 group-hover:translate-y-0 mt-5 text-black p-5 rounded-lg shadow-lg bg-white">
                <h1 className="font-bold">Ingredients:</h1>
                <ul className="list-disc pl-5">
                  <li>🍅 Tomato</li>
                  <li>🧅 Onion</li>
                  <li>🧀 Cheese</li>
                  <li>🫒 Olives</li>
                  <li>🌶️ Green Chilli</li>
                </ul>
              </div>
            </div>

            <div className="relative food group text-white p-3 rounded-lg w-fit transition-all duration-500 ease-in-out shadow-lg hover:shadow-2xl transform hover:-rotate-1">
              <div className="flex gap-5 relative z-10">
                <img
                  src="/fp1.jpg"
                  alt="food item image"
                  className="w-56 h-56 object-cover rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="info w-[450px] h-full my-auto text-gray-800">
                  <h1 className="text-2xl font-bold transition-all duration-500 ease-in-out group-hover:text-3xl">
                    Vegetarian Pizza
                  </h1>
                  <p className="text-sm transition-opacity duration-500 ease-in-out group-hover:opacity-70">
                    This is a vegetarian pizza with the most delightful toppings
                  </p>
                </div>
              </div>

              {/* Background extension and gradient effect */}
              <div className="absolute inset-0 transition-all rounded-lg duration-700 ease-in-out z-0 animate-gradient"></div>

              <div className="absolute left-0 w-full ingredients overflow-hidden transition-all duration-700 ease-in-out max-h-0 opacity-0 transform translate-y-5 group-hover:max-h-64 group-hover:opacity-100 group-hover:translate-y-0 mt-5 text-black p-5 rounded-lg shadow-lg bg-white">
                <h1 className="font-bold">Ingredients:</h1>
                <ul className="list-disc pl-5">
                  <li>🍅 Tomato</li>
                  <li>🧅 Onion</li>
                  <li>🧀 Cheese</li>
                  <li>🫒 Olives</li>
                  <li>🌶️ Green Chilli</li>
                </ul>
              </div>
            </div>




          </div>
        </div>
      </div>

      <footer className="bg-black  text-white w-full h-52 mt-20"></footer>
    </div>
  );
};

export default HomePage;
