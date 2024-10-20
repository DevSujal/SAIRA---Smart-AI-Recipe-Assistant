"use client";
import Image from "next/image";
import React from "react";
import RecipesContainer from "../components/RecipesContainer";

const HomePage = () => {
  const [input, setInput] = React.useState("");
  const [response, setResponse] = React.useState([]);
  const [error, setError] = React.useState(null);

  async function handleClick() {
    if (!input) {
      setError("Input cannot be empty!");
      return;
    }
    setError(null);
    try {
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

      const data = await res.json();
      const generatedResponse = data.response.split(";");
      setResponse(generatedResponse);
    } catch (error) {
      console.error("Error during generation:", error.message);
      setError("An error occurred while generating the prompt. Please try again.");
    }
  }

  const recipes = [
    {
      name: "Arriba Baked Winter Squash Mexican Style",
      id: 137739,
      minutes: 55,
      contributor_id: 47892,
      submitted: "9/16/2005",
      tags: [
        "60-minutes-or-less", "time-to-make", "course", "main-ingredient", "cuisine", "preparation", 
        "occasion", "north-american", "side-dishes", "vegetables", "mexican", "easy", "fall", 
        "holiday-event", "vegetarian", "winter", "dietary", "christmas", "seasonal", "squash"
      ],
      nutrition: [51.5, 0.0, 13.0, 0.0, 2.0, 0.0, 4.0],
      n_steps: 11,
      steps: [
        "Make a choice and proceed with recipe",
        "Depending on size of squash, cut into half or fourths",
        "Remove seeds",
        "For spicy squash, drizzle olive oil or melted butter over each cut squash piece",
        "Season with Mexican seasoning mix II",
        "For sweet squash, drizzle melted honey, butter, grated piloncillo over each cut squash piece",
        "Season with sweet Mexican spice mix",
        "Bake at 350 degrees, again depending on size, for 40 minutes up to an hour, until a fork can easily pierce the skin",
        "Be careful not to burn the squash especially if you opt to use sugar or butter",
        "If you feel more comfortable, cover the squash with aluminum foil the first half hour, give or take, of baking",
        "If desired, season with salt"
      ],
      description: "Autumn is my favorite time of year to cook! This recipe can be prepared either spicy or sweet, your choice! Two of my posted Mexican-inspired seasoning mix recipes are offered as suggestions.",
      ingredients: ["winter squash", "mexican seasoning", "mixed spice", "honey", "butter", "olive oil", "salt"],
      n_ingredients: 7
    },
    {
      name: "A Bit Different Breakfast Pizza",
      id: 31490,
      minutes: 30,
      contributor_id: 26278,
      submitted: "6/17/2002",
      tags: [
        "30-minutes-or-less", "time-to-make", "course", "main-ingredient", "cuisine", "preparation", 
        "occasion", "north-american", "breakfast", "main-dish", "pork", "american", "oven", 
        "easy", "kid-friendly", "pizza", "dietary", "northeastern-united-states", "meat", "equipment"
      ],
      nutrition: [173.4, 18.0, 0.0, 17.0, 22.0, 35.0, 1.0],
      n_steps: 9,
      steps: [
        "Preheat oven to 425 degrees F",
        "Press dough into the bottom and sides of a 12 inch pizza pan",
        "Bake for 5 minutes until set but not browned",
        "Cut sausage into small pieces",
        "Whisk eggs and milk in a bowl until frothy",
        "Spoon sausage over baked crust and sprinkle with cheese",
        "Pour egg mixture slowly over sausage and cheese",
        "Salt & pepper to taste",
        "Bake 15-20 minutes or until eggs are set and crust is brown"
      ],
      description: "This recipe calls for the crust to be prebaked a bit before adding ingredients. Feel free to change sausage to ham or bacon. This warms well in the microwave for those late risers.",
      ingredients: ["prepared pizza crust", "sausage patty", "eggs", "milk", "salt and pepper", "cheese"],
      n_ingredients: 6
    },
    {
      name: "All in the Kitchen Chili",
      id: 112140,
      minutes: 130,
      contributor_id: 196586,
      submitted: "2/25/2005",
      tags: [
        "time-to-make", "course", "preparation", "main-dish", "chili", "crock-pot-slow-cooker", 
        "dietary", "equipment", "4-hours-or-less"
      ],
      nutrition: [269.8, 22.0, 32.0, 48.0, 39.0, 27.0, 5.0],
      n_steps: 6,
      steps: [
        "Brown ground beef in large pot",
        "Add chopped onions to ground beef when almost brown and sauté until wilted",
        "Add all other ingredients",
        "Add kidney beans if you like beans in your chili",
        "Cook in slow cooker on high for 2-3 hours or 6-8 hours on low",
        "Serve with cold clean lettuce and shredded cheese"
      ],
      description: "This modified version of 'Mom's' chili was a hit at our 2004 Christmas party. We made an extra-large pot to have some left to freeze but it never made it to the freezer. It was a favorite by all. Perfect for any cold and rainy day. You won't find this one in a cookbook. It is truly an original.",
      ingredients: [
        "ground beef", "yellow onions", "diced tomatoes", "tomato paste", 
        "tomato soup", "rotel tomatoes", "kidney beans", "water", 
        "chili powder", "ground cumin", "salt", "lettuce", "cheddar cheese"
      ],
      n_ingredients: 13
    },
    {
      name: "Alouette Potatoes",
      id: 59389,
      minutes: 45,
      contributor_id: 68585,
      submitted: "4/14/2003",
      tags: [
        "60-minutes-or-less", "time-to-make", "course", "main-ingredient", "preparation", "occasion", 
        "side-dishes", "eggs-dairy", "potatoes", "vegetables", "oven", "easy", "dinner-party", 
        "holiday-event", "easter", "cheese", "stove-top", "dietary", "christmas", "new-years", 
        "thanksgiving", "independence-day", "st-patricks-day", "valentines-day", "inexpensive", 
        "brunch", "superbowl", "equipment", "presentation", "served-hot"
      ],
      nutrition: [368.1, 17.0, 10.0, 2.0, 14.0, 8.0, 20.0],
      n_steps: 11,
      steps: [
        "Place potatoes in a large pot of lightly salted water and bring to a gentle boil",
        "Cook until potatoes are just tender",
        "Drain",
        "Place potatoes in a large bowl and add all ingredients except the 'Alouette'",
        "Mix well and transfer to a buttered 8x8 inch glass baking dish with 2 inch sides",
        "Press the potatoes with a spatula to make top as flat as possible",
        "Set aside for 2 hours at room temperature",
        "Preheat oven to 350°F",
        "Spread 'Alouette' evenly over potatoes and bake 15 minutes",
        "Divide between plates",
        "Garnish with finely diced red and yellow bell peppers"
      ],
      description: "This is a super easy, great tasting, make ahead side dish that looks like you spent a lot more time preparing than you actually do. Plus, most everything is done in advance. The times do not reflect the standing time of the potatoes.",
      ingredients: [
        "spreadable cheese with garlic and herbs", "new potatoes", "shallots", "parsley", 
        "tarragon", "olive oil", "red wine vinegar", "salt", "pepper", "red bell pepper", "yellow bell pepper"
      ],
      n_ingredients: 11
    },
    {
      name: "Amish Tomato Ketchup for Canning",
      id: 44061,
      minutes: 190,
      contributor_id: 41706,
      submitted: "10/25/2002",
      tags: [
        "weeknight", "time-to-make", "course", "main-ingredient", "cuisine", "preparation", 
        "occasion", "north-american", "canning", "condiments-etc", "vegetables", "american", 
        "heirloom-historical", "holiday-event", "vegetarian", "dietary", "amish-mennonite", 
        "northeastern-united-states", "number-of-servings", "technique", "4-hours-or-less"
      ],
      nutrition: [352.9, 1.0, 337.0, 23.0, 3.0, 0.0, 28.0],
      n_steps: 5,
      steps: [
        "Mix all ingredients and boil for 2 1/2 hours, or until thick",
        "Pour into jars",
        "I use 'old' glass ketchup bottles",
        "It is not necessary for these to 'seal'",
        "My Amish mother-in-law has been making this her entire life, and has never used a 'sealed' jar for this recipe, and it's always been great!"
      ],
      description: "My DH's Amish mother raised him on this recipe. He much prefers it over store-bought ketchup. It was a taste I had to acquire, but now my DS's also prefer this type of ketchup. Enjoy!",
      ingredients: [
        "tomato juice", "apple cider vinegar", "sugar", "salt", 
        "pepper", "clove oil", "cinnamon oil", "dry mustard"
      ],
      n_ingredients: 8
    },
    {
      name: "Apple a Day Milkshake",
      id: 5289,
      minutes: 0,
      contributor_id: 1533,
      submitted: "12/6/1999",
      tags: [
        "15-minutes-or-less", "time-to-make", "course", "main-ingredient", "cuisine", "preparation", 
        "occasion", "north-american", "low-protein", "5-ingredients-or-less", "beverages", "fruit", 
        "american", "easy", "kid-friendly", "dietary", "low-sodium", "shakes", "low-calorie", 
        "low-in-something", "apples", "number-of-servings", "presentation", "served-cold", "3-steps-or-less"
      ],
      nutrition: [160.2, 10.0, 55.0, 3.0, 9.0, 20.0, 7.0],
      n_steps: 4,
      steps: [
        "Combine ingredients in blender",
        "Cover and blend until smooth",
        "Sprinkle with ground cinnamon",
        "Makes about 2 cups"
      ],
      description: "",
      ingredients: ["milk", "vanilla ice cream", "frozen apple juice concentrate", "apple"],
      n_ingredients: 4
    },
    {
      name: "Aww Marinated Olives",
      id: 25274,
      minutes: 15,
      contributor_id: 21730,
      submitted: "4/14/2002",
      tags: [
        "15-minutes-or-less", "time-to-make", "course", "main-ingredient", 
        "cuisine", "preparation", "occasion", "north-american", "appetizers", 
        "fruit", "canadian", "dinner-party", "vegan", "vegetarian", "freezer", 
        "dietary", "equipment", "number-of-servings"
      ],
      nutrition: [380.7, 53.0, 7.0, 24.0, 6.0, 24.0, 6.0],
      n_steps: 4,
      steps: [
        "Toast the fennel seeds and lightly crush them.",
        "Place all the ingredients in a bowl, stir well.",
        "Cover and leave to marinate.",
        "Keep refrigerated and use within 1 to 2 days."
      ],
      description: "My Italian MIL was thoroughly impressed by my non-Italian treatment of her olives. They are great appetizers and condiments to your favorite pasta. (From the Vancouver Sun) PS. Cook time includes fridge time.",
      ingredients: [
        "fennel seeds", "green olives", "ripe olives", 
        "garlic", "peppercorn", "orange rind", 
        "orange juice", "red chile", "extra virgin olive oil"
      ],
      n_ingredients: 9
    },
    {
      name: "Backyard Style Barbecued Ribs",
      id: 67888,
      minutes: 120,
      contributor_id: 10404,
      submitted: "7/30/2003",
      tags: [
        "weeknight", "time-to-make", "course", "main-ingredient", 
        "cuisine", "preparation", "occasion", "north-american", 
        "south-west-pacific", "main-dish", "pork", "oven", 
        "holiday-event", "stove-top", "hawaiian", "spicy", 
        "copycat", "independence-day", "meat", "pork-ribs", 
        "super-bowl", "novelty", "taste-mood", "savory", 
        "sweet", "equipment", "4-hours-or-less"
      ],
      nutrition: [1109.5, 83.0, 378.0, 275.0, 96.0, 86.0, 36.0],
      n_steps: 10,
      steps: [
        "In a medium saucepan combine all the ingredients for sauce #1, bring to a full rolling boil, reduce heat to medium-low and simmer for 1 hour, stirring often.",
        "Rub the ribs with soy sauce, garlic, ginger, chili powder, pepper, salt, and chopped cilantro on both sides!",
        "Wrap ribs in heavy-duty foil.",
        "Let stand for 1 hour.",
        "Preheat oven to 350 degrees.",
        "Place ribs in oven for 1 hour, turning once after 30 minutes.",
        "Three times during cooking, open foil wrap and drizzle ribs with sauce #1.",
        "Place all the ingredients for sauce #2 in a glass or plastic bowl, whisk well and set aside.",
        "Remove ribs from oven and place on serving platter.",
        "Offer both sauces at the table to drizzle over ribs."
      ],
      description: "This recipe is posted by request and was originally from Chef Sam Choy's cookbook.",
      ingredients: [
        "pork spareribs", "soy sauce", "fresh garlic", 
        "fresh ginger", "chili powder", "fresh coarse ground black pepper", 
        "salt", "fresh cilantro leaves", "tomato sauce", 
        "brown sugar", "yellow onion", "white vinegar", 
        "honey", "A.1. original sauce", "liquid smoke", 
        "cracked black pepper", "cumin", "dry mustard", 
        "cinnamon sticks", "orange juice", "mirin", "water"
      ],
      n_ingredients: 22
    },
    {
      name: "Bananas 4 Ice Cream Pie",
      id: 70971,
      minutes: 180,
      contributor_id: 102353,
      submitted: "9/10/2003",
      tags: [
        "weeknight", "time-to-make", "course", "main-ingredient", 
        "preparation", "pies-and-tarts", "desserts", "lunch", 
        "snacks", "no-cook", "refrigerator", "kid-friendly", 
        "frozen-desserts", "pies", "chocolate", "dietary", 
        "inexpensive", "equipment", "number-of-servings", 
        "technique", "4-hours-or-less"
      ],
      nutrition: [4270.8, 254.0, 1306.0, 111.0, 127.0, 431.0, 220.0],
      n_steps: 8,
      steps: [
        "Crumble cookies into a 9-inch pie plate, or cake pan.",
        "Pat down to form an even layer.",
        "Drizzle 1 cup of chocolate topping evenly over the cookies with a small spoon.",
        "Scoop the vanilla ice cream on top of the chocolate and smooth down.",
        "Cover with half of the sliced bananas.",
        "Top with strawberry ice cream.",
        "Cover and freeze until firm.",
        "Before serving, top with 1/4 cup chocolate topping, whipped cream, and sliced bananas."
      ],
      description: "", // No description provided.
      ingredients: [
        "chocolate sandwich style cookies", "chocolate syrup", 
        "vanilla ice cream", "bananas", "strawberry ice cream", 
        "whipped cream"
      ],
      n_ingredients: 6
    }
  ];
 
  

  return (
    <div className="relative  bg-green-600 min-h-screen">
      <div className="relative w-full h-[500px]">
        <Image
          className="absolute  top-0 left-0 w-full h-full object-cover z-0"
          src="/bg_input.jpg"
          alt="food"
          layout="fill"
          priority={true}
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

        <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-center items-center gap-5">
          <input
            type="text"
            placeholder="Enter your prompt..."
            className="px-4 py-2 w-2/3 placeholder-white border-b-2 border-white text-xl font-medium text-white bg-transparent  outline-none focus:outline-none focus:ring-0 transition-transform duration-300 transform focus:scale-105"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleClick}
            className="p-3 text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-xl hover:shadow-2xl hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:ring-4 hover:ring-green-300 focus:outline-none"
          >
            Generate
          </button>


          {/* Error Display */}
          {error && <p className="absolute bottom-28 bg-white rounded-md px-3  py-1 bg-opacity-80  text-red-600 text-lg font-bold">{error}</p>}
        </div>
      </div>

      {/* Response with smooth fade-in animation */}
      {response.length > 0 && (
        <div className="z-20 mt-10 space-y-3 text-center animate-fadeIn">
          {response.map((item, index) => (
            <div key={index} className="text-xl text-white animate-fadeIn">
              {item}
            </div>
          ))}
        </div>
      )}

      {/* Recipes Section */}
      <RecipesContainer tittle="Recipes for you" recipes={recipes} />
    </div>
  );
};

export default HomePage;
