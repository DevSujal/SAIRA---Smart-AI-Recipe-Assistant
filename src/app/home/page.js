"use client";
import Image from "next/image";
import React from "react";
import RecipesContainer from "../components/RecipesContainer";
import SpeechRecognition from "../components/SpeechRecognition";

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

      console.log(await response2.json());
    } catch (error) {
      console.error("Error during generation:", error.message);
      setError(
        "An error occurred while generating the prompt. Please try again."
      );
    }
  }

  return (
    <div className="relative pt-[88px] bg-green-600 min-h-screen">
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

          <div className="flex gap-6">
            <button
              onClick={handleClick}
              className="p-3 text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-xl hover:shadow-2xl hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:ring-4 hover:ring-green-300 focus:outline-none"
            >
              Generate
            </button>
            <SpeechRecognition setInput={setInput} />
          </div>

          {/* Error Display */}
          {error && <p className="text-red-500">{error}</p>}
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
      <RecipesContainer tittle="Recipes for you" />
    </div>
  );
};

export default HomePage;
