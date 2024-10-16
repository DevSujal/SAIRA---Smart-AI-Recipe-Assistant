import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(input) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "extract the ingredient list key words like spicy sugar free etc also find the dishes name something avoid list etc\n\ngive me in these format: \n\ningredients : Array \nkeyWords : Array\ningredientsAvoid : Array\nalso if something else there give to me in the form of variable and value \n\nthese all should be in the form of  json object\n\nhere is the prompt from which you can extract the information:\ni want to make the burger i have vegetables, beef, buns and oil i want spicy and sugar free burger",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '```json\n{\n  "ingredients": [\n    "vegetables",\n    "beef",\n    "buns",\n    "oil"\n  ],\n  "keyWords": [\n    "spicy",\n    "sugar free"\n  ],\n  "ingredientsAvoid": [],\n  "dishName": "Burger"\n}\n``` \n',
          },
        ],
      },
    ],
  });

  const prompt = `extract the ingredient list key words like spicy sugar free etc also find the dishes name something avoid list etc
            
    give me in these format: 
    ingredients : Array 
    keyWords : Array
    ingredientsAvoid : Array

    replace all the other language ingredients keywords or any thing with the english language words 
    also if something else there give to me in the form of variable and value
    
    these all should be in the form of object json
    
    ${input}`;

  console.log("prompt: " + prompt);
  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  return result.response.text();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { input } = body;
    const response = await run(input);
    return NextResponse.json({ response }, { status: 201 });
  } catch (error) {
    console.error("Error during generation:", error.message);
    return NextResponse.json({ error }, { status: 500 });
  }
}
