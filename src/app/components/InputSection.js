// InputSection.js
import React from "react";
import Image from "next/image";
import SpeechRecognition from "../components/SpeechRecognition";
import { AutosizeTextarea } from "../components/ui/autosize-textarea"; // Import the AutosizeTextarea component

const InputSection = ({ input, setInput, handleClick, error, isGenerating }) => (
  <div className="input_section relative w-full h-screen">
    <Image
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      src="/bg_input.jpg"
      alt="food"
      layout="fill"
      priority={true}
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
    <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-center items-center gap-5">
      <div className="flex w-full gap-2 items-center justify-center">
        <AutosizeTextarea 
          placeholder="Enter your prompt..."
          className="px-4 py-2 w-2/3 placeholder-white border-b-2 border-white text-xl font-medium text-white bg-transparent outline-none focus:outline-none focus:ring-0 transition-transform duration-300 transform focus:scale-105"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          minHeight={52} // Optional: adjust as necessary
          maxHeight={200} // Optional: adjust as necessary
        />
        <SpeechRecognition setInput={setInput} />
      </div>
      <div className="flex gap-6">
        <button
          onClick={handleClick}
          className="p-3 text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-xl hover:shadow-2xl hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:ring-4 hover:ring-green-300 focus:outline-none"
        >
          {isGenerating ? "Generating..." : "Generate"}
        </button>
      </div>
      {error && (
        <p className="absolute bottom-56 text-white rounded-md px-3 py-1 text-xl font-bold">
          {error}
        </p>
      )}
    </div>
  </div>
);

export default InputSection;
