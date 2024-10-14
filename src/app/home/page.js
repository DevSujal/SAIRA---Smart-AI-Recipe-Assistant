"use client";
import Input from "../components/Input";
import { useSession } from "next-auth/react";
import React from "react";
const HomePage = () => {
  // const session =  useSession();
  const [input, setInput] = React.useState("");
  const [response, setResponse] = React.useState([]);
  async function handleClick() {
    try {
      const response = await fetch("/api/generate-prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      if(!response) {
        throw new Error("Error during generation");
      }

      const data = await response.json();
      const arr = data.response.split(";")

      setResponse(arr);
      
      const response2 = await fetch("/api/generate-prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

    } catch (error) {
      console.error("Error during generation:", error.message);
    }
  }

  return (
    <div className="flex justify-center items-center flex-col w-full bg-black h-full"
    >
      <div className="fixed top-1 left-1">
        {/* <h1>{session?.user?.name}</h1> */}
        {/* <img
        src={session?.user?.image}
        alt={session?.user?.name}
        width={72}
        height={72}
        className="rounded-full"
        />
        */}
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-5">
        <textarea
          type="text"
          placeholder="enter your prompt..."
          className="rounded p-2 w-2/3 h-36 "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="p-2 text-lg bg-orange-400 rounded w-fit"
        >
          click me
        </button>
      </div>
      {response.map((item, index) => {
        return (
          <div key={index} className="text-xl text-white">
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
