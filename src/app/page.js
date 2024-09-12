import { auth } from "../auth";
import Input from "./components/Input";
import React from "react";
import { redirect } from "next/navigation";
import {data} from "./data"
const HomePage = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="text-white w-full h-full">
      <div className="fixed">
        <h1>{session?.user?.name}</h1>
        <img
          src={session?.user?.image}
          alt={session?.user?.name}
          width={72}
          height={72}
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col justify-center items-center w-full h-full">
        <Input />
        <div className="flex flex-wrap mt-10 w-4/5 gap-6">
          {data.map(({ingredientName, ingredientImage}) => (
            <img src={ingredientImage} alt={ingredientName} className="mix-blend-multiply"/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
