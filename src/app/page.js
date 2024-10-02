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
  {console.log(session)}

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

      <Input />
    </div>
  );
};

export default HomePage;
